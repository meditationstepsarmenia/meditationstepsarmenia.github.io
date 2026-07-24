// Yoga Quiz — flashcard game on page1.html. Vanilla JS, no dependencies.
//
// Flow: topic selection → session of up to 7 randomly drawn cards → the
// player thinks, taps the card to flip it and reveal the answer (the
// question stays visible above the answer, de-emphasized). Tapping the
// flipped card again means "I knew it"; the ✗ "Not yet" button below marks
// a miss. After the last card a recap shows the score, with an expandable
// review of the missed cards → back to topics.
//
// Bookmarks: any card can be saved (bookmark button on the card, or from
// the mistakes review). Saved cards persist in localStorage and are managed
// on a dedicated "Saved Cards" screen (per-item remove + two-step Empty All).
//
// Card CONTENT (questions/answers, topic titles) lives in page_quotes/*.json
// and is only available in am/en/ru — other site languages fall back to
// English and a localized notice is shown. UI chrome strings live in tr
// (all eight languages) and static labels are handled via data-tr by nav.js.
import { tr } from '../localization.js';
import { getLang } from './nav.js';

const QUIZ_CONTENT_LANGS = ['am', 'en', 'ru'];
const SESSION_SIZE = 7;
const STORAGE_KEY = 'msQuizBookmarks';

// Topic registry — add new quiz JSON files here
const TOPICS = [
    { file: 'page_quotes/quiz1.json', icon: 'fa-scale-balanced' },
];

const startScreen = document.getElementById('quiz-start');
const gameScreen = document.getElementById('quiz-game');
const resultsScreen = document.getElementById('quiz-results');
const savedScreen = document.getElementById('quiz-saved');
const topicsContainer = document.getElementById('quiz-topics');
const langNote = document.getElementById('quiz-lang-note');
const topicLabel = document.getElementById('quiz-topic-label');
const counter = document.getElementById('quiz-counter');
const beadsContainer = document.getElementById('quiz-beads');
const card = document.getElementById('quiz-card');
const questionEl = document.getElementById('quiz-question');
const questionRecapEl = document.getElementById('quiz-question-recap');
const answerEl = document.getElementById('quiz-answer');
const verdict = document.getElementById('quiz-verdict');
const bookmarkBtn = document.getElementById('quiz-bookmark');
const scoreEl = document.getElementById('quiz-score');
const resultsBeads = document.getElementById('quiz-results-beads');
const reviewBtn = document.getElementById('quiz-review');
const reviewCount = document.getElementById('quiz-review-count');
const mistakesList = document.getElementById('quiz-mistakes');
const savedOpenBtn = document.getElementById('quiz-saved-open');
const savedCount = document.getElementById('quiz-saved-count');
const savedList = document.getElementById('quiz-saved-list');
const savedEmptyMsg = document.getElementById('quiz-saved-empty');
const emptyAllBtn = document.getElementById('quiz-empty-all');
const emptyAllLabel = document.getElementById('quiz-empty-all-label');

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
    for (const s of [startScreen, gameScreen, resultsScreen, savedScreen]) s.hidden = s !== screen;
};

/* ============ Bookmarks (localStorage) ============ */

const loadBookmarks = () => {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

let bookmarks = loadBookmarks();

const persistBookmarks = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch { /* storage unavailable (private mode etc.) — keep in-memory */ }
};

const cardKey = (topicData, cardData) => `${topicData.id}:${topicData.cards.indexOf(cardData)}`;
const isBookmarked = (key) => bookmarks.some(b => b.key === key);

const toggleBookmark = (topicData, cardData) => {
    const key = cardKey(topicData, cardData);
    if (isBookmarked(key)) bookmarks = bookmarks.filter(b => b.key !== key);
    else bookmarks.push({ key, topicId: topicData.id, q: cardData.q, a: cardData.a });
    persistBookmarks();
    updateSavedCount();
};

const updateSavedCount = () => {
    savedCount.textContent = bookmarks.length;
};

/* ============ Shared question-answer rows (mistakes review, saved cards) ============ */

const setBookmarkIcon = (btn, active) => {
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
    btn.querySelector('i').className = `${active ? 'fas' : 'far'} fa-bookmark`;
    const label = active ? tr.quiz.card_saved[getLang()] : tr.quiz.save_card[getLang()];
    btn.setAttribute('aria-label', label);
    btn.title = label;
};

