'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const supabase = supabaseBrowser()
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace('/dashboard')
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.replace('/dashboard')
    })
    return () => sub.subscription.unsubscribe()
  }, [router])

  async function sendMagicLink() {
    const value = email.trim()
    if (!value) return
    setIsLoading(true)
    setStatus(null)
    try {
      const supabase = supabaseBrowser()
      const { error } = await supabase.auth.signInWithOtp({
        email: value,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      })
      if (error) throw error
      setStatus('Email-ге link жіберілді. Ашып кіріңіз.')
    } catch (e: any) {
      setStatus(String(e?.message || e))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="mt-2 text-sm text-white/70">Email OTP арқылы кіру.</p>

        <div className="mt-6 grid gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-4 focus:ring-sky-400/20"
            placeholder="you@email.com"
            disabled={isLoading}
          />
          <button
            onClick={sendMagicLink}
            className="rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? 'Жүктелуде…' : 'Send login link'}
          </button>

          {status ? <div className="text-sm text-white/80 whitespace-pre-wrap">{status}</div> : null}
        </div>
      </div>
    </div>
  )
}

