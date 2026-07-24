export const tr = {
    main_header: {
        en: "Meditation Steps Armenia",
        ru: "Уроки Медитации Армения",
        am: "Մեդիտացիայի Դասեր Հայաստանում",
        ka: "მედიტაციის გაკვეთილები სომხეთში",
        hi: "मेडिटेशन स्टेप्स आर्मेनिया",
        es: "Meditation Steps Armenia",
        de: "Meditation Steps Armenia",
        fr: "Meditation Steps Armenia",
    },
    // Shared navigation header (injected by js/nav.js on every page)
    nav: {
        home: {
            en: "Home",
            ru: "Главная",
            am: "Գլխավոր",
            ka: "მთავარი",
            hi: "मुखपृष्ठ",
            es: "Inicio",
            de: "Startseite",
            fr: "Accueil",
        },
        explore: {
            en: "Explore Yoga",
            ru: "Изучить йогу",
            am: "Բացահայտիր յոգան",
            ka: "აღმოაჩინე იოგა",
            hi: "योग को जानें",
            es: "Explora el Yoga",
            de: "Yoga entdecken",
            fr: "Explorer le Yoga",
        },
    },
    // Subpage titles & placeholder copy (used via data-tr on page1.html / page2.html)
    page: {
        page1_title: {
            en: "Yoga Quiz",
            ru: "Йога-викторина",
            am: "Յոգա վիկտորինա",
            ka: "იოგას ვიქტორინა",
            hi: "योग प्रश्नोत्तरी",
            es: "Cuestionario de Yoga",
            de: "Yoga-Quiz",
            fr: "Quiz de Yoga",
        },
        page2_title: {
            en: "Page 2",
            ru: "Страница 2",
            am: "Էջ 2",
            ka: "გვერდი 2",
            hi: "पृष्ठ 2",
            es: "Página 2",
            de: "Seite 2",
            fr: "Page 2",
        },
        coming_soon: {
            en: "This page is being prepared — content is coming soon.",
            ru: "Эта страница готовится — материалы скоро появятся.",
            am: "Այս էջը պատրաստվում է․ բովանդակությունը շուտով կհայտնվի։",
            ka: "ეს გვერდი მზადდება — შინაარსი მალე გამოჩნდება.",
            hi: "यह पृष्ठ तैयार किया जा रहा है — सामग्री जल्द ही उपलब्ध होगी।",
            es: "Esta página está en preparación — el contenido llegará pronto.",
            de: "Diese Seite wird gerade vorbereitet — Inhalte folgen in Kürze.",
            fr: "Cette page est en préparation — le contenu arrive bientôt.",
        },
    },
    // Yoga Quiz page UI (page1.html + js/quiz.js). Quiz card CONTENT lives in
    // page_quotes/*.json and is only available in am/en/ru (en fallback).
    quiz: {
        intro: {
            en: "Draw a card, take a moment to think, tap it to reveal the answer — then be honest: did you know it?",
            ru: "Вытяните карточку, подумайте, коснитесь её, чтобы открыть ответ, — а затем честно отметьте: знали ли вы его?",
            am: "Քաշիր քարտը, մտածիր, հպիր՝ պատասխանը բացելու համար, ապա ազնվորեն նշիր՝ գիտեի՞ր այն, թե՞ ոչ:",
            ka: "აიღეთ ბარათი, დაფიქრდით, შეეხეთ პასუხის გასახსნელად — შემდეგ გულწრფელად მონიშნეთ, იცოდით თუ არა.",
            hi: "एक कार्ड चुनें, सोचें, उत्तर देखने के लिए उस पर टैप करें — फिर ईमानदारी से बताएं: क्या आप जानते थे?",
            es: "Saca una tarjeta, tómate un momento para pensar, tócala para revelar la respuesta y luego marca con sinceridad: ¿la sabías?",
            de: "Ziehe eine Karte, denke kurz nach, tippe sie an, um die Antwort aufzudecken — und markiere dann ehrlich: Wusstest du es?",
            fr: "Tirez une carte, prenez un instant pour réfléchir, touchez-la pour révéler la réponse — puis indiquez honnêtement : la connaissiez-vous ?",
        },
        choose_topic: {
            en: "Choose a Topic",
            ru: "Выберите тему",
            am: "Ընտրիր թեման",
            ka: "აირჩიეთ თემა",
            hi: "विषय चुनें",
            es: "Elige un Tema",
            de: "Wähle ein Thema",
            fr: "Choisissez un Thème",
        },
        lang_note: {
            en: "Quiz cards are available in Armenian, English and Russian; other languages show the English cards.",
            ru: "Карточки викторины доступны на армянском, английском и русском; для остальных языков показываются карточки на английском.",
            am: "Վիկտորինայի քարտերը հասանելի են հայերեն, անգլերեն և ռուսերեն. մյուս լեզուների դեպքում ցուցադրվում են անգլերեն քարտերը:",
            ka: "ვიქტორინის ბარათები ხელმისაწვდომია სომხურ, ინგლისურ და რუსულ ენებზე; სხვა ენებზე ნაჩვენებია ინგლისური ბარათები.",
            hi: "प्रश्नोत्तरी कार्ड अर्मेनियाई, अंग्रेज़ी और रूसी में उपलब्ध हैं; अन्य भाषाओं में अंग्रेज़ी कार्ड दिखाए जाते हैं।",
            es: "Las tarjetas del cuestionario están disponibles en armenio, inglés y ruso; en los demás idiomas se muestran las tarjetas en inglés.",
            de: "Die Quizkarten sind auf Armenisch, Englisch und Russisch verfügbar; in anderen Sprachen werden die englischen Karten angezeigt.",
            fr: "Les cartes du quiz sont disponibles en arménien, en anglais et en russe ; dans les autres langues, les cartes s'affichent en anglais.",
        },
        cards_label: {
            en: "Cards",
            ru: "Карточки",
            am: "Քարտեր",
            ka: "ბარათები",
            hi: "कार्ड",
            es: "Tarjetas",
            de: "Karten",
            fr: "Cartes",
        },
        question_label: {
            en: "Question",
            ru: "Вопрос",
            am: "Հարց",
            ka: "კითხვა",
            hi: "प्रश्न",
            es: "Pregunta",
            de: "Frage",
            fr: "Question",
        },
        answer_label: {
            en: "Answer",
            ru: "Ответ",
            am: "Պատասխան",
            ka: "პასუხი",
            hi: "उत्तर",
            es: "Respuesta",
            de: "Antwort",
            fr: "Réponse",
        },
        tap_to_reveal: {
            en: "Tap to reveal the answer",
            ru: "Нажмите, чтобы открыть ответ",
            am: "Հպիր՝ պատասխանը բացելու համար",
            ka: "შეეხეთ პასუხის სანახავად",
            hi: "उत्तर देखने के लिए टैप करें",
            es: "Toca para revelar la respuesta",
            de: "Antippen, um die Antwort aufzudecken",
            fr: "Touchez pour révéler la réponse",
        },
        knew_it: {
            en: "I knew it",
            ru: "Я знал(а)",
            am: "Գիտեի",
            ka: "ვიცოდი",
            hi: "मुझे पता था",
            es: "La sabía",
            de: "Wusste ich",
            fr: "Je la connaissais",
        },
        missed_it: {
            en: "Not yet",
            ru: "Ещё нет",
            am: "Դեռ ոչ",
            ka: "ჯერ არა",
            hi: "अभी नहीं",
            es: "Aún no",
            de: "Noch nicht",
            fr: "Pas encore",
        },
        results_title: {
            en: "Session Complete",
            ru: "Раунд завершён",
            am: "Փուլն ավարտված է",
            ka: "რაუნდი დასრულდა",
            hi: "सत्र पूर्ण हुआ",
            es: "Sesión Completada",
            de: "Runde abgeschlossen",
            fr: "Session Terminée",
        },
        // {x} and {y} are replaced with numbers in js/quiz.js
        score_text: {
            en: "You knew {x} of {y} cards.",
            ru: "Вы знали {x} из {y} карточек.",
            am: "Գիտեիր {y} քարտից {x}-ը:",
            ka: "თქვენ იცოდით {x} ბარათი {y}-დან.",
            hi: "आप {y} में से {x} कार्ड जानते थे।",
            es: "Sabías {x} de {y} tarjetas.",
            de: "Du wusstest {x} von {y} Karten.",
            fr: "Vous connaissiez {x} cartes sur {y}.",
        },
        play_again: {
            en: "Play Again",
            ru: "Сыграть ещё",
            am: "Խաղալ նորից",
            ka: "თავიდან თამაში",
            hi: "फिर से खेलें",
            es: "Jugar de Nuevo",
            de: "Nochmal spielen",
            fr: "Rejouer",
        },
        back_to_topics: {
            en: "Back to Topics",
            ru: "К темам",
            am: "Դեպի թեմաներ",
            ka: "თემებზე დაბრუნება",
            hi: "विषयों पर वापस",
            es: "Volver a los Temas",
            de: "Zurück zu den Themen",
            fr: "Retour aux Thèmes",
        },
    },
    hero_tagline: {
        en: "A community walking the path of self-discovery — together.",
        ru: "Сообщество, шагающее по пути самопознания — вместе.",
        am: "Համայնք, որ քայլում է ինքնաճանաչման ճանապարհով՝ միասին։",
        ka: "საზოგადოება, რომელიც თვითშემეცნების გზას ერთად მიუყვება.",
        hi: "एक समुदाय जो आत्म-खोज के पथ पर चल रहा है — एक साथ।",
        es: "Una comunidad que recorre el camino del autoconocimiento — juntos.",
        de: "Eine Gemeinschaft, die den Weg der Selbsterkenntnis geht — gemeinsam.",
        fr: "Une communauté qui parcourt le chemin de la découverte de soi — ensemble.",
    },
    events_header: {
        en: "Upcoming Events",
        ru: "Ближайшие Мероприятия",
        am: "Գալիք Հանդիպումները",
        ka: "მომავალი ღონისძიებები",
        hi: "आगामी कार्यक्रम",
        es: "Próximos Eventos",
        de: "Kommende Veranstaltungen",
        fr: "Événements à Venir",
    },
    event_remaining: {
        today: {
            en: "Today",
            ru: "Сегодня",
            am: "Այսօր",
            ka: "დღეს",
            hi: "आज",
            es: "Hoy",
            de: "Heute",
            fr: "Aujourd'hui",
        },
        // "in N days" prefix; Armenian, Georgian and Hindi have no prefix word —
        // "in" is expressed by the day-word itself ("օրից" / "დღეში" / "दिन में")
        in_prefix: {
            en: "in ",
            ru: "через ",
            am: "",
            ka: "",
            hi: "",
            es: "en ",
            de: "in ",
            fr: "dans ",
        },
        day: {
            en: "day",
            ru: "день",
            am: "օրից",
            ka: "დღეში",
            hi: "दिन में",
            es: "día",
            de: "Tag",
            fr: "jour",
        },
        // Russian needs a separate form for 2-4 (дня); other languages reuse their plural
        days_few: {
            en: "days",
            ru: "дня",
            am: "օրից",
            ka: "დღეში",
            hi: "दिनों में",
            es: "días",
            de: "Tagen",
            fr: "jours",
        },
        days: {
            en: "days",
            ru: "дней",
            am: "օրից",
            ka: "დღეში",
            hi: "दिनों में",
            es: "días",
            de: "Tagen",
            fr: "jours",
        },
    },
    who_we_are_header: {
        en: "About Meetups & Us",
        ru: "Про Встречи и Нас",
        am: "Հանդիպումների և Մեր Մասին",
        ka: "შეხვედრებისა და ჩვენ შესახებ",
        hi: "मुलाक़ातों और हमारे बारे में",
        es: "Sobre los Encuentros y Nosotros",
        de: "Über die Treffen und Uns",
        fr: "À Propos des Rencontres et de Nous",
    },
    who_we_are_desc: {
        en: `Do you experience a lack of focus, stress, addiction to social media or food, low energy, or a thirst for happiness? If so, you are in the right place. Yoga helps solve these problems. The offered exercises and meditations, by influencing our mind and glandular system, calm the mind, enhance concentration, and regulate hormone production. A lasting sense of fulfillment also arises. Our specialists, using a personalized approach, will help address your specific issues. We gladly welcome everyone. Join us this coming Sunday.

The class includes:
✅ Mantra meditations
✅ Asanas (exercises)
✅ Yogic dances, songs
✅ A lecture and interesting conversations over tea`,
        ru: `Испытываете проблемы с концентрацией, стресс, зависимость от социальных сетей или еды, нехватку энергии или жажду счастья? Значит, вы в правильном месте. Йога помогает решить эти проблемы. Предлагаемые упражнения и медитации, воздействуя на наш разум и эндокринную (железистую) систему, успокаивают ум, улучшают концентрацию и регулируют выработку гормонов. Также появляется стойкое чувство удовлетворения. Наши специалисты благодаря индивидуальному подходу помогут решить именно ваши проблемы. Мы с радостью ждем всех. Присоединяйтесь в предстоящее воскресенье.

Занятие включает в себя:
✅ Мантра-медитации
✅ Асаны (упражнения)
✅ Йогические танцы, песни
✅ Лекцию и интересные беседы за чаем`,
        am: `Ունե՞ս ապակենտրոնացում, սթրես, կախվածություն սոց․ ցանցերից կամ սննդից, եռանդի պակաս կամ երջանկության ծարավ․ ուրեմն ճիշտ տեղում ես։ Յոգան օգնում է լուծել այս խնդիրները։ Առաջարկվող վարժություններն ու մեդիտացիաները, ներգործելով մեր մտքի և գեղձային համակարգի վրա, հանգստացնում են միտքը, ուժեղացնում կենտրոնացումը և կարգավորում հորմոնարտադրությունը։ Ի հայտ է գալիս նաև մնայուն բավարարվածության զգացում։ Մեր մասնագետներն անհատական մոտեցմամբ կօգնեն հասցեագրել հենց Ձեր խնդիրները։ Մենք սիրով սպասում ենք բոլորին։ Միացե՛ք գալիք կիրակի։

Դասը ներառում է՝
✅ Մանտրա-մեդիտացիաներ
✅ Ասանաներ (վարժություններ)
✅ Յոգական պարեր, երգեր
✅ Դասախոսություն և հետաքրքիր զրույցներ թեյի շուրջ:`,
        ka: `გაქვთ კონცენტრაციის ნაკლებობა, სტრესი, სოციალურ ქსელებზე ან საკვებზე დამოკიდებულება, ენერგიის ნაკლებობა ან ბედნიერების წყურვილი? მაშინ სწორ ადგილას ხართ. იოგა ამ პრობლემების მოგვარებაში გვეხმარება. შემოთავაზებული ვარჯიშები და მედიტაციები, ჩვენს გონებასა და ჯირკვლოვან სისტემაზე ზემოქმედებით, ამშვიდებს გონებას, აძლიერებს კონცენტრაციას და არეგულირებს ჰორმონების გამომუშავებას. ჩნდება ხანგრძლივი კმაყოფილების განცდაც. ჩვენი სპეციალისტები ინდივიდუალური მიდგომით დაგეხმარებიან სწორედ თქვენი პრობლემების მოგვარებაში. სიხარულით ველოდებით ყველას. შემოგვიერთდით მომავალ კვირას.

გაკვეთილი მოიცავს:
✅ მანტრა-მედიტაციებს
✅ ასანებს (ვარჯიშებს)
✅ იოგურ ცეკვებს, სიმღერებს
✅ ლექციასა და საინტერესო საუბრებს ჩაისთან ერთად`,
        hi: `क्या आप एकाग्रता की कमी, तनाव, सोशल मीडिया या भोजन की लत, ऊर्जा की कमी या खुशी की प्यास महसूस करते हैं? तो आप सही जगह पर हैं। योग इन समस्याओं को हल करने में मदद करता है। प्रस्तावित व्यायाम और ध्यान, हमारे मन और ग्रंथि तंत्र पर प्रभाव डालकर, मन को शांत करते हैं, एकाग्रता बढ़ाते हैं और हार्मोन उत्पादन को नियंत्रित करते हैं। संतुष्टि की एक स्थायी भावना भी उत्पन्न होती है। हमारे विशेषज्ञ व्यक्तिगत दृष्टिकोण से आपकी विशेष समस्याओं को हल करने में मदद करेंगे। हम सभी का हार्दिक स्वागत करते हैं। इस आने वाले रविवार को हमसे जुड़ें।

कक्षा में शामिल हैं:
✅ मंत्र ध्यान
✅ आसन (व्यायाम)
✅ योग नृत्य, गीत
✅ व्याख्यान और चाय पर रोचक बातचीत`,
        es: `¿Experimentas falta de concentración, estrés, adicción a las redes sociales o a la comida, poca energía o sed de felicidad? Si es así, estás en el lugar correcto. El yoga ayuda a resolver estos problemas. Los ejercicios y meditaciones ofrecidos, al influir en nuestra mente y en el sistema glandular, calman la mente, mejoran la concentración y regulan la producción de hormonas. También surge una sensación duradera de plenitud. Nuestros especialistas, con un enfoque personalizado, te ayudarán a abordar tus problemas específicos. Damos la bienvenida a todos con mucho gusto. Únete a nosotros este próximo domingo.

La clase incluye:
✅ Meditaciones con mantras
✅ Asanas (ejercicios)
✅ Danzas y cantos yóguicos
✅ Una charla e interesantes conversaciones tomando té`,
        de: `Erlebst du Konzentrationsmangel, Stress, Abhängigkeit von sozialen Medien oder Essen, Energiemangel oder einen Durst nach Glück? Dann bist du hier genau richtig. Yoga hilft, diese Probleme zu lösen. Die angebotenen Übungen und Meditationen wirken auf unseren Geist und das Drüsensystem, beruhigen den Geist, stärken die Konzentration und regulieren die Hormonproduktion. Es entsteht auch ein anhaltendes Gefühl der Erfüllung. Unsere Spezialisten helfen dir mit einem individuellen Ansatz, genau deine Anliegen anzugehen. Wir heißen alle herzlich willkommen. Sei am kommenden Sonntag dabei.

Die Stunde umfasst:
✅ Mantra-Meditationen
✅ Asanas (Übungen)
✅ Yogische Tänze und Lieder
✅ Einen Vortrag und interessante Gespräche bei Tee`,
        fr: `Ressentez-vous un manque de concentration, du stress, une dépendance aux réseaux sociaux ou à la nourriture, un manque d'énergie ou une soif de bonheur ? Alors vous êtes au bon endroit. Le yoga aide à résoudre ces problèmes. Les exercices et méditations proposés, en agissant sur notre esprit et notre système glandulaire, apaisent le mental, renforcent la concentration et régulent la production d'hormones. Un sentiment durable de plénitude apparaît également. Nos spécialistes, grâce à une approche personnalisée, vous aideront à traiter vos problèmes spécifiques. Nous accueillons tout le monde avec joie. Rejoignez-nous dimanche prochain.

Le cours comprend :
✅ Méditations avec mantras
✅ Asanas (exercices)
✅ Danses et chants yogiques
✅ Une conférence et des conversations intéressantes autour d'un thé`,
    },
    social_links: {
        header:  {
            en: "Contact Us",
            ru: "Наши контакты",
            am: "Կոնտակտային հարթակներ",
            ka: "დაგვიკავშირდით",
            hi: "संपर्क करें",
            es: "Contáctanos",
            de: "Kontakt",
            fr: "Nous Contacter",
        },
        video_header:  {
            en: "Video Channels",
            ru: "Видео Про Йогу",
            am: "Հոլովակների Շտեմարան",
            ka: "ვიდეო არხები",
            hi: "वीडियो चैनल",
            es: "Canales de Video",
            de: "Videokanäle",
            fr: "Chaînes Vidéo",
        },
        telegram_channel:  {
            en: "Telegram Channel ",
            ru: "Телеграм Канал ",
            am: "Տելեգրամ Ալիք ",
            ka: "ტელეგრამის არხი ",
            hi: "टेलीग्राम चैनल ",
            es: "Canal de Telegram ",
            de: "Telegram-Kanal ",
            fr: "Chaîne Telegram ",
        },
        facebook:  {
            en: "Facebook ",
            ru: "Фейсбук ",
            am: "Ֆեյսբուք ",
            ka: "ფეისბუქი ",
            hi: "फ़ेसबुक ",
            es: "Facebook ",
            de: "Facebook ",
            fr: "Facebook ",
        },
        instagram:  {
            en: "Instagram page ",
            ru: "Инстаграм ",
            am: "Ինստագրամ ",
            ka: "ინსტაგრამი ",
            hi: "इंस्टाग्राम पेज ",
            es: "Página de Instagram ",
            de: "Instagram-Seite ",
            fr: "Page Instagram ",
        },
        telegram_group:  {
            en: "Telegram Group ",
            ru: "Телеграм Группа",
            am: "Տելեգրամի Խումբ",
            ka: "ტელეგრამის ჯგუფი",
            hi: "टेलीग्राम समूह",
            es: "Grupo de Telegram",
            de: "Telegram-Gruppe",
            fr: "Groupe Telegram",
        },
        youtube_armenian: {
            en: "Yoga & Meditation (Armenian)",
            ru: "Йога и Медитация (Армянский)",
            am: "Յոգա և Մեդիտացիա (Հայերեն)",
            ka: "იოგა და მედიტაცია (სომხურად)",
            hi: "योग और ध्यान (अर्मेनियाई)",
            es: "Yoga y Meditación (Armenio)",
            de: "Yoga & Meditation (Armenisch)",
            fr: "Yoga et Méditation (Arménien)",
        },
        youtube_yoga_science: {
            en: "Yoga Science (Eng/Rus)",
            ru: "Йога Наука (Англ/Рус)",
            am: "Յոգական Գիտություն (Անգլ/Ռուս)",
            ka: "იოგას მეცნიერება (ინგ/რუს)",
            hi: "योग विज्ञान (अंग्रेज़ी/रूसी)",
            es: "Ciencia del Yoga (Ing/Rus)",
            de: "Yoga-Wissenschaft (Eng/Rus)",
            fr: "Science du Yoga (Ang/Rus)",
        },
    },
    teachers: {
        en: "Teachers",
        ru: "Учителя",
        am: "Ուսուցիչներ",
        ka: "მასწავლებლები",
        hi: "शिक्षक",
        es: "Maestros",
        de: "Lehrer",
        fr: "Enseignants",
    },
    teacher_dada_yukteshvara: {
        en: "Dada Yukteshvara",
        ru: "Дада Юктешвара",
        am: "Դադա Յուկտեշվարա",
        ka: "დადა იუკტეშვარა",
        hi: "दादा युक्तेश्वर",
        es: "Dada Yukteshvara",
        de: "Dada Yukteshvara",
        fr: "Dada Yukteshvara",
    },
    teacher_didi_ananda_sanjana: {
        en: "Didi Ananda Sanjana",
        ru: "Диди Ананда Санджана",
        am: "Դիդի Անանդա Սանջանա",
        ka: "დიდი ანანდა სანჯანა",
        hi: "दीदी आनंद संजना",
        es: "Didi Ananda Sanjana",
        de: "Didi Ananda Sanjana",
        fr: "Didi Ananda Sanjana",
    },
    instructors:  {
        en: "Instructors",
        ru: "Инструкторы",
        am: "Հրահանգիչներ",
        ka: "ინსტრუქტორები",
        hi: "प्रशिक्षक",
        es: "Instructores",
        de: "Kursleiter",
        fr: "Instructeurs",
    },
    instructor_narek: {
        en: "Narek",
        ru: "Нарек",
        am: "Նարեկ",
        ka: "ნარეკი",
        hi: "नारेक",
        es: "Narek",
        de: "Narek",
        fr: "Narek",
    },
    instructor_vardan: {
        en: "Vardan",
        ru: "Вардан",
        am: "Վարդան",
        ka: "ვარდანი",
        hi: "वरदान",
        es: "Vardan",
        de: "Vardan",
        fr: "Vardan",
    },
    instructor_davit: {
        en: "Davit",
        ru: "Давид",
        am: "Դավիթ",
        ka: "დავითი",
        hi: "दावित",
        es: "Davit",
        de: "Davit",
        fr: "Davit",
    },
    instructor_khachik: {
        en: "Khachik",
        ru: "Хачик",
        am: "Խաչիկ",
        ka: "ხაჩიკი",
        hi: "खाचिक",
        es: "Khachik",
        de: "Khachik",
        fr: "Khachik",
    },
    instructor_madhuvanii: {
        en: "Madhuvanii",
        ru: "Мадувани",
        am: "Մադուվանի",
        ka: "მადუვანი",
        hi: "मधुवनी",
        es: "Madhuvanii",
        de: "Madhuvanii",
        fr: "Madhuvanii",
    },
    footer: {
        en: "Kindly, Meditation Steps Armenia team.",
        ru: "С любовью, команда Уроки Медитации Армения.",
        am: "Սիրով, Մեդիտացիայի Դասեր Հայաստանում թիմ:",
        ka: "სიყვარულით, Meditation Steps Armenia-ის გუნდი.",
        hi: "सप्रेम, मेडिटेशन स्टेप्स आर्मेनिया टीम।",
        es: "Con cariño, el equipo de Meditation Steps Armenia.",
        de: "Herzlichst, das Team von Meditation Steps Armenia.",
        fr: "Avec amour, l'équipe de Meditation Steps Armenia.",
    },
    // © and the current year are appended dynamically in script.js
    footer_copyright: {
        en: "All rights reserved",
        ru: "Все права защищены",
        am: "Բոլոր իրավունքները պաշտպանված են",
        ka: "ყველა უფლება დაცულია",
        hi: "सर्वाधिकार सुरक्षित",
        es: "Todos los derechos reservados",
        de: "Alle Rechte vorbehalten",
        fr: "Tous droits réservés",
    }
};
