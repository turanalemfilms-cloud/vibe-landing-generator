import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import { supabaseServer } from '@/lib/supabase'
import { rateLimit } from '@/lib/rateLimit'

type ScreenshotRequest = {
  siteId: string
  view?: 'desktop' | 'mobile'
  kind?: 'legacy_site' | 'revision'
}

export const runtime = 'nodejs'

export async function POST(req: Request) {
  {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'
    const r = rateLimit(`shot:${ip}`, 10, 60_000)
    if (!r.ok) {
      return NextResponse.json({ error: 'Rate limit. Try again in a minute.' }, { status: 429 })
    }
  }
  let body: ScreenshotRequest
  try {
    body = (await req.json()) as ScreenshotRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!body?.siteId) {
    return NextResponse.json({ error: 'siteId is required' }, { status: 400 })
  }

  const view = body.view || 'desktop'
  const origin = req.headers.get('origin')
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : origin) ||
    'http://localhost:3000'
  const targetUrl = `${baseUrl}/site/${body.siteId}`

  const viewport =
    view === 'mobile'
      ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }
      : { width: 1440, height: 900, deviceScaleFactor: 2 }

  let browser: puppeteer.Browser | null = null
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    await page.setViewport(viewport as any)
    await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 60000 })
    await page.waitForTimeout(500)

    const buffer = await page.screenshot({ fullPage: true, type: 'png' })

    const supabase = supabaseServer()
    const path = `${body.siteId}/${view}.png`

    const upload = await supabase.storage
      .from('site-screens')
      .upload(path, buffer, { contentType: 'image/png', upsert: true })

    if (upload.error) {
      return NextResponse.json({ error: 'Upload failed', details: upload.error.message }, { status: 500 })
    }

    const publicUrl = supabase.storage.from('site-screens').getPublicUrl(path).data.publicUrl

    const update = await supabase
      .from(body.kind === 'legacy_site' ? 'sites' : 'revisions')
      .update(
        view === 'mobile'
          ? { screenshot_mobile_path: path }
          : { screenshot_desktop_path: path }
      )
      .eq('id', body.siteId)

    if (update.error) {
      return NextResponse.json({ error: 'DB update failed', details: update.error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, path, publicUrl })
  } catch (e) {
    return NextResponse.json({ error: 'Screenshot failed', details: String((e as any)?.message || e) }, { status: 500 })
  } finally {
    if (browser) await browser.close()
  }
}
