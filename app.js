const courseLevels = [
  { id: "A1", name: "Absolute beginner", subtitle: "Start here", intro: "Build your first Spanish sounds, words, and short sentences.", icon: "🌱", lessons: [
    { id: "a1-sounds", icon: "🔤", title: "Alphabet & pronunciation", duration: "5 min", description: "Meet the Spanish alphabet, vowel sounds, and the ñ.", vocabulary: [["A, E, I, O, U", "Spanish vowels have clear, steady sounds"], ["ñ", "A distinct Spanish letter, as in mañana"], ["h", "Silent in hola"], ["j", "A breathy sound, as in Javier"]], questions: [
      { prompt: "Which letter is silent in “hola”?", choices: ["h", "o", "l"], answer: 0, tip: "The h is silent, so hola starts with an “o” sound." },
      { prompt: "How are Spanish vowels usually pronounced?", choices: ["They change sound often", "They have clear, steady sounds", "They are always silent"], answer: 1, tip: "Spanish vowels keep consistent sounds, which makes reading easier." }
    ]},
    { id: "a1-first-words", icon: "👋", title: "Greetings, numbers & introductions", duration: "7 min", description: "Say hello, introduce yourself, count, and use simple sentences.", vocabulary: [["Hola, me llamo Ana", "Hello, my name is Ana"], ["¿Cómo te llamas?", "What is your name?"], ["uno, dos, tres", "one, two, three"], ["lunes / enero", "Monday / January"]], questions: [
      { prompt: "How do you say “My name is Ana”?", choices: ["Me llamo Ana", "Tengo Ana", "Soy llamas Ana"], answer: 0, tip: "Use “Me llamo…” to introduce your name." },
      { prompt: "Which word means “Monday”?", choices: ["enero", "lunes", "tres"], answer: 1, tip: "“Lunes” means Monday; “enero” means January." }
    ]}
  ]},
  { id: "A2", name: "Elementary", subtitle: "Everyday Spanish", intro: "Handle familiar conversations, daily plans, and simple past events.", icon: "🌿", lessons: [
    { id: "a2-daily-life", icon: "☕", title: "Everyday conversations", duration: "7 min", description: "Ask and answer familiar questions about your day and routine.", vocabulary: [["¿A qué hora…?", "At what time…?"], ["Normalmente trabajo", "I usually work"], ["¿Qué haces hoy?", "What are you doing today?"], ["Me gusta…", "I like…"]], questions: [
      { prompt: "What does “¿Qué haces hoy?” mean?", choices: ["What did you do yesterday?", "What are you doing today?", "Where do you live?"], answer: 1, tip: "“Hoy” means today; “¿Qué haces?” asks what you are doing." },
      { prompt: "How do you say “I like music”?", choices: ["Me gusta la música", "Soy la música", "Tengo la música"], answer: 0, tip: "Use “Me gusta…” to say that you like something." }
    ]},
    { id: "a2-people-and-plans", icon: "🛍️", title: "Food, family & past basics", duration: "8 min", description: "Shop and order politely, talk about family, and describe a past event.", vocabulary: [["Quisiera una mesa", "I would like a table"], ["¿Cuánto cuesta?", "How much does it cost?"], ["Mi hermana vive aquí", "My sister lives here"], ["Ayer comí paella", "Yesterday I ate paella"]], questions: [
      { prompt: "Which is a polite way to order?", choices: ["Quisiera un café, por favor", "Dame café ahora", "Soy un café"], answer: 0, tip: "“Quisiera…” is a polite way to make a request." },
      { prompt: "Which sentence describes a completed past action?", choices: ["Ayer comí paella", "Mañana como paella", "Siempre como paella"], answer: 0, tip: "“Ayer comí” uses the preterite for a completed action yesterday." }
    ]}
  ]},
  { id: "B1", name: "Intermediate", subtitle: "Express yourself", intro: "Share experiences and opinions, and connect your thoughts in longer sentences.", icon: "🌳", lessons: [
    { id: "b1-stories", icon: "📖", title: "Past experiences & storytelling", duration: "8 min", description: "Tell what happened and add background details to a story.", vocabulary: [["El año pasado viajé…", "Last year I traveled…"], ["Cuando era pequeño…", "When I was little…"], ["De repente", "Suddenly"], ["Mientras tanto", "Meanwhile"]], questions: [
      { prompt: "Which tense fits a completed trip last year?", choices: ["viajaba", "viajé", "viajaré"], answer: 1, tip: "A completed event at a known past time uses “viajé.”" },
      { prompt: "What does “mientras tanto” mean?", choices: ["Meanwhile", "At first", "Finally"], answer: 0, tip: "“Mientras tanto” connects events happening at the same time." }
    ]},
    { id: "b1-opinions", icon: "💬", title: "Opinions & longer sentences", duration: "8 min", description: "Explain your point of view and give reasons with useful connectors.", vocabulary: [["En mi opinión…", "In my opinion…"], ["Estoy de acuerdo", "I agree"], ["Sin embargo", "However"], ["Lo recomiendo porque…", "I recommend it because…"]], questions: [
      { prompt: "Which connector introduces a contrast?", choices: ["Por ejemplo", "Sin embargo", "Además"], answer: 1, tip: "“Sin embargo” means “however” and introduces a contrast." },
      { prompt: "How do you say “In my opinion”?", choices: ["En mi opinión", "A mi hora", "Por mi parte de"], answer: 0, tip: "“En mi opinión” is a natural way to introduce your view." }
    ]}
  ]},
  { id: "B2", name: "Upper intermediate", subtitle: "Speak with nuance", intro: "Sound more natural, discuss complex ideas, and communicate professionally.", icon: "🌺", lessons: [
    { id: "b2-natural-speech", icon: "🎧", title: "Natural speech, grammar & media", duration: "9 min", description: "Understand natural-speed speech and use the subjunctive and conditional to add nuance.", vocabulary: [["O sea", "I mean / that is"], ["Si tuviera tiempo…", "If I had time…"], ["Aunque sea difícil", "Even if it is difficult"], ["Me suena", "It rings a bell"]], questions: [
      { prompt: "What does “me suena” usually mean in conversation?", choices: ["It rings a bell", "It sounds too loud", "I am singing"], answer: 0, tip: "“Me suena” often means something sounds familiar." },
      { prompt: "Which phrase means “when all is said and done”?", choices: ["A lo mejor", "Al fin y al cabo", "Por lo visto"], answer: 1, tip: "“Al fin y al cabo” sums up a point: “when all is said and done.”" }
    ]},
    { id: "b2-debate-work", icon: "🤝", title: "Films, podcasts & professional debate", duration: "9 min", description: "Follow authentic media, discuss opinions, and use formal language at work.", vocabulary: [["Me suena", "It rings a bell"], ["Desde mi punto de vista…", "From my point of view…"], ["No obstante", "Nevertheless"], ["Le agradecería que…", "I would appreciate it if you…"]], questions: [
      { prompt: "Which is the more formal way to make a request?", choices: ["Dame eso", "Le agradecería que lo enviara", "Mándamelo ya"], answer: 1, tip: "“Le agradecería que…” is a polite, formal request." },
      { prompt: "What does “no obstante” mean?", choices: ["Nevertheless", "In addition", "For instance"], answer: 0, tip: "“No obstante” is a formal connector meaning “nevertheless.”" }
    ]}
  ]},
  { id: "C1", name: "Advanced", subtitle: "Fluent & precise", intro: "Handle demanding conversations and write with a clear, flexible voice.", icon: "✨", lessons: [
    { id: "c1-complex-talk", icon: "🧠", title: "Complex conversations & fluency", duration: "10 min", description: "Follow layered arguments, express subtle positions, and adapt your register.", vocabulary: [["A decir verdad…", "To tell the truth…"], ["Por más que…", "No matter how much…"], ["Cabe destacar que…", "It is worth noting that…"], ["Dar por sentado", "To take for granted"]], questions: [
      { prompt: "What does “dar por sentado” mean?", choices: ["To take for granted", "To give a seat", "To summarize"], answer: 0, tip: "“Dar por sentado” means to assume or take something for granted." },
      { prompt: "Which phrase means “It is worth noting that…”?", choices: ["Cabe destacar que…", "Da la casualidad…", "Que yo sepa…"], answer: 0, tip: "“Cabe destacar que…” highlights an important point." }
    ]},
    { id: "c1-writing-culture", icon: "📝", title: "Professional writing & cultural nuance", duration: "10 min", description: "Refine formal writing and understand expressions whose meaning depends on context.", vocabulary: [["Adjunto encontrará…", "Please find attached…"], ["Quedo a su disposición", "I remain at your disposal"], ["¡Vaya tela!", "What a situation! (colloquial)"], ["No hay mal que por bien no venga", "Every cloud has a silver lining"]], questions: [
      { prompt: "Which phrase is suitable for a formal email sign-off?", choices: ["Quedo a su disposición", "¡Qué fuerte!", "Me mola"], answer: 0, tip: "“Quedo a su disposición” is a courteous formal closing." },
      { prompt: "What does “No hay mal que por bien no venga” convey?", choices: ["Every cloud has a silver lining", "Nothing ever changes", "Bad things come in pairs"], answer: 0, tip: "This saying finds a possible good outcome in a difficult situation." }
    ]}
  ]},
  { id: "C2", name: "Mastery", subtitle: "Near-native command", intro: "Explore precision, subtext, sophisticated vocabulary, and high-level communication.", icon: "🏆", lessons: [
    { id: "c2-subtext", icon: "🎭", title: "Subtext, idioms & subtle meaning", duration: "10 min", description: "Read between the lines and recognize irony, register, and regional expressions.", vocabulary: [["No es moco de pavo", "It is no small matter"], ["Estar en las nubes", "To have your head in the clouds"], ["Conque esas tenemos…", "So that's how it is…"], ["Dicho sea de paso", "Incidentally"]], questions: [
      { prompt: "“No es moco de pavo” means that something is…", choices: ["No small matter", "A silly mistake", "Easy to understand"], answer: 0, tip: "This idiom emphasizes that something is significant." },
      { prompt: "What does “estar en las nubes” mean figuratively?", choices: ["To be distracted / daydreaming", "To travel by plane", "To feel under the weather"], answer: 0, tip: "Literally “to be in the clouds,” it means to be daydreaming or distracted." }
    ]},
    { id: "c2-presentations", icon: "🎤", title: "Sophisticated presentations & precision", duration: "10 min", description: "Structure persuasive presentations, qualify claims, and choose exact wording.", vocabulary: [["Conviene matizar…", "It is worth qualifying…"], ["A grandes rasgos", "Broadly speaking"], ["En última instancia", "Ultimately"], ["Es menester señalar…", "It is necessary to point out…"]], questions: [
      { prompt: "Which expression means “broadly speaking”?", choices: ["A grandes rasgos", "A duras penas", "De golpe"], answer: 0, tip: "“A grandes rasgos” introduces a general summary." },
      { prompt: "What does “conviene matizar” suggest?", choices: ["It is worth adding nuance", "It should be memorized", "It is time to leave"], answer: 0, tip: "“Matizar” means to qualify or add nuance to a statement." }
    ]}
  ]}
];

