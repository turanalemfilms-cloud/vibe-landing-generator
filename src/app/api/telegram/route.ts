import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return NextResponse.json(
      { error: 'Missing TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID in env' },
      { status: 400 }
    )
  }

  let body: any = null
  try {
    body = await req.json()
  } catch {
    body = null
  }
  const text = String(body?.text || '').trim()
  if (!text) return NextResponse.json({ error: 'text is required' }, { status: 400 })

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })
    const payload = await res.json()
    if (!res.ok || !payload?.ok) {
      return NextResponse.json(
        { error: 'Telegram send failed', details: payload?.description || res.statusText },
        { status: 500 }
      )
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json(
      { error: 'Telegram request failed', details: String((e as any)?.message || e) },
      { status: 500 }
    )
  }
}

