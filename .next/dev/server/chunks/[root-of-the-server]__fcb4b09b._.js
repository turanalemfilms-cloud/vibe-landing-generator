module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/siteConfig.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingContentSchema",
    ()=>LandingContentSchema,
    "SectionType",
    ()=>SectionType,
    "SiteBriefSchema",
    ()=>SiteBriefSchema,
    "SiteConfigSchema",
    ()=>SiteConfigSchema,
    "SiteLayoutSchema",
    ()=>SiteLayoutSchema,
    "SiteLayoutSectionSchema",
    ()=>SiteLayoutSectionSchema,
    "StyleKey",
    ()=>StyleKey,
    "TailwindStyleTokensSchema",
    ()=>TailwindStyleTokensSchema,
    "defaultLayoutForContent",
    ()=>defaultLayoutForContent,
    "tokensForStyle",
    ()=>tokensForStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const StyleKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'minimalist_tech',
    'bold_modern',
    'clean_corporate'
]);
const SiteBriefSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    businessName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    targetAudience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    services: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1),
    uniqueSellingPoints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1),
    cta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        href: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }).default({
        label: 'Өтінім қалдыру',
        href: '#lead'
    }),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('KZ').default('KZ')
});
const TailwindStyleTokensSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    fontHeading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    fontBody: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    bg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    card: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    muted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    border: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    accent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    accentText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    accentRing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    radiusCard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    radiusCardSm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    radiusButton: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    radiusPill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    heroPadding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    sectionPadding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const LandingContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    hero: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        badge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        headline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        subheadline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }),
    stats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        })).min(2).max(4)
    }).optional(),
    features: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        })).min(3).max(6)
    }),
    testimonials: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            quote: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        })).min(2).max(4)
    }).optional(),
    faq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            q: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            a: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        })).min(3).max(6)
    }).optional(),
    pricing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        plans: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            bullets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(3).max(8),
            highlighted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false)
        })).min(2).max(3)
    }),
    finalCta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        subtitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }).optional(),
    footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        note: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    })
});
const SectionType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'hero',
    'stats',
    'features',
    'pricing',
    'testimonials',
    'faq',
    'lead',
    'footer'
]);
const SiteLayoutSectionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: SectionType,
    variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    anchor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional()
});
const SiteLayoutSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(SiteLayoutSectionSchema).min(3).max(12)
});
const SiteConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(1),
    styleKey: StyleKey,
    tokens: TailwindStyleTokensSchema,
    brief: SiteBriefSchema,
    content: LandingContentSchema,
    layout: SiteLayoutSchema.optional()
});
function defaultLayoutForContent(content) {
    const sections = [
        {
            type: 'hero',
            variant: 'split',
            anchor: 'top'
        }
    ];
    if (content.stats) sections.push({
        type: 'stats',
        variant: 'cards'
    });
    sections.push({
        type: 'features',
        variant: 'grid',
        anchor: 'features'
    });
    sections.push({
        type: 'pricing',
        variant: 'cards',
        anchor: 'pricing'
    });
    if (content.testimonials) sections.push({
        type: 'testimonials',
        variant: 'quotes'
    });
    if (content.faq) sections.push({
        type: 'faq',
        variant: 'accordion',
        anchor: 'faq'
    });
    sections.push({
        type: 'lead',
        variant: 'form',
        anchor: 'lead'
    });
    sections.push({
        type: 'footer',
        variant: 'simple'
    });
    return {
        sections
    };
}
function tokensForStyle(styleKey) {
    switch(styleKey){
        case 'minimalist_tech':
            return {
                fontHeading: 'var(--font-space)',
                fontBody: 'var(--font-inter)',
                bg: 'bg-gradient-to-b from-slate-950 via-slate-950 to-black',
                card: 'bg-white/5 backdrop-blur border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
                text: 'text-white',
                muted: 'text-white/70',
                border: 'border-white/10',
                accent: 'bg-sky-400',
                accentText: 'text-slate-950',
                accentRing: 'ring-2 ring-sky-400/40',
                radiusCard: 'rounded-3xl',
                radiusCardSm: 'rounded-2xl',
                radiusButton: 'rounded-xl',
                radiusPill: 'rounded-full',
                heroPadding: 'px-4 pt-14 pb-10',
                sectionPadding: 'px-4 py-10'
            };
        case 'bold_modern':
            return {
                fontHeading: 'var(--font-syne)',
                fontBody: 'var(--font-inter)',
                bg: 'bg-gradient-to-b from-black via-zinc-950 to-slate-900',
                card: 'bg-white/5 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.5)]',
                text: 'text-white',
                muted: 'text-white/70',
                border: 'border-white/10',
                accent: 'bg-fuchsia-500',
                accentText: 'text-white',
                accentRing: 'ring-2 ring-fuchsia-500/40',
                radiusCard: 'rounded-[28px]',
                radiusCardSm: 'rounded-2xl',
                radiusButton: 'rounded-2xl',
                radiusPill: 'rounded-full',
                heroPadding: 'px-4 pt-16 pb-10',
                sectionPadding: 'px-4 py-10'
            };
        case 'clean_corporate':
            return {
                fontHeading: 'var(--font-manrope)',
                fontBody: 'var(--font-inter)',
                bg: 'bg-gradient-to-b from-slate-50 to-white',
                card: 'bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.08)]',
                text: 'text-slate-900',
                muted: 'text-slate-600',
                border: 'border-slate-200',
                accent: 'bg-blue-600',
                accentText: 'text-white',
                accentRing: 'ring-2 ring-blue-500/30',
                radiusCard: 'rounded-3xl',
                radiusCardSm: 'rounded-xl',
                radiusButton: 'rounded-xl',
                radiusPill: 'rounded-full',
                heroPadding: 'px-4 pt-14 pb-10',
                sectionPadding: 'px-4 py-10'
            };
    }
}
}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteConfig.ts [app-route] (ecmascript)");
;
;
;
function getEnv(name) {
    return process.env[name];
}
const STYLE_CHOICES = [
    {
        key: 'minimalist_tech',
        label: 'Minimalist Tech',
        description: 'Қараңғы, минимал, glassy'
    },
    {
        key: 'bold_modern',
        label: 'Bold Modern',
        description: 'Контраст, батыл accent'
    },
    {
        key: 'clean_corporate',
        label: 'Clean Corporate',
        description: 'Ақ/жеңіл, корпоратив стиль'
    }
];
function buildFallbackContent(brief) {
    return {
        hero: {
            badge: 'Vibe Coding • AI-first delivery',
            headline: `${brief.businessName}: сатылым әкелетін лендинг және AI автоматизация`,
            subheadline: `${brief.targetAudience} үшін: ${brief.services.join(', ')}. Нәтиже: ${brief.uniqueSellingPoints.slice(0, 2).join(' • ')}.`
        },
        stats: {
            title: 'Нәтиже',
            items: [
                {
                    label: 'Дайындау уақыты',
                    value: '1–3 күн'
                },
                {
                    label: 'Фокус',
                    value: 'Конверсия'
                },
                {
                    label: 'Қолдау',
                    value: 'Итерация + аналитика'
                }
            ]
        },
        features: {
            title: 'Не аласыз?',
            items: [
                {
                    title: brief.services[0] || 'Лендинг',
                    description: 'Конверсияға бағытталған құрылым, тез жүктелу, мобильді адаптив.'
                },
                {
                    title: brief.services[1] || 'AI автоматизация',
                    description: 'Қолмен істейтін процестерді қысқартып, уақыт/шығын үнемдеу.'
                },
                {
                    title: brief.services[2] || 'Чат-бот/CRM',
                    description: 'Лид жинау, квалификация, 24/7 байланыс және CRM интеграция.'
                }
            ]
        },
        testimonials: {
            title: 'Клиенттер не дейді?',
            items: [
                {
                    name: 'Айгерім',
                    role: 'Кәсіпкер',
                    quote: 'Лендинг бірден түсінікті болды, лидтер көбейді.'
                },
                {
                    name: 'Дәурен',
                    role: 'Сату менеджері',
                    quote: 'CTA мен офферді дұрыстап берген соң конверсия өсті.'
                }
            ]
        },
        faq: {
            title: 'Жиі сұрақтар',
            items: [
                {
                    q: 'Қанша уақытта дайын болады?',
                    a: 'Бриф дайын болса, MVP 1–3 күн ішінде.'
                },
                {
                    q: 'Қандай интеграциялар бар?',
                    a: 'WhatsApp/Telegram, CRM, analytics (GA/Pixel) қосамыз.'
                },
                {
                    q: 'Контентті өзгерте аламын ба?',
                    a: 'Иә, конфиг арқылы тез өзгертіп шығамыз.'
                }
            ]
        },
        pricing: {
            title: 'Пакеттер',
            plans: [
                {
                    name: 'Start',
                    price: 'Бағасы келісім бойынша',
                    description: 'Жылдам MVP/лендинг',
                    bullets: [
                        '1 бет лендинг',
                        'WhatsApp CTA',
                        'Базалық аналитика'
                    ],
                    highlighted: false
                },
                {
                    name: 'Pro',
                    price: 'Бағасы келісім бойынша',
                    description: 'Автоматизация + интеграциялар',
                    bullets: [
                        'Лендинг + бот/CRM',
                        'AI автоматизация сценарийі',
                        'Интеграциялар'
                    ],
                    highlighted: true
                }
            ]
        },
        finalCta: {
            title: 'Дайынсыз ба? 15 минутта бағыт береміз',
            subtitle: 'Қысқа қоңырау → оффер → прототип. Бүгін бастайық.'
        },
        footer: {
            note: `© ${brief.businessName}. Барлық құқық қорғалған.`
        }
    };
}
function isModelNotFound(error) {
    const message = String(error?.message || error);
    return message.includes('404') || message.toLowerCase().includes('not found') || message.toLowerCase().includes('not supported for generatecontent');
}
function buildMockResponse(state, body) {
    const latestUser = body.messages[body.messages.length - 1]?.content || '';
    const normalized = latestUser.toLowerCase();
    const brief = state.brief || {
        businessName: latestUser.trim() ? latestUser.trim().slice(0, 60) : 'Demo бизнес',
        targetAudience: 'Клиенттер',
        services: [
            'Лендинг',
            'AI автоматизация',
            'Чат-бот/CRM'
        ],
        uniqueSellingPoints: [
            'Жылдам delivery',
            'AI-first',
            'Нақты нәтиже'
        ],
        cta: {
            label: 'Өтінім қалдыру',
            href: '#lead'
        },
        language: 'KZ'
    };
    if (state.step === 'collecting') {
        return {
            terminal: true,
            response: {
                assistantMessage: 'Керемет! Енді стиль таңдаңыз.',
                nextState: {
                    step: 'style',
                    brief
                },
                briefComplete: true,
                styles: STYLE_CHOICES
            }
        };
    }
    if (state.step === 'style') {
        const selected = [
            'minimalist_tech',
            'bold_modern',
            'clean_corporate'
        ].find((key)=>normalized.includes(key)) || undefined;
        if (!selected) {
            return {
                terminal: true,
                response: {
                    assistantMessage: 'Қай стильді таңдайсыз? Төменнен таңдаңыз.',
                    nextState: {
                        step: 'style',
                        brief
                    },
                    styles: STYLE_CHOICES
                }
            };
        }
        return {
            terminal: false,
            response: {
                assistantMessage: 'Жарайды! Генерация жасап жатырмын.',
                nextState: {
                    step: 'generated',
                    brief,
                    styleKey: selected
                }
            }
        };
    }
    return {
        terminal: true,
        response: {
            assistantMessage: 'Кешіріңіз, түсінбедім. Қай стильді таңдайсыз?',
            nextState: {
                step: 'style',
                brief
            },
            styles: STYLE_CHOICES
        }
    };
}
async function POST(req) {
    const useMock = process.env.MOCK_AI === 'true' || process.env.MOCK_AI === '1';
    const apiKey = getEnv('GEMINI_API_KEY');
    if (!useMock && !apiKey) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Missing GEMINI_API_KEY. Add it to .env.local (see .env.example).'
        }, {
            status: 400
        });
    }
    let body;
    try {
        body = await req.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid JSON body'
        }, {
            status: 400
        });
    }
    const state = body?.state ?? {
        step: 'collecting'
    };
    if (!Array.isArray(body?.messages)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid request: messages must be an array'
        }, {
            status: 400
        });
    }
    const mockResult = buildMockResponse(state, body);
    if (useMock) {
        if (mockResult.terminal) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(mockResult.response);
    }
    let parsed = null;
    const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
    const modelName = (()=>{
        const raw = process.env.GEMINI_MODEL?.trim();
        if (!raw) return 'gemini-1.5-flash';
        if (raw === 'gemini-1.5-flash-latest') return 'gemini-1.5-flash';
        if (raw === 'gemini-1.5-pro-latest') return 'gemini-1.5-pro';
        return raw;
    })();
    const modelFallbacks = [
        modelName,
        'gemini-1.5-flash',
        'gemini-1.5-pro',
        'gemini-1.5-flash-8b',
        'gemini-1.0-pro',
        'gemini-pro'
    ].filter(Boolean);
    async function generateWithFallback(options) {
        let lastError = null;
        for (const name of modelFallbacks){
            try {
                const model = genAI.getGenerativeModel({
                    model: name,
                    generationConfig: {
                        temperature: options.temperature,
                        responseMimeType: 'application/json'
                    }
                });
                const result = await model.generateContent(options.instruction);
                return {
                    text: result.response.text(),
                    model: name
                };
            } catch (e) {
                lastError = e;
                if (!isModelNotFound(e)) {
                    throw e;
                }
            }
        }
        throw lastError;
    }
    const system = {
        role: 'system',
        content: 'You are an AI product assistant for generating a landing page. ' + 'You must ask strategic questions to collect: business name, target audience, services (list), unique selling points (list), and CTA (label + link). ' + 'Once the brief is complete, offer 3 styles: Minimalist Tech, Bold Modern, Clean Corporate. ' + 'Always respond in Kazakh (KZ). Keep questions short. '
    };
    const styleOptions = 'Styles:\n' + '- minimalist_tech: Minimalist Tech (dark, glassy, tech)\n' + '- bold_modern: Bold Modern (high-contrast, loud accent)\n' + '- clean_corporate: Clean Corporate (light, calm, business)';
    const schemaInstruction = 'Return a JSON object with shape:\n' + '{"assistantMessage": string, "nextState": {"step": "collecting"|"style"|"generated", "brief"?: object, "styleKey"?: string, "siteId"?: string}, "briefComplete"?: boolean, "styles"?: array}\n' + 'Rules:\n' + '- If step=collecting: ask the next missing info; when complete set briefComplete=true and nextState.step="style" and include styles list.\n' + '- If step=style: user will choose styleKey; then set nextState.step="generated" and return nextState.styleKey.\n';
    const prompt = [
        system,
        {
            role: 'system',
            content: `Current step: ${state.step}. Current brief: ${JSON.stringify(state.brief ?? {})}`
        },
        {
            role: 'system',
            content: styleOptions
        },
        {
            role: 'system',
            content: schemaInstruction
        },
        ...body.messages
    ];
    if (!useMock) {
        let rawText = '';
        try {
            // Convert ChatMessage[] to a single instruction (simple + robust for v1)
            const transcript = prompt.filter((m)=>m.role !== 'system').map((m)=>`${m.role.toUpperCase()}: ${m.content}`).join('\n');
            const instruction = `${system.content}\n\n` + `${styleOptions}\n\n` + `${schemaInstruction}\n\n` + `Conversation:\n${transcript}\n\n` + `Now output ONLY the JSON object described above.`;
            const result = await generateWithFallback({
                instruction,
                temperature: 0.4
            });
            rawText = result.text;
        } catch (e) {
            if (isModelNotFound(e)) {
                if (mockResult.terminal) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(mockResult.response);
                parsed = mockResult.response;
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Gemini request failed',
                    details: String(e?.message || e)
                }, {
                    status: 500
                });
            }
        }
        if (!parsed) {
            const raw = rawText || '{}';
            try {
                parsed = JSON.parse(raw);
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Bad JSON from model',
                    raw
                }, {
                    status: 500
                });
            }
        }
    } else {
        parsed = mockResult.response;
    }
    // Validate/normalize brief if present
    if (parsed?.nextState?.brief) {
        const briefResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteBriefSchema"].safeParse(parsed.nextState.brief);
        if (briefResult.success) parsed.nextState.brief = briefResult.data;
    }
    // If we reached generated with valid brief + styleKey, create SiteConfig and persist
    const maybeStyle = parsed?.nextState?.styleKey;
    const maybeBrief = parsed?.nextState?.brief;
    if (parsed?.nextState?.step === 'generated' && maybeStyle && maybeBrief) {
        const styleKeyResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StyleKey"].safeParse(maybeStyle);
        const briefResult = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteBriefSchema"].safeParse(maybeBrief);
        if (styleKeyResult.success && briefResult.success) {
            const styleKey = styleKeyResult.data;
            const brief = briefResult.data;
            let content = buildFallbackContent(brief);
            let layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultLayoutForContent"])(content);
            if (!useMock) {
                try {
                    const contentPrompt = 'Generate landing page content in Kazakh (KZ). ' + 'Return JSON with shape: { ' + '"hero": { "badge": string, "headline": string, "subheadline": string }, ' + '"stats"?: { "title": string, "items": [{ "label": string, "value": string }] }, ' + '"features": { "title": string, "items": [{ "title": string, "description": string }] }, ' + '"testimonials"?: { "title": string, "items": [{ "name": string, "role": string, "quote": string }] }, ' + '"faq"?: { "title": string, "items": [{ "q": string, "a": string }] }, ' + '"pricing": { "title": string, "plans": [{ "name": string, "price": string, "description": string, "bullets": [string], "highlighted": boolean }] }, ' + '"finalCta"?: { "title": string, "subtitle": string }, ' + '"footer": { "note": string } }.\n\n' + `Brief: ${JSON.stringify(brief)}\n` + `Style: ${styleKey}\n` + 'Constraints: stats.items 2-4; features.items 3-6; testimonials.items 2-4; faq.items 3-6; pricing.plans 2-3; bullets 3-6; keep it concise.\n' + 'Output JSON only.';
                    const contentRes = await generateWithFallback({
                        instruction: contentPrompt,
                        temperature: 0.6
                    });
                    const contentRaw = contentRes.text || '{}';
                    const contentJson = JSON.parse(contentRaw);
                    const contentParsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LandingContentSchema"].safeParse(contentJson);
                    if (contentParsed.success) {
                        content = contentParsed.data;
                        layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultLayoutForContent"])(content);
                    }
                } catch  {
                // Keep fallbackContent if Gemini content generation fails
                }
            }
            // Ask Gemini to design the layout (order + variants) using already-generated content keys
            if (!useMock) {
                try {
                    const layoutPrompt = 'You are a senior landing-page designer. Create a section layout plan for a landing page in Kazakh.\n' + 'Return JSON ONLY with shape: { "sections": [{ "type": "hero"|"stats"|"features"|"pricing"|"testimonials"|"faq"|"lead"|"footer", "variant"?: string, "anchor"?: string }] }.\n' + 'Rules:\n' + '- Use only the section types listed above.\n' + '- Include hero first and footer last.\n' + '- Use anchors for features/pricing/faq/lead when present.\n' + '- If content.stats/testimonials/faq is missing, do not include those sections.\n' + '- Choose variants to match styleKey (minimalist_tech/bold_modern/clean_corporate). Examples: hero: split|centered|minimal; features: grid|zigzag; pricing: cards|table; faq: accordion|cards.\n' + `styleKey: ${styleKey}\n` + `brief: ${JSON.stringify(brief)}\n` + `contentKeys: ${JSON.stringify({
                        hasStats: Boolean(content?.stats),
                        hasTestimonials: Boolean(content?.testimonials),
                        hasFaq: Boolean(content?.faq)
                    })}\n` + 'Output JSON only.';
                    const layoutRes = await generateWithFallback({
                        instruction: layoutPrompt,
                        temperature: 0.2
                    });
                    const layoutJson = JSON.parse(layoutRes.text || '{}');
                    const layoutParsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteLayoutSchema"].safeParse(layoutJson);
                    if (layoutParsed.success) {
                        layout = layoutParsed.data;
                    }
                } catch  {
                // keep default layout
                }
            }
            const config = {
                version: 1,
                styleKey,
                tokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokensForStyle"])(styleKey),
                brief,
                content,
                layout
            };
            const validated = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteConfigSchema"].safeParse(config);
            if (!validated.success) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Generated config failed validation',
                    issues: validated.error.issues
                }, {
                    status: 500
                });
            }
            const { supabaseServer } = await __turbopack_context__.A("[project]/src/lib/supabase.ts [app-route] (ecmascript, async loader)");
            let supabase = null;
            try {
                supabase = supabaseServer();
            } catch  {
                supabase = null;
            }
            if (supabase) {
                const insertRes = await supabase.from('sites').insert({
                    brief: brief,
                    config: validated.data,
                    style_key: styleKey
                }).select('id').single();
                if (insertRes.error) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Supabase insert failed',
                        details: insertRes.error.message
                    }, {
                        status: 500
                    });
                }
                parsed.nextState.siteId = insertRes.data.id;
                parsed.siteUrl = `/site/${insertRes.data.id}`;
            } else {
                const { saveMockSite } = await __turbopack_context__.A("[project]/src/lib/mockStore.ts [app-route] (ecmascript, async loader)");
                const mockId = await saveMockSite(validated.data);
                parsed.nextState.siteId = mockId;
                parsed.siteUrl = `/site/${mockId}`;
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(parsed);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fcb4b09b._.js.map