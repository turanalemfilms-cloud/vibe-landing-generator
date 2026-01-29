module.exports = [
"[project]/src/lib/mockStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMockSite",
    ()=>getMockSite,
    "saveMockSite",
    ()=>saveMockSite
]);
function getStore() {
    const globalForMock = globalThis;
    if (!globalForMock.__mockSites) {
        globalForMock.__mockSites = new Map();
    }
    return globalForMock.__mockSites;
}
function saveMockSite(config) {
    const id = globalThis.crypto?.randomUUID?.() || `mock-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const store = getStore();
    store.set(id, config);
    return id;
}
function getMockSite(id) {
    const store = getStore();
    return store.get(id) || null;
}
}),
];

//# sourceMappingURL=src_lib_mockStore_ts_acbfb920._.js.map