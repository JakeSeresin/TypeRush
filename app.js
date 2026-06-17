/**
 * TypeRush v3 — Core Engine
 * New: Adaptive Calibration Engine | Daily Streak Grid | Text Bank
 * Refactored: Cinematic UI, full re-architecture
 */

'use strict';

// ─────────────────────────────────────────────
// 1. WORD BANK
// ─────────────────────────────────────────────
const WORD_BANK = {
  quotes: [
    "the quick brown fox jumps over the lazy dog",
    "pack my box with five dozen liquor jugs",
    "how vexingly quick daft zebras jump",
    "to be or not to be that is the question",
    "all that glitters is not gold often have you heard that told",
    "it was the best of times it was the worst of times",
    "ask not what your country can do for you ask what you can do for your country",
    "the only way to do great work is to love what you do",
    "in the middle of every difficulty lies opportunity waiting to be found",
    "you miss one hundred percent of the shots you never attempt to take",
    "life is what happens when you are busy making other plans",
    "the secret of getting ahead is getting started one step at a time",
    "success is not final failure is not fatal it is the courage to continue",
    "every morning we are born again what we do today matters most",
    "happiness does not come from outside it comes from your own actions",
  ],
  tech: [
    "function calculate wpm typed words time in minutes return typed words divided by minutes",
    "async function fetch data await api call then response json then render to dom",
    "const use effect use state use callback use memo hooks react functional component",
    "git commit push origin main branch merge pull request review approve deploy",
    "docker compose up build container image deploy production cluster kubernetes",
    "npm install package save dev dependencies update lock file audit fix",
    "array prototype map filter reduce callback function return value accumulator",
    "try catch finally promise resolve reject async await throw new error handling",
    "select id name email from users where active equals true order by created at",
    "interface typescript generic extends implements readonly partial required omit",
    "webpack babel rollup vite bundler transpile minify tree shaking chunk split",
    "rest api endpoint get post put delete patch status code json response body",
    "import component from library export default class extends base react component",
    "const observer new intersection observer callback options observe element",
    "event listener add remove dispatch custom event target bubble capture phase",
  ],
  general: [
    "the sun sets slowly behind the distant mountains painting the sky orange red",
    "she opened the old wooden door and stepped into a room full of quiet memories",
    "coffee brewing early in the morning fills the kitchen with a warm familiar aroma",
    "walking through the park on a crisp autumn day clears the mind completely",
    "books are portals to different worlds waiting to be explored by curious minds",
    "music has the power to transport us back to specific moments in our lives",
    "learning to code is like learning a new language it takes time and daily practice",
    "the ocean waves crashed against the rocky shore under the bright full moonlight",
    "a journey of a thousand miles begins with a single deliberate step forward",
    "innovation distinguishes between a leader and a follower in any competitive field",
    "the best way to predict the future is to invent it yourself right now today",
    "every expert was once a beginner who refused to give up on their own progress",
    "the more you read the more you learn the more places you will go in your mind",
    "creativity is intelligence having fun with the tools and ideas at its disposal",
    "not all those who wander are lost some are just exploring new possibilities",
  ],
  arabic: [
    "العلم نور والجهل ظلام ومن يطلب العلم يجد طريقه إلى النجاح",
    "الصبر مفتاح الفرج وبالعمل الجاد تتحقق الأحلام الكبيرة",
    "في كل يوم جديد فرصة للتغيير والتطور نحو حياة أفضل",
    "القراءة غذاء العقل والتفكير السليم أساس كل تقدم حقيقي",
    "الوقت كالسيف إن لم تقطعه قطعك فاستغله في ما ينفع",
    "من سار على الدرب وصل ومن جد في العمل نجح في النهاية",
    "الأمل شمعة تضيء الطريق في أحلك اللحظات وأصعب الأوقات",
    "التعلم المستمر هو الطريق الوحيد للبقاء في مقدمة المنافسة",
    "بالإرادة والعزيمة يستطيع الإنسان تحقيق ما يبدو مستحيلاً",
    "الكلمة الطيبة صدقة والابتسامة في وجه أخيك صدقة أيضاً",
    "لا تؤجل عمل اليوم إلى الغد فالغد يحمل أعمال جديدة",
    "العقل السليم في الجسم السليم وصحتك أغلى ما تملك",
    "التواضع زينة العالم والتكبر آفة تهدم ما بنيته",
    "كن أنت التغيير الذي تريد أن تراه في هذا العالم الجميل",
    "الإخلاص في العمل هو أقصر طريق يوصلك إلى تحقيق أهدافك",
  ],
  hindi: [
    "ज्ञान ही शक्ति है और शिक्षा से ही जीवन में सफलता मिलती है",
    "परिश्रम का फल मीठा होता है इसलिए हमेशा मेहनत करते रहो",
    "हर नए दिन के साथ एक नई उम्मीद और नई शुरुआत आती है",
    "सच्चाई और ईमानदारी ही सबसे बड़ा धन है जो हमारे पास है",
    "समय बहुत कीमती है इसे व्यर्थ मत करो और हर पल का उपयोग करो",
    "अच्छे विचार और सकारात्मक सोच से जीवन खुशहाल बनता है",
    "धैर्य और लगन से किया गया काम हमेशा सफलता दिलाता है",
    "किताबें हमारी सबसे अच्छी दोस्त हैं जो हमें ज्ञान देती हैं",
    "जीवन में आगे बढ़ने के लिए संघर्ष करना जरूरी होता है",
    "स्वास्थ्य ही सबसे बड़ी दौलत है इसका ख्याल रखना चाहिए",
    "प्रकृति की सुंदरता को देखो और उसकी रक्षा करना सीखो",
    "मेहनत और ईमानदारी से किया गया हर काम रंग लाता है",
    "जो सपने देखते हैं वही लोग दुनिया को बदल सकते हैं",
    "विश्वास और साहस से हर मुश्किल को पार किया जा सकता है",
    "अपने लक्ष्य को पाने के लिए हमेशा कोशिश करते रहना चाहिए",
  ],
  french: [
    "la connaissance est un trésor mais la pratique en est la clé",
    "chaque jour est une nouvelle chance de changer votre vie pour le mieux",
    "le soleil se couche sur la mer et peint le ciel de mille couleurs",
    "la lecture est à l'esprit ce que l'exercice est au corps humain",
    "sans effort il n'y a pas de succès car rien ne s'obtient sans travail",
    "la patience est la mère de toutes les vertus dans la vie quotidienne",
    "voyager c'est découvrir que tout le monde a tort sur les autres pays",
    "le bonheur ne s'achète pas il se construit jour après jour avec amour",
    "les rêves de ceux qui dorment le jour sont dangereux et contagieux",
    "apprendre une nouvelle langue c'est ouvrir une nouvelle fenêtre sur le monde",
    "la liberté commence là où l'ignorance finit selon les grands philosophes",
    "il faut toujours viser la lune car même en cas d'échec on atterrit dans les étoiles",
    "le courage c'est de chercher la vérité et de la dire sans peur ni honte",
    "une bonne amitié est comme une étoile on ne la voit pas toujours mais elle est là",
    "la persévérance est ce qui rend l'impossible possible et le possible certain",
  ],
};

