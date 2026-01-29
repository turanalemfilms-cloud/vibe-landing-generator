#!/usr/bin/env node
/**
 * Vibe Landing Bot — Telegram бот для автоворонки
 * /start қажетсіз — deep link арқылы автоматты бастайды
 */

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '8002482526:AAFMMXc_sUPGMoxlf8iaEcc8G3JSkHZWKpc'; // @Turanlandingbot
const OWNER_ID = 364034938; // Тұран
const WEBAPP_URL = 'http://localhost:3000'; // Next.js app

const bot = new TelegramBot(TOKEN, { polling: true });

// Сессия сақтау (in-memory, production-да Redis/DB қолдану керек)
const sessions = new Map();

// Quiz сұрақтары
const QUIZ = [
  {
    id: 'businessName',
    text: '✈️ Лендинг парақшасы — ол бір қаланың аэропорты сияқты.\n\nБизнесіңіздің аэропортын 1 сағат ішінде қалай тартымды болатынын (дизайнын) тегін көріңіз! Ұнап жатса ақшасын төлеп толық функционалды “аэропортыңызды” салып береміз. Ұнамаса ештеңе жоқ, екі жаққа кете береміз.\n\nДайын болсаңыз, бастайық!\n\n🏢 Бизнесіңіздің атауы қандай?',
    type: 'text'
  },
  {
    id: 'targetAudience', 
    text: '🎯 Кімге сатасыз?',
    type: 'buttons',
    options: [
      { text: '👤 Жеке клиенттер', value: 'Жеке клиенттер' },
      { text: '🏢 Бизнес/B2B', value: 'Кәсіпкерлер/бизнес' },
      { text: '👥 Екеуі де', value: 'Екеуі де' }
    ]
  },
  {
    id: 'services',
    text: '📦 Не сатасыз? (қысқа тізім, үтірмен)\n\nМысалы: кофе, десерт, жеткізу',
    type: 'text'
  },
  {
    id: 'usp',
    text: '⭐ Негізгі артықшылығыңыз қандай?',
    type: 'buttons',
    options: [
      { text: '⚡ Жылдам', value: 'Жылдам' },
      { text: '💎 Сапалы', value: 'Сапалы' },
      { text: '💰 Арзан', value: 'Арзан' },
      { text: '👑 Премиум', value: 'Премиум' }
    ]
  },
  {
    id: 'cta',
    text: '🎯 Клиенттер не істеуі керек?',
    type: 'buttons',
    options: [
      { text: '📝 Өтінім қалдыру', value: 'Өтінім қалдыру' },
      { text: '💬 WhatsApp-қа жазу', value: 'WhatsApp-қа жазу' },
      { text: '📞 Қоңырауға жазылу', value: 'Қоңырауға жазылу' }
    ]
  },
  {
    id: 'phone',
    text: '📱 Телефон нөміріңіз? (WhatsApp)',
    type: 'text'
  },
  {
    id: 'telegram',
    text: '✈️ Telegram username немесе ID?\n\nМысалы: @username',
    type: 'text'
  }
];

// Стильдер
const STYLES = [
  { id: 'minimalist_tech', text: '🖤 Minimalist Tech', desc: 'Қараңғы, минимал, tech' },
  { id: 'bold_modern', text: '🔥 Bold Modern', desc: 'Контраст, батыл, энергия' },
  { id: 'clean_corporate', text: '💼 Clean Corporate', desc: 'Ақ, корпоратив, сенімді' }
];

function getSession(chatId) {
  if (!sessions.has(chatId)) {
    sessions.set(chatId, {
      step: 0,
      answers: {},
      style: null,
      waitingForStyle: false
    });
  }
  return sessions.get(chatId);
}

// Кез келген хабарламаға жауап беру (не /start, не кәдімгі)
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim() || '';
  
  // /start немесе бірінші хабарлама
  if (text === '/start' || !sessions.has(chatId)) {
    startQuiz(chatId);
    return;
  }
  
  const session = getSession(chatId);
  
  // Стиль күтіп тұрса, callback-тан келеді
  if (session.waitingForStyle) {
    await bot.sendMessage(chatId, '👆 Жоғарыдағы батырмалардан стиль таңдаңыз');
    return;
  }
  
  // Quiz жалғасы
  handleQuizAnswer(chatId, text);
});

