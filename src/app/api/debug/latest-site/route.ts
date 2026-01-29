import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase'

export const runtime = 'nodejs'

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  let supabase: ReturnType<typeof supabaseServer>
  try {
    supabase = supabaseServer()
  } catch (e) {
    return NextResponse.json(
      { error: 'Supabase env is missing', details: String((e as any)?.message || e) },
      { status: 400 }
    )
  }

  const { data, error } = await supabase
    .from('sites')
    .select('id, created_at, config')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    return NextResponse.json(
      {
        error: 'Query failed',
        details: error?.message,
        hint: 'If you recently created the table, wait ~30s or restart dev server (schema cache). Also ensure env points to the same project you linked via supabase CLI.',
        env: {
          url: process.env.NEXT_PUBLIC_SUPABASE_URL || null,
          hasAnon: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
          hasServiceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
        },
      },
      { status: 500 }
    )
  }

  if (!data) {
    return NextResponse.json({
      id: null,
      created_at: null,
      layout: null,
      note: 'No rows in public.sites yet. Generate a new site from the homepage chat, then refresh this endpoint.',
    })
  }

  return NextResponse.json({
    id: data.id,
    created_at: data.created_at,
    layout: (data as any).config?.layout || null,
  })
}