// ─────────────────────────────────────────────
// 2. STATE
// ─────────────────────────────────────────────
const STATE = {
  mode: '30s',
  status: 'idle',           // idle | running | paused | finished
  category: 'mixed',
  targetWords: [],
  currentWordIndex: 0,
  currentInput: '',
  wordResults: [],          // [{word, typed, correct, errors, time}]
  wordStartTime: 0,
  errors: 0,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  startTime: null,
  elapsedPaused: 0,
  timerInterval: null,
  totalTime: 30,
  wordCount: 25,
  customText: '',
  fontSizeLevel: 'medium',
  theme: 'dark',
  language: 'en',            // en | ar | hi | fr
  sparklineData: [],
  // Settings
  soundEnabled: false,
  // Calibration Engine
  calibration: {
    wordErrorMap: {},       // word → {errors, attempts, avgTime}
    clusterErrorMap: {},    // 2-char cluster → {errors, attempts}
    weakWords: [],          // top N worst words
    weakClusters: [],       // top N worst clusters
    injectionRate: 0.3,     // 0–1: fraction of words replaced by weak words
    minSamples: 3,          // min attempts before flagging
    active: false,
  },
  // Stats
  bestWPM: 0,
  bestAccuracy: 0,
  history: [],
  testsCompleted: 0,
  // Text Bank
  textBank: [],             // [{id, title, text, wordCount, date}]
  selectedBankId: null,
};

// ─────────────────────────────────────────────
// 3. DOM
// ─────────────────────────────────────────────
const D = {
  app: document.getElementById('app'),
  textDisplay: document.getElementById('textDisplay'),
  ghostInput: document.getElementById('ghostInput'),
  stage: document.getElementById('stage'),
  caret: document.getElementById('caret'),
  inputMask: document.getElementById('inputMask'),
  // Stats
  wpmValue: document.getElementById('wpmValue'),
  rawWpmValue: document.getElementById('rawWpmValue'),
  accuracyValue: document.getElementById('accuracyValue'),
  errorsValue: document.getElementById('errorsValue'),
  timerValue: document.getElementById('timerValue'),
  // Buttons
  startBtn: document.getElementById('startBtn'),
  pauseBtn: document.getElementById('pauseBtn'),
  restartBtn: document.getElementById('restartBtn'),
  // Overlays
  capslockBar: document.getElementById('capslockBar'),
  pauseBanner: document.getElementById('pauseBanner'),
  pauseResumeBtn: document.getElementById('pauseResumeBtn'),
  resultsOverlay: document.getElementById('resultsOverlay'),
  resultWPM: document.getElementById('resultWPM'),
  resultRawWPM: document.getElementById('resultRawWPM'),
  resultAccuracy: document.getElementById('resultAccuracy'),
  resultErrors: document.getElementById('resultErrors'),
  resultTime: document.getElementById('resultTime'),
  resultBestWPM: document.getElementById('resultBestWPM'),
  resultsBadge: document.getElementById('resultsBadge'),
  resultsTryAgain: document.getElementById('resultsTryAgain'),
  resultsClose: document.getElementById('resultsClose'),
  wpmChart: document.getElementById('wpmChart'),
  calibrationInsight: document.getElementById('calibrationInsight'),
  calibrationInsightText: document.getElementById('calibrationInsightText'),
  // Sparkline
  sparklineBar: document.getElementById('sparklineBar'),
  sparklineCanvas: document.getElementById('sparklineCanvas'),
  // Mode / category pills
  modePills: document.querySelectorAll('[data-mode]'),
  catPills: document.querySelectorAll('[data-category]'),
  fontPills: document.querySelectorAll('[data-size]'),
  wcPicker: document.getElementById('wcPicker'),
  wcPills: document.querySelectorAll('.wc-pill'),
  customArea: document.getElementById('customArea'),
  customTextarea: document.getElementById('customTextarea'),
  customConfirm: document.getElementById('customConfirm'),
  // Calibration UI
  engineBar: document.getElementById('engineBar'),
  engineBarText: document.getElementById('engineBarText'),
  engineBarTags: document.getElementById('engineBarTags'),
  calibrationDot: document.getElementById('calibrationDot'),
  calibrationBtn: document.getElementById('calibrationBtn'),
  // Streak
  streakBtn: document.getElementById('streakBtn'),
  streakCount: document.getElementById('streakCount'),
  streakSection: document.getElementById('streakSection'),
  streakClose: document.getElementById('streakClose'),
  streakGrid: document.getElementById('streakGrid'),
  streakDays: document.getElementById('streakDays'),
  // History panel
  historyBtn: document.getElementById('historyBtn'),
  historyPanel: document.getElementById('historyPanel'),
  historyClose: document.getElementById('historyClose'),
  historyList: document.getElementById('historyList'),
  historyClear: document.getElementById('historyClear'),
  // Bank panel
  bankBtn: document.getElementById('bankBtn'),
  bankPanel: document.getElementById('bankPanel'),
  bankClose: document.getElementById('bankClose'),
  bankCategoryBtn: document.getElementById('bankCategoryBtn'),
  bankTitleInput: document.getElementById('bankTitleInput'),
  bankTextarea: document.getElementById('bankTextarea'),
  bankSave: document.getElementById('bankSave'),
  bankList: document.getElementById('bankList'),
  // Other
  panelBackdrop: document.getElementById('panelBackdrop'),
  soundToggle: document.getElementById('soundToggle'),
  soundIcon: document.getElementById('soundIcon'),
  themeToggle: document.getElementById('themeToggle'),
  confettiCanvas: document.getElementById('confettiCanvas'),
  featuresBtn: document.getElementById('featuresBtn'),
  featuresOverlay: document.getElementById('featuresOverlay'),
  featuresClose: document.getElementById('featuresClose'),
  // Mobile Beta
  mobileBetaBtn: document.getElementById('mobileBetaBtn'),
  mobileBetaOverlay: document.getElementById('mobileBetaOverlay'),
  mobileBetaClose: document.getElementById('mobileBetaClose'),
  mobileBetaEmail: document.getElementById('mobileBetaEmail'),
  mobileBetaSubmit: document.getElementById('mobileBetaSubmit'),
  mobileBetaMsg: document.getElementById('mobileBetaMsg'),
};