const vocabularyEntries = courseLevels.flatMap((level, levelIndex) => level.lessons.flatMap(lesson =>
  lesson.vocabulary.map(([spanish, english], index) => ({ level: level.id, levelIndex, spanish, english, index }))
));

const questionsByLevel = courseLevels.map((level, levelIndex) => {
  const lessonQuestions = level.lessons.flatMap(lesson =>
    lesson.questions.map(question => ({ ...question, prompt: `${level.id} · ${question.prompt}` }))
  );
  const vocabularyQuestions = level.lessons.flatMap(lesson => lesson.vocabulary).map(([spanish, english], index) => {
    const distractors = [...new Set(vocabularyEntries
      .map(entry => entry.english)
      .filter(translation => translation !== english))];
    const correctIndex = (index + levelIndex) % 3;
    const choices = [];
    let distractorIndex = (index * 2 + levelIndex) % distractors.length;
    for (let choiceIndex = 0; choiceIndex < 3; choiceIndex++) {
      if (choiceIndex === correctIndex) {
        choices.push(english);
      } else {
        choices.push(distractors[distractorIndex % distractors.length]);
        distractorIndex++;
      }
    }
    return {
      prompt: `${level.id} · What does “${spanish}” mean?`,
      choices,
      answer: correctIndex,
      tip: `“${spanish}” means “${english}”.`
    };
  });
  return [...lessonQuestions, ...vocabularyQuestions];
});

