import { tr } from './localization.js';

const currentDate = new Date();
const upcomingEvents = events
    .filter(event => new Date(event.dateTime) > currentDate)
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
// Select DOM elements
const languageItems = document.querySelectorAll('.language-item');
const mainHeader = document.querySelector('.main-header');
const heroTagline = document.querySelector('.hero__tagline');
const whoWeAreHeader = document.querySelector('.who-we-are-header');
const whoWeAreDesc = document.querySelector('.who-we-are-desc');
const socialLinksHeader = document.querySelector('.social-links-header');
const videoLinksHeader = document.querySelector('.video-links-header');
const socialLinksTelegramChannel = document.querySelector('.telegram-channel .social-card__label')
    || Array.from(document.querySelector('.telegram-channel').childNodes).find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksFacebook = document.querySelector('.facebook-page .social-card__label')
    || Array.from(document.querySelector('.facebook-page').childNodes).find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksInstagram = document.querySelector('.instagram-page .social-card__label')
    || Array.from(document.querySelector('.instagram-page').childNodes).find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksTelegrameGroup = document.querySelector('.telegram-group .social-card__label')
    || Array.from(document.querySelector('.telegram-group').childNodes).find(node => node.nodeType === Node.TEXT_NODE);
const socialLinksYoutubeArmenian = document.querySelector('.youtube-armenian .social-card__label');
const socialLinksYoutubeYogaScience = document.querySelector('.youtube-yoga-science .social-card__label');
const teachers = document.querySelector('.teachers');
const teacherDadaYukteshvara = document.querySelector('.teacher_dada_yukteshvara');
const teacherDidiAnandaSanjana = document.querySelector('.teacher_didi_ananda_sanjana');
const instructors = document.querySelector('.instructors');
const instructorNarek = document.querySelector('.instructor_narek');
const instructorVardan = document.querySelector('.instructor_vardan');
const instructorDavit = document.querySelector('.instructor_davit');
const footer = document.querySelector('footer');

let currentLanguage = 'am';

const dayWord = (n, lang) => {
    if (lang === 'ru') {
        const mod10 = n % 10, mod100 = n % 100;
        if (mod10 === 1 && mod100 !== 11) return tr.event_remaining.day.ru;
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return tr.event_remaining.days_few.ru;
        return tr.event_remaining.days.ru;
    }
    return n === 1 ? tr.event_remaining.day[lang] : tr.event_remaining.days[lang];
};

const formatEventDateTime = (dateTimeStr, lang) => {
    const date = new Date(dateTimeStr);
    const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const daysLeft = Math.round((startOfDay(date) - startOfDay(new Date())) / 86400000);
    const remaining = daysLeft <= 0
        ? tr.event_remaining.today[lang]
        : lang === 'ru' && daysLeft === 1
            ? `${tr.event_remaining.in_prefix.ru}${tr.event_remaining.day.ru}` // "через день" — no numeral
            : `${tr.event_remaining.in_prefix[lang]}${daysLeft} ${dayWord(daysLeft, lang)}`;
    const formattedDate = date.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    return `${formattedDate} (${remaining})`;
};