// ─────────────────────────────────────────────
// 4. LOCAL STORAGE
// ─────────────────────────────────────────────
const Store = {
  keys: {
    settings:    'tr3_settings',
    stats:       'tr3_stats',
    calibration: 'tr3_calibration',
    streak:      'tr3_streak',
    bank:        'tr3_bank',
  },
  get(key, def = null) {
    try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },
  loadAll() {
    const settings = this.get(this.keys.settings, {});
    STATE.theme = settings.theme || 'dark';
    STATE.soundEnabled = settings.soundEnabled || false;
    STATE.mode = settings.mode || '30s';
    STATE.wordCount = settings.wordCount || 25;
    STATE.category = settings.category || 'mixed';
    STATE.fontSizeLevel = settings.fontSizeLevel || 'medium';
    STATE.language = settings.language || 'en';

    const stats = this.get(this.keys.stats, {});
    STATE.bestWPM = stats.bestWPM || 0;
    STATE.bestAccuracy = stats.bestAccuracy || 0;
    STATE.history = stats.history || [];
    STATE.testsCompleted = stats.testsCompleted || 0;

    const cal = this.get(this.keys.calibration, {});
    STATE.calibration.wordErrorMap = cal.wordErrorMap || {};
    STATE.calibration.clusterErrorMap = cal.clusterErrorMap || {};
    STATE.calibration.active = cal.active !== undefined ? cal.active : false;

    STATE.textBank = this.get(this.keys.bank, []);
  },
  saveSettings() {
    this.set(this.keys.settings, {
      theme: STATE.theme,
      soundEnabled: STATE.soundEnabled,
      mode: STATE.mode,
      wordCount: STATE.wordCount,
      category: STATE.category,
      fontSizeLevel: STATE.fontSizeLevel,
      language: STATE.language,
    });
  },
  saveStats() {
    this.set(this.keys.stats, {
      bestWPM: STATE.bestWPM,
      bestAccuracy: STATE.bestAccuracy,
      history: STATE.history.slice(0, 50),
      testsCompleted: STATE.testsCompleted,
    });
  },
  saveCalibration() {
    this.set(this.keys.calibration, {
      wordErrorMap: STATE.calibration.wordErrorMap,
      clusterErrorMap: STATE.calibration.clusterErrorMap,
      active: STATE.calibration.active,
    });
  },
  saveBank() {
    this.set(this.keys.bank, STATE.textBank);
  },
  // Streak: { 'YYYY-MM-DD': count }
  getStreak() { return this.get(this.keys.streak, {}); },
  recordTestToday() {
    const today = new Date().toISOString().slice(0, 10);
    const data = this.getStreak();
    data[today] = (data[today] || 0) + 1;
    this.set(this.keys.streak, data);
    return data;
  },
};

