// Yoga Quiz — flashcard game on page1.html. Vanilla JS, no dependencies.
//
// Flow: topic selection → session of up to 7 randomly drawn cards → the
// player thinks, taps the card to flip it and reveal the answer, then marks
// ✓ "I knew it" / ✗ "Not yet" → after the last card a recap shows the score
// and returns to the topic screen.
//
// Card CONTENT (questions/answers, topic titles) lives in page_quotes/*.json
// and is only available in am/en/ru — other site languages fall back to
// English and a localized notice is shown. UI chrome strings live in tr
// (all eight languages) and static labels are handled via data-tr by nav.js.
import { tr } from '../localization.js';
import { getLang } from './nav.js';

const QUIZ_CONTENT_LANGS = ['am', 'en', 'ru'];
const SESSION_SIZE = 7;

// Topic registry — add new quiz JSON files here
const TOPICS = [
    { file: 'page_quotes/quiz1.json', icon: 'fa-scale-balanced' },
];

const startScreen = document.getElementById('quiz-start');
const gameScreen = document.getElementById('quiz-game');
const resultsScreen = document.getElementById('quiz-results');
const topicsContainer = document.getElementById('quiz-topics');
const langNote = document.getElementById('quiz-lang-note');
const topicLabel = document.getElementById('quiz-topic-label');
const counter = document.getElementById('quiz-counter');
const beadsContainer = document.getElementById('quiz-beads');
const card = document.getElementById('quiz-card');
const questionEl = document.getElementById('quiz-question');
const answerEl = document.getElementById('quiz-answer');
const verdict = document.getElementById('quiz-verdict');
const scoreEl = document.getElementById('quiz-score');
const resultsBeads = document.getElementById('quiz-results-beads');

let topics = [];    // [{file, icon, data}]
let session = null; // { topic, cards, index, marks: [bool] }

const contentLang = () => (QUIZ_CONTENT_LANGS.includes(getLang()) ? getLang() : 'en');

const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const show = (screen) => {
    for (const s of [startScreen, gameScreen, resultsScreen]) s.hidden = s !== screen;
};

/* ============ Start screen ============ */

const renderTopics = () => {
    langNote.hidden = QUIZ_CONTENT_LANGS.includes(getLang());
    topicsContainer.textContent = '';
    for (const topic of topics) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-topic';
        btn.innerHTML = `
            <span class="quiz-topic__icon"><i class="fas ${topic.icon}" aria-hidden="true"></i></span>
            <span class="quiz-topic__title"></span>
            <span class="quiz-topic__book"></span>
            <span class="quiz-topic__count"></span>`;
        btn.querySelector('.quiz-topic__title').textContent = topic.data.title[contentLang()];
        btn.querySelector('.quiz-topic__book').textContent = topic.data.book[contentLang()];
        btn.querySelector('.quiz-topic__count').textContent =
            `${tr.quiz.cards_label[getLang()]}: ${topic.data.cards.length}`;
        btn.addEventListener('click', () => startSession(topic));
        topicsContainer.appendChild(btn);
    }
};

const backToTopics = () => {
    session = null;
    renderTopics();
    show(startScreen);
};

/* ============ Game screen ============ */

const startSession = (topic) => {
    session = {
        topic,
        cards: shuffle(topic.data.cards).slice(0, Math.min(SESSION_SIZE, topic.data.cards.length)),
        index: 0,
        marks: [],
    };
    show(gameScreen);
    renderCard();
};

const renderBeads = (container, marks, total, currentIndex) => {
    container.textContent = '';
    for (let i = 0; i < total; i++) {
        const bead = document.createElement('span');
        bead.className = 'quiz-bead';
        if (i < marks.length) bead.classList.add(marks[i] ? 'is-yes' : 'is-no');
        else if (i === currentIndex) bead.classList.add('is-current');
        container.appendChild(bead);
    }
};

// Text-only refresh (used on language switch — must not reset the flip state)
const refreshCardText = () => {
    const c = session.cards[session.index];
    questionEl.textContent = c.q[contentLang()];
    answerEl.textContent = c.a[contentLang()];
    topicLabel.textContent = session.topic.data.title[contentLang()];
    counter.textContent = `${session.index + 1} / ${session.cards.length}`;
};

const renderCard = () => {
    card.classList.remove('is-flipped');
    verdict.hidden = true;
    refreshCardText();
    renderBeads(beadsContainer, session.marks, session.cards.length, session.index);
    // restart the deal-in animation
    card.classList.remove('is-dealt');
    void card.offsetWidth;
    card.classList.add('is-dealt');
};

card.addEventListener('click', () => {
    if (!session || card.classList.contains('is-flipped')) return;
    card.classList.add('is-flipped');
    verdict.hidden = false;
});

const mark = (knewIt) => {
    if (!session || verdict.hidden) return;
    session.marks.push(knewIt);
    if (session.marks.length >= session.cards.length) showResults();
    else {
        session.index++;
        renderCard();
    }
};

document.getElementById('quiz-yes').addEventListener('click', () => mark(true));
document.getElementById('quiz-no').addEventListener('click', () => mark(false));
document.getElementById('quiz-exit').addEventListener('click', backToTopics);

/* ============ Results screen ============ */

const renderScore = () => {
    const total = session.cards.length;
    const knew = session.marks.filter(Boolean).length;
    scoreEl.textContent = tr.quiz.score_text[getLang()]
        .replace('{x}', knew)
        .replace('{y}', total);
};

const showResults = () => {
    renderScore();
    renderBeads(resultsBeads, session.marks, session.cards.length, -1);
    show(resultsScreen);
};

document.getElementById('quiz-again').addEventListener('click', () => startSession(session.topic));
document.getElementById('quiz-home').addEventListener('click', backToTopics);

/* ============ Language switching ============ */

// Static labels are re-translated by nav.js ([data-tr]); dynamic text here
document.addEventListener('ms:languagechange', () => {
    renderTopics();
    if (!session) return;
    if (!resultsScreen.hidden) renderScore();
    else if (!gameScreen.hidden) refreshCardText();
});

/* ============ Init ============ */

Promise.all(TOPICS.map(async (topic) => {
    const response = await fetch(topic.file);
    if (!response.ok) throw new Error(`${topic.file}: HTTP ${response.status}`);
    return { ...topic, data: await response.json() };
})).then((loaded) => {
    topics = loaded;
    renderTopics();
}).catch((err) => {
    console.error('quiz: failed to load topics', err);
});