// Update content based on language
const updateContent = (lang) => {
    const eventsHeader = document.querySelector('.events-header');
    const descriptionElements = document.querySelectorAll('.event-description');
    let resultArray = [];
    for (const desc_element of descriptionElements) {
        const matchingDescriptions = Object.values(event_descriptions).filter(
            desc => desc.id === desc_element.id
        )[0];
        if (matchingDescriptions)
            resultArray.push({
                e: desc_element,
                v: matchingDescriptions[lang]
            });
    }
    for (const dateTimeElement of document.querySelectorAll('.event-datetime')) {
        if (dateTimeElement.dataset.dateTime)
            resultArray.push({
                e: dateTimeElement,
                v: formatEventDateTime(dateTimeElement.dataset.dateTime, lang)
            });
    }
    
    let elementsAndValues = [
        ...resultArray,
        {e: mainHeader, v: tr.main_header[lang]},
        {e: heroTagline, v: tr.hero_tagline[lang]},
        {e: whoWeAreHeader, v: tr.who_we_are_header[lang]},
        {e: whoWeAreDesc, v: tr.who_we_are_desc[lang]},
        {e: socialLinksHeader, v: tr.social_links.header[lang]},
        {e: videoLinksHeader, v: tr.social_links.video_header[lang]},
        {e: socialLinksTelegramChannel, v: tr.social_links.telegram_channel[lang]},
        {e: socialLinksFacebook, v: tr.social_links.facebook[lang]},
        {e: socialLinksInstagram, v: tr.social_links.instagram[lang]},
        {e: socialLinksTelegrameGroup, v: tr.social_links.telegram_group[lang]},
        {e: socialLinksYoutubeArmenian, v: tr.social_links.youtube_armenian[lang]},
        {e: socialLinksYoutubeYogaScience, v: tr.social_links.youtube_yoga_science[lang]},
        {e: teachers, v: tr.teachers[lang]},
        {e: teacherDadaYukteshvara, v: tr.teacher_dada_yukteshvara[lang]},
        {e: teacherDidiAnandaSanjana, v: tr.teacher_didi_ananda_sanjana[lang]},
        {e: instructors, v: tr.instructors[lang]},
        {e: instructorNarek, v: tr.instructor_narek[lang]},
        {e: instructorVardan, v: tr.instructor_vardan[lang]},
        {e: instructorDavit, v: tr.instructor_davit[lang]},
        {e: footer, v: tr.footer[lang]},
    ]
    if (upcomingEvents.length > 0)
        elementsAndValues.push({e: eventsHeader, v: tr.events_header[lang], logsOff: true})

    for (const elementAndValue of elementsAndValues) {
        const value = elementAndValue.v
        if (value)
            try {
                elementAndValue.e.textContent = value
            } catch {
                if (elementAndValue.logsOff !== true)
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

document.addEventListener('DOMContentLoaded', function() {
    
    const eventsContainer = document.getElementById('events-container');
    
    if (upcomingEvents.length > 0) {
        const header = document.createElement('h2');
        header.textContent = tr.events_header[currentLanguage];
        header.className = 'events-header';
        eventsContainer.appendChild(header);
        
        // Create wrapper for flex layout
        const wrapper = document.createElement('div');
        wrapper.className = 'events-wrapper';
        
        let maxDisplayCount = 6
        upcomingEvents.forEach(event => {
            if (maxDisplayCount > 0 ) {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event-item';
                
                // Create image element
                const img = document.createElement('img');
                img.src = event.image;
                img.alt = event.description[currentLanguage];
                let link
                if (event.link) {
                    link = document.createElement('a');
                    link.href = event.link;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.appendChild(img);
                    eventDiv.appendChild(link);
                } else
                    eventDiv.appendChild(img);
                
                // Create description element
                const desc = document.createElement('p');
                desc.textContent = event.description[currentLanguage];
                desc.className = 'event-description';
                desc.id = event.description.id;

                if (event.link) {
                    // Add link to description
                    const descLink = document.createElement('a');
                    descLink.href = event.link;
                    descLink.target = '_blank';
                    descLink.rel = 'noopener noreferrer';
                    descLink.appendChild(desc);
                    eventDiv.appendChild(descLink);
                } else
                    eventDiv.appendChild(desc);
                
                // Create date time element
                const dateTime = document.createElement('p');
                dateTime.textContent = formatEventDateTime(event.dateTime, currentLanguage);
                dateTime.dataset.dateTime = event.dateTime;
                dateTime.className = 'event-datetime';
                eventDiv.appendChild(dateTime);


                if (event.location) {
                    // Create location element
                    const locationLink = document.createElement('a');
                    locationLink.textContent = event.location.desc;
                    locationLink.href = event.location.link;
                    locationLink.className = 'event-location';
                    locationLink.target = '_blank';
                    locationLink.rel = 'noopener noreferrer';
                    eventDiv.appendChild(locationLink);
                }
                
                wrapper.appendChild(eventDiv); // Add to wrapper instead of directly to container
            }
            maxDisplayCount = maxDisplayCount - 1
        });
        eventsContainer.appendChild(wrapper);
    }
});