// ─────────────────────────────────────────────
// 5. SOUND ENGINE
// ─────────────────────────────────────────────
const Sound = {
  _ctx: null,
  ctx() {
    if (!this._ctx) this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this._ctx;
  },
  play(type) {
    if (!STATE.soundEnabled) return;
    try {
      const ctx = this.ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      const t = ctx.currentTime;
      switch (type) {
        case 'key':
          osc.frequency.setValueAtTime(900, t);
          osc.frequency.exponentialRampToValueAtTime(650, t + 0.03);
          gain.gain.setValueAtTime(0.04, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
          osc.start(t); osc.stop(t + 0.05); break;
        case 'error':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(180, t);
          gain.gain.setValueAtTime(0.06, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
          osc.start(t); osc.stop(t + 0.09); break;
        case 'word':
          osc.frequency.setValueAtTime(1100, t);
          gain.gain.setValueAtTime(0.05, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
          osc.start(t); osc.stop(t + 0.06); break;
        case 'finish':
          [523, 659, 784, 1047].forEach((f, i) => {
            const o2 = ctx.createOscillator(), g2 = ctx.createGain();
            o2.connect(g2); g2.connect(ctx.destination);
            o2.frequency.setValueAtTime(f, t + i * 0.12);
            g2.gain.setValueAtTime(0.07, t + i * 0.12);
            g2.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.18);
            o2.start(t + i * 0.12); o2.stop(t + i * 0.12 + 0.18);
          }); break;
      }
    } catch {}
  }
};

// ─────────────────────────────────────────────
// 6. CALIBRATION ENGINE
// ─────────────────────────────────────────────
const Calibration = {
  // Record the result of typing one word
  record(word, typed, errors, timeMs) {
    const map = STATE.calibration.wordErrorMap;
    if (!map[word]) map[word] = { errors: 0, attempts: 0, totalTime: 0 };
    map[word].errors += errors;
    map[word].attempts++;
    map[word].totalTime += timeMs;

    // Extract 2-char clusters from the word
    for (let i = 0; i < word.length - 1; i++) {
      const cluster = word.slice(i, i + 2);
      const cm = STATE.calibration.clusterErrorMap;
      if (!cm[cluster]) cm[cluster] = { errors: 0, attempts: 0 };
      // Attribute cluster error if any mismatch at this position
      const charError = (typed[i] !== word[i]) || (typed[i+1] !== word[i+1]) ? 1 : 0;
      cm[cluster].errors += charError;
      cm[cluster].attempts++;
    }
  },

  // Compute weak words and clusters
  analyze() {
    const map = STATE.calibration.wordErrorMap;
    const MIN = STATE.calibration.minSamples;

    const scored = Object.entries(map)
      .filter(([, v]) => v.attempts >= MIN)
      .map(([word, v]) => ({
        word,
        score: (v.errors / v.attempts) + (v.totalTime / v.attempts / 5000),
        errorRate: v.errors / v.attempts,
      }))
      .sort((a, b) => b.score - a.score);

    STATE.calibration.weakWords = scored.slice(0, 12).map(s => s.word);

    const cm = STATE.calibration.clusterErrorMap;
    const clusters = Object.entries(cm)
      .filter(([, v]) => v.attempts >= MIN)
      .map(([cluster, v]) => ({ cluster, rate: v.errors / v.attempts }))
      .filter(c => c.rate > 0.15)
      .sort((a, b) => b.rate - a.rate);

    STATE.calibration.weakClusters = clusters.slice(0, 6).map(c => c.cluster);
    STATE.calibration.active = STATE.calibration.weakWords.length > 0;

    Store.saveCalibration();
  },

  // Build a word list injecting weak words
  buildWordList(basePool, count) {
    const weak = STATE.calibration.weakWords;
    if (!STATE.calibration.active || weak.length === 0) {
      return this._shuffle(basePool).slice(0, count);
    }

    const injectionCount = Math.round(count * STATE.calibration.injectionRate);
    const normalCount = count - injectionCount;

    const normal = this._shuffle(basePool).slice(0, normalCount);
    // Cycle through weak words to fill injected slots
    const injected = [];
    for (let i = 0; i < injectionCount; i++) {
      injected.push(weak[i % weak.length]);
    }

    // Interleave: insert injected words at spread intervals
    const result = [...normal];
    const step = Math.max(1, Math.floor(normalCount / (injectionCount + 1)));
    injected.forEach((w, i) => {
      const pos = Math.min(result.length, step * (i + 1) + i);
      result.splice(pos, 0, w);
    });

    return result.slice(0, count);
  },

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // Generate insight message for results modal
  getInsight(netWPM) {
    const weak = STATE.calibration.weakWords.slice(0, 4);
    const clusters = STATE.calibration.weakClusters.slice(0, 3);
    if (weak.length === 0) return null;

    let msg = `Engine flagged ${weak.length} problem words: "${weak.join('", "')}"`;
    if (clusters.length > 0) msg += `. Weak clusters: "${clusters.join('", "')}"`;
    msg += `. These will appear more frequently in your next test.`;
    return msg;
  },

  updateEngineUI() {
    const active = STATE.calibration.active;
    D.calibrationDot.classList.toggle('active', active);
    D.engineBar.style.display = active ? 'flex' : 'none';

    if (active) {
      const count = STATE.calibration.weakWords.length;
      D.engineBarText.textContent = `Engine targeting ${count} weak pattern${count !== 1 ? 's' : ''}`;
      D.engineBarTags.innerHTML = STATE.calibration.weakClusters
        .slice(0, 5)
        .map(c => `<span class="engine-tag">"${c}"</span>`)
        .join('');
    }
  },
};

// ─────────────────────────────────────────────
// 7. STREAK SYSTEM
// ─────────────────────────────────────────────
const Streak = {
  // Get consecutive day streak count
  getCurrentStreak() {
    const data = Store.getStreak();
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      if (data[key] && data[key] > 0) streak++;
      else if (i > 0) break;  // gap found (don't break on i=0, today might be 0 before first test)
    }
    return streak;
  },

  // Render the 52-week contribution grid
  renderGrid() {
    const data = Store.getStreak();
    const grid = D.streakGrid;
    grid.innerHTML = '';

    const today = new Date();
    const days = 364;

    for (let i = days; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const count = data[key] || 0;
      let level = 0;
      if (count >= 6) level = 3;
      else if (count >= 3) level = 2;
      else if (count >= 1) level = 1;

      const cell = document.createElement('div');
      cell.className = `streak-cell level-${level}`;
      cell.title = `${key}: ${count} test${count !== 1 ? 's' : ''}`;
      grid.appendChild(cell);
    }

    const streak = this.getCurrentStreak();
    D.streakDays.textContent = streak;
    D.streakCount.textContent = streak;
  },

  updateTopbar() {
    const streak = this.getCurrentStreak();
    D.streakCount.textContent = streak;
  },
};

// ─────────────────────────────────────────────
// 8. TEXT BANK
// ─────────────────────────────────────────────
const Bank = {
  save(title, text) {
    if (!text.trim()) return false;
    const entry = {
      id: Date.now().toString(),
      title: title.trim() || 'Untitled',
      text: text.trim(),
      wordCount: text.trim().split(/\s+/).length,
      date: new Date().toISOString(),
    };
    STATE.textBank.unshift(entry);
    if (STATE.textBank.length > 50) STATE.textBank.pop();
    Store.saveBank();
    this.render();
    return true;
  },

  delete(id) {
    STATE.textBank = STATE.textBank.filter(e => e.id !== id);
    if (STATE.selectedBankId === id) STATE.selectedBankId = null;
    Store.saveBank();
    this.render();
  },

  select(id) {
    STATE.selectedBankId = id;
    const entry = STATE.textBank.find(e => e.id === id);
    if (entry) STATE.customText = entry.text;
    this.render();
    // Auto-set category to bank
    setCategory('bank');
    closeAllPanels();
  },

  render() {
    if (STATE.textBank.length === 0) {
      D.bankList.innerHTML = '<p class="panel-empty">Bank is empty. Save some text above.</p>';
      return;
    }
    D.bankList.innerHTML = STATE.textBank.map(entry => {
      const preview = entry.text.slice(0, 60) + (entry.text.length > 60 ? '…' : '');
      const date = new Date(entry.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      const sel = STATE.selectedBankId === entry.id ? ' selected' : '';
      return `
        <div class="bank-item${sel}" data-id="${entry.id}" role="button" tabindex="0">
          <div class="bank-item-title">${escHtml(entry.title)}</div>
          <div class="bank-item-preview">${escHtml(preview)}</div>
          <div class="bank-item-meta">
            <span>${entry.wordCount} words</span>
            <span>${date}</span>
          </div>
          <button class="bank-item-del" data-del="${entry.id}" aria-label="Delete" title="Delete">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>`;
    }).join('');
  },
};

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─────────────────────────────────────────────
// 9. TEXT GENERATION
// ─────────────────────────────────────────────
function getWordPool() {
  const cat = STATE.category;
  const lang = STATE.language;

  // Non-English languages use their own pool regardless of category
  if (lang === 'ar') return WORD_BANK.arabic;
  if (lang === 'hi') return WORD_BANK.hindi;
  if (lang === 'fr') return WORD_BANK.french;

  // English categories
  let pool = [];
  if (cat === 'quotes' || cat === 'mixed') pool.push(...WORD_BANK.quotes);
  if (cat === 'general' || cat === 'mixed') pool.push(...WORD_BANK.general);
  if (cat === 'tech') pool.push(...WORD_BANK.tech);
  if (cat === 'bank' || cat === 'custom') return null;
  return pool;
}

function flattenPoolToWords(pool) {
  return pool.flatMap(sentence => sentence.split(/\s+/));
}

function generateWords(count) {
  // Bank / custom text mode
  if ((STATE.category === 'bank' || STATE.category === 'custom') && STATE.customText) {
    const words = STATE.customText.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return ['no', 'text', 'loaded'];
    // repeat if needed
    const result = [];
    while (result.length < count) result.push(...words);
    return result.slice(0, count);
  }

  const pool = getWordPool();
  if (!pool) return ['press', 'start'];
  const words = flattenPoolToWords(pool);
  return Calibration.buildWordList(words, count);
}

// ─────────────────────────────────────────────
// 10. DISPLAY ENGINE
// ─────────────────────────────────────────────
function renderWords() {
  D.textDisplay.innerHTML = '';
  const weak = new Set(STATE.calibration.weakWords);

  STATE.targetWords.forEach((word, idx) => {
    const span = document.createElement('span');
    span.className = 'word';
    if (weak.has(word) && STATE.calibration.active) span.classList.add('weak-word');
    span.id = `w${idx}`;
    word.split('').forEach(ch => {
      const c = document.createElement('span');
      c.className = 'char';
      c.textContent = ch;
      span.appendChild(c);
    });
    D.textDisplay.appendChild(span);
  });

  highlightCurrentWord();
}

function highlightCurrentWord() {
  document.querySelectorAll('.word.current').forEach(el => el.classList.remove('current'));
  const el = document.getElementById(`w${STATE.currentWordIndex}`);
  if (el) {
    el.classList.add('current');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function updateCharHighlight() {
  const el = document.getElementById(`w${STATE.currentWordIndex}`);
  if (!el) return;
  const target = STATE.targetWords[STATE.currentWordIndex] || '';
  const inp = STATE.currentInput;
  const chars = el.querySelectorAll('.char');
  chars.forEach(c => c.classList.remove('correct', 'incorrect'));
  inp.split('').forEach((ch, i) => {
    if (i < target.length) {
      chars[i]?.classList.add(ch === target[i] ? 'correct' : 'incorrect');
    } else {
      if (chars[target.length - 1]) chars[target.length - 1].classList.add('incorrect');
    }
  });
  updateCaret();
}

function updateCaret() {
  const el = document.getElementById(`w${STATE.currentWordIndex}`);
  if (!el) return;
  const chars = el.querySelectorAll('.char');
  const pos = STATE.currentInput.length;
  const targetChar = pos < chars.length ? chars[pos] : chars[chars.length - 1];
  if (!targetChar) return;
  const rect = targetChar.getBoundingClientRect();
  const stageRect = D.stage.getBoundingClientRect();
  D.caret.style.left = `${rect.left - stageRect.left + (pos >= chars.length ? rect.width : 0)}px`;
  D.caret.style.top = `${rect.top - stageRect.top}px`;
  D.caret.style.height = `${rect.height}px`;
}

function markWordDone(idx, correct) {
  const el = document.getElementById(`w${idx}`);
  if (!el) return;
  el.classList.remove('current', 'weak-word');
  el.classList.add(correct ? 'done-correct' : 'done-error');
}

// ─────────────────────────────────────────────
// 11. TYPING ENGINE
// ─────────────────────────────────────────────
function handleInput(e) {
  if (STATE.status !== 'running') {
    // Only auto-start on real character input, not backspace/modifier/etc.
    if (STATE.status === 'idle' && e.target.value.trim().length > 0) {
      const firstChar = e.target.value; // preserve what was typed
      startTest();
      // Re-inject the character so it isn't lost
      if (STATE.status === 'running') {
        D.ghostInput.value = firstChar;
        STATE.currentInput = firstChar;
        updateCharHighlight();
        updateStats();
      }
    } else {
      e.target.value = '';
    }
    return;
  }

  const val = e.target.value;
  const target = STATE.targetWords[STATE.currentWordIndex] || '';

  if (val.endsWith(' ')) {
    const typed = val.trim();
    const correct = typed === target;
    const timeMs = Date.now() - STATE.wordStartTime;
    const wordErrors = countErrors(typed, target);

    // Record to calibration engine
    Calibration.record(target, typed, wordErrors, timeMs);

    STATE.wordResults.push({ word: target, typed, correct, errors: wordErrors, time: timeMs });
    STATE.totalKeystrokes += typed.length + 1;
    if (correct) {
      STATE.correctKeystrokes += typed.length + 1;
      Sound.play('word');
    } else {
      STATE.errors += wordErrors;
      Sound.play('error');
    }
    markWordDone(STATE.currentWordIndex, correct);
    STATE.currentWordIndex++;
    STATE.currentInput = '';
    STATE.wordStartTime = Date.now();
    D.ghostInput.value = '';

    // End test when all words typed (word count mode, or custom/bank category in any mode)
    const isWordLimitMode = STATE.mode === 'wordCount' ||
                            STATE.category === 'bank' ||
                            STATE.category === 'custom';
    if (isWordLimitMode && STATE.currentWordIndex >= STATE.targetWords.length) {
      finishTest(); return;
    }

    highlightCurrentWord();
    updateStats();
  } else {
    STATE.currentInput = val;
    STATE.totalKeystrokes++;

    // Per-keystroke accuracy tracking (correctKeystrokes only — errors tracked at word level)
    if (val.length > 0) {
      const i = val.length - 1;
      if (i < target.length && val[i] === target[i]) {
        STATE.correctKeystrokes++;
        Sound.play('key');
      } else {
        Sound.play('error');
      }
    }
    updateCharHighlight();
    updateStats();
  }
}

function countErrors(typed, target) {
  let errs = 0;
  const len = Math.max(typed.length, target.length);
  for (let i = 0; i < len; i++) {
    if (typed[i] !== target[i]) errs++;
  }
  return errs;
}

// ─────────────────────────────────────────────
// 12. STATS ENGINE
// ─────────────────────────────────────────────
function calcWPM() {
  const now = Date.now();
  const ms = (now - STATE.startTime) + STATE.elapsedPaused;
  const min = ms / 60000;
  if (min <= 0) return { net: 0, raw: 0 };

  const typedWordCount = STATE.wordResults.length;
  const raw = Math.round(typedWordCount / min);
  const errorPenalty = Math.round(STATE.errors / Math.max(min, 0.01) / 5);
  const net = Math.max(0, raw - errorPenalty);
  return { net, raw };
}

function getAccuracy() {
  if (STATE.totalKeystrokes === 0) return 100;
  return Math.min(100, Math.round((STATE.correctKeystrokes / STATE.totalKeystrokes) * 100));
}

function updateStats() {
  const { net, raw } = calcWPM();
  const acc = getAccuracy();
  const now = Date.now();

  D.wpmValue.textContent = net;
  D.rawWpmValue.textContent = raw;
  D.accuracyValue.textContent = `${acc}%`;
  D.errorsValue.textContent = STATE.errors;

  if (['30s','1m','5m'].includes(STATE.mode)) {
    const elapsed = Math.floor((now - STATE.startTime + STATE.elapsedPaused) / 1000);
    const remaining = Math.max(0, STATE.totalTime - elapsed);
    D.timerValue.textContent = `${remaining}s`;
    if (remaining <= 0 && STATE.status === 'running') { finishTest(); return; }
  } else {
    const elapsed = Math.floor((now - STATE.startTime + STATE.elapsedPaused) / 1000);
    D.timerValue.textContent = `${elapsed}s`;
  }

  // Sparkline snapshot every 1.5s
  const last = STATE.sparklineData[STATE.sparklineData.length - 1];
  if (!last || now - last.time >= 1500) {
    STATE.sparklineData.push({ time: now, wpm: net });
    drawSparkline();
  }
}

// ─────────────────────────────────────────────
// 13. SPARKLINE
// ─────────────────────────────────────────────
function drawSparkline() {
  const canvas = D.sparklineCanvas;
  const ctx = canvas.getContext('2d');
  const data = STATE.sparklineData;
  if (data.length < 2) return;

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth || 300;
  const h = 36;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const maxV = Math.max(...data.map(d => d.wpm), 1);
  const minV = Math.min(...data.map(d => d.wpm), 0);
  const range = maxV - minV || 1;
  const isDark = STATE.theme === 'dark';
  const color = isDark ? '#7c6aff' : '#5b47e0';

  const pts = data.map((d, i) => ({
    x: (i / (data.length - 1)) * w,
    y: h - ((d.wpm - minV) / range) * (h - 6) - 3,
  }));

  ctx.beginPath();
  ctx.moveTo(pts[0].x, h);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, h);
  ctx.closePath();
  ctx.fillStyle = isDark ? 'rgba(124,106,255,0.2)' : 'rgba(91,71,224,0.12)';
  ctx.fill();

  ctx.beginPath();
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.stroke();

  const last = pts[pts.length - 1];
  ctx.beginPath();
  ctx.arc(last.x, last.y, 3, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// ─────────────────────────────────────────────
// 14. RESULTS CHART
// ─────────────────────────────────────────────
function drawResultsChart(data) {
  const canvas = D.wpmChart;
  const ctx = canvas.getContext('2d');
  if (data.length < 2) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth || 460;
  const h = 100;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const isDark = STATE.theme === 'dark';
  const color = isDark ? '#7c6aff' : '#5b47e0';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#4a4a65' : '#9a9ab5';

  const maxV = Math.max(...data.map(d => d.wpm), 10);
  const pl = 30, pr = 8, pt = 8, pb = 22;
  const cw = w - pl - pr, ch = h - pt - pb;
  const x = i => pl + (i / (data.length - 1)) * cw;
  const y = v => pt + ch - (v / maxV) * ch;

  [0, 0.5, 1].forEach(f => {
    const yy = pt + ch * (1 - f);
    ctx.beginPath(); ctx.moveTo(pl, yy); ctx.lineTo(w - pr, yy);
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.font = `${9}px monospace`;
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxV * f), pl - 4, yy + 3);
  });

  ctx.fillStyle = textColor; ctx.font = `9px monospace`; ctx.textAlign = 'center';
  data.forEach((d, i) => {
    if (i % Math.ceil(data.length / 5) === 0 || i === data.length - 1) {
      ctx.fillText(`${d.elapsed}s`, x(i), h - 5);
    }
  });

  ctx.beginPath();
  ctx.moveTo(x(0), y(0));
  data.forEach((d, i) => ctx.lineTo(x(i), y(d.wpm)));
  ctx.lineTo(x(data.length - 1), pt + ch);
  ctx.lineTo(x(0), pt + ch);
  ctx.closePath();
  ctx.fillStyle = isDark ? 'rgba(124,106,255,0.15)' : 'rgba(91,71,224,0.1)';
  ctx.fill();

  ctx.beginPath();
  data.forEach((d, i) => i === 0 ? ctx.moveTo(x(i), y(d.wpm)) : ctx.lineTo(x(i), y(d.wpm)));
  ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke();

  data.forEach((d, i) => {
    ctx.beginPath(); ctx.arc(x(i), y(d.wpm), 3, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
  });
}

// ─────────────────────────────────────────────
// 15. CONFETTI
// ─────────────────────────────────────────────
function launchConfetti() {
  const canvas = D.confettiCanvas;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#7c6aff','#a78bfa','#3dffa0','#ffb930','#ff5670','#38bdf8'];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height * 0.3,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360,
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 4 + 1.5,
    vr: (Math.random() - 0.5) * 8,
  }));

  let frame = 0;
  const total = 150;
  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.rot += p.vr;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - frame / total);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < total) requestAnimationFrame(step);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  step();
}

