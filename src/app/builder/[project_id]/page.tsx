'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase'

type ChatMessage = { role: 'user' | 'assistant'; content: string }
type ChatState = {
  step: 'collecting' | 'style' | 'generated'
  brief?: any
  styleKey?: string
  siteId?: string
}
type ChatResponse = {
  assistantMessage: string
  nextState: ChatState
  briefComplete?: boolean
  styles?: Array<{ key: string; label: string; description?: string }>
  siteUrl?: string
  error?: string
}

const STYLE_LABELS: Record<string, string> = {
  minimalist_tech: 'Minimalist Tech',
  bold_modern: 'Bold Modern',
  clean_corporate: 'Clean Corporate',
}

export default function BuilderPage() {
  const router = useRouter()
  const params = useParams<{ project_id: string }>()
  const projectId = params.project_id

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Сәлем! Бриф жинайық. 1) Бизнес атауы қандай? 2) Кімге сатасыз (аудитория)?',
    },
  ])
  const [input, setInput] = useState('')
  const [state, setState] = useState<ChatState>({ step: 'collecting' })
  const [isLoading, setIsLoading] = useState(false)

  const styleChoices = useMemo(() => {
    if (state.step !== 'style') return []
    return Object.entries(STYLE_LABELS).map(([key, label]) => ({
      key,
      label,
      description:
        key === 'minimalist_tech'
          ? 'Қараңғы, минимал, glassy'
          : key === 'bold_modern'
            ? 'Контраст, батыл accent'
            : 'Ақ/жеңіл, корпоратив стиль',
    }))
  }, [state.step])

  useEffect(() => {
    const supabase = supabaseBrowser()
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace('/login')
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace('/login')
    })
    return () => sub.subscription.unsubscribe()
  }, [router])

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

  async function send(userText: string) {
    setIsLoading(true)
    try {
      const res = await authedFetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userText }],
          state,
          projectId,
        }),
      })

      const rawText = await res.text()
      let data: ChatResponse | null = null
      try {
        data = rawText ? (JSON.parse(rawText) as ChatResponse) : null
      } catch {
        data = null
      }

      if (!res.ok) {
        const msg = data?.error || `API error (${res.status})`
        const details = (data as any)?.details ? `\n${(data as any).details}` : ''
        throw new Error(msg + details)
      }
      if (!data) throw new Error('API returned empty response')
      if (data.error) throw new Error(data.error)

      setMessages((m) => [...m, { role: 'assistant', content: data.assistantMessage }])
      setState(data.nextState)

      if (data.siteUrl) {
        const fullUrl = `${window.location.origin}${data.siteUrl}`
        setMessages((m) => [
          ...m,
          {
            role: 'assistant',
            content: `Дайын! Мына линк: ${fullUrl}`,
          },
        ])
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', content: text }])
    try {
      await send(text)
    } catch (err: any) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: `Қате шықты:\n${String(err?.message || err)}`,
        },
      ])
    }
  }

  async function pickStyle(key: string) {
    if (isLoading) return
    setMessages((m) => [...m, { role: 'user', content: `Style: ${key}` }])
    await send(`Style: ${key}`)
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Builder</h1>
            <p className="mt-1 text-sm text-white/70">Project: {projectId}</p>
          </div>
          <a
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
            href="/dashboard"
          >
            Dashboard
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <div className="max-h-[55vh] overflow-auto space-y-3 pr-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === 'user'
                    ? 'ml-auto w-fit max-w-[85%] rounded-2xl bg-sky-400 text-slate-950 px-4 py-2'
                    : 'mr-auto w-fit max-w-[85%] rounded-2xl bg-white/10 border border-white/10 px-4 py-2'
                }
              >
                <div className="text-sm whitespace-pre-wrap">{m.content}</div>
              </div>
            ))}
          </div>

          {state.step === 'style' && (
            <div className="mt-4 flex flex-col gap-2">
              <div className="text-sm text-white/70">Стиль таңда:</div>
              <div className="grid sm:grid-cols-3 gap-2">
                {styleChoices.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => pickStyle(s.key)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10"
                  >
                    <div className="font-medium">{s.label}</div>
                    <div className="text-xs text-white/60 mt-1">{s.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isLoading ? 'Жүктелуде…' : 'Жауапты жазыңыз…'}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-4 focus:ring-sky-400/20"
              disabled={isLoading}
            />
            <button
              className="rounded-2xl bg-sky-400 text-slate-950 px-5 font-semibold hover:opacity-90 disabled:opacity-60"
              disabled={isLoading}
            >
              Жіберу
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

