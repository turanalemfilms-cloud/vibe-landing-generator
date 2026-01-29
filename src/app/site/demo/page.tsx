import { tokensForStyle, type SiteConfig } from '@/lib/siteConfig'
import { LandingPage } from '@/components/LandingPage'

export default function DemoSitePage() {
  const config: SiteConfig = {
    version: 1,
    styleKey: 'minimalist_tech',
    tokens: tokensForStyle('minimalist_tech'),
    brief: {
      businessName: 'Turan Mural',
      targetAudience: 'Кәсіпкерлер мен инвесторлар',
      services: ['Лендинг/сайт', 'AI автоматизация', 'Чат-бот/CRM', 'Startup консалтинг'],
      uniqueSellingPoints: ['Жылдам delivery', 'AI-first', 'Таза код'],
      cta: { label: 'WhatsApp-қа жазу', href: 'https://wa.me/77054978510' },
      language: 'KZ',
    },
    content: {
      hero: {
        badge: 'Vibe Coding • Demo',
        headline: 'Сатылым әкелетін лендинг және AI автоматизация',
        subheadline: 'Бриф → стиль → live link. 1 күнде MVP шығарамыз.',
      },
      features: {
        title: 'Не аласыз?',
        items: [
          { title: 'Лендинг', description: 'Оффер, copy, құрылым, конверсияға фокус.' },
          { title: 'AI автоматизация', description: 'Қолмен істейтін жұмысты азайтамыз.' },
          { title: 'Бот/CRM', description: '24/7 лид жинау және жүйелеу.' },
        ],
      },
      pricing: {
        title: 'Пакеттер',
        plans: [
          {
            name: 'Start',
            price: 'Келісім бойынша',
            description: 'Жылдам лендинг',
            bullets: ['1 бет', 'CTA', 'Basic analytics'],
            highlighted: false,
          },
          {
            name: 'Pro',
            price: 'Келісім бойынша',
            description: 'Лендинг + автоматизация',
            bullets: ['Интеграциялар', 'AI сценарий', 'Бот/CRM'],
            highlighted: true,
          },
        ],
      },
      footer: { note: '© Turan Mural, 2026' },
    },
  }

  return <LandingPage config={config} />
}
