(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/themePresets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Theme Presets - High-end color vibes for landing pages
 * Each preset includes gradients, glows, and mesh backgrounds
 */ __turbopack_context__.s([
    "THEME_PRESETS",
    ()=>THEME_PRESETS,
    "getThemePreset",
    ()=>getThemePreset
]);
const THEME_PRESETS = [
    {
        id: 'cosmic_void',
        name: 'Cosmic Void',
        nameKZ: 'Ғарыштық Бос',
        primary: 'from-violet-600 to-fuchsia-500',
        glow: 'shadow-fuchsia-500/20',
        bgMesh: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black',
        description: 'Purple/Pink cosmic aesthetic'
    },
    {
        id: 'sunset_blaze',
        name: 'Sunset Blaze',
        nameKZ: 'Күнбатыс Жалыны',
        primary: 'from-orange-500 via-amber-500 to-yellow-400',
        glow: 'shadow-orange-500/20',
        bgMesh: 'bg-gradient-to-b from-orange-900/20 via-black to-black',
        description: 'Warm orange/peach sunset vibes'
    },
    {
        id: 'oceanic_depth',
        name: 'Oceanic Depth',
        nameKZ: 'Мұхит Тереңдігі',
        primary: 'from-cyan-500 to-blue-600',
        glow: 'shadow-cyan-500/20',
        bgMesh: 'bg-gradient-to-b from-blue-900/20 via-black to-black',
        description: 'Cool blue/cyan oceanic feel'
    },
    {
        id: 'neo_mint',
        name: 'Neo-Mint',
        nameKZ: 'Нео-Жасыл',
        primary: 'from-emerald-400 to-cyan-400',
        glow: 'shadow-emerald-500/20',
        bgMesh: 'bg-gradient-to-b from-emerald-900/20 via-black to-black',
        description: 'Fresh green/tech aesthetic'
    },
    {
        id: 'obsidian_luxury',
        name: 'Obsidian Luxury',
        nameKZ: 'Обсидиан Сыпайылығы',
        primary: 'from-white via-slate-200 to-slate-400',
        glow: 'shadow-white/10',
        bgMesh: 'bg-gradient-to-b from-slate-800/20 via-black to-black',
        description: 'Monochrome luxury elegance'
    }
];
function getThemePreset(id) {
    return THEME_PRESETS.find((preset)=>preset.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSelector",
    ()=>ThemeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/themePresets.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function ThemeSelector({ selectedThemeId, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-3 gap-4 mt-4",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_PRESETS"].map((preset)=>{
            const isSelected = selectedThemeId === preset.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>onSelect(preset.id),
                className: `relative rounded-xl aspect-video border border-white/10 overflow-hidden group ${isSelected ? `${preset.glow} shadow-lg` : ''}`,
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.98
                },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 bg-gradient-to-br ${preset.primary} ${isSelected ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'} transition-opacity duration-300`,
                        children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `absolute inset-0 bg-gradient-to-br ${preset.primary} opacity-30`,
                            animate: {
                                opacity: [
                                    0.3,
                                    0.5,
                                    0.3
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ThemeSelector.tsx",
                            lineNumber: 36,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeSelector.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-xl border-2 border-white/30",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        style: {
                            boxShadow: `0 0 20px ${preset.glow.replace('shadow-', '').replace('/20', '')}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeSelector.tsx",
                        lineNumber: 46,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex flex-col items-center justify-center p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-semibold text-sm md:text-base text-center",
                                children: preset.nameKZ
                            }, void 0, false, {
                                fileName: "[project]/src/components/ThemeSelector.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17
                                },
                                className: "mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-6 h-6 text-white",
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ThemeSelector.tsx",
                                    lineNumber: 68,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ThemeSelector.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ThemeSelector.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                ]
            }, preset.id, true, {
                fileName: "[project]/src/components/ThemeSelector.tsx",
                lineNumber: 18,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeSelector.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ThemeSelector;
var _c;
__turbopack_context__.k.register(_c, "ThemeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/themePresets.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const STYLE_LABELS = {
    minimalist_tech: 'Minimalist Tech',
    bold_modern: 'Bold Modern',
    clean_corporate: 'Clean Corporate'
};
const QUIZ = [
    {
        id: 'businessName',
        type: 'text',
        question: 'Бизнес атауы қандай?',
        placeholder: 'Мыс: Coffee shop'
    },
    {
        id: 'targetAudience',
        type: 'single',
        question: 'Кімге сатасыз?',
        options: [
            {
                label: 'Жеке клиенттер',
                value: 'Жеке клиенттер'
            },
            {
                label: 'Кәсіпкерлер/бизнес',
                value: 'Кәсіпкерлер/бизнес'
            },
            {
                label: 'Екеуі де',
                value: 'Екеуі де'
            }
        ]
    },
    {
        id: 'services',
        type: 'text',
        question: 'Не сатасыз? (қысқа тізім, үтірмен)',
        placeholder: 'Мыс: кофе, десерт, жеткізу'
    },
    {
        id: 'usp',
        type: 'single',
        question: 'Негізгі артықшылық қайсы?',
        options: [
            {
                label: 'Жылдам',
                value: 'Жылдам'
            },
            {
                label: 'Сапалы',
                value: 'Сапалы'
            },
            {
                label: 'Арзан',
                value: 'Арзан'
            },
            {
                label: 'Премиум',
                value: 'Премиум'
            }
        ]
    },
    {
        id: 'cta',
        type: 'single',
        question: 'CTA қандай болсын?',
        options: [
            {
                label: 'Өтінім қалдыру',
                value: 'Өтінім қалдыру'
            },
            {
                label: 'WhatsApp-қа жазу',
                value: 'WhatsApp-қа жазу'
            },
            {
                label: 'Қоңырауға жазылу',
                value: 'Қоңырауға жазылу'
            }
        ]
    }
];
function HomePage() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'assistant',
            content: 'Сәлем! Мен сізге лендинг жасап берем. Брифті 1-2 минутта толтырайық — сұрақтарға жауап беріңіз.'
        }
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        step: 'quiz',
        brief: {
            qIdx: 0,
            answers: {}
        }
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        phone: '',
        telegram: ''
    });
    const styleChoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[styleChoices]": ()=>{
            if (state.step !== 'style') return [];
            return Object.entries(STYLE_LABELS).map({
                "HomePage.useMemo[styleChoices]": ([key, label])=>({
                        key,
                        label,
                        description: key === 'minimalist_tech' ? 'Қараңғы, минимал, glassy' : key === 'bold_modern' ? 'Контраст, батыл accent' : 'Ақ/жеңіл, корпоратив стиль'
                    })
            }["HomePage.useMemo[styleChoices]"]);
        }
    }["HomePage.useMemo[styleChoices]"], [
        state.step
    ]);
    const quizState = state.step === 'quiz' ? state.brief : null;
    const qIdx = quizState?.qIdx ?? 0;
    const answers = quizState?.answers ?? {};
    const currentQ = QUIZ[Math.min(qIdx, QUIZ.length - 1)];
    function advanceQuiz(answer) {
        const nextAnswers = {
            ...answers,
            [currentQ.id]: answer
        };
        const nextIdx = qIdx + 1;
        setState((s)=>({
                ...s,
                step: nextIdx >= QUIZ.length ? 'theme_selection' : 'quiz',
                brief: {
                    qIdx: nextIdx,
                    answers: nextAnswers
                }
            }));
        if (nextIdx >= QUIZ.length) {
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: 'Сайтыңыздың атмосферасын таңдаңыз'
                    }
                ]);
        }
    }
    function handleThemeSelect(themeId) {
        const preset = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_PRESETS"].find((t)=>t.id === themeId);
        setState((s)=>({
                ...s,
                themeId,
                step: 'collect_contact'
            }));
        setMessages((m)=>[
                ...m,
                {
                    role: 'assistant',
                    content: `Керемет таңдау! ${preset?.nameKZ || 'Стиль'} стилі қолданылады.`
                },
                {
                    role: 'assistant',
                    content: 'Енді байланыс ақпаратыңызды енгізіңіз.'
                }
            ]);
    }
    async function createLeadIfNeeded(nextStyleKey) {
        if (state.leadId) return state.leadId;
        const briefAnswers = state.brief?.answers || {};
        const brief = {
            businessName: String(briefAnswers.businessName || '').trim() || 'Untitled',
            targetAudience: String(briefAnswers.targetAudience || '').trim() || 'Клиенттер',
            services: String(briefAnswers.services || '').split(',').map((s)=>s.trim()).filter(Boolean).slice(0, 6),
            uniqueSellingPoints: [
                String(briefAnswers.usp || 'Нақты нәтиже')
            ],
            cta: {
                label: String(briefAnswers.cta || 'Өтінім қалдыру'),
                href: '#lead'
            },
            language: 'KZ'
        };
        const res = await fetch('/api/funnel/lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brief,
                styleKey: nextStyleKey || null
            })
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || 'Lead create failed');
        setState((s)=>({
                ...s,
                leadId: json.leadId
            }));
        return json.leadId;
    }
    async function saveContact() {
        setIsLoading(true);
        try {
            const leadId = await createLeadIfNeeded(state.styleKey);
            const res = await fetch('/api/funnel/lead', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    leadId,
                    full_name: contact.fullName.trim(),
                    phone: contact.phone.trim()
                })
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json?.error || 'Save failed');
            setState((s)=>({
                    ...s,
                    step: 'collect_telegram'
                }));
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: 'Telegram username/ID жазыңыз (мыс: @username).'
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    }
    async function saveTelegram() {
        setIsLoading(true);
        try {
            const leadId = await createLeadIfNeeded(state.styleKey);
            const res = await fetch('/api/funnel/lead', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    leadId,
                    telegram: contact.telegram.trim()
                })
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json?.error || 'Save failed');
            setState((s)=>({
                    ...s,
                    step: 'style'
                }));
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: 'Керемет! Енді стиль таңдаңыз.'
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    }
    async function pickStyle(key) {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const leadId = await createLeadIfNeeded(key);
            setState((s)=>({
                    ...s,
                    styleKey: key,
                    step: 'generating'
                }));
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: 'Генерация жасап жатырмын… (30–60с)'
                    }
                ]);
            const briefAnswers = state.brief?.answers || {};
            const brief = {
                businessName: String(briefAnswers.businessName || '').trim() || 'Untitled',
                targetAudience: String(briefAnswers.targetAudience || '').trim() || 'Клиенттер',
                services: String(briefAnswers.services || '').split(',').map((s)=>s.trim()).filter(Boolean).slice(0, 6),
                uniqueSellingPoints: [
                    String(briefAnswers.usp || 'Нақты нәтиже')
                ],
                cta: {
                    label: String(briefAnswers.cta || 'Өтінім қалдыру'),
                    href: '#lead'
                },
                language: 'KZ'
            };
            // Check if user wants free-form mode (Cursor-like)
            const useFreeform = state.freeform || false;
            // Use v2 architecture by default (unless freeform is selected)
            const useV2 = !useFreeform;
            const res = await fetch('/api/funnel/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    leadId,
                    styleKey: key,
                    brief,
                    freeform: useFreeform,
                    v2: useV2,
                    themeId: state.themeId
                })
            });
            if (!res.ok) {
                const errorText = await res.text();
                let errorJson;
                try {
                    errorJson = JSON.parse(errorText);
                } catch  {
                    throw new Error(errorText || 'Generate failed');
                }
                throw new Error(errorJson?.error || 'Generate failed');
            }
            const json = await res.json();
            if (!json || !json.siteId) throw new Error('Invalid response from server');
            const fullUrl = `${window.location.origin}${json.siteUrl}`;
            setState((s)=>({
                    ...s,
                    step: 'screenshots',
                    siteUrl: json.siteUrl
                }));
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: `Дайын preview: ${fullUrl}\nСкриншот жасап жатырмын…`
                    }
                ]);
            // After a short delay, ask for feedback
            setTimeout(()=>{
                setState((s)=>({
                        ...s,
                        step: 'feedback'
                    }));
                setMessages((m)=>[
                        ...m,
                        {
                            role: 'assistant',
                            content: 'Дизайн ұнады ма?'
                        }
                    ]);
            }, 3500);
        } catch (e) {
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: `Қате:\n${String(e?.message || e)}`
                    }
                ]);
            setState((s)=>({
                    ...s,
                    step: 'style'
                }));
        } finally{
            setIsLoading(false);
        }
    }
    async function sendTelegram(text) {
        await fetch('/api/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        });
    }
    async function feedback(liked) {
        setIsLoading(true);
        try {
            const leadId = await createLeadIfNeeded(state.styleKey);
            await fetch('/api/funnel/lead', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    leadId,
                    liked
                })
            });
            if (!liked) {
                setMessages((m)=>[
                        ...m,
                        {
                            role: 'assistant',
                            content: 'Ок. Қай жерін өзгерткіміз келеді? (қысқаша жазыңыз)'
                        }
                    ]);
                setState((s)=>({
                        ...s,
                        step: 'quiz'
                    }));
                return;
            }
            setMessages((m)=>[
                    ...m,
                    {
                        role: 'assistant',
                        content: 'Керемет! Енді Kaspi Pay арқылы төлем жасаңыз.\n1) Kaspi Pay/QR: (келесі қадамда QR қоямыз)\n2) Төлем жасаған соң чек/скриншот жүктеңіз немесе “төледім” деп жазыңыз.'
                    }
                ]);
            setState((s)=>({
                    ...s,
                    step: 'payment',
                    liked: true
                }));
            // notify you
            const briefAnswers = state.brief?.answers || {};
            const site = state.siteUrl ? `${window.location.origin}${state.siteUrl}` : '';
            sendTelegram(`✅ Жаңа лид (ұнады)\nАты: ${contact.fullName}\nТел: ${contact.phone}\nTG: ${contact.telegram}\nБизнес: ${briefAnswers.businessName}\nPreview: ${site}`).catch(()=>{});
        } finally{
            setIsLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-semibold tracking-tight",
                                    children: "Vibe Coding — AI Landing Page Generator"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-white/70",
                                    children: "Чат арқылы бриф жинап, стиль таңдап, live link береміз."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden sm:inline-flex rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm hover:bg-white/15",
                            href: "/site/demo",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Demo route"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[55vh] overflow-auto space-y-3 pr-1",
                            children: messages.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: m.role === 'user' ? 'ml-auto w-fit max-w-[85%] rounded-2xl bg-sky-400 text-slate-950 px-4 py-2' : 'mr-auto w-fit max-w-[85%] rounded-2xl bg-white/10 border border-white/10 px-4 py-2',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm whitespace-pre-wrap",
                                        children: m.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        state.siteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 rounded-2xl border border-white/10 bg-white/5 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-col sm:flex-row sm:items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "truncate text-sm text-sky-300 hover:underline",
                                            href: state.siteUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: `${("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"}${state.siteUrl}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "w-fit rounded-xl bg-sky-400 text-slate-950 px-4 py-2 text-sm font-semibold hover:opacity-90",
                                            href: state.siteUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Open"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-white/60",
                                    children: "Егер скриншот бірден шықпаса — 10-20 секунд күтіңіз (автоматты жасалады)."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'quiz' && currentQ ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: [
                                        "Сұрақ ",
                                        Math.min(qIdx + 1, QUIZ.length),
                                        "/",
                                        QUIZ.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-lg font-semibold",
                                    children: currentQ.question
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this),
                                currentQ.type === 'single' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid sm:grid-cols-2 gap-2",
                                    children: currentQ.options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setMessages((m)=>[
                                                        ...m,
                                                        {
                                                            role: 'user',
                                                            content: o.label
                                                        }
                                                    ]);
                                                advanceQuiz(o.value);
                                            },
                                            className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10",
                                            disabled: isLoading,
                                            children: o.label
                                        }, o.value, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "mt-3 flex gap-2",
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        const v = textInput.trim();
                                        if (!v) return;
                                        setMessages((m)=>[
                                                ...m,
                                                {
                                                    role: 'user',
                                                    content: v
                                                }
                                            ]);
                                        setTextInput('');
                                        advanceQuiz(v);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: textInput,
                                            onChange: (e)=>setTextInput(e.target.value),
                                            placeholder: currentQ.placeholder || 'Жазыңыз…',
                                            className: "flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-4 focus:ring-sky-400/20",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rounded-2xl bg-sky-400 text-slate-950 px-5 font-semibold hover:opacity-90 disabled:opacity-60",
                                            disabled: isLoading,
                                            children: "OK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'theme_selection' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSelector"], {
                                selectedThemeId: state.themeId,
                                onSelect: handleThemeSelect
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 452,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'collect_contact' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Контакт"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: contact.fullName,
                                    onChange: (e)=>setContact((c)=>({
                                                ...c,
                                                fullName: e.target.value
                                            })),
                                    placeholder: "Аты-жөні",
                                    className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: contact.phone,
                                    onChange: (e)=>setContact((c)=>({
                                                ...c,
                                                phone: e.target.value
                                            })),
                                    placeholder: "Телефон (WhatsApp)",
                                    className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveContact,
                                    className: "rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60",
                                    disabled: isLoading || !contact.fullName.trim() || !contact.phone.trim(),
                                    children: "Келесі"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'collect_telegram' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Telegram"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: contact.telegram,
                                    onChange: (e)=>setContact((c)=>({
                                                ...c,
                                                telegram: e.target.value
                                            })),
                                    placeholder: "@username немесе id",
                                    className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveTelegram,
                                    className: "rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60",
                                    disabled: isLoading || !contact.telegram.trim(),
                                    children: "Келесі"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 487,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'style' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Стиль таңда:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-3 gap-2",
                                    children: styleChoices.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>pickStyle(s.key),
                                            className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10",
                                            disabled: isLoading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/60 mt-1",
                                                    children: s.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, s.key, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "freeform-toggle",
                                            checked: state.freeform || false,
                                            onChange: (e)=>setState((s)=>({
                                                        ...s,
                                                        freeform: e.target.checked
                                                    })),
                                            className: "w-4 h-4 rounded border-white/20 bg-white/5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 523,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "freeform-toggle",
                                            className: "text-sm text-white/70 cursor-pointer",
                                            children: "Free-form режим (Cursor-ға ұқсас) — AI толық HTML/CSS/JS жазады"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this),
                        state.step === 'feedback' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col sm:flex-row gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>feedback(true),
                                    className: "rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60",
                                    disabled: isLoading,
                                    children: "Иә, ұнады"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>feedback(false),
                                    className: "rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 disabled:opacity-60",
                                    disabled: isLoading,
                                    children: "Жоқ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-xs text-white/60",
                            children: [
                                "Step: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/80",
                                    children: state.step
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 557,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 556,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 341,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_s(HomePage, "qXXCSAJsbUKz9SrYTycJ0F57220=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cf0279d7._.js.map