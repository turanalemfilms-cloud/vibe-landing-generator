#!/usr/bin/env node
/**
 * Vibe Landing Bot — D-OS Bridge
 * Клиенттердің хабарларын D-OS-қа жібереді, жауапты клиентке қайтарады
 */

const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// === КОНФИГУРАЦИЯ ===
const LANDING_BOT_TOKEN = '8002482526:AAFMMXc_sUPGMoxlf8iaEcc8G3JSkHZWKpc'; // @Turanlandingbot
const DOS_BOT_TOKEN = '8566337869:AAEL5gsniUH9uQFld4WwdnOrh2TkHevgmj0'; // D-OS чат
const OWNER_ID = 364034938; // Тұран

const GATEWAY_URL = 'http://127.0.0.1:18789';
const GATEWAY_TOKEN = 'e7463178d02f1df60843af694facda039ae3de301eb4844f';

// === БОТТАР ===
const landingBot = new TelegramBot(LANDING_BOT_TOKEN, { polling: true });
const dosBot = new TelegramBot(DOS_BOT_TOKEN, { polling: false }); // polling жоқ, тек хабар жіберу

// === СЕССИЯЛАР ===
const clientSessions = new Map(); // chatId -> { history, state, lastMessage }

// === SYSTEM PROMPT ===
const SYSTEM_PROMPT = `Сен — Vibe Landing бот, клиенттерге лендинг сайт жасап беретін AI көмекшісі.

МАҚСАТ: Клиенттен ақпарат жинап, демо лендинг жасау. Сосын сату.

FLOW:
1. Сәлемдесу + бизнес атауын сұрау
2. Не сататынын білу
3. Кімге сататынын білу  
4. Негізгі артықшылығын білу
5. Байланыс ақпаратын алу (телефон, telegram)
6. Стиль таңдату (минимал/батыл/корпоратив)
7. Демо жасап, сілтеме жіберу
8. Ұнады ма деп сұрау
9. Төлемге өту

СТИЛЬ:
- Қазақша сөйле (клиент орысша жазса, орысша жауап бер)
- Достық, кәсіби
- Қысқа, нақты
- Emoji қолдан, бірақ асыра кетпе

ЕРЕЖЕЛЕР:
- Бір уақытта бір сұрақ қой
- Жауапты күт, сосын келесіге өт
- Егер клиент бас тартса, жұмсақ қайта сұра
- Демо сайт дайын болғанда, ТҰРАНҒА ХАБАРЛА деп жаз (мен Тұранға жіберемін)

Клиентпен сөйлесуді баста!`;

