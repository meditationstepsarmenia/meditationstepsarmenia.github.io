import { tr } from './localization.js';

const currentDate = new Date();
const upcomingEvents = events
    .filter(event => new Date(event.dateTime) > currentDate)
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
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
    
    let elementsAndValues = [
        ...resultArray,
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
                dateTime.textContent = new Date(event.dateTime).toLocaleString();
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