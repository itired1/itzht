/* ═══════════════════════════════════════════════════════
   ПРИВГУПС — Скрипты: переводы, тема, анимации, частицы
   ═══════════════════════════════════════════════════════ */

/* ── Словарь переводов (i18n) ── */
const i18n = {
  ru: {
    siteTitle: 'Приволжский государственный университет путей сообщения',
    siteShort: 'ПривГУПС',
    siteSub: 'Приволжский государственный университет путей сообщения',
    loading: 'Загрузка...',
    topPhone: '8-800-775-23-25',
    topBlind: 'Версия для слабовидящих',
    navHome: 'Главная',
    navAbout: 'Об университете',
    navEducation: 'Образование',
    navScience: 'Наука',
    navStructure: 'Структура',
    navContacts: 'Контакты',
    heroBadge: 'Приемная кампания 2026',
    heroTitle1: 'Построй будущее',
    heroTitle2: 'с ПривГУПС',
    heroDesc: 'Ведущий транспортный вуз Поволжья. Высшее и среднее профессиональное образование, наука и инновации для железнодорожной отрасли России. Основан в 1973 году.',
    heroBtn1: 'Подать документы',
    heroBtn2: 'О университете',
    statStudents: 'Студентов',
    statDirections: 'Направлений подготовки',
    statBranches: 'Филиалов в городах РФ',
    statFounded: 'Год основания',
    aboutTag: 'О университете',
    aboutTitle: 'Приволжский государственный университет путей сообщения',
    aboutDesc: 'ПривГУПС — ведущий транспортный вуз Поволжья, готовящий специалистов для железнодорожной отрасли и транспортного комплекса России',
    aboutSubtitle: 'История и миссия',
    aboutP1: 'Приволжский государственный университет путей сообщения (ранее — СамГУПС) ведёт свою историю с 1973 года. За десятилетия работы вуз подготовил десятки тысяч высококвалифицированных специалистов для железнодорожного транспорта.',
    aboutP2: 'Сегодня ПривГУПС — это современный образовательный и научный центр, объединяющий головной вуз в Самаре, 10 филиалов и 3 техникума в городах Поволжья, Прикамья и Центральной России.',
    aboutF1: 'Государственная аккредитация',
    aboutF2: 'Военная кафедра',
    aboutF3: 'Бюджетные места',
    aboutF4: 'Общежития для студентов',
    aboutF5: 'Трудоустройство в РЖД',
    aboutF6: 'Цифровая образовательная среда',
    structTag: 'Структура',
    structTitle: 'Сведения об образовательной организации',
    structDesc: 'Полная информация о деятельности университета в соответствии с требованиями законодательства РФ',
    struct1Title: 'Основные сведения',
    struct1Desc: 'Полное наименование, дата создания, учредитель, место нахождения, режим работы',
    struct2Title: 'Структура и органы управления',
    struct2Desc: 'Ректорат, факультеты, кафедры, филиалы, представительства, коллегиальные органы',
    struct3Title: 'Документы',
    struct3Desc: 'Устав, лицензия, свидетельство об аккредитации, локальные нормативные акты',
    struct4Title: 'Образовательные стандарты',
    struct4Desc: 'ФГОС по всем направлениям, учебные планы, аннотации к программам',
    struct5Title: 'Руководство и педсостав',
    struct5Desc: 'Ректор, проректоры, деканы, заведующие кафедрами, профессорско-преподавательский состав',
    struct6Title: 'Материально-техническая база',
    struct6Desc: 'Учебные корпуса, лаборатории, библиотеки, общежития, спортсооружения',
    struct7Title: 'Финансово-хозяйственная деятельность',
    struct7Desc: 'Платные услуги, бюджет, стипендии, вакантные места, меры поддержки',
    struct8Title: 'Международная деятельность',
    struct8Desc: 'Программы обмена, международные проекты, сотрудничество с зарубежными вузами',
    structMore: 'Подробнее →',
    eduTag: 'Образование',
    eduTitle: 'Программы подготовки',
    eduDesc: 'Современные образовательные программы высшего, среднего профессионального и дополнительного образования',
    edu1Title: 'Высшее образование',
    edu1Desc: 'Бакалавриат, специалитет, магистратура и аспирантура. Транспортные, инженерные, IT и экономические специальности.',
    edu1Link1: 'Абитуриентам →',
    edu1Link2: 'Приемная комиссия →',
    edu1Link3: 'Вопросы и ответы →',
    edu2Title: 'Среднее профессиональное образование',
    edu2Desc: 'Колледжи и техникумы в Самаре, Саратове, Казани, Пензе, Кирове, Алатыре, Ижевске, Ртищево.',
    edu2Link1: 'Самарский колледж ж/д транспорта →',
    edu2Link2: 'Все филиалы СПО →',
    edu3Title: 'Дополнительное образование',
    edu3Desc: 'Повышение квалификации, профессиональная переподготовка, центр транспортной безопасности.',
    edu3Link1: 'Институт дополнительного образования →',
    edu3Link2: 'Институт профессиональных компетенций →',
    edu4Title: 'Студентам',
    edu4Desc: 'Расписание, цифровой университет, личный кабинет, общежития, портфолио, спорт и культура.',
    edu4Link1: 'Цифровой университет →',
    edu4Link2: 'Личный кабинет →',
    edu4Link3: 'Расписание →',
    edu4Link4: 'Библиотека →',
    scienceTag: 'Наука',
    scienceTitle: 'Научная деятельность',
    scienceDesc: 'Фундаментальные и прикладные исследования в области железнодорожного транспорта и смежных отраслей',
    sci1Title: 'Научные школы и разработки',
    sci1Desc: 'Исследования в области безопасности движения, цифровых технологий на транспорте, строительства ж/д путей и логистики.',
    sci2Title: 'Диссертационный совет',
    sci2Desc: 'Совет 44.2.006.01 по защите докторских и кандидатских диссертаций по транспортным специальностям.',
    sci3Title: 'Научные издания',
    sci3Desc: 'Рецензируемые научные журналы, сборники трудов конференций, монографии и учебные пособия.',
    sci4Title: 'Конкурсы и гранты',
    sci4Desc: 'Конкурсы РНФ, гранты Президента РФ, студенческие научные кружки и олимпиады дипломных проектов.',
    branchesTag: 'Филиалы',
    branchesTitle: 'География ПривГУПС',
    branchesDesc: '10 филиалов и 3 техникума в городах Поволжья, Прикамья и Центральной России',
    newsTag: 'Новости',
    newsTitle: 'Последние события университета',
    newsDesc: 'Будьте в курсе главных новостей ПривГУПС',
    newsReadMore: 'Читать далее →',
    news1Title: 'День открытых дверей ПривГУПС',
    news1Text: 'Приглашаем абитуриентов и их родителей на день открытых дверей в главный корпус университета. В программе: презентация направлений, экскурсия по кафедрам и лабораториям.',
    news2Title: 'Победа в конкурсе научных проектов РЖД',
    news2Text: 'Команда студентов ПривГУПС заняла первое место в конкурсе инновационных проектов для железнодорожного транспорта с проектом "Цифровая сортировочная горка".',
    news3Title: 'Запуск цифровой кафедры',
    news3Text: 'В университете открылась новая цифровая кафедра по подготовке IT-специалистов для транспортной отрасли в рамках программы "Приоритет 2030".',
    news4Title: 'Призёры Всероссийской олимпиады',
    news4Text: 'Студенты специальности "Эксплуатация железных дорог" завоевали золото и серебро на Всероссийской олимпиаде профессионального мастерства.',
    news5Title: 'Соглашение с РЖД',
    news5Text: 'ПривГУПС и Куйбышевская железная дорога подписали соглашение о стратегическом партнёрстве в области подготовки кадров и научных разработок.',
    news6Title: 'Международная конференция',
    news6Text: 'В университете прошла VI Международная научно-практическая конференция "Транспорт: наука, образование, производство" с участием 200+ учёных.',
    ctaTitle: 'Готов стать частью ПривГУПС?',
    ctaDesc: 'Подай документы онлайн уже сегодня и начни путь к профессии будущего в ведущем транспортном вузе Поволжья',
    ctaBtn: 'Поступить сейчас',
    contactsTag: 'Контакты',
    contactsTitle: 'Свяжитесь с нами',
    contactPhone: '8-800-775-23-25',
    contactAddress: 'г. Самара, ул. Свободы, 2В',
    contactEmail: 'priem@samgups.ru',
    contactHours: 'Пн–Пт: 9:00 – 17:00',
    contactRector: 'Ректорат',
    contactRectorAddr: 'г. Самара, ул. Свободы, 2В, каб. 3401',
    contactRectorEmail: 'rector@samgups.ru',
    contactDigital: 'Цифровой университет:',
    formName: 'Ваше имя',
    formEmail: 'Email',
    formPhone: 'Телефон',
    formMessage: 'Ваш вопрос...',
    formSubmit: 'Отправить',
    formAlert: 'Форма отправлена! Мы свяжемся с вами.',
    footerDesc: 'Приволжский государственный университет путей сообщения. Готовим специалистов для железнодорожной отрасли с 1973 года. Лицензия и государственная аккредитация.',
    footerEdu: 'Образование',
    footerEdu1: 'Высшее образование',
    footerEdu2: 'Среднее проф. образование',
    footerEdu3: 'Доп. образование',
    footerEdu4: 'Аспирантура',
    footerEdu5: 'Филиалы',
    footerStudents: 'Студентам',
    footerStud1: 'Расписание занятий',
    footerStud2: 'Личный кабинет',
    footerStud3: 'Цифровой университет',
    footerStud4: 'Общежития',
    footerStud5: 'Спорт и культура',
    footerUniv: 'Университет',
    footerUniv1: 'История и музей',
    footerUniv2: 'Руководство',
    footerUniv3: 'Противодействие коррупции',
    footerUniv4: 'Пресс-центр',
    footerUniv5: 'Контакты',
    footerCopy: '© 2026 Приволжский государственный университет путей сообщения (ПривГУПС)',
    structBadge1: 'Основное',
    structBadge2: 'Структура',
    structBadge3: 'Документы',
    structBadge4: 'Стандарты',
    structBadge5: 'Руководство',
    structBadge6: 'Материалы',
    structBadge7: 'Финансы',
    structBadge8: 'Сотрудничество',
  },

  en: {
    siteTitle: 'Privolzhsky State University of Transport',
    siteShort: 'PrivGUPS',
    siteSub: 'Privolzhsky State University of Transport',
    loading: 'Loading...',
    topPhone: '8-800-775-23-25',
    topBlind: 'Blind version',
    navHome: 'Home',
    navAbout: 'About',
    navEducation: 'Education',
    navScience: 'Science',
    navStructure: 'Structure',
    navContacts: 'Contacts',
    heroBadge: 'Admission Campaign 2026',
    heroTitle1: 'Build the future',
    heroTitle2: 'with PrivGUPS',
    heroDesc: 'The leading transport university of the Volga region. Higher and secondary vocational education, science and innovation for the railway industry of Russia. Founded in 1973.',
    heroBtn1: 'Apply now',
    heroBtn2: 'About us',
    statStudents: 'Students',
    statDirections: 'Programs',
    statBranches: 'Branches across Russia',
    statFounded: 'Founded',
    aboutTag: 'About',
    aboutTitle: 'Privolzhsky State University of Transport',
    aboutDesc: 'PrivGUPS is the leading transport university of the Volga region, training specialists for the railway industry and transport complex of Russia',
    aboutSubtitle: 'History & Mission',
    aboutP1: 'Privolzhsky State University of Transport (formerly SamGUPS) traces its history back to 1973. Over decades, the university has trained tens of thousands of highly qualified specialists for railway transport.',
    aboutP2: 'Today PrivGUPS is a modern educational and scientific center, uniting the main campus in Samara, 10 branches and 3 technical schools in the cities of the Volga region, Kama region and Central Russia.',
    aboutF1: 'State accreditation',
    aboutF2: 'Military department',
    aboutF3: 'State-funded places',
    aboutF4: 'Dormitories',
    aboutF5: 'Employment at Russian Railways',
    aboutF6: 'Digital learning environment',
    structTag: 'Structure',
    structTitle: 'Information about the educational organization',
    structDesc: 'Complete information about the university activities in accordance with Russian legislation requirements',
    struct1Title: 'General Information',
    struct1Desc: 'Full name, founding date, founder, location, operating hours',
    struct2Title: 'Management Structure',
    struct2Desc: 'Rectorate, faculties, departments, branches, representative offices, collegial bodies',
    struct3Title: 'Documents',
    struct3Desc: 'Charter, license, accreditation certificate, local regulations',
    struct4Title: 'Educational Standards',
    struct4Desc: 'Federal standards for all programs, curricula, program annotations',
    struct5Title: 'Administration & Faculty',
    struct5Desc: 'Rector, vice-rectors, deans, department heads, teaching staff',
    struct6Title: 'Facilities',
    struct6Desc: 'Academic buildings, laboratories, libraries, dormitories, sports facilities',
    struct7Title: 'Financial Activities',
    struct7Desc: 'Paid services, budget, scholarships, vacancies, support measures',
    struct8Title: 'International Cooperation',
    struct8Desc: 'Exchange programs, international projects, collaboration with foreign universities',
    structMore: 'Learn more →',
    eduTag: 'Education',
    eduTitle: 'Academic Programs',
    eduDesc: 'Modern educational programs of higher, secondary vocational and additional education',
    edu1Title: 'Higher Education',
    edu1Desc: 'Bachelor, specialist, master and postgraduate programs. Transport, engineering, IT and economics.',
    edu1Link1: 'Applicants →',
    edu1Link2: 'Admissions Office →',
    edu1Link3: 'FAQ →',
    edu2Title: 'Secondary Vocational Education',
    edu2Desc: 'Colleges and technical schools in Samara, Saratov, Kazan, Penza, Kirov, Alatyr, Izhevsk, Rtishchevo.',
    edu2Link1: 'Samara College of Railway Transport →',
    edu2Link2: 'All branches →',
    edu3Title: 'Additional Education',
    edu3Desc: 'Professional development, retraining, transport security center.',
    edu3Link1: 'Institute of Additional Education →',
    edu3Link2: 'Institute of Professional Competencies →',
    edu4Title: 'Students',
    edu4Desc: 'Schedule, digital university, personal account, dormitories, portfolio, sports and culture.',
    edu4Link1: 'Digital University →',
    edu4Link2: 'Personal Account →',
    edu4Link3: 'Schedule →',
    edu4Link4: 'Library →',
    scienceTag: 'Science',
    scienceTitle: 'Research',
    scienceDesc: 'Fundamental and applied research in railway transport and related industries',
    sci1Title: 'Research Schools',
    sci1Desc: 'Research in traffic safety, digital transport technologies, railway construction and logistics.',
    sci2Title: 'Dissertation Council',
    sci2Desc: 'Council 44.2.006.01 for doctoral and candidate thesis defenses in transport specialties.',
    sci3Title: 'Scientific Publications',
    sci3Desc: 'Peer-reviewed journals, conference proceedings, monographs and textbooks.',
    sci4Title: 'Grants & Competitions',
    sci4Desc: 'RSF competitions, Presidential grants, student research clubs, diploma project olympiads.',
    branchesTag: 'Branches',
    branchesTitle: 'PrivGUPS Geography',
    branchesDesc: '10 branches and 3 technical schools across the Volga, Kama and Central Russia',
    newsTag: 'News',
    newsTitle: 'Latest News',
    newsDesc: 'Stay up to date with PrivGUPS news',
    newsReadMore: 'Read more →',
    news1Title: 'PrivGUPS Open Day',
    news1Text: 'We invite applicants and their parents to the Open Day at the main building. Program: program presentations, tour of departments and laboratories.',
    news2Title: 'Victory at Russian Railways Science Competition',
    news2Text: 'A team of PrivGUPS students won first place at the innovative projects competition for railway transport with the "Digital Hump Yard" project.',
    news3Title: 'Digital Department Launch',
    news3Text: 'The university opened a new digital department for training IT specialists for the transport industry under the "Priority 2030" program.',
    news4Title: 'All-Russian Olympiad Winners',
    news4Text: 'Students of "Railway Operation" specialty won gold and silver at the All-Russian Professional Skills Olympiad.',
    news5Title: 'Agreement with Russian Railways',
    news5Text: 'PrivGUPS and Kuybyshev Railway signed a strategic partnership agreement in personnel training and research.',
    news6Title: 'International Transport Conference',
    news6Text: 'The university hosted the VI International Conference "Transport: Science, Education, Production" with 200+ participants.',
    ctaTitle: 'Ready to join PrivGUPS?',
    ctaDesc: 'Apply online today and start your path to a future profession at the leading transport university of the Volga region',
    ctaBtn: 'Apply now',
    contactsTag: 'Contacts',
    contactsTitle: 'Get in touch',
    contactPhone: '8-800-775-23-25',
    contactAddress: 'Samara, Svobody St., 2V',
    contactEmail: 'priem@samgups.ru',
    contactHours: 'Mon–Fri: 9:00 – 17:00',
    contactRector: 'Rectorate',
    contactRectorAddr: 'Samara, Svobody St., 2V, office 3401',
    contactRectorEmail: 'rector@samgups.ru',
    contactDigital: 'Digital university:',
    formName: 'Your name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formMessage: 'Your question...',
    formSubmit: 'Send',
    formAlert: 'Form submitted! We will contact you.',
    footerDesc: 'Privolzhsky State University of Transport. Training specialists for the railway industry since 1973. License and state accreditation.',
    footerEdu: 'Education',
    footerEdu1: 'Higher Education',
    footerEdu2: 'Secondary Education',
    footerEdu3: 'Additional Education',
    footerEdu4: 'Postgraduate',
    footerEdu5: 'Branches',
    footerStudents: 'Students',
    footerStud1: 'Schedule',
    footerStud2: 'Personal Account',
    footerStud3: 'Digital University',
    footerStud4: 'Dormitories',
    footerStud5: 'Sports & Culture',
    footerUniv: 'University',
    footerUniv1: 'History & Museum',
    footerUniv2: 'Administration',
    footerUniv3: 'Anti-Corruption',
    footerUniv4: 'Press Center',
    footerUniv5: 'Contacts',
    footerCopy: '© 2026 Privolzhsky State University of Transport (PrivGUPS)',
    structBadge1: 'General',
    structBadge2: 'Structure',
    structBadge3: 'Docs',
    structBadge4: 'Standards',
    structBadge5: 'Staff',
    structBadge6: 'Facilities',
    structBadge7: 'Finance',
    structBadge8: 'Intl.',
  }
};

