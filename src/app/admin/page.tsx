import { supabaseServer } from '@/lib/supabase'
import { AdminList, type SiteRow } from '@/components/AdminList'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  let data = null
  let error: { message: string } | null = null
  try {
    const supabase = supabaseServer()
    const res = await supabase
      .from('sites')
      .select('id, created_at, style_key, brief, screenshot_desktop_path, screenshot_mobile_path')
      .order('created_at', { ascending: false })
    data = res.data
    error = res.error
  } catch (e) {
    error = { message: 'Supabase env is missing. Configure .env.local to use Admin.' }
  }

  if (error) {
    return (
      <div className="min-h-dvh bg-slate-950 text-white p-8">
        <div className="text-lg font-semibold">Admin</div>
        <div className="mt-2 text-red-400">{error.message}</div>
      </div>
    )
  }

  const sites = (data || []) as SiteRow[]

  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Admin — Sites</h1>
        <p className="mt-1 text-sm text-white/70">Генерацияланған сайттар және скриншоттар.</p>
        <AdminList sites={sites} />
      </div>
    </div>
  )
}
