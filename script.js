import { tr } from './localization.js';

// Select DOM elements
const languageItems = document.querySelectorAll('.language-item');
const mainHeader = document.querySelector('.main-header');
const whoWeAreHeader = document.querySelector('.who-we-are-header');
const whoWeAreDesc = document.querySelector('.who-we-are-desc');
const socialLinksHeader = document.querySelector('.social-links-header');
const socialLinksTelegramChannel = Array.from(document.querySelector('.telegram-channel').childNodes)
    .find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksFacebook = Array.from(document.querySelector('.facebook-page').childNodes)
    .find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksInstagram = Array.from(document.querySelector('.instagram-page').childNodes)
    .find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksTelegrameGroup = Array.from(document.querySelector('.telegram-group').childNodes)
    .find(node => node.nodeType === Node.TEXT_NODE);
const instructors = document.querySelector('.instructors');
const instructor_narek = document.querySelector('.instructor_narek');
const instructor_vardan = document.querySelector('.instructor_vardan');
const instructor_davit = document.querySelector('.instructor_davit');
const footer = document.querySelector('footer');

let currentLanguage = 'en';

// Update content based on language
const updateContent = (lang) => {
    mainHeader.textContent = tr.main_header[lang];
    whoWeAreHeader.textContent = tr.who_we_are_header[lang];
    whoWeAreDesc.textContent = tr.who_we_are_desc[lang];
    socialLinksHeader.textContent = tr.social_links.header[lang];
    socialLinksTelegramChannel.textContent = tr.social_links.telegram_channel[lang];
    socialLinksFacebook.textContent = tr.social_links.facebook[lang];
    socialLinksInstagram.textContent = tr.social_links.instagram[lang];
    socialLinksTelegrameGroup.textContent = tr.social_links.telegram_group[lang];
    instructors.textContent = tr.instructors[lang];
    instructor_narek.textContent = tr.instructor_narek[lang];
    instructor_vardan.textContent = tr.instructor_vardan[lang];
    instructor_davit.textContent = tr.instructor_davit[lang];
    footer.textContent = tr.footer[lang];
};

// Initialize default language (English)
document.querySelector('[data-lang="en"]').classList.add('selected');
updateContent(currentLanguage);

// Set up language switching
languageItems.forEach(item => {
    item.addEventListener('click', () => {
        languageItems.forEach(i => i.classList.remove('selected')); // Clear selection
        item.classList.add('selected'); // Mark new selection
        currentLanguage = item.getAttribute('data-lang');
        updateContent(currentLanguage);
    });
});