/* ── Текущий язык (из localStorage или по умолчанию русский) ── */
let currentLang = localStorage.getItem('prvgups-lang') || 'ru';

/* ── Применить перевод ко всем элементам на странице ── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('prvgups-lang', lang);

  // Обновляем текстовые элементы
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });

  // Обновляем HTML-элементы
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Обновляем title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (i18n[lang][key]) {
      el.title = i18n[lang][key];
    }
  });

  // Подсвечиваем активную кнопку языка
  document.querySelector('.lang-btn-ru')?.classList.toggle('active', lang === 'ru');
  document.querySelector('.lang-btn-en')?.classList.toggle('active', lang === 'en');

  // Перерисовываем новости
  renderNews();
}

/* ── Переключение темы (тёмная/светлая) ── */
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('prvgups-theme', next);

  // Меняем иконку солнца/луны
  document.querySelectorAll('.theme-btn .icon').forEach(el => {
    el.textContent = next === 'dark' ? '\u2600' : '\u{1F319}';
  });
}

/* ── Инициализация темы при загрузке ── */
function initTheme() {
  const saved = localStorage.getItem('prvgups-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.querySelectorAll('.theme-btn .icon').forEach(el => {
    el.textContent = saved === 'dark' ? '\u2600' : '\u{1F319}';
  });
}

