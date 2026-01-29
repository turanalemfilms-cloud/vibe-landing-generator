'use client'

import { useState, useEffect } from 'react'
import type { SiteConfig } from '@/lib/siteConfig'
import { defaultLayoutForContent } from '@/lib/siteConfig'

export function LandingPage({ config }: { config: SiteConfig }) {
  // Free-form HTML/CSS/JS mode (Cursor-like) - render in iframe (client-only to avoid hydration error)
  const [freeformUrl, setFreeformUrl] = useState<string | null>(null)

  useEffect(() => {
    if (config.freeform) {
      const htmlContent =
        config.freeform.html +
        (config.freeform.css ? `<style>${config.freeform.css}</style>` : '') +
        (config.freeform.js ? `<script>${config.freeform.js}</script>` : '')
      const fullHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${htmlContent}</body></html>`
      const blob = new Blob([fullHtml], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      setFreeformUrl(url)

      // Cleanup on unmount or when freeform changes
      return () => {
        URL.revokeObjectURL(url)
      }
    }
  }, [config.freeform?.html, config.freeform?.css, config.freeform?.js])

  if (config.freeform) {
    if (!freeformUrl) {
      // Loading state during hydration
      return (
        <div className="flex items-center justify-center h-screen bg-slate-950 text-white">
          <div className="text-sm">Loading free-form design...</div>
        </div>
      )
    }
    return (
      <iframe
        src={freeformUrl}
        className="w-full h-screen border-0"
        sandbox="allow-scripts allow-same-origin allow-forms"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Free-form landing page"
      />
    )
  }

  // Component-driven mode (existing)
  const t = config.tokens
  const c = config.content
  const cta = config.brief.cta
  const b = config.brand || null

  // Dark/light mode state (respects prefers-color-scheme initially, then user preference)
  // Default to false (light mode) for SSR consistency, then update on client
  const [isDark, setIsDark] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    // First load: check localStorage, then system preference
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      setIsDark(stored === 'dark')
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }
  }, [isDark, mounted])

  // Use dark or light colors based on mode
  // During SSR, always use light mode to match initial client render
  const colorMode = mounted ? (isDark ? 'dark' : 'light') : 'light'
  const colors = b ? (colorMode === 'dark' ? b.colors.dark : b.colors.light) : null

  const cssVars: React.CSSProperties | undefined = colors
    ? ({
        ['--brand-bg' as any]: colors.bg,
        ['--brand-surface' as any]: colors.surface,
        ['--brand-text' as any]: colors.text,
        ['--brand-muted' as any]: colors.muted,
        ['--brand-border' as any]: colors.border,
        ['--brand-primary' as any]: colors.primary,
        ['--brand-primary-text' as any]: colors.primaryText,
        ['--brand-accent' as any]: colors.accent,
        ['--brand-secondary' as any]: colors.secondary || colors.accent,
      } as React.CSSProperties)
    : undefined

  // If brand tokens exist, prefer them for base look (while keeping existing Tailwind tokens as fallback).
  const brandBg = colors ? 'bg-[var(--brand-bg)]' : t.bg
  const brandText = colors ? 'text-[var(--brand-text)]' : t.text
  const brandMuted = colors ? 'text-[var(--brand-muted)]' : t.muted
  const brandBorder = colors ? 'border-[var(--brand-border)]' : t.border
  const brandCard = colors ? `bg-[var(--brand-surface)]/80 backdrop-blur border ${brandBorder}` : t.card
  const brandAccent = colors ? 'bg-[var(--brand-primary)]' : t.accent
  const brandAccentText = colors ? 'text-[var(--brand-primary-text)]' : t.accentText
  const brandRing = colors ? 'ring-2 ring-[var(--brand-primary)]/40' : t.accentRing

  const heroBgStyle: React.CSSProperties | undefined =
    b?.assets?.heroBgSvg
      ? ({
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(b.assets.heroBgSvg)}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } as React.CSSProperties)
      : undefined

  const layout = config.layout || defaultLayoutForContent(c)
  const stats = c.stats?.items?.length ? c.stats : null
  const testimonials = c.testimonials?.items?.length ? c.testimonials : null
  const faq = c.faq?.items?.length ? c.faq : null
  const finalCta = c.finalCta || null

  const hasFaq = Boolean(faq)

  function renderFeatures(variant: string | undefined) {
    const v = (variant || 'grid').toLowerCase()
    if (v === 'zigzag') {
      return (
        <div className="mt-6 grid gap-4">
          {c.features.items.map((it, idx2) => (
            <div
              key={idx2}
              className={`p-6 ${t.radiusCard} ${t.card} grid md:grid-cols-12 gap-4 items-start`}
            >
              <div className="md:col-span-4">
                <div className={`inline-flex px-3 py-1 ${t.radiusPill} ${t.card} text-sm ${t.muted}`}>
                  {String(idx2 + 1).padStart(2, '0')}
                </div>
                <div className="mt-3 text-xl font-semibold">{it.title}</div>
              </div>
              <div className="md:col-span-8">
                <div className={`text-sm leading-relaxed ${t.muted}`}>{it.description}</div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (v === 'list') {
      return (
        <div className="mt-6 grid gap-3">
          {c.features.items.map((it, idx2) => (
            <div key={idx2} className={`p-5 ${t.radiusCard} ${brandCard}`}>
              <div className="flex items-start gap-3">
                <div className={`mt-1 h-2.5 w-2.5 ${t.radiusPill} ${brandAccent}`} />
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className={`mt-1 text-sm ${brandMuted}`}>{it.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    // default: grid
    return (
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {c.features.items.map((it, idx2) => (
          <div key={idx2} className={`p-5 ${t.radiusCard} ${brandCard}`}>
            <div className="font-semibold">{it.title}</div>
            <div className={`mt-2 text-sm ${brandMuted}`}>{it.description}</div>
          </div>
        ))}
      </div>
    )
  }

  function renderPricing(variant: string | undefined) {
    const v = (variant || 'cards').toLowerCase()
    if (v === 'table') {
      return (
        <div className={`mt-6 overflow-hidden border ${t.border} ${t.radiusCard} ${t.card}`}>
          <div className="grid grid-cols-12 gap-0 text-sm">
            <div className={`col-span-4 p-4 font-semibold border-b ${t.border}`}>Пакет</div>
            <div className={`col-span-3 p-4 font-semibold border-b ${t.border}`}>Баға</div>
            <div className={`col-span-5 p-4 font-semibold border-b ${t.border}`}>Не кіреді</div>
            {c.pricing.plans.map((p, idx2) => (
              <div key={idx2} className="contents">
                <div className={`col-span-4 p-4 border-b ${t.border}`}>
                  <div className="font-semibold">{p.name}</div>
                  <div className={`mt-1 text-xs ${t.muted}`}>{p.description}</div>
                </div>
                <div className={`col-span-3 p-4 border-b ${t.border}`}>
                  <div className="font-semibold">{p.price}</div>
                  {p.highlighted ? (
                    <div className={`mt-2 inline-flex px-2 py-1 ${t.radiusPill} ${t.accent} ${t.accentText} text-xs`}>
                      Popular
                    </div>
                  ) : null}
                </div>
                <div className={`col-span-5 p-4 border-b ${t.border}`}>
                  <ul className="space-y-1">
                    {p.bullets.slice(0, 5).map((b, i) => (
                      <li key={i} className={`flex gap-2 ${t.muted}`}>
                        <span className="opacity-70">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 flex justify-end">
            <a
              className={`inline-flex px-4 py-2 ${t.radiusButton} ${t.accent} ${t.accentText} font-semibold hover:opacity-90`}
              href={cta.href}
              target="_blank"
              rel="noreferrer"
            >
              {cta.label}
            </a>
          </div>
        </div>
      )
    }

    if (v === 'compare') {
      const plans = c.pricing.plans
      const maxBullets = Math.max(...plans.map((p) => p.bullets.length))
      return (
        <div className="mt-6 overflow-hidden">
          <div className={`grid lg:grid-cols-${plans.length} gap-3`}>
            {plans.map((p, idx2) => (
              <div
                key={idx2}
                className={`p-6 ${t.radiusCard} ${brandCard} ${p.highlighted ? brandRing : ''}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-semibold">{p.name}</div>
                  <div className={`text-sm ${brandMuted}`}>{p.price}</div>
                </div>
                <div className={`mt-2 text-sm ${brandMuted}`}>{p.description}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {Array.from({ length: maxBullets }).map((_, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="opacity-70">{p.bullets[i] ? '•' : '—'}</span>
                      <span className={p.bullets[i] ? '' : 'opacity-60'}>{p.bullets[i] || ' '}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a
                    className={`inline-flex px-4 py-2 ${t.radiusButton} ${brandAccent} ${brandAccentText} font-semibold hover:opacity-90`}
                    href={cta.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cta.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // default: cards
    return (
      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        {c.pricing.plans.map((p, idx2) => (
          <div
            key={idx2}
            className={`p-5 ${t.radiusCard} ${brandCard} ${p.highlighted ? brandRing : ''}`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-semibold">{p.name}</div>
              <div className={`text-sm ${brandMuted}`}>{p.price}</div>
            </div>
            <div className={`mt-2 text-sm ${brandMuted}`}>{p.description}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="opacity-70">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                className={`inline-flex px-4 py-2 ${t.radiusButton} ${brandAccent} ${brandAccentText} font-semibold hover:opacity-90`}
                href={cta.href}
                target="_blank"
                rel="noreferrer"
              >
                {cta.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }

  function renderTestimonials(variant: string | undefined) {
    if (!testimonials) return null
    const v = (variant || 'quotes').toLowerCase()
    if (v === 'cards') {
      return (
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {testimonials.items.map((it, idx2) => (
            <div key={idx2} className={`p-6 ${t.radiusCard} ${brandCard}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="font-semibold">{it.name}</div>
                <div className={`text-xs ${brandMuted}`}>{it.role}</div>
              </div>
              <div className={`mt-3 text-sm leading-relaxed ${brandMuted}`}>{it.quote}</div>
            </div>
          ))}
        </div>
      )
    }

    if (v === 'marquee') {
      return (
        <div className="mt-6 overflow-hidden">
          <div className="grid gap-3">
            {testimonials.items.map((it, idx2) => (
              <div key={idx2} className={`p-5 ${t.radiusCard} ${brandCard}`}>
                <div className={`text-sm ${brandMuted}`}>“{it.quote}”</div>
                <div className={`mt-2 text-xs ${brandMuted}`}>
                  {it.name} • {it.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // default: quotes
    return (
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {testimonials.items.map((it, idx2) => (
          <div key={idx2} className={`p-6 ${t.radiusCard} ${brandCard}`}>
            <div className="text-lg font-semibold">“{it.quote}”</div>
            <div className={`mt-4 text-sm ${brandMuted}`}>
              {it.name} • {it.role}
            </div>
          </div>
        ))}
      </div>
    )
  }

  function renderFaq(variant: string | undefined) {
    if (!faq) return null
    const v = (variant || 'accordion').toLowerCase()
    if (v === 'cards') {
      return (
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {faq.items.map((it, idx2) => (
            <div key={idx2} className={`p-6 ${t.radiusCard} ${brandCard}`}>
              <div className="font-semibold">{it.q}</div>
              <div className={`mt-2 text-sm ${brandMuted}`}>{it.a}</div>
            </div>
          ))}
        </div>
      )
    }
    // default: accordion
    return (
      <div className="mt-6 grid gap-3">
        {faq.items.map((it, idx2) => (
          <details key={idx2} className={`p-5 ${t.radiusCard} ${brandCard}`}>
            <summary className="cursor-pointer font-semibold">{it.q}</summary>
            <div className={`mt-2 text-sm ${brandMuted}`}>{it.a}</div>
          </details>
        ))}
      </div>
    )
  }

  return (
    <div
      className={`min-h-dvh ${brandBg} ${brandText} ${mounted && isDark ? 'dark' : ''}`}
      style={{ fontFamily: t.fontBody, ...(cssVars || {}) }}
      data-theme={mounted ? (isDark ? 'dark' : 'light') : 'light'}
      suppressHydrationWarning
    >
      <header className={`sticky top-0 z-50 backdrop-blur ${brandCard}`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <div className="font-semibold tracking-tight">{config.brief.businessName}</div>
            <div className={`text-xs ${brandMuted}`}>AI-first • Full-stack delivery</div>
          </div>
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a className={`px-3 py-2 ${t.radiusButton} ${brandCard} hover:opacity-90`} href="#features">
              Мүмкіндіктер
            </a>
            <a className={`px-3 py-2 ${t.radiusButton} ${brandCard} hover:opacity-90`} href="#pricing">
              Баға
            </a>
            {hasFaq ? (
              <a className={`px-3 py-2 ${t.radiusButton} ${brandCard} hover:opacity-90`} href="#faq">
                FAQ
              </a>
            ) : null}
            {b ? (
              <button
                onClick={() => setIsDark(!isDark)}
                className={`px-3 py-2 ${t.radiusButton} ${brandCard} hover:opacity-90 flex items-center gap-2`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
              >
                {isDark ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            ) : null}
            <a
              className={`px-4 py-2 ${t.radiusButton} ${brandAccent} ${brandAccentText} font-semibold hover:opacity-90`}
              href={cta.href}
              target="_blank"
              rel="noreferrer"
            >
              {cta.label}
            </a>
          </nav>
        </div>
      </header>

      <main>
        {layout.sections.map((s, idx) => {
          const key = `${s.type}:${idx}`

          if (s.type === 'hero') {
            const v = s.variant || 'split'
            return (
              <section
                key={key}
                id={s.anchor === 'top' ? undefined : s.anchor}
                className={`mx-auto max-w-6xl ${t.heroPadding}`}
              >
                {v === 'centered' ? (
                  <div className="max-w-3xl mx-auto text-center relative">
                    {heroBgStyle ? (
                      <div
                        aria-hidden
                        className={`absolute inset-0 -z-10 ${t.radiusCard}`}
                        style={heroBgStyle}
                      />
                    ) : null}
                    <p className={`inline-flex items-center gap-2 text-sm px-3 py-1 ${t.radiusPill} ${brandCard}`}>
                      {c.hero.badge}
                    </p>
                    <h1
                      className="mt-4 text-4xl lg:text-6xl leading-tight"
                      style={{ fontFamily: t.fontHeading }}
                    >
                      {c.hero.headline}
                    </h1>
                    <p className={`mt-4 text-lg ${brandMuted}`}>{c.hero.subheadline}</p>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        className={`px-6 py-3 ${t.radiusButton} ${brandAccent} ${brandAccentText} font-semibold hover:opacity-90`}
                        href={cta.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {cta.label}
                      </a>
                      <a className={`px-6 py-3 ${t.radiusButton} ${brandCard} font-medium`} href="#features">
                        Мүмкіндіктер
                      </a>
                    </div>
                    <div className={`mt-6 flex flex-wrap justify-center gap-2 text-sm ${brandMuted}`}>
                      {config.brief.uniqueSellingPoints.slice(0, 5).map((u, i) => (
                        <span key={i} className={`px-3 py-1 ${t.radiusPill} ${brandCard}`}>
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-10 items-center relative">
                    {heroBgStyle ? (
                      <div
                        aria-hidden
                        className={`absolute inset-0 -z-10 ${t.radiusCard}`}
                        style={heroBgStyle}
                      />
                    ) : null}
                    <div>
                      <p className={`inline-flex items-center gap-2 text-sm px-3 py-1 ${t.radiusPill} ${brandCard}`}>
                        {c.hero.badge}
                      </p>

                      <h1
                        className="mt-4 text-4xl lg:text-5xl leading-tight"
                        style={{ fontFamily: t.fontHeading }}
                      >
                        {c.hero.headline}
                      </h1>

                      <p className={`mt-4 text-lg ${brandMuted}`}>{c.hero.subheadline}</p>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                          className={`px-5 py-3 ${t.radiusButton} ${brandAccent} ${brandAccentText} font-semibold hover:opacity-90`}
                          href={cta.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {cta.label}
                        </a>
                        <a className={`px-5 py-3 ${t.radiusButton} ${brandCard} font-medium`} href="#features">
                          Мүмкіндіктер
                        </a>
                      </div>

                      <div className={`mt-6 flex flex-wrap gap-2 text-sm ${brandMuted}`}>
                        {config.brief.uniqueSellingPoints.slice(0, 4).map((u, i) => (
                          <span key={i} className={`px-3 py-1 ${t.radiusPill} ${brandCard}`}>
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`p-6 ${t.radiusCard} ${brandCard}`}>
                      <div className={`text-sm ${brandMuted}`}>Preview</div>
                      <div
                        className={`mt-4 h-64 ${t.radiusCardSm} border flex items-center justify-center ${brandMuted}`}
                      >
                        Live preview
                      </div>
                      <div className={`mt-4 text-sm ${brandMuted}`}>
                        Бұл бет Supabase-тағы JSON конфигтен рендер болады.
                      </div>
                    </div>
                  </div>
                )}
              </section>
            )
          }

          if (s.type === 'stats') {
            if (!stats) return null
            return (
              <section key={key} className={`mx-auto max-w-6xl ${t.sectionPadding}`}>
                <div className={`p-6 ${t.radiusCard} ${brandCard}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-2xl" style={{ fontFamily: t.fontHeading }}>
                      {stats.title}
                    </h2>
                    <div className={`text-sm ${brandMuted}`}>{config.brief.targetAudience}</div>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.items.map((it, idx2) => (
                      <div key={idx2} className={`p-5 ${t.radiusCardSm} border ${brandBorder}`}>
                        <div className={`text-sm ${brandMuted}`}>{it.label}</div>
                        <div className="mt-2 text-xl font-semibold">{it.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )
          }

          if (s.type === 'features') {
            return (
              <section
                key={key}
                id={s.anchor || 'features'}
                className={`mx-auto max-w-6xl ${t.sectionPadding}`}
              >
                <h2 className="text-2xl" style={{ fontFamily: t.fontHeading }}>
                  {c.features.title}
                </h2>
                {renderFeatures(s.variant)}
              </section>
            )
          }

          if (s.type === 'pricing') {
            return (
              <section
                key={key}
                id={s.anchor || 'pricing'}
                className={`mx-auto max-w-6xl ${t.sectionPadding}`}
              >
                <h2 className="text-2xl" style={{ fontFamily: t.fontHeading }}>
                  {c.pricing.title}
                </h2>
                {renderPricing(s.variant)}
              </section>
            )
          }

          if (s.type === 'testimonials') {
            if (!testimonials) return null
            return (
              <section key={key} className={`mx-auto max-w-6xl ${t.sectionPadding}`}>
                <h2 className="text-2xl" style={{ fontFamily: t.fontHeading }}>
                  {testimonials.title}
                </h2>
                {renderTestimonials(s.variant)}
              </section>
            )
          }

          if (s.type === 'faq') {
            if (!faq) return null
            return (
              <section
                key={key}
                id={s.anchor || 'faq'}
                className={`mx-auto max-w-6xl ${t.sectionPadding}`}
              >
                <h2 className="text-2xl" style={{ fontFamily: t.fontHeading }}>
                  {faq.title}
                </h2>
                {renderFaq(s.variant)}
              </section>
            )
          }

          if (s.type === 'lead') {
            return (
              <section
                key={key}
                id={s.anchor || 'lead'}
                className={`mx-auto max-w-6xl ${t.sectionPadding}`}
              >
                <div className={`p-8 ${t.radiusCard} ${t.card}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h2 className="text-2xl" style={{ fontFamily: t.fontHeading }}>
                        {finalCta?.title || 'Өтінім қалдырыңыз — біз сізге прототип ұсынамыз'}
                      </h2>
                      <p className={`mt-3 text-sm ${t.muted}`}>
                        {finalCta?.subtitle ||
                          'Брифті нақтылаймыз, оффер/структура ұсынамыз, сосын live бет шығарамыз. Жауап 1 жұмыс күні ішінде.'}
                      </p>
                      <div className={`mt-4 text-sm ${t.muted}`}>
                        Қызметтер: <span className="opacity-90">{config.brief.services.join(', ')}</span>
                      </div>
                    </div>
                    <form className="grid gap-3">
                      <input
                        className={`w-full px-4 py-3 ${t.radiusButton} border ${t.border} bg-transparent outline-none`}
                        placeholder="Атыңыз"
                        name="name"
                      />
                      <input
                        className={`w-full px-4 py-3 ${t.radiusButton} border ${t.border} bg-transparent outline-none`}
                        placeholder="Телефон / WhatsApp"
                        name="phone"
                      />
                      <textarea
                        className={`w-full px-4 py-3 ${t.radiusButton} border ${t.border} bg-transparent outline-none min-h-[120px]`}
                        placeholder="Қысқаша мақсат/оффер"
                        name="message"
                      />
                      <a
                        className={`inline-flex justify-center px-5 py-3 ${t.radiusButton} ${t.accent} ${t.accentText} font-semibold hover:opacity-90`}
                        href={cta.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {cta.label}
                      </a>
                      <div className={`text-xs ${t.muted}`}>
                        Батырма сіздің CTA линкіңізге апарады. (Келесі қадамда форманы DB/CRM‑ге жіберуді қосамыз.)
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            )
          }

          if (s.type === 'footer') {
            return null
          }

          return null
        })}
      </main>

      <footer className="mt-10">
        <div className={`mx-auto max-w-6xl ${t.sectionPadding} border-t ${t.border} ${t.muted} text-sm`}>
          {c.footer.note}
        </div>
      </footer>
    </div>
  )
}
