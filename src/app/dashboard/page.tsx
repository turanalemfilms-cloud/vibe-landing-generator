'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase'

type Project = { id: string; name: string; created_at: string }
type LatestThumb = { revision_id: string; screenshot_desktop_path?: string | null; screenshot_mobile_path?: string | null }

export default function DashboardPage() {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [thumbs, setThumbs] = useState<Record<string, LatestThumb>>({})
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function authedFetch(input: RequestInfo, init?: RequestInit) {
    const supabase = supabaseBrowser()
    const { data } = await supabase.auth.getSession()
    const token = data.session?.access_token
    if (!token) throw new Error('Not authenticated')
    return fetch(input, {
      ...init,
      headers: {
        ...(init?.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    })
  }

  async function load() {
    setError(null)
    const res = await authedFetch('/api/projects')
    const text = await res.text()
    if (!res.ok) throw new Error(text || 'Failed to load projects')
    const json = JSON.parse(text)
    setProjects(json.projects || [])
    setThumbs(json.latestThumbs || {})
  }

  useEffect(() => {
    const supabase = supabaseBrowser()
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace('/login')
      else load().catch((e) => setError(String(e?.message || e)))
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace('/login')
    })
    return () => sub.subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  async function createProject() {
    const v = name.trim()
    if (!v) return
    setBusy(true)
    setError(null)
    try {
      const res = await authedFetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: v }),
      })
      const text = await res.text()
      if (!res.ok) throw new Error(text || 'Create failed')
      const json = JSON.parse(text)
      setName('')
      router.push(`/builder/${json.project.id}`)
    } catch (e: any) {
      setError(String(e?.message || e))
    } finally {
      setBusy(false)
    }
  }

  async function logout() {
    const supabase = supabaseBrowser()
    await supabase.auth.signOut()
    router.replace('/login')
  }

  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="mt-1 text-sm text-white/70">Проекттеріңіз.</p>
          </div>
          <button
            onClick={logout}
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            Logout
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Project name (мыс: Coffee shop)"
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-4 focus:ring-sky-400/20"
              disabled={busy}
            />
            <button
              onClick={createProject}
              className="rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60"
              disabled={busy}
            >
              {busy ? '...' : 'Create'}
            </button>
          </div>
          {error ? <div className="mt-3 text-sm text-red-400 whitespace-pre-wrap">{error}</div> : null}
        </div>

        <div className="mt-6 grid gap-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => router.push(`/builder/${p.id}`)}
              className="text-left rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-white/60">{new Date(p.created_at).toLocaleString()}</div>
              <div className="text-xs text-white/50 mt-1">{p.id}</div>
              {thumbs[p.id]?.revision_id ? (
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  {thumbs[p.id].screenshot_desktop_path ? (
                    <img
                      className="rounded-xl border border-white/10"
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/site-screens/${thumbs[p.id].screenshot_desktop_path}`}
                      alt="Desktop screenshot"
                    />
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-black/30 text-white/60 text-sm p-4">
                      No desktop screenshot yet.
                    </div>
                  )}
                  {thumbs[p.id].screenshot_mobile_path ? (
                    <img
                      className="rounded-xl border border-white/10"
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/site-screens/${thumbs[p.id].screenshot_mobile_path}`}
                      alt="Mobile screenshot"
                    />
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-black/30 text-white/60 text-sm p-4">
                      No mobile screenshot yet.
                    </div>
                  )}
                </div>
              ) : null}
            </button>
          ))}
          {projects.length === 0 ? (
            <div className="text-sm text-white/60">Әзірге проект жоқ. Жоғарыдан Create басыңыз.</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

