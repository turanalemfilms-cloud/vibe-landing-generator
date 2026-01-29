import { notFound } from 'next/navigation'
import { supabaseServer } from '@/lib/supabase'
import { SiteConfigSchema } from '@/lib/siteConfig'
import { SiteManifestSchema } from '@/lib/siteManifest'
import { LandingPage } from '@/components/LandingPage'
import { Renderer } from '@/components/Renderer'
import { getMockSite } from '@/lib/mockStore'

export default async function SitePage({ params }: { params: Promise<{ site_id: string }> }) {
  const { site_id } = await params

  if (site_id === 'demo') {
    notFound()
  }

  let config: unknown = null
  try {
    const supabase = supabaseServer()
    const rev = await supabase.from('revisions').select('config').eq('id', site_id).maybeSingle()
    if (!rev.error && rev.data?.config) {
      config = rev.data.config
    } else {
      const legacy = await supabase.from('sites').select('config').eq('id', site_id).maybeSingle()
      if (!legacy.error && legacy.data?.config) config = legacy.data.config
    }
  } catch {
    config = null
  }

  if (!config) {
    config = await getMockSite(site_id)
  }

  if (!config) notFound()

  // Detect version and route to appropriate renderer
  const configObj = config as any
  if (configObj?.version === 2) {
    // v2 SiteManifest
    const parsed = SiteManifestSchema.safeParse(config)
    if (!parsed.success) notFound()
    return <Renderer manifest={parsed.data} />
  } else {
    // v1 SiteConfig (legacy)
    const parsed = SiteConfigSchema.safeParse(config)
    if (!parsed.success) notFound()
    return <LandingPage config={parsed.data} />
  }
}