// Callback query (батырмалар)
bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  
  await bot.answerCallbackQuery(query.id);
  
  const session = getSession(chatId);
  
  // Стиль таңдау
  if (data.startsWith('style_')) {
    const styleId = data.replace('style_', '');
    session.style = styleId;
    session.waitingForStyle = false;
    
    await bot.editMessageText(
      `✅ Стиль таңдалды: ${STYLES.find(s => s.id === styleId)?.text}\n\n⏳ Бриф қабылданды!`,
      { chat_id: chatId, message_id: query.message.message_id }
    );
    
    generateDemo(chatId, session);
    return;
  }
  
  // Quiz батырмасы
  handleQuizAnswer(chatId, data);
});

async function startQuiz(chatId) {
  const session = getSession(chatId);
  session.step = 0;
  session.answers = {};
  session.style = null;
  session.waitingForStyle = false;
  
  sendQuizQuestion(chatId, 0);
}

async function sendQuizQuestion(chatId, step) {
  const q = QUIZ[step];
  if (!q) return;
  
  const opts = { parse_mode: 'HTML' };
  
  if (q.type === 'buttons') {
    opts.reply_markup = {
      inline_keyboard: q.options.map(o => [{ text: o.text, callback_data: o.value }])
    };
  }
  
  await bot.sendMessage(chatId, q.text, opts);
}

async function handleQuizAnswer(chatId, answer) {
  const session = getSession(chatId);
  const currentQ = QUIZ[session.step];
  
  if (!currentQ) return;
  
  // Жауапты сақтау
  session.answers[currentQ.id] = answer;
  session.step++;
  
  // Келесі сұрақ немесе стиль таңдау
  if (session.step < QUIZ.length) {
    sendQuizQuestion(chatId, session.step);
  } else {
    // Quiz аяқталды — стиль таңдау
    session.waitingForStyle = true;
    
    await bot.sendMessage(chatId, '🎨 Керемет! Енді дизайн стилін таңдаңыз:', {
      reply_markup: {
        inline_keyboard: STYLES.map(s => [{
          text: `${s.text} — ${s.desc}`,
          callback_data: `style_${s.id}`
        }])
      }
    });
  }
}

async function generateDemo(chatId, session) {
  const answers = session.answers;
  
  // Тұранға хабарлау
  const orderText = `🆕 <b>ЖАҢА ЗАКАЗ!</b>

🏢 <b>Бизнес:</b> ${answers.businessName}
🎯 <b>Аудитория:</b> ${answers.targetAudience}
📦 <b>Услугалар:</b> ${answers.services}
⭐ <b>USP:</b> ${answers.usp}
🎯 <b>CTA:</b> ${answers.cta}

📱 <b>Телефон:</b> ${answers.phone}
✈️ <b>Telegram:</b> ${answers.telegram}

🎨 <b>Стиль:</b> ${STYLES.find(s => s.id === session.style)?.text}

⏳ Клиент күтіп отыр...`;

  await bot.sendMessage(OWNER_ID, orderText, { parse_mode: 'HTML' });

  // Клиентке хабарлау
  await bot.sendMessage(chatId, `✅ <b>Бриф қабылданды!</b>

1 сағат ішінде Тұран сізге сайтыңыздың демо дизайнын жасап, осы жерге жіберетін болады.

Күтіңіз... ⏳`, { parse_mode: 'HTML' });
}

// Feedback callback
bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  
  if (data === 'feedback_yes') {
    await bot.answerCallbackQuery(query.id, { text: '🎉 Керемет!' });
    await bot.sendMessage(chatId, `🎉 <b>Керемет!</b>

Толық сайтты алу үшін төлем жасаңыз:

💳 <b>Kaspi:</b> 4400 4302 1234 5678
💰 <b>Сома:</b> 49,000 ₸

Төлем жасағаннан кейін скриншот жіберіңіз 📸`, { parse_mode: 'HTML' });
    
    await bot.sendMessage(OWNER_ID, `💰 Клиент ұнатты және төлемге өтті!`, { parse_mode: 'HTML' });
  }
  
  if (data === 'feedback_no') {
    await bot.answerCallbackQuery(query.id, { text: '📝 Жазыңыз' });
    await bot.sendMessage(chatId, '📝 Қай жерін өзгерткіңіз келеді? Жазып жіберіңіз, мен түзетемін.');
    
    await bot.sendMessage(OWNER_ID, `⚠️ Клиент өзгерту сұрады. Күтіңіз...`, { parse_mode: 'HTML' });
  }
});

console.log('🤖 Vibe Landing Bot іске қосылды!');
console.log(`📎 t.me/AI_landingvibe_bot`);
