'use client'

import { useMemo, useState } from 'react'
import { ThemeSelector } from '@/components/ThemeSelector'
import { THEME_PRESETS } from '@/lib/themePresets'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

type ChatState = {
  step:
    | 'quiz'
    | 'theme_selection'
    | 'collect_contact'
    | 'collect_telegram'
    | 'style'
    | 'generating'
    | 'screenshots'
    | 'feedback'
    | 'payment'
    | 'done'
  brief?: any
  themeId?: string // Selected theme preset ID
  styleKey?: string
  leadId?: string
  siteUrl?: string
  liked?: boolean
  freeform?: boolean // Free-form HTML/CSS mode (Cursor-like)
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

type QuizQ =
  | {
      id: string
      type: 'single'
      question: string
      options: Array<{ label: string; value: string }>
    }
  | { id: string; type: 'text'; question: string; placeholder?: string }

const QUIZ: QuizQ[] = [
  {
    id: 'businessName',
    type: 'text',
    question: 'Бизнес атауы қандай?',
    placeholder: 'Мыс: Coffee shop',
  },
  {
    id: 'targetAudience',
    type: 'single',
    question: 'Кімге сатасыз?',
    options: [
      { label: 'Жеке клиенттер', value: 'Жеке клиенттер' },
      { label: 'Кәсіпкерлер/бизнес', value: 'Кәсіпкерлер/бизнес' },
      { label: 'Екеуі де', value: 'Екеуі де' },
    ],
  },
  {
    id: 'services',
    type: 'text',
    question: 'Не сатасыз? (қысқа тізім, үтірмен)',
    placeholder: 'Мыс: кофе, десерт, жеткізу',
  },
  {
    id: 'usp',
    type: 'single',
    question: 'Негізгі артықшылық қайсы?',
    options: [
      { label: 'Жылдам', value: 'Жылдам' },
      { label: 'Сапалы', value: 'Сапалы' },
      { label: 'Арзан', value: 'Арзан' },
      { label: 'Премиум', value: 'Премиум' },
    ],
  },
  {
    id: 'cta',
    type: 'single',
    question: 'CTA қандай болсын?',
    options: [
      { label: 'Өтінім қалдыру', value: 'Өтінім қалдыру' },
      { label: 'WhatsApp-қа жазу', value: 'WhatsApp-қа жазу' },
      { label: 'Қоңырауға жазылу', value: 'Қоңырауға жазылу' },
    ],
  },
]

export default function HomePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Сәлем! Мен сізге лендинг жасап берем. Брифті 1-2 минутта толтырайық — сұрақтарға жауап беріңіз.',
    },
  ])
  const [state, setState] = useState<ChatState>({ step: 'quiz', brief: { qIdx: 0, answers: {} } })
  const [isLoading, setIsLoading] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [contact, setContact] = useState({ fullName: '', phone: '', telegram: '' })

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

  const quizState = state.step === 'quiz' ? state.brief : null
  const qIdx = quizState?.qIdx ?? 0
  const answers = quizState?.answers ?? {}
  const currentQ = QUIZ[Math.min(qIdx, QUIZ.length - 1)]

  function advanceQuiz(answer: any) {
    const nextAnswers = { ...answers, [currentQ.id]: answer }
    const nextIdx = qIdx + 1
    setState((s) => ({
      ...s,
      step: nextIdx >= QUIZ.length ? 'theme_selection' : 'quiz',
      brief: { qIdx: nextIdx, answers: nextAnswers },
    }))
    if (nextIdx >= QUIZ.length) {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: 'Сайтыңыздың атмосферасын таңдаңыз' },
      ])
    }
  }

  function handleThemeSelect(themeId: string) {
    const preset = THEME_PRESETS.find((t) => t.id === themeId)
    setState((s) => ({ ...s, themeId, step: 'collect_contact' }))
    setMessages((m) => [
      ...m,
      { role: 'assistant', content: `Керемет таңдау! ${preset?.nameKZ || 'Стиль'} стилі қолданылады.` },
      { role: 'assistant', content: 'Енді байланыс ақпаратыңызды енгізіңіз.' },
    ])
  }

  async function createLeadIfNeeded(nextStyleKey?: string) {
    if (state.leadId) return state.leadId
    const briefAnswers = state.brief?.answers || {}
    const brief = {
      businessName: String(briefAnswers.businessName || '').trim() || 'Untitled',
      targetAudience: String(briefAnswers.targetAudience || '').trim() || 'Клиенттер',
      services: String(briefAnswers.services || '')
        .split(',')
        .map((s: string) => s.trim())
        .filter(Boolean)
        .slice(0, 6),
      uniqueSellingPoints: [String(briefAnswers.usp || 'Нақты нәтиже')],
      cta: { label: String(briefAnswers.cta || 'Өтінім қалдыру'), href: '#lead' },
      language: 'KZ',
    }

    const res = await fetch('/api/funnel/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brief, styleKey: nextStyleKey || null }),
    })
    const json = await res.json()
    if (!res.ok) throw new Error(json?.error || 'Lead create failed')
    setState((s) => ({ ...s, leadId: json.leadId }))
    return json.leadId as string
  }

  async function saveContact() {
    setIsLoading(true)
    try {
      const leadId = await createLeadIfNeeded(state.styleKey)
      const res = await fetch('/api/funnel/lead', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          full_name: contact.fullName.trim(),
          phone: contact.phone.trim(),
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Save failed')
      setState((s) => ({ ...s, step: 'collect_telegram' }))
      setMessages((m) => [...m, { role: 'assistant', content: 'Telegram username/ID жазыңыз (мыс: @username).' }])
    } finally {
      setIsLoading(false)
    }
  }

  async function saveTelegram() {
    setIsLoading(true)
    try {
      const leadId = await createLeadIfNeeded(state.styleKey)
      const res = await fetch('/api/funnel/lead', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          telegram: contact.telegram.trim(),
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Save failed')
      setState((s) => ({ ...s, step: 'style' }))
      setMessages((m) => [...m, { role: 'assistant', content: 'Керемет! Енді стиль таңдаңыз.' }])
    } finally {
      setIsLoading(false)
    }
  }

  async function pickStyle(key: string) {
    if (isLoading) return
    setIsLoading(true)
    try {
      const leadId = await createLeadIfNeeded(key)
      setState((s) => ({ ...s, styleKey: key, step: 'generating' }))
      setMessages((m) => [...m, { role: 'assistant', content: 'Генерация жасап жатырмын… (30–60с)' }])

      const briefAnswers = state.brief?.answers || {}
      const brief = {
        businessName: String(briefAnswers.businessName || '').trim() || 'Untitled',
        targetAudience: String(briefAnswers.targetAudience || '').trim() || 'Клиенттер',
        services: String(briefAnswers.services || '')
          .split(',')
          .map((s: string) => s.trim())
          .filter(Boolean)
          .slice(0, 6),
        uniqueSellingPoints: [String(briefAnswers.usp || 'Нақты нәтиже')],
        cta: { label: String(briefAnswers.cta || 'Өтінім қалдыру'), href: '#lead' },
        language: 'KZ',
      }

      // Check if user wants free-form mode (Cursor-like)
      const useFreeform = state.freeform || false
      // Use v2 architecture by default (unless freeform is selected)
      const useV2 = !useFreeform

      const res = await fetch('/api/funnel/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, styleKey: key, brief, freeform: useFreeform, v2: useV2, themeId: state.themeId }),
      })
      
      if (!res.ok) {
        const errorText = await res.text()
        let errorJson
        try {
          errorJson = JSON.parse(errorText)
        } catch {
          throw new Error(errorText || 'Generate failed')
        }
        throw new Error(errorJson?.error || 'Generate failed')
      }
      
      const json = await res.json()
      if (!json || !json.siteId) throw new Error('Invalid response from server')
      const fullUrl = `${window.location.origin}${json.siteUrl}`
      setState((s) => ({ ...s, step: 'screenshots', siteUrl: json.siteUrl }))
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: `Дайын preview: ${fullUrl}\nСкриншот жасап жатырмын…` },
      ])

      // After a short delay, ask for feedback
      setTimeout(() => {
        setState((s) => ({ ...s, step: 'feedback' }))
        setMessages((m) => [...m, { role: 'assistant', content: 'Дизайн ұнады ма?' }])
      }, 3500)
    } catch (e: any) {
      setMessages((m) => [...m, { role: 'assistant', content: `Қате:\n${String(e?.message || e)}` }])
      setState((s) => ({ ...s, step: 'style' }))
    } finally {
      setIsLoading(false)
    }
  }

  async function sendTelegram(text: string) {
    await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
  }

  async function feedback(liked: boolean) {
    setIsLoading(true)
    try {
      const leadId = await createLeadIfNeeded(state.styleKey)
      await fetch('/api/funnel/lead', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId, liked }),
      })

      if (!liked) {
        setMessages((m) => [...m, { role: 'assistant', content: 'Ок. Қай жерін өзгерткіміз келеді? (қысқаша жазыңыз)' }])
        setState((s) => ({ ...s, step: 'quiz' }))
        return
      }

      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'Керемет! Енді Kaspi Pay арқылы төлем жасаңыз.\n1) Kaspi Pay/QR: (келесі қадамда QR қоямыз)\n2) Төлем жасаған соң чек/скриншот жүктеңіз немесе “төледім” деп жазыңыз.',
        },
      ])
      setState((s) => ({ ...s, step: 'payment', liked: true }))

      // notify you
      const briefAnswers = state.brief?.answers || {}
      const site = state.siteUrl ? `${window.location.origin}${state.siteUrl}` : ''
      sendTelegram(
        `✅ Жаңа лид (ұнады)\nАты: ${contact.fullName}\nТел: ${contact.phone}\nTG: ${contact.telegram}\nБизнес: ${briefAnswers.businessName}\nPreview: ${site}`
      ).catch(() => {})
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Vibe Coding — AI Landing Page Generator</h1>
            <p className="mt-1 text-sm text-white/70">Чат арқылы бриф жинап, стиль таңдап, live link береміз.</p>
          </div>
          <a
            className="hidden sm:inline-flex rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm hover:bg-white/15"
            href="/site/demo"
            target="_blank"
            rel="noreferrer"
          >
            Demo route
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

          {state.siteUrl ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Preview</div>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2">
                <a
                  className="truncate text-sm text-sky-300 hover:underline"
                  href={state.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`${typeof window !== 'undefined' ? window.location.origin : ''}${state.siteUrl}`}
                </a>
                <a
                  className="w-fit rounded-xl bg-sky-400 text-slate-950 px-4 py-2 text-sm font-semibold hover:opacity-90"
                  href={state.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </div>
              <div className="mt-2 text-xs text-white/60">
                Егер скриншот бірден шықпаса — 10-20 секунд күтіңіз (автоматты жасалады).
              </div>
            </div>
          ) : null}

          {state.step === 'quiz' && currentQ ? (
            <div className="mt-4">
              <div className="text-sm text-white/70">Сұрақ {Math.min(qIdx + 1, QUIZ.length)}/{QUIZ.length}</div>
              <div className="mt-2 text-lg font-semibold">{currentQ.question}</div>
              {currentQ.type === 'single' ? (
                <div className="mt-3 grid sm:grid-cols-2 gap-2">
                  {currentQ.options.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => {
                        setMessages((m) => [...m, { role: 'user', content: o.label }])
                        advanceQuiz(o.value)
                      }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10"
                      disabled={isLoading}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              ) : (
                <form
                  className="mt-3 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const v = textInput.trim()
                    if (!v) return
                    setMessages((m) => [...m, { role: 'user', content: v }])
                    setTextInput('')
                    advanceQuiz(v)
                  }}
                >
                  <input
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder={currentQ.placeholder || 'Жазыңыз…'}
                    className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-4 focus:ring-sky-400/20"
                    disabled={isLoading}
                  />
                  <button
                    className="rounded-2xl bg-sky-400 text-slate-950 px-5 font-semibold hover:opacity-90 disabled:opacity-60"
                    disabled={isLoading}
                  >
                    OK
                  </button>
                </form>
              )}
            </div>
          ) : null}

          {state.step === 'theme_selection' ? (
            <div className="mt-4">
              <ThemeSelector
                selectedThemeId={state.themeId}
                onSelect={handleThemeSelect}
              />
            </div>
          ) : null}

          {state.step === 'collect_contact' ? (
            <div className="mt-4 grid gap-2">
              <div className="text-sm text-white/70">Контакт</div>
              <input
                value={contact.fullName}
                onChange={(e) => setContact((c) => ({ ...c, fullName: e.target.value }))}
                placeholder="Аты-жөні"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                disabled={isLoading}
              />
              <input
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                placeholder="Телефон (WhatsApp)"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                disabled={isLoading}
              />
              <button
                onClick={saveContact}
                className="rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60"
                disabled={isLoading || !contact.fullName.trim() || !contact.phone.trim()}
              >
                Келесі
              </button>
            </div>
          ) : null}

          {state.step === 'collect_telegram' ? (
            <div className="mt-4 grid gap-2">
              <div className="text-sm text-white/70">Telegram</div>
              <input
                value={contact.telegram}
                onChange={(e) => setContact((c) => ({ ...c, telegram: e.target.value }))}
                placeholder="@username немесе id"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
                disabled={isLoading}
              />
              <button
                onClick={saveTelegram}
                className="rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60"
                disabled={isLoading || !contact.telegram.trim()}
              >
                Келесі
              </button>
            </div>
          ) : null}

          {state.step === 'style' && (
            <div className="mt-4 flex flex-col gap-3">
              <div className="text-sm text-white/70">Стиль таңда:</div>
              <div className="grid sm:grid-cols-3 gap-2">
                {styleChoices.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => pickStyle(s.key)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10"
                    disabled={isLoading}
                  >
                    <div className="font-medium">{s.label}</div>
                    <div className="text-xs text-white/60 mt-1">{s.description}</div>
                  </button>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="freeform-toggle"
                  checked={state.freeform || false}
                  onChange={(e) => setState((s) => ({ ...s, freeform: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/20 bg-white/5"
                />
                <label htmlFor="freeform-toggle" className="text-sm text-white/70 cursor-pointer">
                  Free-form режим (Cursor-ға ұқсас) — AI толық HTML/CSS/JS жазады
                </label>
              </div>
            </div>
          )}

          {state.step === 'feedback' ? (
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => feedback(true)}
                className="rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60"
                disabled={isLoading}
              >
                Иә, ұнады
              </button>
              <button
                onClick={() => feedback(false)}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 disabled:opacity-60"
                disabled={isLoading}
              >
                Жоқ
              </button>
            </div>
          ) : null}

          <div className="mt-3 text-xs text-white/60">
            Step: <span className="text-white/80">{state.step}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
