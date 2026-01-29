import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN || ''
  const chatId = process.env.TELEGRAM_CHAT_ID || ''

  return NextResponse.json({
    hasToken: Boolean(token),
    tokenHasColon: token.includes(':'),
    tokenPrefix: token ? token.slice(0, 10) : null,
    tokenLength: token.length,
    hasChatId: Boolean(chatId),
    chatIdLooksNumeric: /^-?\d+$/.test(chatId),
    chatIdLength: chatId.length,
  })
}