/* ── Данные новостей с датами ── */
const newsData = [
  { dateRU: '12 мая 2026', dateEN: 'May 12, 2026', key: 'news1' },
  { dateRU: '5 мая 2026', dateEN: 'May 5, 2026', key: 'news2' },
  { dateRU: '28 апреля 2026', dateEN: 'April 28, 2026', key: 'news3' },
  { dateRU: '20 апреля 2026', dateEN: 'April 20, 2026', key: 'news4' },
  { dateRU: '15 апреля 2026', dateEN: 'April 15, 2026', key: 'news5' },
  { dateRU: '8 апреля 2026', dateEN: 'April 8, 2026', key: 'news6' },
];

const newsColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#14b8a6'];

/* ── Рендер новостей в сетку ── */
function renderNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  newsData.forEach((item, i) => {
    const date = currentLang === 'ru' ? item.dateRU : item.dateEN;
    const title = i18n[currentLang][`${item.key}Title`] || '';
    const text = i18n[currentLang][`${item.key}Text`] || '';
    const readMore = i18n[currentLang]['newsReadMore'] || 'Read more →';

    const card = document.createElement('div');
    card.className = 'news-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    const imgSeed = 100 + i;
    card.innerHTML = `
      <div class="news-card-img" style="background:var(--bg-card);overflow:hidden;">
        <img src="https://picsum.photos/seed/${imgSeed}/400/200" alt="${title}"
             style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
             loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,var(--bg-primary));z-index:1;"></div>
        <span style="position:relative;z-index:2;font-weight:600;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.5);">${title.substring(0, 30)}…</span>
      </div>
      <div class="news-card-body">
        <div class="news-card-date">${date}</div>
        <h3>${title}</h3>
        <p>${text}</p>
        <a href="news.html?id=${i + 1}" class="news-card-link">${readMore}</a>
      </div>
    `;
    grid.appendChild(card);
  });

  // Наблюдаем за новыми карточками для анимации появления
  document.querySelectorAll('.news-card.reveal').forEach(el => observer.observe(el));
}

