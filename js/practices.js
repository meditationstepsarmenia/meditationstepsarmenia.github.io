// "In More Detail..." section on the Practices page (page2.html).
//
// Renders a carousel of section titles taken from page_practices/details.js
// (curated from the source PDF); clicking a title shows that section's full
// text in a panel below. Detail CONTENT exists only in am/en/ru — other site
// languages fall back to English and a localized notice is shown
// (same policy as the Yoga Quiz). UI chrome strings live in tr.
import { tr } from '../localization.js';
import { getLang } from './nav.js';
import { details } from '../page_practices/details.js';

// TEMPORARY TOGGLE: the "In More Detail" section is hidden until its text
// passes manual review. Set to true to show it again — nothing else needs
// to change.
const DETAILS_ENABLED = false;

const CONTENT_LANGS = ['am', 'en', 'ru'];

const track = document.getElementById('details-track');
const panel = document.getElementById('details-panel');
const note = document.getElementById('details-lang-note');
const prevBtn = document.getElementById('details-prev');
const nextBtn = document.getElementById('details-next');

let activeIndex = 0;

const contentLang = () => (CONTENT_LANGS.includes(getLang()) ? getLang() : 'en');

// Bold a leading "The Problem:" / "Проблема:" style label, if present
const appendLabeled = (parent, text) => {
    const m = text.match(/^(.{2,60}?):\s+(.*)$/s);
    if (m) {
        const strong = document.createElement('strong');
        strong.textContent = m[1] + ':';
        parent.appendChild(strong);
        parent.appendChild(document.createTextNode(' ' + m[2]));
    } else {
        parent.textContent = text;
    }
};

const renderPanel = () => {
    const lang = contentLang();
    const section = details.sections[activeIndex];
    panel.textContent = '';

    const heading = document.createElement('h3');
    heading.textContent = section.title[lang];
    panel.appendChild(heading);

    let list = null; // consecutive 'li' blocks group into one <ul>
    for (const block of section.blocks) {
        if (block.type === 'li') {
            if (!list) {
                list = document.createElement('ul');
                panel.appendChild(list);
            }
            const li = document.createElement('li');
            appendLabeled(li, block.text[lang]);
            list.appendChild(li);
            continue;
        }
        list = null;
        if (block.type === 'h') {
            const sub = document.createElement('h4');
            sub.textContent = block.text[lang];
            panel.appendChild(sub);
        } else {
            const p = document.createElement('p');
            appendLabeled(p, block.text[lang]);
            panel.appendChild(p);
        }
    }

    // restart the entrance animation
    panel.classList.remove('is-swapped');
    void panel.offsetWidth;
    panel.classList.add('is-swapped');
};

const renderChips = () => {
    const lang = contentLang();
    track.textContent = '';
    details.sections.forEach((section, i) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'details-chip';
        chip.textContent = section.title[lang];
        chip.classList.toggle('is-active', i === activeIndex);
        chip.addEventListener('click', () => {
            activeIndex = i;
            track.querySelectorAll('.details-chip').forEach((c, j) =>
                c.classList.toggle('is-active', j === activeIndex));
            renderPanel();
            chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
        track.appendChild(chip);
    });
};

const applyLanguage = () => {
    note.hidden = CONTENT_LANGS.includes(getLang());
    prevBtn.setAttribute('aria-label', tr.practices.prev[getLang()]);
    nextBtn.setAttribute('aria-label', tr.practices.next[getLang()]);
    renderChips();
    renderPanel();
};

if (DETAILS_ENABLED) {
    prevBtn.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.7, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.7, behavior: 'smooth' }));

    document.addEventListener('ms:languagechange', applyLanguage);
    applyLanguage();
} else {
    document.querySelector('.details-section').hidden = true;
}
