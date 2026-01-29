module.exports = [
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/lib/mockStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMockSite",
    ()=>getMockSite,
    "saveMockSite",
    ()=>saveMockSite
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
const MOCK_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), '.mock-data');
const MOCK_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(MOCK_DIR, 'sites.json');
function getStore() {
    const globalForMock = globalThis;
    if (!globalForMock.__mockSites) {
        globalForMock.__mockSites = new Map();
    }
    return globalForMock.__mockSites;
}
async function readDiskStore() {
    try {
        const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(MOCK_FILE, 'utf8');
        const parsed = JSON.parse(raw || '{}');
        return parsed || {};
    } catch (e) {
        if (e?.code === 'ENOENT') return {};
        return {};
    }
}
async function writeDiskStore(data) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].mkdir(MOCK_DIR, {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].writeFile(MOCK_FILE, JSON.stringify(data, null, 2), 'utf8');
}
async function loadStore() {
    const store = getStore();
    if (store.size > 0) return store;
    const disk = await readDiskStore();
    for (const [key, value] of Object.entries(disk)){
        store.set(key, value);
    }
    return store;
}
async function saveMockSite(config) {
    const id = globalThis.crypto?.randomUUID?.() || `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const store = await loadStore();
    store.set(id, config);
    await writeDiskStore(Object.fromEntries(store));
    return id;
}
async function getMockSite(id) {
    const store = await loadStore();
    return store.get(id) || null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be154e5f._.js.map