/* ── Детальная страница новости ── */
function renderNewsDetail() {
  const grid = document.getElementById('newsDetailGrid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const item = newsData[id - 1];
  if (!item) {
    // Если ID нет — показываем все новости
    renderAllNews(grid);
    return;
  }

  const date = currentLang === 'ru' ? item.dateRU : item.dateEN;
  const title = i18n[currentLang][`${item.key}Title`] || '';
  const text = i18n[currentLang][`${item.key}Text`] || '';
  const color = newsColors[id - 1] || newsColors[0];

  grid.innerHTML = `
    <a href="news.html" class="news-back">&larr; Все новости</a>
    <div class="news-detail-card reveal">
      <div class="news-detail-img" style="background:linear-gradient(135deg, ${color}22, ${color}08);"></div>
      <div class="news-detail-body">
        <div class="news-card-date">${date}</div>
        <h1>${title}</h1>
        <p>${text}</p>
        <p>Подробная информация будет опубликована в ближайшее время. Следите за обновлениями на официальном сайте ПривГУПС.</p>
      </div>
    </div>
  `;
  document.querySelectorAll('.news-detail-card.reveal').forEach(el => observer.observe(el));
}

function renderAllNews(grid) {
  grid.innerHTML = '<a href="index.html#news" class="news-back">&larr; На главную</a><div class="news-grid" style="grid-column:1/-1;"></div>';
  const subGrid = grid.querySelector('.news-grid');
  newsData.forEach((item, i) => {
    const date = currentLang === 'ru' ? item.dateRU : item.dateEN;
    const title = i18n[currentLang][`${item.key}Title`] || '';
    const text = i18n[currentLang][`${item.key}Text`] || '';
    const readMore = i18n[currentLang]['newsReadMore'] || 'Read more →';

    const card = document.createElement('div');
    card.className = 'news-card reveal';
    card.style.transitionDelay = `${i * 0.08}s`;
    const imgSeed = 100 + i;
    card.innerHTML = `
      <div class="news-card-img" style="background:var(--bg-card);overflow:hidden;">
        <img src="https://picsum.photos/seed/${imgSeed}/400/200" alt="${title}"
             style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
             loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,var(--bg-primary));z-index:1;"></div>
        <span style="position:relative;z-index:2;font-weight:600;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,0.5);">${title.substring(0, 30)}…</span>
      </div>
      <div class="news-card-body">
        <div class="news-card-date">${date}</div>
        <h3>${title}</h3>
        <p>${text}</p>
        <a href="news.html?id=${i + 1}" class="news-card-link">${readMore}</a>
      </div>
    `;
    subGrid.appendChild(card);
  });
  document.querySelectorAll('.news-card.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════
   АНИМАЦИЯ ЧАСТИЦ НА ГЛАВНОМ ЭКРАНЕ
   ═══════════════════════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('heroCanvas');
  if (!container) return;
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = container.offsetWidth;
    H = canvas.height = container.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Класс частицы
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.size = Math.random() * 2 + 1.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.3 + 0.1;
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.x < 0 || this.x > W) this.speedX *= -1;
      if (this.y < 0 || this.y > H) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  // Рисуем соединительные линии между близкими частицами
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${0.05 * (1 - d / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ═══════════════════════════════════════════════════════
   АНИМАЦИЯ СЧЁТЧИКОВ СТАТИСТИКИ
   ═══════════════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('.hero-stat .num, .about-stats-grid .stat-card .num');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));
}

/* ── Анимация одного счётчика от 0 до целевого значения ── */
function animateCounter(el) {
  const text = el.textContent.trim();
  // Определяем, есть ли суффикс (+)
  const suffix = text.endsWith('+') ? '+' : '';
  const rawNumber = text.replace(/[+\s]/g, '').replace(/\s/g, '');
  const target = parseInt(rawNumber, 10);
  if (isNaN(target)) return;

  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Плавное замедление (ease-out)
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    // Форматируем число с пробелами разрядов
    el.textContent = current.toLocaleString('ru-RU') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ── Обновление активного пункта навигации при скролле ── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  // На внутренних страницах нет section[id] — не сбрасываем active
  if (!sections.length) return;

  let current = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ── Кнопка «Наверх» ── */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════
   ПОИСК ПО САЙТУ
   ═══════════════════════════════════════════════════════ */
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  const isOpen = overlay.classList.toggle('open');
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
  } else {
    document.body.style.overflow = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '<div class="search-hint">Начните вводить текст для поиска по сайту</div>';
  }
}