// One list row showing a question + answer, with either a bookmark toggle
// (mistakes review) or a remove button (saved screen).
const buildQaRow = ({ q, a, topicId, action }) => {
    const li = document.createElement('li');
    li.className = 'quiz-qa';
    li.innerHTML = `
        <div class="quiz-qa__body">
            <p class="quiz-qa__q"></p>
            <p class="quiz-qa__a"></p>
            <span class="quiz-qa__topic"></span>
        </div>
        <button class="quiz-qa__btn" type="button"><i aria-hidden="true"></i></button>`;
    const lang = contentLang();
    li.querySelector('.quiz-qa__q').textContent = q[lang];
    li.querySelector('.quiz-qa__a').textContent = a[lang];
    const topicEl = li.querySelector('.quiz-qa__topic');
    const topic = topics.find(t => t.data.id === topicId);
    if (topic) topicEl.textContent = topic.data.title[lang];
    else topicEl.remove();
    action(li.querySelector('.quiz-qa__btn'));
    return li;
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
    updateSavedCount();
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
    questionRecapEl.textContent = c.q[contentLang()];
    answerEl.textContent = c.a[contentLang()];
    topicLabel.textContent = session.topic.data.title[contentLang()];
    counter.textContent = `${session.index + 1} / ${session.cards.length}`;
    setBookmarkIcon(bookmarkBtn, isBookmarked(cardKey(session.topic.data, c)));
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

const mark = (knewIt) => {
    if (!session) return;
    session.marks.push(knewIt);
    if (session.marks.length >= session.cards.length) showResults();
    else {
        session.index++;
        renderCard();
    }
};

// First tap flips the card; a second tap on the revealed answer = "I knew it"
card.addEventListener('click', () => {
    if (!session) return;
    if (!card.classList.contains('is-flipped')) {
        card.classList.add('is-flipped');
        verdict.hidden = false;
    } else {
        mark(true);
    }
});

document.getElementById('quiz-no').addEventListener('click', () => {
    if (!session || verdict.hidden) return;
    mark(false);
});

document.getElementById('quiz-exit').addEventListener('click', backToTopics);

bookmarkBtn.addEventListener('click', () => {
    if (!session) return;
    const c = session.cards[session.index];
    toggleBookmark(session.topic.data, c);
    setBookmarkIcon(bookmarkBtn, isBookmarked(cardKey(session.topic.data, c)));
});

/* ============ Results screen ============ */

const renderScore = () => {
    const total = session.cards.length;
    const knew = session.marks.filter(Boolean).length;
    scoreEl.textContent = tr.quiz.score_text[getLang()]
        .replace('{x}', knew)
        .replace('{y}', total);
};

const renderMistakes = () => {
    mistakesList.textContent = '';
    const missed = session.cards.filter((_, i) => session.marks[i] === false);
    reviewCount.textContent = missed.length;
    reviewBtn.hidden = missed.length === 0;
    for (const c of missed) {
        const row = buildQaRow({
            q: c.q,
            a: c.a,
            topicId: session.topic.data.id,
            action: (btn) => {
                setBookmarkIcon(btn, isBookmarked(cardKey(session.topic.data, c)));
                btn.addEventListener('click', () => {
                    toggleBookmark(session.topic.data, c);
                    setBookmarkIcon(btn, isBookmarked(cardKey(session.topic.data, c)));
                });
            },
        });
        mistakesList.appendChild(row);
    }
};

const showResults = () => {
    renderScore();
    renderBeads(resultsBeads, session.marks, session.cards.length, -1);
    renderMistakes();
    mistakesList.hidden = true;
    reviewBtn.classList.remove('is-open');
    show(resultsScreen);
};

reviewBtn.addEventListener('click', () => {
    mistakesList.hidden = !mistakesList.hidden;
    reviewBtn.classList.toggle('is-open', !mistakesList.hidden);
});

document.getElementById('quiz-again').addEventListener('click', () => startSession(session.topic));
document.getElementById('quiz-home').addEventListener('click', backToTopics);

/* ============ Saved cards screen ============ */

let emptyAllArmed = false;
let emptyAllTimer = null;

const disarmEmptyAll = () => {
    emptyAllArmed = false;
    clearTimeout(emptyAllTimer);
    emptyAllBtn.classList.remove('is-armed');
    emptyAllLabel.textContent = tr.quiz.empty_all[getLang()];
};

const renderSavedScreen = () => {
    disarmEmptyAll();
    savedList.textContent = '';
    savedEmptyMsg.hidden = bookmarks.length > 0;
    emptyAllBtn.hidden = bookmarks.length === 0;
    const removeLabel = tr.quiz.remove_card[getLang()];
    for (const entry of bookmarks) {
        const row = buildQaRow({
            q: entry.q,
            a: entry.a,
            topicId: entry.topicId,
            action: (btn) => {
                btn.classList.add('quiz-qa__btn--remove');
                btn.querySelector('i').className = 'fas fa-trash-can';
                btn.setAttribute('aria-label', removeLabel);
                btn.title = removeLabel;
                btn.addEventListener('click', () => {
                    bookmarks = bookmarks.filter(b => b.key !== entry.key);
                    persistBookmarks();
                    updateSavedCount();
                    renderSavedScreen();
                });
            },
        });
        savedList.appendChild(row);
    }
};

savedOpenBtn.addEventListener('click', () => {
    session = null;
    renderSavedScreen();
    show(savedScreen);
});

document.getElementById('quiz-saved-back').addEventListener('click', backToTopics);

// Two-step guard: first tap arms, second tap within 3s clears everything
emptyAllBtn.addEventListener('click', () => {
    if (!emptyAllArmed) {
        emptyAllArmed = true;
        emptyAllBtn.classList.add('is-armed');
        emptyAllLabel.textContent = tr.quiz.confirm_empty[getLang()];
        emptyAllTimer = setTimeout(disarmEmptyAll, 3000);
        return;
    }
    bookmarks = [];
    persistBookmarks();
    updateSavedCount();
    renderSavedScreen();
});

/* ============ Language switching ============ */

// Static labels are re-translated by nav.js ([data-tr]); dynamic text here
document.addEventListener('ms:languagechange', () => {
    renderTopics();
    if (!savedScreen.hidden) renderSavedScreen();
    if (!session) return;
    if (!resultsScreen.hidden) {
        renderScore();
        const wasOpen = !mistakesList.hidden;
        renderMistakes();
        mistakesList.hidden = !wasOpen;
    } else if (!gameScreen.hidden) {
        refreshCardText();
    }
});

/* ============ Init ============ */

updateSavedCount();
emptyAllLabel.textContent = tr.quiz.empty_all[getLang()];

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