// ─────────────────────────────────────────────
// 16. GAME CONTROLS
// ─────────────────────────────────────────────
function startTest() {
  resetState();

  const mode = STATE.mode;
  let count;
  switch (mode) {
    case '30s':  STATE.totalTime = 30;  count = 80;  break;
    case '1m':   STATE.totalTime = 60;  count = 150; break;
    case '5m':   STATE.totalTime = 300; count = 500; break;
    case 'wordCount': count = STATE.wordCount; break;
    case 'custom':
    case 'bank':
      if (!STATE.customText) {
        if (mode === 'bank') { openPanel('bank'); return; }
        openPanel(null); // fallback
        return;
      }
      count = 200; break;
    default: count = 50;
  }

  STATE.targetWords = generateWords(count);
  if (STATE.targetWords.length === 0) return;

  STATE.status = 'running';
  STATE.startTime = Date.now();
  STATE.wordStartTime = Date.now();
  STATE.sparklineData = [];

  D.stage.classList.add('running');
  D.sparklineBar.style.display = 'flex';
  D.startBtn.disabled = true;
  D.pauseBtn.disabled = false;
  D.pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';

  renderWords();

  // Focus input
  D.ghostInput.value = '';
  D.ghostInput.focus();

  // Start ticker
  STATE.timerInterval = setInterval(() => {
    if (STATE.status === 'running') updateStats();
  }, 200);

  updateStats();
  Calibration.updateEngineUI();
}

