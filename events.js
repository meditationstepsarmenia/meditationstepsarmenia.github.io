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
    }
}

const events = [
    {
        image: img_2,
        link: fb_event_link,
        dateTime: `2025-04-13${default_time}`,
        description: event_descriptions.d1,
        location: location_yfa,
    // },{
    //     image: img_2,
    //     link: fb_event_link,
    //     dateTime: `2025-04-20${default_time}`,
    //     description: event_descriptions.d1,
    //     location: location_yfa,
    // },{
    //     image: img_2,
    //     link: fb_event_link,
    //     dateTime: `2025-04-27${default_time}`,
    //     description: event_descriptions.d1,
    //     location: location_yfa,
    },
];