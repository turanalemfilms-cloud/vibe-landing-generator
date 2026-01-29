import { NextResponse } from 'next/server'
import { supabaseServerWithAccessToken } from '@/lib/supabase'

export const runtime = 'nodejs'

function getBearer(req: Request) {
  const h = req.headers.get('authorization') || ''
  const m = h.match(/^Bearer\s+(.+)$/i)
  return m?.[1] || ''
}

export async function GET(req: Request) {
  const token = getBearer(req)
  if (!token) return NextResponse.json({ error: 'Missing auth token' }, { status: 401 })

  const supabase = supabaseServerWithAccessToken(token)
  const { data, error } = await supabase.from('projects').select('id, name, created_at').order('created_at', {
    ascending: false,
  })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const projects = (data || []) as Array<{ id: string }>
  const projectIds = projects.map((p) => p.id)

  // For dashboard: attach latest revision screenshots per project (best-effort)
  const thumbs: Record<
    string,
    { revision_id: string; screenshot_desktop_path?: string | null; screenshot_mobile_path?: string | null }
  > = {}

  if (projectIds.length) {
    const { data: revs } = await supabase
      .from('revisions')
      .select('id, project_id, created_at, screenshot_desktop_path, screenshot_mobile_path')
      .in('project_id', projectIds)
      .order('created_at', { ascending: false })

    for (const r of revs || []) {
      const pid = (r as any).project_id as string
      if (!thumbs[pid]) {
        thumbs[pid] = {
          revision_id: (r as any).id,
          screenshot_desktop_path: (r as any).screenshot_desktop_path,
          screenshot_mobile_path: (r as any).screenshot_mobile_path,
        }
      }
    }
  }

  return NextResponse.json({ projects: data || [], latestThumbs: thumbs })
}

export async function POST(req: Request) {
  const token = getBearer(req)
  if (!token) return NextResponse.json({ error: 'Missing auth token' }, { status: 401 })

  let body: any = null
  try {
    body = await req.json()
  } catch {
    body = null
  }

  const name = String(body?.name || '').trim()
  if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 })

  const supabase = supabaseServerWithAccessToken(token)
  const { data, error } = await supabase
    .from('projects')
    .insert({ name })
    .select('id, name, created_at')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ project: data })
}

