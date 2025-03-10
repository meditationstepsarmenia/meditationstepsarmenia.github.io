import {tr} from './localization.js';

// Select elements
const languageItems = document.querySelectorAll(".language-item");
const main_header = document.querySelector("[class=main-header]");
const who_we_are_header = document.querySelector("[class=who-we-are-header]");
const who_we_are_desc = document.querySelector("[class=who-we-are-desc]");

// Set default language (English)
let currentLang = "en";
document.querySelector(`[data-lang="en"]`).classList.add("selected");
main_header.textContent = tr.main_header[currentLang];
who_we_are_header.textContent = tr.who_we_are_header[currentLang];
who_we_are_desc.textContent = tr.who_we_are_desc[currentLang];

// Add click event listeners to language items
languageItems.forEach(item => {
    item.addEventListener("click", () => {
        // console.log(`>>>>>>>> ${tr.main_header.en}`)
        // Remove 'selected' class from all items
        languageItems.forEach(i => i.classList.remove("selected"));
        
        // Add 'selected' class to clicked item
        item.classList.add("selected");
        
        // Update current language and h1 text
        currentLang = item.getAttribute("data-lang");
        main_header.textContent = tr.main_header[currentLang];
        who_we_are_header.textContent = tr.who_we_are_header[currentLang];
        who_we_are_desc.textContent = tr.who_we_are_desc[currentLang];
    });
});