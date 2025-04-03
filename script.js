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
const instructorNarek = document.querySelector('.instructor_narek');
const instructorVardan = document.querySelector('.instructor_vardan');
const instructorDavit = document.querySelector('.instructor_davit');
const footer = document.querySelector('footer');

let currentLanguage = 'am';

// Update content based on language
const updateContent = (lang) => {
    let elementsAndValues = [
        {e: mainHeader, v: tr.main_header[lang]},
        {e: whoWeAreHeader, v: tr.who_we_are_header[lang]},
        {e: whoWeAreDesc, v: tr.who_we_are_desc[lang]},
        {e: socialLinksHeader, v: tr.social_links.header[lang]},
        {e: socialLinksTelegramChannel, v: tr.social_links.telegram_channel[lang]},
        {e: socialLinksFacebook, v: tr.social_links.facebook[lang]},
        {e: socialLinksInstagram, v: tr.social_links.instagram[lang]},
        {e: socialLinksTelegrameGroup, v: tr.social_links.telegram_group[lang]},
        {e: instructors, v: tr.instructors[lang]},
        {e: instructorNarek, v: tr.instructor_narek[lang]},
        {e: instructorVardan, v: tr.instructor_vardan[lang]},
        {e: instructorDavit, v: tr.instructor_davit[lang]},
        {e: footer, v: tr.footer[lang]},
    ]

    for (const elementAndValue of elementsAndValues) {
        const value = elementAndValue.v
        if (value)
            try {
                elementAndValue.e.textContent = value
            } catch {
            console.log(`failed to update text value ${elementAndValue.v}`)
            }
    }
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