function pauseTest() {
  if (STATE.status === 'running') {
    STATE.status = 'paused';
    STATE.elapsedPaused += Date.now() - STATE.startTime;
    D.pauseBanner.classList.add('visible');
    D.stage.classList.remove('running');
    D.pauseBtn.innerHTML = '<i class="fa-solid fa-play"></i> Resume';
    clearInterval(STATE.timerInterval);
  } else if (STATE.status === 'paused') {
    STATE.status = 'running';
    STATE.startTime = Date.now();
    D.pauseBanner.classList.remove('visible');
    D.stage.classList.add('running');
    D.pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    D.ghostInput.focus();
    STATE.timerInterval = setInterval(() => {
      if (STATE.status === 'running') updateStats();
    }, 200);
  }
}

function restartTest() { resetState(); startTest(); }

function resetState() {
  clearInterval(STATE.timerInterval);
  STATE.timerInterval = null;
  STATE.status = 'idle';
  STATE.currentWordIndex = 0;
  STATE.currentInput = '';
  STATE.wordResults = [];
  STATE.errors = 0;
  STATE.totalKeystrokes = 0;
  STATE.correctKeystrokes = 0;
  STATE.startTime = null;
  STATE.elapsedPaused = 0;
  STATE.sparklineData = [];

  D.stage.classList.remove('running');
  D.pauseBanner.classList.remove('visible');
  D.sparklineBar.style.display = 'none';
  D.ghostInput.value = '';

  D.startBtn.disabled = false;
  D.pauseBtn.disabled = true;
  D.pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';

  D.textDisplay.innerHTML = '<span class="word placeholder-word">Press Start</span>';
  D.wpmValue.textContent = '0';
  D.rawWpmValue.textContent = '0';
  D.accuracyValue.textContent = '100%';
  D.errorsValue.textContent = '0';

  const timeLabel = ['30s','1m','5m'].includes(STATE.mode)
    ? `${STATE.totalTime}s` : '0s';
  D.timerValue.textContent = timeLabel;
}

function finishTest() {
  STATE.status = 'finished';
  clearInterval(STATE.timerInterval);
  D.stage.classList.remove('running');
  D.pauseBanner.classList.remove('visible');
  D.startBtn.disabled = false;
  D.pauseBtn.disabled = true;

  updateStats();

  const { net, raw } = calcWPM();
  const acc = getAccuracy();
  const elapsedMs = (Date.now() - STATE.startTime) + STATE.elapsedPaused;
  const elapsedSec = Math.round(elapsedMs / 1000);

  if (net > STATE.bestWPM) STATE.bestWPM = net;
  if (acc > STATE.bestAccuracy) STATE.bestAccuracy = acc;
  STATE.testsCompleted++;

  STATE.history.unshift({
    wpm: net, rawWpm: raw, accuracy: acc, errors: STATE.errors,
    mode: STATE.mode, time: elapsedSec, date: new Date().toISOString(),
  });
  if (STATE.history.length > 50) STATE.history.pop();

  // Calibration: analyze after test
  Calibration.analyze();
  Calibration.updateEngineUI();

  // Streak: record today
  Store.recordTestToday();
  Streak.updateTopbar();

  Store.saveStats();
  Store.saveCalibration();

  Sound.play('finish');
  if (net >= 35) launchConfetti();

  // Show results modal
  showResults(net, raw, acc, elapsedSec);
}

// ─────────────────────────────────────────────
// 17. RESULTS MODAL
// ─────────────────────────────────────────────
function showResults(wpm, raw, acc, sec) {
  D.resultWPM.textContent = wpm;
  D.resultRawWPM.textContent = raw;
  D.resultAccuracy.textContent = `${acc}%`;
  D.resultErrors.textContent = STATE.errors;
  D.resultTime.textContent = `${sec}s`;
  D.resultBestWPM.textContent = STATE.bestWPM;

  D.resultsBadge.textContent =
    wpm >= 120 ? '🚀' : wpm >= 80 ? '🏆' : wpm >= 60 ? '⭐' : wpm >= 40 ? '👍' : '💪';

  D.resultsOverlay.classList.add('visible');

  // Chart from sparkline
  const t0 = STATE.sparklineData[0]?.time || Date.now();
  const chartData = STATE.sparklineData.map(d => ({
    elapsed: Math.round((d.time - t0) / 1000),
    wpm: d.wpm,
  }));
  setTimeout(() => drawResultsChart(chartData), 60);

  // Calibration insight
  const insight = Calibration.getInsight(wpm);
  if (insight) {
    D.calibrationInsightText.textContent = insight;
    D.calibrationInsight.style.display = 'flex';
  } else {
    D.calibrationInsight.style.display = 'none';
  }
}

function hideResults() {
  D.resultsOverlay.classList.remove('visible');
}

// ─────────────────────────────────────────────
// 18. MODE / CATEGORY / FONT SIZE
// ─────────────────────────────────────────────
function setMode(mode) {
  if (STATE.status === 'running' || STATE.status === 'paused') return;
  STATE.mode = mode;
  D.modePills.forEach(p => p.classList.toggle('active', p.dataset.mode === mode));

  D.wcPicker.style.display = mode === 'wordCount' ? 'flex' : 'none';
  D.customArea.style.display = mode === 'custom' ? 'flex' : 'none';

  switch (mode) {
    case '30s': STATE.totalTime = 30; break;
    case '1m':  STATE.totalTime = 60; break;
    case '5m':  STATE.totalTime = 300; break;
  }
  const t = ['30s','1m','5m'].includes(mode) ? `${STATE.totalTime}s` : '0s';
  D.timerValue.textContent = t;
  Store.saveSettings();
}

