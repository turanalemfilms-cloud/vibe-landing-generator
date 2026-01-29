import { NextResponse } from 'next/server'
export const runtime = 'nodejs'

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing GEMINI_API_KEY. Add it to .env.local.' },
      { status: 400 }
    )
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    const res = await fetch(url, { method: 'GET' })
    const payload = await res.json()
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Gemini listModels failed', details: payload?.error?.message || res.statusText },
        { status: res.status }
      )
    }
    const models = payload?.models || []
    const simplified = models.map((m: any) => ({
      name: m.name,
      displayName: m.displayName,
      baseModelId: m.baseModelId,
      version: m.version,
      supportedGenerationMethods: m.supportedGenerationMethods,
    }))
    return NextResponse.json({ models: simplified })
  } catch (e) {
    return NextResponse.json(
      { error: 'Gemini listModels failed', details: String((e as any)?.message || e) },
      { status: 500 }
    )
  }
}
