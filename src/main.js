// 1. ADIM: YENİ ALDIĞIN API ANAHTARINI BURAYA YAPIŞTIR
const GEMINI_API_KEY = 'AIzaSyCCC41Tl22Lt3_j632ltpMxw0xOBuQLZRM'; 

const LANG = 'tr-TR';
const DEFAULT_QUICK_REPLIES = [
  'Merhaba, işitme engelliyim. Lütfen konuşun.',
  'Tekrar eder misiniz?',
  'Biraz yavaş konuşabilir misiniz?'
];

const els = {
  heardText: document.getElementById('heard-text'),
  replyInput: document.getElementById('reply-input'),
  btnToggleListen: document.getElementById('btn-toggle-listen'),
  btnSpeak: document.getElementById('btn-speak'),
  sttStatus: document.getElementById('stt-status'),
  quickStrip: document.getElementById('quick-replies-strip'),
};

let listening = false;
let recognition = null;
let geminiTimer = null;
let lastSentText = ""; 

// YENİ: SPAM ENGELLEYİCİ ÇELİK KAPI
let isGeminiWorking = false; 

// --- 1. MİKROFON ---
function initRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Tarayıcınız mikrofonu desteklemiyor. Lütfen Chrome kullanın.");
    return null;
  }

  const rec = new SpeechRecognition();
  rec.lang = LANG;
  rec.continuous = true;
  rec.interimResults = true;

  rec.onresult = (event) => {
    let finalChunk = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        finalChunk += event.results[i][0].transcript;
      }
    }

    if (finalChunk.trim()) {
      const p = document.createElement('p');
      p.className = 'heard-text__line';
      p.textContent = finalChunk.trim();
      els.heardText.appendChild(p);
      els.heardText.scrollTop = els.heardText.scrollHeight;

      // SPAM KORUMASI: 3 saniye sessizlik bekle
      clearTimeout(geminiTimer);
      geminiTimer = setTimeout(() => {
        // Sadece eklenen SON cümleyi al (tüm geçmişi gönderip sistemi yorma)
        const currentText = finalChunk.trim();
        
        // EĞER kapı kilitli değilse ve aynı cümleyi tekrar sormuyorsak gönder
        if (currentText && currentText !== lastSentText && !isGeminiWorking) {
          askGemini(currentText);
        }
      }, 3000); // Süreyi 3 saniyeye çıkardık
    }
  };

  rec.onerror = (e) => {
    if (e.error === 'no-speech') return; 
  };
  
  rec.onend = () => { if (listening) rec.start(); };
  return rec;
}

// --- 2. GEMINI YAPAY ZEKA ---
async function askGemini(text) {
  const cleanKey = GEMINI_API_KEY.trim(); 
  if (!cleanKey) return;

  // 1. KAPIYI KİLİTLE (Başka istek gelmesini engelle)
  isGeminiWorking = true;
  lastSentText = text;
  
  // Kullanıcıya yapay zekanın düşündüğünü belli et
  els.quickStrip.style.opacity = '0.5'; 

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${cleanKey}`;
  const prompt = `Sen işitme engelli asistanısın. Karşı taraf şunu dedi: "${text}". Kullanıcının verebileceği 3 kısa cevabı sadece virgülle ayırarak yaz (açıklama yapma).`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    
    if (res.status === 429) {
      console.warn("API Kotası doldu! Biraz beklemeliyiz.");
      return;
    }

    const data = await res.json();

    if (res.ok && data.candidates) {
      const result = data.candidates[0].content.parts[0].text;
      const suggestions = result.split(',').map(s => s.trim()).filter(Boolean);
      if (suggestions.length > 0) renderButtons(suggestions);
    }
  } catch (err) {
    console.error("Fetch Hatası:", err);
  } finally {
    // 2. İŞLEM BİTTİ, KAPIYI TEKRAR AÇ
    isGeminiWorking = false;
    els.quickStrip.style.opacity = '1'; 
  }
}

// --- 3. BUTONLARI EKRANA ÇİZME ---
function renderButtons(list) {
  els.quickStrip.innerHTML = '';
  list.forEach(txt => {
    const btn = document.createElement('button');
    btn.className = 'btn btn--pill';
    btn.innerHTML = `
      <svg class="btn__icon btn__icon--sm" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg> 
      <span class="btn__pill-text">${txt}</span>
    `;
    btn.onclick = () => { els.replyInput.value = txt; };
    els.quickStrip.appendChild(btn);
  });
}

// --- 4. SESLENDİRME ---
els.btnSpeak.onclick = () => {
  const text = els.replyInput.value;
  if (!text) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANG;
  window.speechSynthesis.speak(u);
};

// --- 5. DİNLEME BUTONU ---
els.btnToggleListen.onclick = () => {
  if (!recognition) recognition = initRecognition();
  if (!recognition) return;

  const label = els.btnToggleListen.querySelector('.btn__label');

  if (listening) {
    listening = false;
    recognition.stop();
    els.btnToggleListen.classList.remove('btn--listen-active');
    label.textContent = "Dinlemeyi başlat";
  } else {
    listening = true;
    recognition.start();
    els.btnToggleListen.classList.add('btn--listen-active');
    label.textContent = "Dinleniyor...";
  }
};

renderButtons(DEFAULT_QUICK_REPLIES);