function setCategory(cat) {
  STATE.category = cat;
  D.catPills.forEach(p => p.classList.toggle('active', p.dataset.category === cat));
  Store.saveSettings();
}

const FONT_SIZES = { small: '1.1rem', medium: '1.45rem', large: '1.85rem' };
function setFontSize(level) {
  STATE.fontSizeLevel = level;
  document.documentElement.style.setProperty('--typing-size', FONT_SIZES[level]);
  D.fontPills.forEach(p => p.classList.toggle('active', p.dataset.size === level));
  Store.saveSettings();
}

// ─────────────────────────────────────────────
// 19. LANGUAGE
// ─────────────────────────────────────────────
const LANG_DIR = { en: 'ltr', ar: 'rtl', hi: 'ltr', fr: 'ltr' };
const LANG_FONT = {
  en: "'JetBrains Mono', monospace",
  ar: "'Noto Sans Arabic', 'JetBrains Mono', monospace",
  hi: "'Noto Sans Devanagari', 'JetBrains Mono', monospace",
  fr: "'JetBrains Mono', monospace",
};

function setLanguage(lang) {
  STATE.language = lang;
  // RTL support for Arabic
  document.documentElement.dir = LANG_DIR[lang] || 'ltr';
  // Apply appropriate font for the script
  document.documentElement.style.setProperty('--font-mono', LANG_FONT[lang]);
  // Update pill UI
  document.querySelectorAll('.lang-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.lang === lang);
  });
  // Disable English-only category pills when non-English
  const isEnglish = lang === 'en';
  document.querySelectorAll('[data-category="tech"],[data-category="quotes"],[data-category="general"],[data-category="mixed"]').forEach(p => {
    p.disabled = !isEnglish;
    p.style.opacity = isEnglish ? '' : '0.4';
    p.title = isEnglish ? '' : 'Switch to English to use this category';
  });
  if (!isEnglish && !['bank','custom'].includes(STATE.category)) {
    setCategory('mixed'); // reset category visually but pool uses lang
  }
  Store.saveSettings();
}


function setTheme(theme) {
  STATE.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#080810' : '#f0f0f8';
  Store.saveSettings();
}

function toggleTheme() {
  setTheme(STATE.theme === 'dark' ? 'light' : 'dark');
}

// ─────────────────────────────────────────────
// 20. PANELS
// ─────────────────────────────────────────────
function openPanel(id) {
  closeAllPanels();
  if (!id) return;
  const panel = id === 'history' ? D.historyPanel : id === 'bank' ? D.bankPanel : null;
  if (!panel) return;
  panel.classList.add('open');
  D.panelBackdrop.classList.add('visible');
}

function closeAllPanels() {
  D.historyPanel.classList.remove('open');
  D.bankPanel.classList.remove('open');
  D.panelBackdrop.classList.remove('visible');
}

function renderHistory() {
  if (STATE.history.length === 0) {
    D.historyList.innerHTML = '<p class="panel-empty">No tests completed yet.</p>';
    return;
  }
  D.historyList.innerHTML = STATE.history.map(r => {
    const date = new Date(r.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    return `
      <div class="history-item">
        <div class="hi-stat"><span class="hi-label">WPM</span><span class="hi-value">${r.wpm}</span></div>
        <div class="hi-stat"><span class="hi-label">Acc</span><span class="hi-value">${r.accuracy}%</span></div>
        <div class="hi-stat"><span class="hi-label">Err</span><span class="hi-value">${r.errors}</span></div>
        <div class="hi-date">${date} · ${r.mode}</div>
      </div>`;
  }).join('');
}

// ─────────────────────────────────────────────
// 21. CAPS LOCK
// ─────────────────────────────────────────────
function handleCapsLock(e) {
  if (e.getModifierState) {
    D.capslockBar.classList.toggle('visible', e.getModifierState('CapsLock'));
  }
}

// ─────────────────────────────────────────────
// MOBILE BETA (EmailJS)
// ─────────────────────────────────────────────
(function() {
  if (typeof emailjs !== 'undefined') emailjs.init('5wovTyHZRI9p6NsEz');
})();

function openMobileBeta() {
  D.mobileBetaOverlay.classList.add('visible');
  D.mobileBetaEmail.value = '';
  D.mobileBetaMsg.textContent = '';
  D.mobileBetaMsg.className = 'beta-msg';
  D.mobileBetaSubmit.disabled = false;
  D.mobileBetaSubmit.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Join Beta';
  setTimeout(() => D.mobileBetaEmail.focus(), 80);
}

function closeMobileBeta() {
  D.mobileBetaOverlay.classList.remove('visible');
}

function submitMobileBeta() {
  const email = D.mobileBetaEmail.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    D.mobileBetaMsg.textContent = 'Please enter a valid email address.';
    D.mobileBetaMsg.className = 'beta-msg beta-msg-error';
    return;
  }
  D.mobileBetaSubmit.disabled = true;
  D.mobileBetaSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  emailjs.send('service_q4nkvor', 'template_9zlz2h1', {
    user_email: email,
    reply_to: email
  }).then(() => {
    D.mobileBetaMsg.textContent = '✓ You\'re on the list! We\'ll be in touch soon.';
    D.mobileBetaMsg.className = 'beta-msg beta-msg-success';
    D.mobileBetaEmail.value = '';
    D.mobileBetaSubmit.innerHTML = '<i class="fa-solid fa-check"></i> Done!';
    setTimeout(closeMobileBeta, 2400);
  }).catch(() => {
    D.mobileBetaMsg.textContent = 'Something went wrong — please try again.';
    D.mobileBetaMsg.className = 'beta-msg beta-msg-error';
    D.mobileBetaSubmit.disabled = false;
    D.mobileBetaSubmit.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Join Beta';
  });
}

