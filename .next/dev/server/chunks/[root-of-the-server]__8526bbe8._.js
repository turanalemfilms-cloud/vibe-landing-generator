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
    "BrandTokensSchema",
    ()=>BrandTokensSchema,
    "FreeformHtmlSchema",
    ()=>FreeformHtmlSchema,
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
    "iOS26SystemColors",
    ()=>iOS26SystemColors,
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
const BrandTokensSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    brandName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        // iOS 26-style system colors (light mode)
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            bg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            surface: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            muted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            border: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            primary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            primaryText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            accent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            secondary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        }),
        // iOS 26-style system colors (dark mode)
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            bg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            surface: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            muted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            border: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            primary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            primaryText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            accent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            secondary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        })
    }),
    typography: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'space',
            'syne',
            'manrope'
        ]),
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'inter',
            'manrope'
        ])
    }),
    radius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        card: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'xl',
            '2xl',
            '3xl'
        ]),
        button: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'xl',
            '2xl'
        ])
    }),
    assets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        heroBgSvg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }).optional()
});
const iOS26SystemColors = {
    blue: {
        light: '#007AFF',
        dark: '#0A84FF'
    },
    green: {
        light: '#34C759',
        dark: '#30D158'
    },
    orange: {
        light: '#FF9500',
        dark: '#FF9F0A'
    },
    red: {
        light: '#FF3B30',
        dark: '#FF453A'
    },
    purple: {
        light: '#AF52DE',
        dark: '#BF5AF2'
    },
    pink: {
        light: '#FF2D55',
        dark: '#FF375F'
    },
    yellow: {
        light: '#FFCC00',
        dark: '#FFD60A'
    },
    indigo: {
        light: '#5856D6',
        dark: '#5E5CE6'
    },
    teal: {
        light: '#5AC8FA',
        dark: '#64D2FF'
    },
    mint: {
        light: '#00C7BE',
        dark: '#66EFE5'
    }
};
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
const FreeformHtmlSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    css: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    js: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const SiteConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(1),
    styleKey: StyleKey,
    tokens: TailwindStyleTokensSchema,
    brand: BrandTokensSchema.optional(),
    brief: SiteBriefSchema,
    content: LandingContentSchema,
    layout: SiteLayoutSchema.optional(),
    freeform: FreeformHtmlSchema.optional()
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
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseBrowser",
    ()=>supabaseBrowser,
    "supabaseServer",
    ()=>supabaseServer,
    "supabaseServerWithAccessToken",
    ()=>supabaseServerWithAccessToken,
    "supabaseService",
    ()=>supabaseService
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
function supabaseService() {
    const url = ("TURBOPACK compile-time value", "https://uxwzlcudgcgnrugthulg.supabase.co");
    const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !service) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, service, {
        auth: {
            persistSession: false
        }
    });
}
function supabaseServerWithAccessToken(accessToken) {
    const url = ("TURBOPACK compile-time value", "https://uxwzlcudgcgnrugthulg.supabase.co");
    const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4d3psY3VkZ2NnbnJ1Z3RodWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MTMzMzksImV4cCI6MjA4Mzk4OTMzOX0.Gqm65hXI9DT6RMMTl_iVIr9z_pn7dyGLF5na5A95-RY");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!accessToken) throw new Error('Missing access token');
    // Use anon key + user JWT so RLS applies server-side.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, anon, {
        auth: {
            persistSession: false
        },
        global: {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    });
}
}),
"[project]/src/app/api/funnel/generate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/siteConfig.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = 'nodejs';
// Basic HTML sanitization (remove dangerous tags/attributes)
function sanitizeHtml(html) {
    // Remove script tags and event handlers
    let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/on\w+\s*=\s*["'][^"']*["']/gi, '').replace(/javascript:/gi, '').replace(/<iframe/gi, '<iframe sandbox="allow-same-origin allow-scripts"');
    return sanitized;
}
// Sanitize JS (remove eval, Function, etc.)
function sanitizeJs(js) {
    return js.replace(/\beval\s*\(/gi, '/* eval removed */').replace(/\bFunction\s*\(/gi, '/* Function removed */').replace(/\bnew\s+Function\s*\(/gi, '/* new Function removed */').replace(/document\.write/gi, '/* document.write removed */').replace(/innerHTML\s*=/gi, '/* innerHTML removed */');
}
async function POST(req) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Missing GEMINI_API_KEY'
    }, {
        status: 400
    });
    let body = null;
    try {
        body = await req.json();
    } catch  {
        body = null;
    }
    const leadId = String(body?.leadId || '');
    const styleKeyRaw = String(body?.styleKey || '');
    const briefRaw = body?.brief;
    const useFreeform = Boolean(body?.freeform) // Free-form HTML/CSS mode (Cursor-like)
    ;
    if (!leadId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'leadId required'
    }, {
        status: 400
    });
    const briefParsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteBriefSchema"].safeParse(briefRaw);
    if (!briefParsed.success) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Invalid brief'
    }, {
        status: 400
    });
    const styleParsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StyleKey"].safeParse(styleKeyRaw);
    if (!styleParsed.success) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Invalid styleKey'
    }, {
        status: 400
    });
    const brief = briefParsed.data;
    const styleKey = styleParsed.data;
    const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
    const modelName = (process.env.GEMINI_MODEL || 'models/gemini-2.5-flash').trim();
    const modelFallbacks = [
        modelName,
        'models/gemini-2.5-flash',
        'models/gemini-2.0-flash',
        'models/gemini-flash-latest',
        'models/gemini-2.5-pro'
    ];
    async function genJson(instruction, temperature) {
        let lastErr = null;
        for (const m of modelFallbacks){
            try {
                const model = genAI.getGenerativeModel({
                    model: m,
                    generationConfig: {
                        temperature,
                        responseMimeType: 'application/json'
                    }
                });
                const res = await model.generateContent(instruction);
                const text = res.response.text() || '{}';
                return {
                    json: JSON.parse(text),
                    raw: text,
                    model: m
                };
            } catch (e) {
                lastErr = e;
                const msg = String(e?.message || e);
                const notFound = msg.includes('404') || msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('not supported for generatecontent');
                if (!notFound) break;
            }
        }
        throw lastErr || new Error('Gemini failed');
    }
    // 1) content
    let content = null;
    try {
        const contentPrompt = 'Generate PREMIUM, compelling landing page content in Kazakh (KZ) that converts. Return JSON only.\n' + 'Shape: { "hero": { "badge": string (short, punchy), "headline": string (powerful, benefit-focused, 6-12 words), "subheadline": string (clear value prop, 15-25 words) }, ' + '"stats"?: { "title": string, "items": [{ "label": string, "value": string }] }, ' + '"features": { "title": string, "items": [{ "title": string (benefit-focused, 3-6 words), "description": string (clear, 10-20 words) }] }, ' + '"testimonials"?: { "title": string, "items": [{ "name": string, "role": string, "quote": string (authentic, specific, 15-30 words) }] }, ' + '"faq"?: { "title": string, "items": [{ "q": string (common concern), "a": string (helpful, 20-40 words) }] }, ' + '"pricing": { "title": string, "plans": [{ "name": string, "price": string, "description": string (clear value), "bullets": [string] (benefits, not features), "highlighted": boolean }] }, ' + '"finalCta"?: { "title": string (action-oriented), "subtitle": string (urgency/benefit) }, ' + '"footer": { "note": string } }.\n' + '\n' + 'CONTENT QUALITY RULES:\n' + '1. Headlines: Benefit-focused, specific, emotional. Avoid generic phrases. Use power words.\n' + '2. Subheadlines: Clear value proposition, address pain point, create desire.\n' + '3. Features: Focus on benefits, not features. Use "you" language. Be specific.\n' + '4. Testimonials: Authentic, specific results. Include numbers/metrics if possible.\n' + '5. FAQ: Address real objections, be helpful, build trust.\n' + '6. Pricing: Clear value, highlight best option, use social proof.\n' + '7. CTA: Action-oriented, create urgency, clear next step.\n' + '8. Tone: Match styleKey (minimalist_tech = professional/tech, bold_modern = energetic/bold, clean_corporate = trustworthy/calm).\n' + '\n' + `Brief: ${JSON.stringify(brief)}\n` + `Style: ${styleKey}\n` + 'Constraints: stats.items 2-4; features.items 3-6; testimonials.items 2-4; faq.items 3-6; pricing.plans 2-3; bullets 3-6.\n' + '\n' + 'OUTPUT: Return content that converts. Every word must earn its place. Be specific, benefit-focused, and compelling.\n';
        const out = await genJson(contentPrompt, 0.6);
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LandingContentSchema"].safeParse(out.json);
        if (parsed.success) content = parsed.data;
        else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Content schema validation failed',
                model: out.model,
                issues: parsed.error.issues,
                rawPreview: String(out.raw || '').slice(0, 800)
            }, {
                status: 500
            });
        }
    } catch  {
        content = null;
    }
    if (!content) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Content generation failed'
    }, {
        status: 500
    });
    // 1.5) brand tokens (individual design kit with iOS 26-style palette + dark/light mode)
    let brand = null;
    try {
        const iosColors = [
            {
                name: 'blue',
                light: '#007AFF',
                dark: '#0A84FF'
            },
            {
                name: 'green',
                light: '#34C759',
                dark: '#30D158'
            },
            {
                name: 'orange',
                light: '#FF9500',
                dark: '#FF9F0A'
            },
            {
                name: 'red',
                light: '#FF3B30',
                dark: '#FF453A'
            },
            {
                name: 'purple',
                light: '#AF52DE',
                dark: '#BF5AF2'
            },
            {
                name: 'pink',
                light: '#FF2D55',
                dark: '#FF375F'
            },
            {
                name: 'indigo',
                light: '#5856D6',
                dark: '#5E5CE6'
            },
            {
                name: 'teal',
                light: '#5AC8FA',
                dark: '#64D2FF'
            },
            {
                name: 'mint',
                light: '#00C7BE',
                dark: '#66EFE5'
            }
        ];
        const brandPrompt = 'Create a PREMIUM brand design system in iOS 26 style with perfect typography pairing. Return JSON only.\n' + 'Shape: { "brandName": string, "colors": { "light": { "bg": hex, "surface": hex, "text": hex, "muted": hex, "border": hex, "primary": hex, "primaryText": hex, "accent": hex, "secondary"?: hex }, ' + '"dark": { "bg": hex, "surface": hex, "text": hex, "muted": hex, "border": hex, "primary": hex, "primaryText": hex, "accent": hex, "secondary"?: hex } }, ' + '"typography": { "heading": "space"|"syne"|"manrope", "body": "inter"|"manrope" }, ' + '"radius": { "card": "xl"|"2xl"|"3xl", "button": "xl"|"2xl" } }.\n' + '\n' + 'TYPOGRAPHY RULES (CRITICAL):\n' + '- "space" = Space Grotesk (modern, tech, geometric) - best for tech/startup\n' + '- "syne" = Syne (bold, contemporary) - best for creative/bold brands\n' + '- "manrope" = Manrope (versatile, professional) - best for corporate/clean\n' + '- Body: "inter" = Inter (most readable, modern) - ALWAYS use for body text\n' + '- Body: "manrope" = Manrope (alternative, slightly rounded) - use if brand needs softer feel\n' + '- Choose pairing: heading should contrast with body (e.g., Space Grotesk + Inter, Syne + Inter, Manrope + Inter).\n' + '\n' + 'COLOR RULES:\n' + '- Use iOS 26 system colors for primary/accent: ' + iosColors.map((c)=>`${c.name} (light: ${c.light}, dark: ${c.dark})`).join(', ') + '.\n' + '- For light mode: bg should be #FFFFFF or #F2F2F7 (iOS light gray), surface #FFFFFF, text #000000 or #1C1C1E, muted #8E8E93.\n' + '- For dark mode: bg should be #000000 or #1C1C1E, surface #1C1C1E or #2C2C2E, text #FFFFFF, muted #98989D.\n' + '- Choose one iOS system color as primary (match business vibe: tech=blue/indigo, creative=purple/pink, food=orange/red, health=green/teal).\n' + '- Accent should be a complementary iOS system color or a variation of primary.\n' + '- Ensure primaryText has sufficient contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text).\n' + '\n' + `styleKey: ${styleKey}\n` + `business: ${brief.businessName}\n` + `industryHints: ${JSON.stringify(brief.services)}\n` + '\n' + 'OUTPUT: Return a premium design system that rivals top-tier brands. Typography pairing must be perfect.\n';
        const out = await genJson(brandPrompt, 0.3);
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandTokensSchema"].safeParse(out.json);
        if (parsed.success) brand = parsed.data;
    } catch  {
        brand = null;
    }
    // 1.6) brand assets (deterministic SVG bg; avoids external image APIs for MVP)
    function hashToInt(seed) {
        let h = 2166136261;
        for(let i = 0; i < seed.length; i++){
            h ^= seed.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return h >>> 0;
    }
    function mulberry32(a) {
        return function() {
            let t = a += 0x6d2b79f5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }
    function svgBg(seed, colors) {
        const r = mulberry32(hashToInt(seed));
        const w = 1400;
        const h = 800;
        const blobs = Array.from({
            length: 6
        }).map(()=>{
            const cx = Math.floor(r() * w);
            const cy = Math.floor(r() * h);
            const rx = Math.floor(120 + r() * 260);
            const ry = Math.floor(90 + r() * 220);
            const rot = Math.floor(r() * 180);
            const opacity = (0.08 + r() * 0.12).toFixed(3);
            const fill = r() > 0.5 ? colors.primary : colors.accent;
            return {
                cx,
                cy,
                rx,
                ry,
                rot,
                opacity,
                fill
            };
        });
        const svg = `<?xml version="1.0" encoding="UTF-8"?>` + `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">` + `<defs>` + `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` + `<stop offset="0" stop-color="${colors.bg}"/>` + `<stop offset="1" stop-color="${colors.surface}"/>` + `</linearGradient>` + `<filter id="blur" x="-20%" y="-20%" width="140%" height="140%">` + `<feGaussianBlur stdDeviation="30"/>` + `</filter>` + `</defs>` + `<rect width="100%" height="100%" fill="url(#g)"/>` + `<g filter="url(#blur)">` + blobs.map((b)=>`<ellipse cx="${b.cx}" cy="${b.cy}" rx="${b.rx}" ry="${b.ry}" transform="rotate(${b.rot} ${b.cx} ${b.cy})" fill="${b.fill}" fill-opacity="${b.opacity}"/>`).join('') + `</g>` + `</svg>`;
        return svg;
    }
    if (brand && !brand.assets?.heroBgSvg) {
        // Use light mode colors for SVG bg (will adapt via CSS in dark mode)
        const seed = `${brief.businessName}|${styleKey}|${brand.colors.light.primary}|${brand.colors.light.accent}`;
        brand = {
            ...brand,
            assets: {
                ...brand.assets || {},
                heroBgSvg: svgBg(seed, brand.colors.light)
            }
        };
    }
    // 2) freeform HTML/CSS/JS generation (Cursor-like) OR component-driven layout
    let freeform = null;
    let layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultLayoutForContent"])(content);
    if (useFreeform) {
        // Free-form HTML/CSS/JS generation
        try {
            const freeformPrompt = 'Generate a PREMIUM, world-class landing page HTML/CSS/JS that rivals top-tier SaaS products (Vercel, Linear, Stripe quality). Return JSON only with shape: { "html": string (complete HTML), "css"?: string (optional separate CSS), "js"?: string (optional JS, no eval/Function) }.\n' + '\n' + 'CRITICAL DESIGN REQUIREMENTS:\n' + '1. TYPOGRAPHY (MUST BE PERFECT):\n' + '   - Use premium Google Fonts via @import in CSS: Inter (body), Space Grotesk or Poppins (headings), or Playfair Display (elegant headings).\n' + '   - Typography scale: h1: 3.5-4.5rem (56-72px), h2: 2.5-3rem (40-48px), h3: 1.75-2rem (28-32px), body: 1rem (16px), small: 0.875rem (14px).\n' + '   - Line height: 1.2-1.3 for headings, 1.5-1.6 for body text.\n' + '   - Letter spacing: -0.02em to -0.03em for headings, 0 for body.\n' + '   - Font weights: 400 (body), 500-600 (medium), 700 (bold headings).\n' + '\n' + '2. VISUAL DESIGN (PREMIUM QUALITY):\n' + '   - iOS 26 style: vibrant system colors, glassmorphism (backdrop-filter: blur(20px)), smooth shadows.\n' + '   - Spacing system: 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96px).\n' + '   - Border radius: 12px (cards), 16px (buttons), 24px (large cards), 999px (pills).\n' + '   - Shadows: subtle, layered (0 1px 3px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)).\n' + '   - Gradients: subtle, modern (linear-gradient, radial-gradient).\n' + '   - Animations: smooth transitions (200-300ms ease-out), hover effects, scroll animations.\n' + '\n' + '3. LAYOUT & STRUCTURE:\n' + '   - Mobile-first responsive design (max-width: 1280px container, padding: 24px mobile, 48px desktop).\n' + '   - Grid system: CSS Grid for complex layouts, Flexbox for simple alignment.\n' + '   - White space: generous, breathing room between sections (64-96px vertical spacing).\n' + '   - Visual hierarchy: clear, strong contrast between sections.\n' + '\n' + '4. COLOR & THEME:\n' + '   - Use brand colors from Brand object if provided.\n' + '   - Dark/light mode via CSS variables (--color-bg, --color-text, --color-primary).\n' + '   - High contrast ratios (WCAG AA minimum).\n' + '   - Accent colors: vibrant, saturated (iOS 26 system colors).\n' + '\n' + '5. INTERACTIVE ELEMENTS:\n' + '   - Buttons: large (48px height), rounded (16px), with hover/active states.\n' + '   - Cards: elevated, with subtle shadows, hover lift effect.\n' + '   - Forms: clean inputs, proper focus states, smooth transitions.\n' + '\n' + '6. CODE QUALITY:\n' + '   - HTML: semantic, accessible (nav, main, section, article, footer).\n' + '   - CSS: organized, use CSS variables for theming, no inline styles in HTML (use <style> tag).\n' + '   - JS: vanilla JS only, smooth scroll, form handling, no dangerous functions.\n' + '   - No external dependencies (no CDN, no frameworks).\n' + '\n' + '7. CONTENT INTEGRATION:\n' + '   - Use provided Content object for all text.\n' + '   - Use Brand colors/typography if provided.\n' + '   - Match Style key aesthetic (minimalist_tech = clean/tech, bold_modern = vibrant/bold, clean_corporate = professional/calm).\n' + '\n' + `Brief: ${JSON.stringify(brief)}\n` + `Style: ${styleKey}\n` + `Content: ${JSON.stringify(content)}\n` + `Brand: ${brand ? JSON.stringify(brand) : 'null'}\n` + '\n' + 'OUTPUT: Return a complete, production-ready HTML page that looks like it was designed by a top-tier design agency. Every pixel must be perfect.\n';
            const out = await genJson(freeformPrompt, 0.7);
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FreeformHtmlSchema"].safeParse(out.json);
            if (parsed.success) {
                freeform = {
                    html: sanitizeHtml(parsed.data.html),
                    css: parsed.data.css ? sanitizeHtml(parsed.data.css) : undefined,
                    js: parsed.data.js ? sanitizeJs(parsed.data.js) : undefined
                };
            }
        } catch  {
            // Fallback to component-driven
            freeform = null;
        }
    } else {
        // Component-driven layout
        try {
            const layoutPrompt = 'Create a PREMIUM section layout plan that maximizes visual impact and conversion. Return JSON only with shape { "sections": [{ "type": "hero"|"stats"|"features"|"pricing"|"testimonials"|"faq"|"lead"|"footer", "variant"?: string, "anchor"?: string }] }.\n' + '\n' + 'LAYOUT RULES:\n' + '1. Structure: hero first, footer last; use anchors for features/pricing/faq/lead.\n' + '2. Visual Flow: Create a narrative journey (hero → stats → features → pricing → testimonials → faq → lead).\n' + '3. Variant Selection: Choose at least 3 non-default variants to create visual diversity and interest.\n' + '\n' + 'STYLE-SPECIFIC VARIANT PREFERENCES:\n' + '- clean_corporate: hero centered (trustworthy), pricing table (comparison-focused), faq cards (scannable), testimonials quotes (elegant).\n' + '- bold_modern: hero split (dynamic), features zigzag (energetic), testimonials cards (vibrant), pricing cards (bold), faq accordion (interactive).\n' + '- minimalist_tech: hero minimal or centered (clean), features grid (organized), pricing cards (simple), testimonials quotes (subtle), faq accordion (minimal).\n' + '\n' + 'AVAILABLE VARIANTS:\n' + '- hero: split (image left, text right) | centered (text center, balanced) | minimal (ultra-clean, text-focused)\n' + '- features: grid (3-column cards) | zigzag (alternating left/right) | list (vertical, compact)\n' + '- pricing: cards (side-by-side plans) | table (comparison table) | compare (feature comparison)\n' + '- testimonials: quotes (large quote style) | cards (card-based) | marquee (carousel)\n' + '- faq: accordion (expandable) | cards (grid of Q&A cards)\n' + '- lead: form (full form) | cta (simple CTA button)\n' + '\n' + `styleKey: ${styleKey}\n` + `brand: ${brand ? JSON.stringify(brand) : 'null'}\n` + `hasStats: ${Boolean(content.stats)}; hasTestimonials: ${Boolean(content.testimonials)}; hasFaq: ${Boolean(content.faq)}\n` + '\n' + 'OUTPUT: Return a layout that creates visual interest, guides the eye, and maximizes conversion. Every section variant should serve a purpose.\n';
            const out = await genJson(layoutPrompt, 0.2);
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteLayoutSchema"].safeParse(out.json);
            if (parsed.success) layout = parsed.data;
        } catch  {
        // keep default
        }
    }
    const config = {
        version: 1,
        styleKey,
        tokens: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tokensForStyle"])(styleKey),
        brand,
        brief,
        content,
        layout: freeform ? undefined : layout,
        freeform: freeform || undefined
    };
    const validated = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SiteConfigSchema"].safeParse(config);
    if (!validated.success) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Config validation failed'
    }, {
        status: 500
    });
    let supabase;
    try {
        supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseService"])();
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server misconfigured: set SUPABASE_SERVICE_ROLE_KEY',
            details: String(e?.message || e)
        }, {
            status: 500
        });
    }
    const insert = await supabase.from('sites').insert({
        brief,
        config: validated.data,
        style_key: styleKey
    }).select('id').single();
    if (insert.error) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: insert.error.message
    }, {
        status: 500
    });
    const siteId = insert.data.id;
    // link lead -> site
    await supabase.from('leads').update({
        site_id: siteId,
        style_key: styleKey
    }).eq('id', leadId);
    // kick screenshots (best-effort)
    const origin = req.headers.get('origin') || '';
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : origin) || '';
    if (baseUrl) {
        fetch(`${baseUrl}/api/screenshot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                siteId,
                view: 'desktop',
                kind: 'legacy_site'
            })
        }).catch(()=>{});
        fetch(`${baseUrl}/api/screenshot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                siteId,
                view: 'mobile',
                kind: 'legacy_site'
            })
        }).catch(()=>{});
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        siteId,
        siteUrl: `/site/${siteId}`
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8526bbe8._.js.map