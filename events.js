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
    },
    d2: {
        id: `2${event_desc_id_suffix}`,
        en: "✅Meditation & Yoga With Narek",
        ru: "✅Медитация и Йога с Нареком",
        am: "✅Մեդիտացիա և Յոգա Նարեկի հետ",
    },
    d3: {
        id: `3${event_desc_id_suffix}`,
        en: "🧘‍♂️Yoga/Meditation With Narek",
        ru: "🧘‍♂️Йога/Медитация с Нареком",
        am: "Յոգա/Մեդիտացիա Նարեկի հետ 🧘‍♂️",
    },
    d4: {
        id: `4${event_desc_id_suffix}`,
        en: "Meditation, Yoga & Talks",
        ru: "Йога, Медитация и Чаепитие ",
        am: "Յոգա, Մեդիտացիա և Թեյախմություն",
    }
}

const events = [
    {
        image: img_2,
        link: fb_event_link,
        dateTime: `2026-07-26${default_time}`,
        description: event_descriptions.d4,
        location: location_msa,
    },
];