// === CLAWDBOT API CALL ===
async function callDOS(clientId, message, history = []) {
  return new Promise((resolve, reject) => {
    const sessionKey = `landing-client-${clientId}`;
    
    const payload = JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'agent.chat',
      params: {
        sessionKey,
        message: message,
        system: SYSTEM_PROMPT,
        history: history.slice(-10) // Last 10 messages for context
      }
    });

    const options = {
      hostname: '127.0.0.1',
      port: 18789,
      path: '/rpc',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GATEWAY_TOKEN}`,
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.result?.text) {
            resolve(json.result.text);
          } else if (json.error) {
            reject(new Error(json.error.message || 'RPC error'));
          } else {
            resolve(data);
          }
        } catch (e) {
          resolve(data); // Return raw if not JSON
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// === FALLBACK AI RESPONSE ===
function getSmartResponse(message, session) {
  const text = message.toLowerCase();
  const state = session.state || 'greeting';
  
  // State machine
  if (state === 'greeting' || !session.answers?.businessName) {
    session.state = 'ask_business';
    return `👋 Сәлем!

Лендинг парақша — бұл сіздің бизнесіңіздің ✈️ <b>аэропорты</b> сияқты. Клиенттер осы арқылы "ұшып келеді".

🎁 <b>Ұсыныс:</b> Бизнесіңіздің "аэропортын" 1 сағат ішінде қалай тартымды болатынын <b>ТЕГІН</b> көрсетемін!

✅ Ұнаса — төлеп, толық функционалды сайтыңызды салып береміз
❌ Ұнамаса — ештеңе жоқ, екі жаққа кете береміз 🤝

Бастайық па?

🏢 Бизнесіңіздің атауы қандай?`;
  }
  
  if (state === 'ask_business') {
    session.answers = session.answers || {};
    session.answers.businessName = message;
    session.state = 'ask_services';
    return `✨ "${message}" — жақсы атау!

📦 Не сатасыз немесе қандай қызмет көрсетесіз?`;
  }
  
  if (state === 'ask_services') {
    session.answers.services = message;
    session.state = 'ask_audience';
    return `👍 Түсінікті!

🎯 Кімге сатасыз?`;
  }
  
  if (state === 'ask_audience') {
    session.answers.audience = message;
    session.state = 'ask_usp';
    return `🎯 Керемет!

⭐ Негізгі артықшылығыңыз не? Неліктен сізді таңдауы керек?`;
  }
  
  if (state === 'ask_usp') {
    session.answers.usp = message;
    session.state = 'ask_phone';
    return `💪 Жақсы!

📱 Телефон нөміріңіз? (WhatsApp үшін)`;
  }
  
  if (state === 'ask_phone') {
    session.answers.phone = message;
    session.state = 'ask_telegram';
    return `📱 Сақталды!

✈️ Telegram username-іңіз? (@username форматында)`;
  }
  
  if (state === 'ask_telegram') {
    session.answers.telegram = message;
    session.state = 'ask_style';
    return `✅ Барлық ақпарат жиналды!

🎨 Қандай дизайн стилін қалайсыз?

1️⃣ Минималист — қараңғы, tech стиль
2️⃣ Батыл — жарқын, контраст
3️⃣ Корпоратив — ақ, сенімді

Нөмірін жазыңыз (1, 2 немесе 3)`;
  }
  
  if (state === 'ask_style') {
    const styleMap = {
      '1': 'minimalist_tech',
      '2': 'bold_modern', 
      '3': 'clean_corporate',
      'минималист': 'minimalist_tech',
      'батыл': 'bold_modern',
      'корпоратив': 'clean_corporate'
    };
    session.answers.style = styleMap[text] || 'minimalist_tech';
    session.state = 'generating';
    
    // Notify owner
    notifyOwner(session);
    
    return `🎨 Стиль таңдалды!

⏳ Тұран сізге 1 сағат ішінде сайтыңыздың <b>демо дизайнын</b> жасап, жіберетін болады.

Күтіңіз! 🚀`;
  }
  
  if (state === 'generating') {
    return `⏳ Сайт әлі жасалуда... Тағы аздап күтіңіз!`;
  }
  
  if (state === 'demo_sent') {
    if (text.includes('ұнады') || text.includes('иә') || text.includes('yes') || text.includes('да')) {
      session.state = 'payment';
      return `🎉 Керемет!

Толық сайтты алу үшін:

💳 Kaspi: 4400 4302 XXXX XXXX
💰 Сома: 49,000 ₸

Төлегеннен кейін чек/скриншот жіберіңіз 📸`;
    } else {
      return `📝 Қай жерін өзгерткіңіз келеді? Жазып жіберіңіз, мен түзетемін!`;
    }
  }
  
  return `🤔 Түсінбедім. Қайталай аласыз ба?`;
}

// === NOTIFY OWNER ===
async function notifyOwner(session) {
  const a = session.answers;
  const msg = `🆕 ЖАҢА ЗАКАЗ!

🏢 Бизнес: ${a.businessName}
📦 Услуга: ${a.services}
🎯 Аудитория: ${a.audience}
⭐ USP: ${a.usp}

📱 Тел: ${a.phone}
✈️ TG: ${a.telegram}
🎨 Стиль: ${a.style}

⏳ Демо жасау керек!`;

  await dosBot.sendMessage(OWNER_ID, msg);
}

// === MESSAGE HANDLER ===
landingBot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim();
  
  if (!text) return;
  
  // Get or create session
  if (!clientSessions.has(chatId)) {
    clientSessions.set(chatId, {
      history: [],
      answers: {},
      state: 'greeting',
      startedAt: new Date()
    });
  }
  
  const session = clientSessions.get(chatId);
  session.history.push({ role: 'user', content: text });
  
  // Show typing
  await landingBot.sendChatAction(chatId, 'typing');
  
  try {
    // Try Clawdbot API first
    // const response = await callDOS(chatId, text, session.history);
    
    // For now, use smart fallback
    const response = getSmartResponse(text, session);
    
    session.history.push({ role: 'assistant', content: response });
    
    await landingBot.sendMessage(chatId, response, { parse_mode: 'HTML' });
    
  } catch (error) {
    console.error('Error:', error);
    const fallback = getSmartResponse(text, session);
    session.history.push({ role: 'assistant', content: fallback });
    await landingBot.sendMessage(chatId, fallback);
  }
});

// === OWNER COMMANDS ===
// Тұран демо сілтемесін жібергенде клиентке forward ету
landingBot.on('message', async (msg) => {
  // This is for internal admin commands if needed
});

// === START ===
console.log('🤖 Vibe Landing Bot (D-OS Bridge) іске қосылды!');
console.log('📎 t.me/Turanlandingbot');
console.log('👤 Owner notifications: ' + OWNER_ID);

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Bot stopping...');
  landingBot.stopPolling();
  process.exit(0);
});

process.on('SIGTERM', () => {
  landingBot.stopPolling();
  process.exit(0);
});