const testQuestions = questionsByLevel.flatMap(questions => questions.slice(0, 9));
const examQuestions = questionsByLevel.flat();

const dictionary = {
  es: {
    "hola": "hello", "buenos": "good", "días": "morning", "buenas": "good", "tardes": "afternoon", "noches": "night",
    "adiós": "goodbye", "hasta": "until", "mañana": "tomorrow", "gracias": "thank you", "por": "for", "favor": "please",
    "por favor": "please", "muchas": "many", "muchas gracias": "thank you very much", "perdón": "sorry", "disculpe": "excuse me",
    "sí": "yes", "no": "no", "yo": "I", "tú": "you", "usted": "you", "él": "he", "ella": "she", "nosotros": "we",
    "me": "myself", "llamo": "am called", "llamamos": "are called", "cómo": "how", "estás": "are you", "está": "is",
    "están": "are", "estoy": "am", "ser": "to be", "estar": "to be", "soy": "am", "es": "is", "son": "are",
    "qué": "what", "quién": "who", "dónde": "where", "cuándo": "when", "cuánto": "how much", "cuesta": "costs",
    "quisiera": "I would like", "quiero": "I want", "un": "a", "una": "a", "el": "the", "la": "the", "los": "the", "las": "the",
    "café": "coffee", "té": "tea", "agua": "water", "cuenta": "bill", "estación": "station", "baño": "bathroom",
    "izquierda": "left", "derecha": "right", "cerca": "near", "lejos": "far", "calle": "street", "ayuda": "help",
    "hablo": "I speak", "hablas": "you speak", "español": "Spanish", "inglés": "English", "entiendo": "understand",
    "bien": "well", "mal": "badly", "muy": "very", "gusto": "pleasure", "mucho gusto": "nice to meet you",
    "ayer": "yesterday", "fui": "I went / I was", "iba": "I used to go / was going", "era": "I was / used to be",
    "niño": "child", "niña": "child", "estaba": "was", "lloviendo": "raining", "de repente": "suddenly",
    "espero": "I hope", "que": "that", "vengas": "you come", "importante": "important", "estudies": "you study",
    "aunque": "although", "sea": "be", "difícil": "difficult", "ojalá": "hopefully", "llueva": "it rains",
    "dudo": "I doubt", "tenga": "has", "razón": "right", "sin embargo": "however", "hecho": "fact",
    "de hecho": "in fact", "da": "gives", "igual": "same", "echar": "to throw", "menos": "less", "de menos": "to miss",
    "caso": "case", "acaso": "chance", "por si acaso": "just in case", "solía": "used to", "viajar": "travel",
    "comida": "food", "casa": "house", "amigo": "friend", "amiga": "friend", "familia": "family", "tiempo": "time / weather",
    "hoy": "today", "ahora": "now", "deseo": "wish", "necesito": "I need", "necesita": "needs", "quieres": "you want",
    "de": "of / from", "a": "to", "en": "in / on", "con": "with", "para": "for", "y": "and", "pero": "but", "o": "or",
    "mi": "my", "mis": "my", "tu": "your", "su": "your / his / her", "the": "the"
  },
  en: {
    "hello": "hola", "hi": "hola", "good": "bueno", "morning": "mañana", "afternoon": "tarde", "night": "noche",
    "goodbye": "adiós", "bye": "chao", "please": "por favor", "thank": "gracias", "thanks": "gracias",
    "sorry": "perdón", "excuse": "disculpe", "yes": "sí", "no": "no", "i": "yo", "you": "tú", "he": "él",
    "she": "ella", "we": "nosotros", "my": "mi", "name": "nombre", "is": "es", "am": "soy", "are": "estás",
    "how": "cómo", "what": "qué", "where": "dónde", "when": "cuándo", "who": "quién", "much": "mucho",
    "nice": "mucho", "meet": "conocer", "to": "a", "the": "el / la", "a": "un / una", "an": "un / una",
    "coffee": "café", "tea": "té", "water": "agua", "bill": "cuenta", "station": "estación", "bathroom": "baño",
    "left": "izquierda", "right": "derecha", "near": "cerca", "far": "lejos", "street": "calle", "help": "ayuda",
    "speak": "hablar",     "spanish": "español", "english": "inglés", "understand": "entender", "well": "bien",
    "badly": "mal", "very": "muy", "cost": "costar", "costs": "cuesta", "would": "quisiera",
    "like": "gustar", "want": "querer", "food": "comida", "house": "casa",
    "friend": "amigo/a", "family": "familia", "today": "hoy", "tomorrow": "mañana", "yesterday": "ayer",
    "time": "tiempo", "weather": "tiempo", "now": "ahora", "hope": "esperar", "important": "importante",
    "difficult": "difícil", "although": "aunque", "hopefully": "ojalá", "suddenly": "de repente",
    "however": "sin embargo", "fact": "hecho", "same": "igual", "case": "caso", "travel": "viajar",
    "child": "niño/a", "raining": "lloviendo", "used": "solía", "miss": "echar de menos", "in": "en",
    "on": "en", "with": "con", "for": "para", "and": "y", "but": "pero", "or": "o", "that": "que",
    "i hope": "espero", "i would like": "quisiera", "i don't mind": "me da igual"
  }
};

