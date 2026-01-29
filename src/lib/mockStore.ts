import type { SiteConfig } from '@/lib/siteConfig'
import path from 'path'
import { promises as fs } from 'fs'

type MockStore = Map<string, SiteConfig>

const MOCK_DIR = path.join(process.cwd(), '.mock-data')
const MOCK_FILE = path.join(MOCK_DIR, 'sites.json')

function getStore(): MockStore {
  const globalForMock = globalThis as unknown as { __mockSites?: MockStore }
  if (!globalForMock.__mockSites) {
    globalForMock.__mockSites = new Map()
  }
  return globalForMock.__mockSites
}

async function readDiskStore(): Promise<Record<string, SiteConfig>> {
  try {
    const raw = await fs.readFile(MOCK_FILE, 'utf8')
    const parsed = JSON.parse(raw || '{}')
    return parsed || {}
  } catch (e: any) {
    if (e?.code === 'ENOENT') return {}
    return {}
  }
}

async function writeDiskStore(data: Record<string, SiteConfig>) {
  await fs.mkdir(MOCK_DIR, { recursive: true })
  await fs.writeFile(MOCK_FILE, JSON.stringify(data, null, 2), 'utf8')
}

async function loadStore(): Promise<MockStore> {
  const store = getStore()
  if (store.size > 0) return store
  const disk = await readDiskStore()
  for (const [key, value] of Object.entries(disk)) {
    store.set(key, value)
  }
  return store
}

export async function saveMockSite(config: SiteConfig) {
  const id = globalThis.crypto?.randomUUID?.() || `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const store = await loadStore()
  store.set(id, config)
  await writeDiskStore(Object.fromEntries(store))
  return id
}

export async function getMockSite(id: string) {
  const store = await loadStore()
  return store.get(id) || null
}
