const img_1 = "images/meditation-image.jpg"
const img_2 = "images/event-narek-1.jpg"
const fb_event_link = "https://www.facebook.com/events/1002876651797979"

const default_time = "T13:00:00"
const location_yfa = {
    desc: "📍Yoga Federation of Armenia",
    link: "https://www.google.com/maps/place/Yoga+Federation+of+Armenia/data=!4m2!3m1!1s0x0:0xe764a5aa6425cbc9?sa=X&ved=1t:2428&ictx=111"
}

const event_desc_id_suffix = "-event-desc"
const event_descriptions = {
    d1: {
        id: `1${event_desc_id_suffix}`,
        en: "✅Collective Meditation With Narek",
        ru: "✅Колективная медитация с Нарек",
        am: "✅Կոլեկտիվ մեդիտացիա Նարեկի հետ",
    },
    d2: {
        id: `1${event_desc_id_suffix}`,
        en: "✅Meditation & Yoga With Narek",
        ru: "✅Медитация и Йога с Нареком",
        am: "Մեդիտացիա և Յոգա Նարեկի հետ",
    }
}

const events = [
    {
        image: img_2,
        link: fb_event_link,
        dateTime: `2025-05-04${default_time}`,
        description: event_descriptions.d2,
        location: location_yfa,
    },{
        image: img_2,
        link: fb_event_link,
        dateTime: `2025-05-11${default_time}`,
        description: event_descriptions.d2,
        location: location_yfa,
    },
];