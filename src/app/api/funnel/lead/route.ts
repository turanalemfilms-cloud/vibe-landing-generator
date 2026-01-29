import { NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  let body: any = null
  try {
    body = await req.json()
  } catch {
    body = null
  }

  const brief = body?.brief ?? {}
  const styleKey = typeof body?.styleKey === 'string' ? body.styleKey : null

  let supabase: ReturnType<typeof supabaseService>
  try {
    supabase = supabaseService()
  } catch (e: any) {
    return NextResponse.json(
      { error: 'Server misconfigured: set SUPABASE_SERVICE_ROLE_KEY', details: String(e?.message || e) },
      { status: 500 }
    )
  }
  const { data, error } = await supabase
    .from('leads')
    .insert({ brief, style_key: styleKey })
    .select('id')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ leadId: data.id })
}

export async function PATCH(req: Request) {
  let body: any = null
  try {
    body = await req.json()
  } catch {
    body = null
  }

  const leadId = String(body?.leadId || '')
  if (!leadId) return NextResponse.json({ error: 'leadId required' }, { status: 400 })

  const patch: any = {}
  for (const k of ['full_name', 'phone', 'telegram', 'liked', 'payment_status', 'payment_proof_path', 'site_id']) {
    if (body[k] !== undefined) patch[k] = body[k]
  }

  let supabase: ReturnType<typeof supabaseService>
  try {
    supabase = supabaseService()
  } catch (e: any) {
    return NextResponse.json(
      { error: 'Server misconfigured: set SUPABASE_SERVICE_ROLE_KEY', details: String(e?.message || e) },
      { status: 500 }
    )
  }
  const { error } = await supabase.from('leads').update(patch).eq('id', leadId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