const exactPhrases = {
  es: {
    "¿cómo estás?": "How are you?", "¿cómo está?": "How are you?", "¿cómo te llamas?": "What is your name?",
    "me llamo ana": "My name is Ana.", "mucho gusto": "Nice to meet you.", "buenos días": "Good morning.",
    "buenas tardes": "Good afternoon.", "buenas noches": "Good evening. / Good night.", "hasta luego": "See you later.",
    "hasta mañana": "See you tomorrow.", "por favor": "Please.", "muchas gracias": "Thank you very much.",
    "¿cuánto cuesta?": "How much does it cost?", "¿dónde está la estación?": "Where is the station?",
    "quisiera un café, por favor.": "I would like a coffee, please.", "quisiera un café por favor": "I would like a coffee, please.",
    "no entiendo": "I don't understand.", "¿hablas inglés?": "Do you speak English?", "¿puede ayudarme?": "Can you help me?",
    "¿qué hora es?": "What time is it?", "me da igual": "I don't mind. / It's all the same to me.",
    "echo de menos a mi familia": "I miss my family.", "por si acaso": "Just in case.", "sin embargo": "However.",
    "de hecho": "In fact.", "espero que vengas": "I hope you come.", "es importante que estudies": "It is important that you study.",
    "estaba leyendo cuando llamó": "I was reading when they called.", "ayer fui al museo": "Yesterday I went to the museum."
  },
  en: {
    "hello": "Hola.", "hi": "Hola.", "good morning": "Buenos días.", "good afternoon": "Buenas tardes.",
    "good evening": "Buenas noches.", "good night": "Buenas noches.", "how are you?": "¿Cómo estás?",
    "what is your name?": "¿Cómo te llamas?", "my name is ana.": "Me llamo Ana.", "nice to meet you": "Mucho gusto.",
    "nice to meet you.": "Mucho gusto.", "see you later": "Hasta luego.", "see you tomorrow": "Hasta mañana.",
    "thank you very much": "Muchas gracias.", "how much does it cost?": "¿Cuánto cuesta?",
    "where is the station?": "¿Dónde está la estación?", "i would like a coffee, please.": "Quisiera un café, por favor.",
    "i would like a coffee please": "Quisiera un café, por favor.", "i don't understand": "No entiendo.",
    "do you speak english?": "¿Hablas inglés?", "can you help me?": "¿Puede ayudarme?",
    "what time is it?": "¿Qué hora es?", "i don't mind": "Me da igual.", "i miss my family": "Echo de menos a mi familia.",
    "just in case": "Por si acaso.", "however": "Sin embargo.", "in fact": "De hecho.",
    "i hope you come": "Espero que vengas.", "it is important that you study": "Es importante que estudies."
  }
};