function doSearch(query) {
  const results = document.getElementById('searchResults');
  if (!results) return;
  const q = query.trim().toLowerCase();
  if (q.length < 2) {
    results.innerHTML = '<div class="search-hint">Введите минимум 2 символа</div>';
    return;
  }

  // Ищем по всем видимым текстовым элементам
  const elements = document.querySelectorAll('h1, h2, h3, h4, p, li, .section-tag, .hero-badge, .city, .name, .dir-card h3, .dir-card p, .struct-card h4, .struct-card p, .news-card h3, .news-card p, .contact-info p, .contact-info .phone, .footer a, .footer p');
  const matches = [];

  elements.forEach(el => {
    const text = el.textContent.trim();
    if (!text || text.length < 5) return;
    const lower = text.toLowerCase();
    let idx = lower.indexOf(q);
    while (idx !== -1) {
      // Находим родительский блок для контекста
      const parent = el.closest('.section, .dir-card, .struct-card, .news-card, .branch-card, .partner-logo, .contact-info, .footer, .hero-content, .about-text, .content-main, .sidebar-card') || el;
      const context = parent.textContent.trim().substring(0, 200);
      matches.push({
        title: text.substring(Math.max(0, idx - 20), idx + q.length + 40) + '…',
        context: context,
        href: getElementAnchor(parent) || '#'
      });
      idx = lower.indexOf(q, idx + 1);
      if (matches.length >= 30) break;
    }
    if (matches.length >= 30) return;
  });

  if (!matches.length) {
    results.innerHTML = `<div class="search-empty">Ничего не найдено по запросу «${query}»</div>`;
    return;
  }

  results.innerHTML = matches.slice(0, 15).map(m => `
    <a href="${m.href}" class="search-result-item" onclick="toggleSearch()">
      <div class="search-result-title">${highlightMatch(m.title, q)}</div>
      <div class="search-result-text">${highlightMatch(m.context, q)}</div>
    </a>
  `).join('');
}