// ─────────────────────────────────────────────
// 22. EVENT LISTENERS
// ─────────────────────────────────────────────
function attach() {
  // Typing
  D.ghostInput.addEventListener('input', handleInput);
  D.ghostInput.addEventListener('paste', e => e.preventDefault());
  D.ghostInput.addEventListener('keydown', handleCapsLock);
  D.ghostInput.addEventListener('keyup', handleCapsLock);
  D.stage.addEventListener('click', () => STATE.status === 'running' && D.ghostInput.focus());

  // Main buttons
  D.startBtn.addEventListener('click', startTest);
  D.pauseBtn.addEventListener('click', pauseTest);
  D.restartBtn.addEventListener('click', restartTest);

  // Mode pills
  D.modePills.forEach(p => p.addEventListener('click', () => setMode(p.dataset.mode)));

  // Category pills
  D.catPills.forEach(p => p.addEventListener('click', () => setCategory(p.dataset.category)));

  // Word count pills
  D.wcPills.forEach(p => p.addEventListener('click', () => {
    STATE.wordCount = parseInt(p.dataset.count);
    D.wcPills.forEach(b => b.classList.toggle('active', b === p));
    Store.saveSettings();
  }));

  // Font size
  D.fontPills.forEach(p => p.addEventListener('click', () => setFontSize(p.dataset.size)));

  // Language pills
  document.querySelectorAll('.lang-pill').forEach(p => {
    p.addEventListener('click', () => setLanguage(p.dataset.lang));
  });

  // Custom text
  D.customConfirm.addEventListener('click', () => {
    const txt = D.customTextarea.value.trim();
    if (txt) {
      STATE.customText = txt;
      setCategory('custom');
    }
  });

  // Theme & sound
  D.themeToggle.addEventListener('click', toggleTheme);
  D.soundToggle.addEventListener('click', () => {
    STATE.soundEnabled = !STATE.soundEnabled;
    D.soundToggle.classList.toggle('active', STATE.soundEnabled);
    D.soundIcon.className = STATE.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    Store.saveSettings();
  });

  // Streak
  D.streakBtn.addEventListener('click', () => {
    const open = D.streakSection.style.display !== 'none';
    D.streakSection.style.display = open ? 'none' : 'block';
    if (!open) { Streak.renderGrid(); }
  });
  D.streakClose.addEventListener('click', () => { D.streakSection.style.display = 'none'; });

  // Calibration button — toggle active
  D.calibrationBtn.addEventListener('click', () => {
    STATE.calibration.active = !STATE.calibration.active;
    if (!STATE.calibration.active) {
      // manual override: clear weak words for this session
    }
    Calibration.updateEngineUI();
    Store.saveCalibration();
  });

  // History panel
  D.historyBtn.addEventListener('click', () => { renderHistory(); openPanel('history'); });
  D.historyClose.addEventListener('click', closeAllPanels);
  D.historyClear.addEventListener('click', () => {
    if (!confirm('Clear all history?')) return;
    STATE.history = []; STATE.testsCompleted = 0;
    STATE.bestWPM = 0; STATE.bestAccuracy = 0;
    Store.saveStats(); renderHistory();
  });

  // Bank panel
  D.bankBtn.addEventListener('click', () => { Bank.render(); openPanel('bank'); });
  D.bankClose.addEventListener('click', closeAllPanels);
  D.bankCategoryBtn.addEventListener('click', () => {
    if (STATE.selectedBankId) { setCategory('bank'); }
    else { Bank.render(); openPanel('bank'); }
  });
  D.bankSave.addEventListener('click', () => {
    const ok = Bank.save(D.bankTitleInput.value, D.bankTextarea.value);
    if (ok) { D.bankTitleInput.value = ''; D.bankTextarea.value = ''; }
  });
  D.bankList.addEventListener('click', e => {
    const del = e.target.closest('[data-del]');
    if (del) { e.stopPropagation(); Bank.delete(del.dataset.del); return; }
    const item = e.target.closest('.bank-item');
    if (item) Bank.select(item.dataset.id);
  });

  // Backdrop
  D.panelBackdrop.addEventListener('click', closeAllPanels);

  // Pause banner resume button
  D.pauseResumeBtn.addEventListener('click', () => {
    if (STATE.status === 'paused') pauseTest();
  });

  // Features modal
  D.featuresBtn.addEventListener('click', () => D.featuresOverlay.classList.add('visible'));
  D.featuresClose.addEventListener('click', () => D.featuresOverlay.classList.remove('visible'));
  D.featuresOverlay.addEventListener('click', e => {
    if (e.target === D.featuresOverlay) D.featuresOverlay.classList.remove('visible');
  });

  // Mobile Beta modal
  D.mobileBetaClose.addEventListener('click', closeMobileBeta);
  D.mobileBetaOverlay.addEventListener('click', e => { if (e.target === D.mobileBetaOverlay) closeMobileBeta(); });
  D.mobileBetaEmail.addEventListener('keydown', e => { if (e.key === 'Enter') submitMobileBeta(); });
  D.mobileBetaSubmit.addEventListener('click', submitMobileBeta);

  // Results modal
  D.resultsTryAgain.addEventListener('click', () => { hideResults(); startTest(); });
  D.resultsClose.addEventListener('click', hideResults);
  D.resultsOverlay.addEventListener('click', e => e.target === D.resultsOverlay && hideResults());

  // Auto-pause on blur
  window.addEventListener('blur', () => STATE.status === 'running' && pauseTest());

  // Caps lock detection
  document.addEventListener('keydown', handleCapsLock);
  document.addEventListener('keyup', handleCapsLock);

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    const active = document.activeElement;

    // Never intercept keys while the user is actively typing in the test
    const isTypingNow = (active === D.ghostInput) && STATE.status === 'running';
    // Never intercept keys while user is filling in a text field
    const isTextarea = active === D.customTextarea || active === D.bankTextarea || active === D.bankTitleInput;

    // Ctrl/Cmd+R always restarts regardless of focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') { e.preventDefault(); restartTest(); return; }

    // All other shortcuts are skipped while typing or inside a textarea
    if (isTypingNow || isTextarea) return;

    if (e.key === 'p' || e.key === 'P') {
      if (STATE.status === 'running' || STATE.status === 'paused') { e.preventDefault(); pauseTest(); }
    }
    if (e.key === 'Enter' && (STATE.status === 'idle' || STATE.status === 'finished')) {
      e.preventDefault(); startTest();
    }
    if (e.key === 'Escape') {
      if (D.mobileBetaOverlay.classList.contains('visible')) { closeMobileBeta(); return; }
      if (D.featuresOverlay.classList.contains('visible')) { D.featuresOverlay.classList.remove('visible'); return; }
      if (D.resultsOverlay.classList.contains('visible')) { hideResults(); return; }
      if (D.historyPanel.classList.contains('open') || D.bankPanel.classList.contains('open')) { closeAllPanels(); return; }
      if (D.streakSection.style.display !== 'none') { D.streakSection.style.display = 'none'; return; }
      if (STATE.status !== 'idle') { e.preventDefault(); resetState(); }
    }
  });
}

// ─────────────────────────────────────────────
// 23. INIT
// ─────────────────────────────────────────────
function init() {
  Store.loadAll();

  // Apply theme
  setTheme(STATE.theme);

  // Apply font size
  setFontSize(STATE.fontSizeLevel);

  // Apply language
  setLanguage(STATE.language || 'en');

  // Apply mode
  setMode(STATE.mode);

  // Apply category
  setCategory(STATE.category);

  // Apply word count pill
  D.wcPills.forEach(p => p.classList.toggle('active', parseInt(p.dataset.count) === STATE.wordCount));

  // Apply sound
  if (STATE.soundEnabled) {
    D.soundToggle.classList.add('active');
    D.soundIcon.className = 'fa-solid fa-volume-high';
  }

  // Calibration UI
  Calibration.analyze();
  Calibration.updateEngineUI();

  // Streak topbar
  Streak.updateTopbar();

  // Bank render (lazy — only when panel opens)
  // But update Bank category btn indicator
  if (STATE.selectedBankId) {
    const entry = STATE.textBank.find(e => e.id === STATE.selectedBankId);
    if (entry) STATE.customText = entry.text;
  }

  attach();
  resetState();

  console.log('%cTypeRush v3 initialized', 'color:#7c6aff;font-weight:bold;font-size:14px');
  console.log('Calibration active:', STATE.calibration.active, '| Best WPM:', STATE.bestWPM);
}

document.addEventListener('DOMContentLoaded', init);
