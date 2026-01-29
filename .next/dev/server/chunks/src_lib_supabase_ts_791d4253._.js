module.exports = [
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseBrowser",
    ()=>supabaseBrowser,
    "supabaseServer",
    ()=>supabaseServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
function supabaseBrowser() {
    const url = ("TURBOPACK compile-time value", "https://uxwzlcudgcgnrugthulg.supabase.co");
    const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4d3psY3VkZ2NnbnJ1Z3RodWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MTMzMzksImV4cCI6MjA4Mzk4OTMzOX0.Gqm65hXI9DT6RMMTl_iVIr9z_pn7dyGLF5na5A95-RY");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, anon);
}
function supabaseServer() {
    const url = ("TURBOPACK compile-time value", "https://uxwzlcudgcgnrugthulg.supabase.co");
    const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4d3psY3VkZ2NnbnJ1Z3RodWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MTMzMzksImV4cCI6MjA4Mzk4OTMzOX0.Gqm65hXI9DT6RMMTl_iVIr9z_pn7dyGLF5na5A95-RY");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Prefer service role for server-side writes. Fallback to anon for quick demo.
    const key = service || anon;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key, {
        auth: {
            persistSession: false
        }
    });
}
}),
];

//# sourceMappingURL=src_lib_supabase_ts_791d4253._.js.map