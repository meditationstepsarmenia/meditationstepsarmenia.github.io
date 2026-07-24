// Shared site navigation, loaded as an ES module on every page.
//
// Responsibilities:
//  - Injects the common header (Home link, "Explore Yoga" dropdown, language
//    selector) into the `#site-nav` placeholder each page provides.
//  - Owns the ?lang= URL query parameter: reads it on load (default: am),
//    normalizes the URL via history.replaceState, updates it on every switch.
//  - Rewrites internal <a> links so they carry the current page's query
//    parameters (lang and anything else), and fixes late-added links at
//    click time.
//  - Localizes any element tagged with data-tr="key.path" (resolved against
//    the tr object) — the header uses this itself, and subpages use it for
//    their content.
//  - Dispatches a 'ms:languagechange' CustomEvent on document after every
//    switch; page scripts (e.g. script.js on index) listen to re-render
//    their own content. Current language is exposed via getLang().
import { tr } from '../localization.js';

const LANGUAGES = [
    { code: 'en', flag: 'gb', name: 'English',  title: 'English' },
    { code: 'ru', flag: 'ru', name: 'Russian',  title: 'Русский' },
    { code: 'am', flag: 'am', name: 'Armenian', title: 'Հայերեն' },
    { code: 'ka', flag: 'ge', name: 'Georgian', title: 'ქართული' },
    { code: 'hi', flag: 'in', name: 'Hindi',    title: 'हिन्दी' },
    { code: 'es', flag: 'es', name: 'Spanish',  title: 'Español' },
    { code: 'de', flag: 'de', name: 'German',   title: 'Deutsch' },
    { code: 'fr', flag: 'fr', name: 'French',   title: 'Français' },
];
const DEFAULT_LANG = 'am';
const SUPPORTED = LANGUAGES.map(l => l.code);

// Subpages listed in the "Explore Yoga" dropdown
const EXPLORE_PAGES = [
    { href: 'page1.html', key: 'page.page1_title' },
    // page2 hidden for now — restore when it has content
    // { href: 'page2.html', key: 'page.page2_title' },
];

const urlLang = new URLSearchParams(window.location.search).get('lang');
let currentLang = SUPPORTED.includes(urlLang) ? urlLang : DEFAULT_LANG;

export const getLang = () => currentLang;

/* ============ Header injection ============ */

const header = document.createElement('header');
header.className = 'site-header';
header.innerHTML = `
    <nav class="site-nav" aria-label="Site navigation">
        <div class="site-nav__links">
            <a class="nav-home" href="index.html">
                <span class="nav-home__icon"><i class="fas fa-om" aria-hidden="true"></i></span>
                <span data-tr="nav.home">Home</span>
            </a>
            <div class="nav-dropdown">
                <button class="nav-dropdown__toggle" type="button" aria-expanded="false" aria-haspopup="true">
                    <span data-tr="nav.explore">Explore Yoga</span>
                    <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="nav-dropdown__menu">
                    ${EXPLORE_PAGES.map(p => `<a class="nav-dropdown__item" href="${p.href}" data-tr="${p.key}"></a>`).join('')}
                </div>
            </div>
        </div>
        <div class="language-selector">
            ${LANGUAGES.map(l => `
            <div class="language-item" data-lang="${l.code}" title="${l.title}">
                <img src="https://flagcdn.com/24x18/${l.flag}.png" alt="${l.name}">
            </div>`).join('')}
        </div>
    </nav>`;

const mount = document.getElementById('site-nav');
if (mount) mount.replaceWith(header);
else document.body.prepend(header);

/* ============ Explore Yoga dropdown ============ */

const dropdown = header.querySelector('.nav-dropdown');
const dropdownToggle = header.querySelector('.nav-dropdown__toggle');

const setDropdown = (open) => {
    dropdown.classList.toggle('is-open', open);
    dropdownToggle.setAttribute('aria-expanded', String(open));
};

dropdownToggle.addEventListener('click', () => setDropdown(!dropdown.classList.contains('is-open')));
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) setDropdown(false);
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setDropdown(false);
});

/* ============ Query-parameter preservation on internal links ============ */

const isInternalLink = (a) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#')) return false; // in-page anchors stay untouched
    try {
        return new URL(href, window.location.href).origin === window.location.origin;
    } catch {
        return false;
    }
};

// Rewrite an internal link so it carries the current page's query parameters.
// Page state wins over params already on the link (lang must follow a switch).
const carryParamsOver = (a) => {
    const url = new URL(a.getAttribute('href'), window.location.href);
    new URLSearchParams(window.location.search).forEach((value, key) => url.searchParams.set(key, value));
    a.href = url.href;
};

const decorateLinks = () => {
    document.querySelectorAll('a[href]').forEach(a => {
        if (isInternalLink(a)) carryParamsOver(a);
    });
};

// Safety net for links added to the DOM after load (e.g. rendered event
// cards): fix the href at interaction time, before the browser follows it.
const fixLinkAtClickTime = (e) => {
    const a = e.target.closest ? e.target.closest('a[href]') : null;
    if (a && isInternalLink(a)) carryParamsOver(a);
};
document.addEventListener('click', fixLinkAtClickTime, true);
document.addEventListener('auxclick', fixLinkAtClickTime, true);

// Mark the header link pointing at the current page ("/" ≡ "/index.html")
const normalizePath = (path) => path.replace(/index\.html$/, '');
header.querySelectorAll('a[href]').forEach(a => {
    const url = new URL(a.getAttribute('href'), window.location.href);
    if (normalizePath(url.pathname) === normalizePath(window.location.pathname))
        a.setAttribute('aria-current', 'page');
});

/* ============ Language state ============ */

const syncLangInUrl = (lang) => {
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
};

const resolveTrKey = (path) => path.split('.').reduce((node, part) => (node ? node[part] : undefined), tr);

// Localize every element tagged with data-tr="key.path"
const translateTagged = (lang) => {
    document.querySelectorAll('[data-tr]').forEach(el => {
        const entry = resolveTrKey(el.dataset.tr);
        if (entry && entry[lang]) el.textContent = entry[lang];
    });
};

const applyLanguage = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang;
    header.querySelectorAll('.language-item').forEach(item =>
        item.classList.toggle('selected', item.dataset.lang === lang));
    syncLangInUrl(lang);
    translateTagged(lang);
    // Pages can opt into a localized <title> via <body data-tr-title="key.path">
    const titleKey = document.body.dataset.trTitle;
    if (titleKey) {
        const entry = resolveTrKey(titleKey);
        if (entry && entry[lang]) document.title = `${entry[lang]} · Meditation Steps Armenia`;
    }
    decorateLinks();
    document.dispatchEvent(new CustomEvent('ms:languagechange', { detail: { lang } }));
};

header.querySelectorAll('.language-item').forEach(item => {
    item.addEventListener('click', () => {
        if (item.dataset.lang !== currentLang) applyLanguage(item.dataset.lang);
    });
});

// Fill in the footer year on pages that mark it (index does this in script.js)
document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
});

applyLanguage(currentLang);