function highlightMatch(text, query) {
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<strong style="color:var(--accent-light)">$1</strong>');
}

function getElementAnchor(el) {
  // Пытаемся найти якорь для элемента
  const section = el.closest('section[id]');
  if (section) return `#${section.id}`;
  const card = el.closest('[id]');
  if (card) return `#${card.id}`;
  return '#';
}

/* ── IntersectionObserver для анимации .reveal при скролле ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

/* ═══════════════════════════════════════════════════════
   ФОРМА АБИТУРИЕНТА (многошаговая)
   ═══════════════════════════════════════════════════════ */
let currentStep = 1;

function nextStep() {
  const current = document.getElementById(`step${currentStep}`);
  const inputs = current.querySelectorAll('input, select');
  let valid = true;
  inputs.forEach(inp => {
    if (inp.hasAttribute('required') && !inp.value.trim()) {
      inp.reportValidity ? inp.reportValidity() : inp.focus();
      valid = false;
    }
  });
  if (!valid) return;

  if (currentStep < 3) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
    updateFormNav();
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add('active');
    updateFormNav();
  }
}

function updateFormNav() {
  document.getElementById('prevBtn').style.display = currentStep > 1 ? '' : 'none';
  document.getElementById('nextBtn').style.display = currentStep < 3 ? '' : 'none';
  document.getElementById('submitBtn').style.display = currentStep >= 3 ? '' : 'none';

  const dots = document.querySelectorAll('.form-progress-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i + 1 <= currentStep));

  const bar = document.querySelector('.form-progress-bar');
  if (bar) {
    const pct = ((currentStep - 1) / 2) * 100;
    bar.style.setProperty('--pct', pct + '%');
    // Используем псевдоэлемент
    const style = bar.querySelector('style') || document.createElement('style');
    style.textContent = `.form-progress-bar::after { width: ${pct}%; }`;
    if (!bar.querySelector('style')) bar.appendChild(style);
  }
}

function filterPrograms(level) {
  const select = document.getElementById('programSelect');
  if (!select) return;
  const programs = {
    bachelor: ['09.03.01 Информатика и вычислительная техника', '23.03.01 Технология транспортных процессов', '38.03.01 Экономика', '40.03.01 Юриспруденция'],
    specialist: ['23.05.04 Эксплуатация железных дорог', '23.05.06 Строительство ж/д, мостов и тоннелей'],
    master: ['23.04.01 Технология транспортных процессов', '38.04.01 Экономика', '09.04.01 Информатика и ВТ'],
    postgrad: ['2.9.1 Транспортные системы', '2.9.4 Управление процессами перевозок'],
    spo: ['Техническая эксплуатация подвижного состава', 'Организация перевозок и управление на транспорте', 'Строительство ж/д']
  };
  select.innerHTML = '<option value="">Выберите направление</option>';
  (programs[level] || []).forEach(p => {
    select.innerHTML += `<option>${p}</option>`;
  });
}

function submitApplicantForm(e) {
  e.preventDefault();
  const form = document.getElementById('applicantForm');
  const data = new FormData(form);
  // Симуляция отправки
  const wrap = form.closest('.applicant-form-wrap') || form.parentElement;
  wrap.innerHTML = `
    <div class="form-success">
      <div class="form-success-icon">✅</div>
      <h2>Заявка принята!</h2>
      <p>Спасибо, ${data.get('Фамилия') || 'абитуриент'}! Ваша заявка на поступление зарегистрирована.<br>
      Номер заявки: <strong>${Date.now().toString(36).toUpperCase()}</strong><br>
      В ближайшее время с вами свяжется приёмная комиссия.</p>
      <a href="index.html" class="btn btn-primary" style="margin-top:20px;">На главную</a>
    </div>
  `;
  return false;
}

/* ═══════════════════════════════════════════════════════
   ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
   ═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Прелоадер ── */
  // Показываем анимацию минимум 2.5 сек (прогресс-бар идёт 2.4с)
  const bodyEl = document.body;
  bodyEl.style.overflow = 'hidden';
  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');
    bodyEl.style.overflow = '';
  }
  const preloaderStart = Date.now();
  window.addEventListener('load', () => {
    const elapsed = Date.now() - preloaderStart;
    const delay = Math.max(0, 2500 - elapsed);
    setTimeout(hidePreloader, delay);
  });
  // Резерв: скрываем через 5 сек в любом случае
  setTimeout(hidePreloader, 5000);

  /* ── Тема ── */
  initTheme();
  document.querySelector('.theme-btn')?.addEventListener('click', toggleTheme);

  /* ── Переключатель языка ── */
  document.querySelector('.lang-btn-ru')?.addEventListener('click', () => applyLang('ru'));
  document.querySelector('.lang-btn-en')?.addEventListener('click', () => applyLang('en'));

  /* ── Мобильное меню ── */
  document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('mainNav')?.classList.toggle('open');
  });

  // Закрываем меню при клике на ссылку
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mainNav')?.classList.remove('open');
    });
  });

  /* ── Частицы на герое ── */
  initParticles();

  /* ── Кнопка наверх ── */
  initScrollTop();

  /* ── Применяем язык ── */
  applyLang(currentLang);

  /* ── Наблюдаем за .reveal-элементами ── */
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── Рендерим новости ── */
  renderNews();

  /* ── Анимация счётчиков статистики ── */
  initCounters();

  /* ── Детальная страница новости ── */
  renderNewsDetail();

  /* ── Слушатель скролла для навигации ── */
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  /* ── Показываем элементы, уже видимые при загрузке ── */
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) el.classList.add('visible');
    });
  });

});
