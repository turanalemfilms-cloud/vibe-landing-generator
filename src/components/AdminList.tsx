'use client'

import { useMemo, useState } from 'react'

export type SiteRow = {
  id: string
  created_at: string
  style_key: string
  brief: { businessName?: string }
  screenshot_desktop_path?: string | null
  screenshot_mobile_path?: string | null
}

export function AdminList({ sites }: { sites: SiteRow[] }) {
  const [busyId, setBusyId] = useState<string | null>(null)
  const [data, setData] = useState<SiteRow[]>(sites)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const baseUrl = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    return url.replace(/\/$/, '')
  }, [])

  function publicUrl(path?: string | null) {
    if (!path) return null
    if (!baseUrl) return null
    return `${baseUrl}/storage/v1/object/public/site-screens/${path}`
  }

  function updateShotPath(siteId: string, view: 'desktop' | 'mobile', path: string) {
    setData((prev) =>
      prev.map((s) =>
        s.id === siteId
          ? {
              ...s,
              screenshot_desktop_path: view === 'desktop' ? path : s.screenshot_desktop_path,
              screenshot_mobile_path: view === 'mobile' ? path : s.screenshot_mobile_path,
            }
          : s
      )
    )
  }

  async function runShot(siteId: string, view: 'desktop' | 'mobile') {
    const res = await fetch('/api/screenshot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ siteId, view }),
    })
    const text = await res.text()
    if (!res.ok) {
      let message = text || 'Screenshot failed'
      try {
        const parsed = JSON.parse(text)
        if (parsed?.error) message = parsed.error
      } catch {
        // keep raw text
      }
      throw new Error(message)
    }
    const json = text ? JSON.parse(text) : {}
    if (!json?.path) throw new Error('Screenshot response is missing path')
    return json.path as string
  }

  async function makeShot(siteId: string, view: 'desktop' | 'mobile') {
    setBusyId(`${siteId}:${view}`)
    setErrors((prev) => ({ ...prev, [siteId]: '' }))
    try {
      const path = await runShot(siteId, view)
      updateShotPath(siteId, view, path)
    } catch (err: any) {
      setErrors((prev) => ({ ...prev, [siteId]: String(err?.message || err) }))
    } finally {
      setBusyId(null)
    }
  }

  async function makeBoth(siteId: string) {
    setBusyId(`${siteId}:all`)
    setErrors((prev) => ({ ...prev, [siteId]: '' }))
    try {
      const desktopPath = await runShot(siteId, 'desktop')
      updateShotPath(siteId, 'desktop', desktopPath)
      const mobilePath = await runShot(siteId, 'mobile')
      updateShotPath(siteId, 'mobile', mobilePath)
    } catch (err: any) {
      setErrors((prev) => ({ ...prev, [siteId]: String(err?.message || err) }))
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div className="mt-6 grid gap-4">
      {data.map((s) => {
        const isBusy = busyId?.startsWith(`${s.id}:`)
        return (
        <div key={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="text-sm text-white/60">{new Date(s.created_at).toLocaleString()}</div>
              <div className="text-lg font-semibold">{s.brief?.businessName || 'Untitled'}</div>
              <div className="text-sm text-white/70">Style: {s.style_key}</div>
              <div className="text-sm text-white/70">ID: {s.id}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
                href={`/site/${s.id}`}
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
              <button
                onClick={() => makeBoth(s.id)}
                className="rounded-xl bg-white/20 text-white px-3 py-2 text-sm font-semibold disabled:opacity-60"
                disabled={isBusy}
              >
                {busyId === `${s.id}:all` ? 'Generating...' : 'Generate both'}
              </button>
              <button
                onClick={() => makeShot(s.id, 'desktop')}
                className="rounded-xl bg-sky-400 text-slate-950 px-3 py-2 text-sm font-semibold disabled:opacity-60"
                disabled={isBusy}
              >
                {busyId === `${s.id}:desktop` ? 'Generating...' : 'Desktop shot'}
              </button>
              <button
                onClick={() => makeShot(s.id, 'mobile')}
                className="rounded-xl bg-slate-200 text-slate-950 px-3 py-2 text-sm font-semibold disabled:opacity-60"
                disabled={isBusy}
              >
                {busyId === `${s.id}:mobile` ? 'Generating...' : 'Mobile shot'}
              </button>
            </div>
          </div>

          {errors[s.id] ? (
            <div className="mt-3 text-sm text-red-400">{errors[s.id]}</div>
          ) : null}

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {publicUrl(s.screenshot_desktop_path) ? (
              <img
                className="rounded-xl border border-white/10"
                src={publicUrl(s.screenshot_desktop_path) as string}
                alt="Desktop screenshot"
              />
            ) : (
              <div className="rounded-xl border border-white/10 bg-black/30 text-white/60 text-sm p-4">
                No desktop screenshot yet.
              </div>
            )}
            {publicUrl(s.screenshot_mobile_path) ? (
              <img
                className="rounded-xl border border-white/10"
                src={publicUrl(s.screenshot_mobile_path) as string}
                alt="Mobile screenshot"
              />
            ) : (
              <div className="rounded-xl border border-white/10 bg-black/30 text-white/60 text-sm p-4">
                No mobile screenshot yet.
              </div>
            )}
          </div>
        </div>
      )})}
    </div>
  )
}
