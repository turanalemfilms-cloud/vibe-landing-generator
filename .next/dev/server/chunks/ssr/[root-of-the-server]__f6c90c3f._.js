module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
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
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'assistant',
            content: 'Сәлем! Мен сізге лендинг жасап берем. Брифті 1-2 минутта толтырайық — сұрақтарға жауап беріңіз.'
        }
    ]);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        step: 'quiz',
        brief: {
            qIdx: 0,
            answers: {}
        }
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        phone: '',
        telegram: ''
    });
    const styleChoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (state.step !== 'style') return [];
        return Object.entries(STYLE_LABELS).map(([key, label])=>({
                key,
                label,
                description: key === 'minimalist_tech' ? 'Қараңғы, минимал, glassy' : key === 'bold_modern' ? 'Контраст, батыл accent' : 'Ақ/жеңіл, корпоратив стиль'
            }));
    }, [
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
        const preset = THEME_PRESETS.find((t)=>t.id === themeId);
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
                    v2: useV2
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-semibold tracking-tight",
                                    children: "Vibe Coding — AI Landing Page Generator"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-white/70",
                                    children: "Чат арқылы бриф жинап, стиль таңдап, live link береміз."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "hidden sm:inline-flex rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm hover:bg-white/15",
                            href: "/site/demo",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Demo route"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[55vh] overflow-auto space-y-3 pr-1",
                            children: messages.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: m.role === 'user' ? 'ml-auto w-fit max-w-[85%] rounded-2xl bg-sky-400 text-slate-950 px-4 py-2' : 'mr-auto w-fit max-w-[85%] rounded-2xl bg-white/10 border border-white/10 px-4 py-2',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm whitespace-pre-wrap",
                                        children: m.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this),
                        state.siteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 rounded-2xl border border-white/10 bg-white/5 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-col sm:flex-row sm:items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "truncate text-sm text-sky-300 hover:underline",
                                            href: state.siteUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''}${state.siteUrl}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "w-fit rounded-xl bg-sky-400 text-slate-950 px-4 py-2 text-sm font-semibold hover:opacity-90",
                                            href: state.siteUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Open"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-white/60",
                                    children: "Егер скриншот бірден шықпаса — 10-20 секунд күтіңіз (автоматты жасалады)."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'quiz' && currentQ ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: [
                                        "Сұрақ ",
                                        Math.min(qIdx + 1, QUIZ.length),
                                        "/",
                                        QUIZ.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-lg font-semibold",
                                    children: currentQ.question
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                currentQ.type === 'single' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid sm:grid-cols-2 gap-2",
                                    children: currentQ.options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 405,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: textInput,
                                            onChange: (e)=>setTextInput(e.target.value),
                                            placeholder: currentQ.placeholder || 'Жазыңыз…',
                                            className: "flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-4 focus:ring-sky-400/20",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rounded-2xl bg-sky-400 text-slate-950 px-5 font-semibold hover:opacity-90 disabled:opacity-60",
                                            disabled: isLoading,
                                            children: "OK"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'collect_contact' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Контакт"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveContact,
                                    className: "rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60",
                                    disabled: isLoading || !contact.fullName.trim() || !contact.phone.trim(),
                                    children: "Келесі"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 449,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'collect_telegram' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Telegram"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveTelegram,
                                    className: "rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60",
                                    disabled: isLoading || !contact.telegram.trim(),
                                    children: "Келесі"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, this) : null,
                        state.step === 'style' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/70",
                                    children: "Стиль таңда:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-3 gap-2",
                                    children: styleChoices.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>pickStyle(s.key),
                                            className: "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10",
                                            disabled: isLoading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/60 mt-1",
                                                    children: s.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, s.key, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "freeform-toggle",
                                            className: "text-sm text-white/70 cursor-pointer",
                                            children: "Free-form режим (Cursor-ға ұқсас) — AI толық HTML/CSS/JS жазады"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this),
                        state.step === 'feedback' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-col sm:flex-row gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>feedback(true),
                                    className: "rounded-2xl bg-sky-400 text-slate-950 px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60",
                                    disabled: isLoading,
                                    children: "Иә, ұнады"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>feedback(false),
                                    className: "rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 disabled:opacity-60",
                                    disabled: isLoading,
                                    children: "Жоқ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 527,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-xs text-white/60",
                            children: [
                                "Step: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/80",
                                    children: state.step
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 339,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6c90c3f._.js.map