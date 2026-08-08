const img_1 = "images/meditation-image.jpg"
const img_2 = "images/event-narek-1.jpg"
const fb_event_link = "https://www.facebook.com/events/1002876651797979"

const default_time = "T13:00:00"
const location_yfa = {
    desc: "📍Yoga Federation of Armenia",
    link: "https://www.google.com/maps/place/Yoga+Federation+of+Armenia/data=!4m2!3m1!1s0x0:0xe764a5aa6425cbc9?sa=X&ved=1t:2428&ictx=111"
}
const location_msa = {
    desc: "📍Yoga Federation of Armenia",
    link: "https://www.google.com/maps/place/Meditation+Steps+Armenia/@40.1792191,44.5001857,19z/data=!4m6!3m5!1s0x406abd0042a676c3:0x4736d279f5f19041!8m2!3d40.1792217!4d44.5001217!16s%2Fg%2F11xz5cx01z"
}

const event_desc_id_suffix = "-event-desc"
const event_descriptions = {
    d1: {
        id: `1${event_desc_id_suffix}`,
        en: "✅Collective Meditation With Narek",
        ru: "✅Колективная медитация с Нарек",
        am: "✅Կոլեկտիվ մեդիտացիա Նարեկի հետ",
        ka: "✅კოლექტიური მედიტაცია ნარეკთან ერთად",
        hi: "✅नारेक के साथ सामूहिक ध्यान",
        es: "✅Meditación Colectiva con Narek",
        de: "✅Gemeinsame Meditation mit Narek",
        fr: "✅Méditation Collective avec Narek",
    },
    d2: {
        id: `2${event_desc_id_suffix}`,
        en: "✅Meditation & Yoga With Narek",
        ru: "✅Медитация и Йога с Нареком",
        am: "✅Մեդիտացիա և Յոգա Նարեկի հետ",
        ka: "✅მედიტაცია და იოგა ნარეკთან ერთად",
        hi: "✅नारेक के साथ ध्यान और योग",
        es: "✅Meditación y Yoga con Narek",
        de: "✅Meditation & Yoga mit Narek",
        fr: "✅Méditation et Yoga avec Narek",
    },
    d3: {
        id: `3${event_desc_id_suffix}`,
        en: "🧘‍♂️Yoga/Meditation With Narek",
        ru: "🧘‍♂️Йога/Медитация с Нареком",
        am: "Յոգա/Մեդիտացիա Նարեկի հետ 🧘‍♂️",
        ka: "🧘‍♂️იოგა/მედიტაცია ნარეკთან ერთად",
        hi: "🧘‍♂️नारेक के साथ योग/ध्यान",
        es: "🧘‍♂️Yoga/Meditación con Narek",
        de: "🧘‍♂️Yoga/Meditation mit Narek",
        fr: "🧘‍♂️Yoga/Méditation avec Narek",
    },
    d4: {
        id: `4${event_desc_id_suffix}`,
        en: "Meditation, Yoga & Talks",
        ru: "Йога, Медитация и Чаепитие ",
        am: "Յոգա, Մեդիտացիա և Թեյախմություն",
        ka: "მედიტაცია, იოგა და საუბრები",
        hi: "ध्यान, योग और बातचीत",
        es: "Meditación, Yoga y Charlas",
        de: "Meditation, Yoga & Gespräche",
        fr: "Méditation, Yoga et Discussions",
    }
}

// Template for auto-generated Sunday events. dateTime is a placeholder —
// each generated event overrides it with the upcoming Sunday's date,
// keeping the time part from default_time.
const force_events_sample = {
    image: img_2,
    // link: fb_event_link,
    dateTime: `2026-07-26${default_time}`,
    description: event_descriptions.d4,
    location: location_msa,
};

// When set to a positive number N, the next N Sundays (including today if
// it is a Sunday) are appended to `events` as copies of force_events_sample.
// Set to 0 to display only the events listed in `events`.
const upcoming_sundays = 0;

const events = [ // additional Events
    // {
    //     image: img_2,
    //     // link: fb_event_link,
    //     dateTime: `2026-07-26${default_time}`,
    //     description: event_descriptions.d4,
    //     location: location_msa,
    // },
];

if (upcoming_sundays > 0) {
    const existingDates = new Set(events.map(e => e.dateTime.split('T')[0]));
    const sunday = new Date();
    sunday.setDate(sunday.getDate() + (7 - sunday.getDay()) % 7); // today if Sunday
    for (let i = 0; i < upcoming_sundays; i++) {
        const isoDate = `${sunday.getFullYear()}-${String(sunday.getMonth() + 1).padStart(2, '0')}-${String(sunday.getDate()).padStart(2, '0')}`;
        // skip Sundays already covered by a manually listed event
        if (!existingDates.has(isoDate))
            events.push({ ...force_events_sample, dateTime: `${isoDate}${default_time}` });
        sunday.setDate(sunday.getDate() + 7);
    }
}