const state = {
  level: "A1",
  currentLesson: null,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  assessmentAnswers: {},
  assessmentSubmitted: false,
  assessmentType: "exam"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const completedLessons = new Set(loadCompletedLessons());

function loadCompletedLessons() {
  try {
    const saved = JSON.parse(localStorage.getItem("viva-completed-lessons") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCompletedLessons() {
  try {
    localStorage.setItem("viva-completed-lessons", JSON.stringify([...completedLessons]));
  } catch {
    showToast("Progress could not be saved in this browser.");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderLessons() {
  const level = courseLevels.find(item => item.id === state.level) || courseLevels[0];
  $("#level-picker").innerHTML = courseLevels.map(item => `<button type="button" class="level-button ${item.id === state.level ? "active" : ""}" data-level="${item.id}" aria-pressed="${item.id === state.level}">
    <strong>${item.id}</strong><span>${escapeHTML(item.name)}</span></button>`).join("");
  $$(".level-button").forEach(button => button.addEventListener("click", () => {
    state.level = button.dataset.level;
    state.currentLesson = null;
    $("#lesson-panel").classList.add("hidden");
    renderLessons();
  }));
  $("#level-summary").innerHTML = `<span class="level-summary-icon" aria-hidden="true">${level.icon}</span><div><strong>Level ${courseLevels.indexOf(level) + 1}: ${level.id} – ${escapeHTML(level.name)}</strong><span>${escapeHTML(level.subtitle)}</span></div>`;
  $("#level-intro").textContent = level.intro;
  $("#lesson-grid").innerHTML = level.lessons.map((lesson, index) => {
    const done = completedLessons.has(lesson.id);
    return `<button type="button" class="lesson-card" data-lesson="${lesson.id}">
      <span class="lesson-card-top"><span class="lesson-emoji" aria-hidden="true">${lesson.icon}</span>
      <span class="lesson-status ${done ? "done" : ""}">${done ? "✓ Completed" : `${index + 1} · ${lesson.duration}`}</span></span>
      <h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.description)}</p>
    </button>`;
  }).join("");
  $$(".lesson-card").forEach(card => card.addEventListener("click", () => openLesson(card.dataset.lesson)));
  $("#streak-count").textContent = completedLessons.size;
}

function openLesson(id) {
  const lesson = courseLevels.flatMap(level => level.lessons).find(item => item.id === id);
  if (!lesson) return;
  state.currentLesson = lesson;
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  renderLessonPanel();
  $("#lesson-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderLessonPanel() {
  const lesson = state.currentLesson;
  if (!lesson) return;
  $("#lesson-panel").classList.remove("hidden");
  $("#lesson-panel").innerHTML = `
    <div class="lesson-panel-header">
      <div><p class="eyebrow">LEVEL ${escapeHTML(state.level)} · LESSON · ${lesson.duration.toUpperCase()}</p><h2>${lesson.icon} ${escapeHTML(lesson.title)}</h2>
      <p class="lesson-description">${escapeHTML(lesson.description)}</p></div>
      <button class="close-lesson" type="button" aria-label="Close lesson">×</button>
    </div>
    <div class="lesson-audio-row"><span>Listen to each Spanish phrase, then repeat it aloud.</span><button class="listen-button" type="button" data-speak="${escapeHTML(lesson.vocabulary.map(([spanish]) => spanish).join(". "))}">▶ Listen to lesson</button></div>
    <div class="vocab-list">${lesson.vocabulary.map(([spanish, english]) => `<div class="vocab-row"><strong>${escapeHTML(spanish)}</strong><span>${escapeHTML(english)}</span><button class="vocab-speak" type="button" data-speak="${escapeHTML(spanish)}" aria-label="Listen to ${escapeHTML(spanish)}">🔊</button></div>`).join("")}</div>
    <div class="quiz-block" id="lesson-quiz"></div>`;
  $(".close-lesson").addEventListener("click", () => $("#lesson-panel").classList.add("hidden"));
  $$(".listen-button, .vocab-speak", $("#lesson-panel")).forEach(button => button.addEventListener("click", () => speakSpanish(button.dataset.speak)));
  renderLessonQuiz();
}

function renderLessonQuiz() {
  const root = $("#lesson-quiz");
  const lesson = state.currentLesson;
  if (state.quizIndex >= lesson.questions.length) {
    const passed = state.quizScore >= Math.ceil(lesson.questions.length / 2);
    if (passed) {
      completedLessons.add(lesson.id);
      saveCompletedLessons();
      $("#streak-count").textContent = completedLessons.size;
      renderLessons();
    }
    root.innerHTML = `<div class="exam-result"><div class="result-mark">${passed ? "✓" : "↻"}</div>
      <h2>${passed ? "¡Muy bien!" : "Keep practicing!"}</h2>
      <p>You got ${state.quizScore} out of ${lesson.questions.length} correct.${passed ? " Lesson complete — you're building great momentum." : " Try the lesson once more to mark it complete."}</p>
      <button class="primary-button" id="retry-lesson" type="button">${passed ? "Practice again" : "Try again"}</button></div>`;
    $("#retry-lesson").addEventListener("click", () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      renderLessonQuiz();
    });
    return;
  }
  const question = lesson.questions[state.quizIndex];
  root.innerHTML = `<div class="quiz-title-row"><h3>Quick check</h3><span>Question ${state.quizIndex + 1} of ${lesson.questions.length}</span></div>
    <p class="question-text">${escapeHTML(question.prompt)}</p>
    <div class="answer-list">${question.choices.map((choice, index) => `<button class="answer-option" type="button" data-answer="${index}">${escapeHTML(choice)}</button>`).join("")}</div>
    <p class="quiz-feedback" id="quiz-feedback"></p>
    <button class="primary-button quiz-next hidden" id="quiz-next" type="button">${state.quizIndex === lesson.questions.length - 1 ? "See my score" : "Next question"} →</button>`;
  $$(".answer-option", root).forEach(button => button.addEventListener("click", () => {
    if (state.quizAnswered) return;
    state.quizAnswered = true;
    const selected = Number(button.dataset.answer);
    const correct = selected === question.answer;
    if (correct) state.quizScore++;
    $$(".answer-option", root).forEach((option, index) => {
      option.disabled = true;
      if (index === question.answer) option.classList.add("correct");
      else if (index === selected) option.classList.add("incorrect");
    });
    $("#quiz-feedback").textContent = correct
      ? `Correct! ${question.tip}`
      : `Not quite. The correct answer is “${question.choices[question.answer]}”. ${question.tip}`;
    $("#quiz-feedback").classList.toggle("incorrect", !correct);
    $("#quiz-feedback").classList.toggle("correct", correct);
    $("#quiz-next").classList.remove("hidden");
  }));
  $("#quiz-next").addEventListener("click", () => {
    state.quizIndex++;
    state.quizAnswered = false;
    renderLessonQuiz();
  });
}

function showPage(name) {
  $$(".page").forEach(page => page.classList.toggle("hidden", page.id !== `${name}-page`));
  $$(".page").forEach(page => page.classList.toggle("active", page.id === `${name}-page`));
  $$(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.page === name));
  const labels = { learn: "Your learning path", translate: "Translator", test: "Practice test", exam: "Final exam" };
  $("#breadcrumb-current").textContent = labels[name];
  if (name === "test" || name === "exam") renderAssessment(name);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAssessment(type) {
  state.assessmentType = type;
  state.assessmentAnswers = {};
  state.assessmentSubmitted = false;
  const questions = type === "test" ? testQuestions : examQuestions;
  const root = $(`#${type}-card`);
  root.innerHTML = `<div class="exam-progress"><span>${questions.length} questions</span><div class="progress-track"><div class="progress-fill" style="width:0%"></div></div><span>A1–C2</span></div>
    ${questions.map((question, index) => `<section class="exam-question">
      <h3>${index + 1}. ${escapeHTML(question.prompt)}</h3>
      <div class="answer-list">${question.choices.map((choice, choiceIndex) => `<button class="answer-option" type="button" data-question="${index}" data-answer="${choiceIndex}">${escapeHTML(choice)}</button>`).join("")}</div>
    </section>`).join("")}
    <div class="exam-submit-row"><button class="primary-button" id="submit-${type}" type="button" disabled>Answer every question</button></div>`;
  $$(".answer-option", root).forEach(button => button.addEventListener("click", () => {
    if (state.assessmentSubmitted) return;
    const questionIndex = Number(button.dataset.question);
    state.assessmentAnswers[questionIndex] = Number(button.dataset.answer);
    $$(`.answer-option[data-question="${questionIndex}"]`, root).forEach(option => {
      option.classList.remove("selected");
      option.style.borderColor = "";
      option.style.background = "";
    });
    button.classList.add("selected");
    button.style.borderColor = "#c653a4";
    button.style.background = "#fff6fc";
    const count = Object.keys(state.assessmentAnswers).length;
    $(".progress-fill", root).style.width = `${count / questions.length * 100}%`;
    const submit = $(`#submit-${type}`);
    submit.disabled = count !== questions.length;
    submit.textContent = count === questions.length ? "Check my answers →" : `Answer every question (${count}/${questions.length})`;
  }));
  $(`#submit-${type}`).addEventListener("click", finishAssessment);
}

function finishAssessment() {
  state.assessmentSubmitted = true;
  const type = state.assessmentType;
  const questions = type === "test" ? testQuestions : examQuestions;
  const root = $(`#${type}-card`);
  const score = questions.reduce((total, question, index) => total + (state.assessmentAnswers[index] === question.answer ? 1 : 0), 0);
  const passed = score >= Math.ceil(questions.length * 0.7);
  $$(".exam-question", root).forEach((section, index) => {
    const selected = state.assessmentAnswers[index];
    $$(".answer-option", section).forEach((button, choiceIndex) => {
      button.disabled = true;
      button.classList.remove("selected");
      button.style.borderColor = "";
      button.style.background = "";
      if (choiceIndex === questions[index].answer) button.classList.add("correct");
      else if (choiceIndex === selected) button.classList.add("incorrect");
    });
    const feedback = document.createElement("p");
    const correct = selected === questions[index].answer;
    feedback.className = `exam-feedback ${correct ? "correct" : "incorrect"}`;
    feedback.textContent = correct
      ? "Correct!"
      : `Not quite. The correct answer is “${questions[index].choices[questions[index].answer]}”.`;
    section.append(feedback);
  });
  const result = document.createElement("div");
  result.className = "exam-result";
  const assessmentName = type === "test" ? "practice test" : "exam";
  result.innerHTML = `<div class="result-mark">${passed ? "✦" : "↻"}</div><h2>${passed ? "¡Excelente trabajo!" : "Nice effort!"}</h2>
    <p>You scored ${score} out of ${questions.length}. ${passed ? "You're ready for your next Spanish adventure." : "Review the answers above, then give it another go."}</p>
    <button class="primary-button" id="retry-${type}" type="button">Take the ${assessmentName} again</button>`;
  root.append(result);
  $(`#retry-${type}`).addEventListener("click", () => renderAssessment(type));
}

function normalizeText(text) {
  return text.toLocaleLowerCase().trim().replace(/^[¿¡]+/, "").replace(/[.!?¿¡,;:]+$/g, "").replace(/\s+/g, " ").trim();
}

function translateText(text, from) {
  const normalized = normalizeText(text);
  const exact = Object.entries(exactPhrases[from]).find(([phrase]) => normalizeText(phrase) === normalized)?.[1];
  if (exact) return { text: exact, partial: false };
  const sourceDictionary = dictionary[from];
  const matches = [];
  let unknown = false;
  const tokens = text.match(/[\p{L}]+(?:['’][\p{L}]+)*/gu) || [];
  if (!tokens.length) return { text: "", partial: false };
  const inputWords = text.split(/([\p{L}]+(?:['’][\p{L}]+)*)/gu);
  const translated = inputWords.map(part => {
    if (!/^[\p{L}]+(?:['’][\p{L}]+)*$/u.test(part)) return part;
    const word = part.toLocaleLowerCase();
    if (sourceDictionary[word]) {
      matches.push(word);
      return sourceDictionary[word];
    }
    unknown = true;
    return part;
  }).join("");
  if (!matches.length) return { text: "Sorry, this phrase isn't in the offline phrasebook yet. Try a common phrase or shorter words.", partial: true };
  return { text: translated, partial: unknown };
}

function runTranslation() {
  const input = $("#translation-input").value.trim();
  if (!input) {
    $("#translation-output").textContent = "Type a word or sentence to get started.";
    $("#translation-note").textContent = "";
    return;
  }
  const from = $("#source-language").value;
  const to = $("#target-language").value;
  const result = translateText(input, from);
  $("#translation-output").textContent = result.text;
  $("#translation-note").textContent = result.partial
    ? "Phrasebook mode: known words are translated; unknown words are left as written. Exact common phrases give the most natural translation."
    : "Offline phrasebook translation";
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function speakSpanish(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast("Spoken audio is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.88;
  const spanishVoice = window.speechSynthesis.getVoices().find(voice => voice.lang.toLowerCase().startsWith("es"));
  if (spanishVoice) utterance.voice = spanishVoice;
  utterance.onerror = event => {
    if (event.error !== "canceled" && event.error !== "interrupted") showToast("Could not play speech. Check your browser's audio settings.");
  };
  window.speechSynthesis.speak(utterance);
}

function assistantReply(message) {
  const normalized = normalizeText(message);
  const folded = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const lessonWords = state.currentLesson ? state.currentLesson.vocabulary : [];
  const learnedPhrase = lessonWords.find(([spanish]) => normalizeText(spanish).normalize("NFD").replace(/[\u0300-\u036f]/g, "") === folded);
  if (learnedPhrase) {
    return { spanish: `¡Muy bien! ${learnedPhrase[0]} significa “${learnedPhrase[1]}”. ¿Puedes usarlo en una frase?`, english: "Try using that new phrase in a sentence." };
  }
  if (/\b(hola|buenos dias|buenas tardes|buenas noches)\b/.test(folded)) {
    return { spanish: "¡Hola! Me llamo Olives. ¿Cómo te llamas?", english: "Hello! My name is Olives. What is your name?" };
  }
  if (/\b(como estas|que tal)\b/.test(folded)) {
    return { spanish: "Estoy muy bien, gracias. ¿Y tú?", english: "I'm very well, thank you. And you?" };
  }
  if (/\b(me llamo|soy )/.test(folded)) {
    return { spanish: "¡Mucho gusto! ¿De dónde eres?", english: "Nice to meet you! Where are you from?" };
  }
  if (/\b(gracias|muchas gracias)\b/.test(folded)) {
    return { spanish: "¡De nada! ¿Qué más te gustaría aprender?", english: "You're welcome! What else would you like to learn?" };
  }
  const level = courseLevels.find(item => item.id === state.level) || courseLevels[0];
  return {
    spanish: `¡Buen intento! Estoy practicando contigo en el nivel ${level.id}. ${level.lessons[0].vocabulary[0][0]}. ¿Puedes repetirlo?`,
    english: `Good try! Let's keep practicing ${level.id} Spanish. Try saying: “${level.lessons[0].vocabulary[0][0]}”.`
  };
}

function addAssistantMessage(text, sender, spokenText = "") {
  const message = document.createElement("div");
  message.className = `assistant-message-wrap assistant-message-wrap-${sender}`;
  const bubble = document.createElement("p");
  bubble.className = `assistant-message assistant-message-${sender}`;
  bubble.textContent = text;
  message.append(bubble);
  if (spokenText) {
    const translation = document.createElement("p");
    translation.className = "assistant-translation";
    translation.textContent = spokenText;
    message.append(translation);
  }
  if (sender === "bot") {
    const listen = document.createElement("button");
    listen.type = "button";
    listen.className = "assistant-listen";
    listen.textContent = "🔊 Listen";
    listen.setAttribute("aria-label", "Listen to assistant reply");
    listen.addEventListener("click", () => speakSpanish(text));
    message.append(listen);
  }
  $("#assistant-messages").append(message);
  $("#assistant-messages").scrollTop = $("#assistant-messages").scrollHeight;
}

function sendAssistantMessage(text) {
  const message = text.trim();
  if (!message) return;
  addAssistantMessage(message, "user");
  $("#assistant-input").value = "";
  const reply = assistantReply(message);
  addAssistantMessage(reply.spanish, "bot", reply.english);
  speakSpanish(reply.spanish);
}

let speechRecognition;
function startVoicePractice() {
  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognitionAPI) {
    $("#assistant-status").textContent = "Voice input is not supported here. Type a phrase instead.";
    showToast("Voice input isn't supported in this browser. You can still hear Olives speak.");
    return;
  }
  if (speechRecognition) speechRecognition.abort();
  speechRecognition = new SpeechRecognitionAPI();
  speechRecognition.lang = "es-ES";
  speechRecognition.interimResults = false;
  speechRecognition.maxAlternatives = 1;
  $("#assistant-mic").disabled = true;
  $("#assistant-status").textContent = "Listening… say a phrase in Spanish.";
  speechRecognition.onresult = event => {
    const spoken = event.results[0][0].transcript;
    $("#assistant-input").value = spoken;
    $("#assistant-status").textContent = "I heard you. Here's a reply:";
    sendAssistantMessage(spoken);
  };
  speechRecognition.onerror = event => {
    $("#assistant-status").textContent = event.error === "not-allowed"
      ? "Microphone access was blocked. You can type a phrase instead."
      : "I couldn't hear that clearly. Try again or type a phrase.";
  };
  speechRecognition.onend = () => {
    $("#assistant-mic").disabled = false;
    if ($("#assistant-status").textContent === "Listening… say a phrase in Spanish.") {
      $("#assistant-status").textContent = "No speech detected. Try again or type a phrase.";
    }
  };
  try {
    speechRecognition.start();
  } catch (error) {
    $("#assistant-mic").disabled = false;
    $("#assistant-status").textContent = "Couldn't start the microphone. Check browser permissions and try again.";
  }
}

$$(".nav-link").forEach(link => link.addEventListener("click", () => showPage(link.dataset.page)));
$("#explore-lessons").addEventListener("click", event => {
  event.preventDefault();
  $("#lesson-list").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#translate-button").addEventListener("click", runTranslation);
$("#translation-input").addEventListener("input", () => {
  $("#character-count").textContent = $("#translation-input").value.length;
});
$("#translation-input").addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runTranslation();
});
$("#swap-languages").addEventListener("click", () => {
  const source = $("#source-language");
  const target = $("#target-language");
  [source.value, target.value] = [target.value, source.value];
  updateLanguageLabels();
  const output = $("#translation-output").textContent;
  if (output && output !== "Your translation will appear here.") {
    $("#translation-input").value = output;
    $("#character-count").textContent = Math.min(output.length, 500);
    $("#translation-output").textContent = "Your translation will appear here.";
    $("#translation-note").textContent = "";
  }
});
function updateLanguageLabels() {
  $("#source-label").textContent = $("#source-language").value === "es" ? "SPANISH" : "ENGLISH";
  $("#target-label").textContent = $("#target-language").value === "es" ? "SPANISH" : "ENGLISH";
}
$$(".language-select select").forEach(select => select.addEventListener("change", updateLanguageLabels));
$$(".phrase-chips button").forEach(button => button.addEventListener("click", () => {
  const phrase = button.dataset.phrase;
  const english = /^[A-Za-z]/.test(phrase);
  $("#source-language").value = english ? "en" : "es";
  $("#target-language").value = english ? "es" : "en";
  updateLanguageLabels();
  $("#translation-input").value = phrase;
  $("#character-count").textContent = phrase.length;
  runTranslation();
}));
$("#assistant-toggle").addEventListener("click", () => {
  const open = $("#assistant-panel").classList.contains("hidden");
  $("#assistant-panel").classList.toggle("hidden", !open);
  $("#assistant-toggle").setAttribute("aria-expanded", String(open));
  if (open) $("#assistant-input").focus();
});
$("#assistant-close").addEventListener("click", () => {
  $("#assistant-panel").classList.add("hidden");
  $("#assistant-toggle").setAttribute("aria-expanded", "false");
});
$("#assistant-form").addEventListener("submit", event => {
  event.preventDefault();
  sendAssistantMessage($("#assistant-input").value);
});
$("#assistant-mic").addEventListener("click", startVoicePractice);

renderLessons();
updateLanguageLabels();
