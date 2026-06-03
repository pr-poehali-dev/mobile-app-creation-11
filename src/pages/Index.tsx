import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b5e31042-9bd8-4f11-aea6-fd14df0ffbfb/files/c3577407-4504-4334-8176-53668d766a9c.jpg";

const news = [
  {
    id: 1,
    date: "28 мая 2026",
    category: "Важное",
    title: "Прокуратура провела проверку соблюдения трудового законодательства",
    text: "В ходе проверки выявлены нарушения при выплате заработной платы на ряде предприятий. Возбуждены административные дела.",
  },
  {
    id: 2,
    date: "20 мая 2026",
    category: "Надзор",
    title: "Надзорные мероприятия в сфере ЖКХ",
    text: "Прокуратура направила представления управляющим компаниям об устранении нарушений содержания многоквартирных домов.",
  },
  {
    id: 3,
    date: "12 мая 2026",
    category: "Права граждан",
    title: "Защита прав несовершеннолетних",
    text: "По итогам проверки органов опеки возбуждено уголовное дело. Права детей восстановлены в судебном порядке.",
  },
  {
    id: 4,
    date: "5 мая 2026",
    category: "Коррупция",
    title: "Противодействие коррупции в органах местного самоуправления",
    text: "Проведены проверочные мероприятия в администрации Сысертского района. Выявлены факты конфликта интересов.",
  },
];

const activities = [
  {
    icon: "Scale",
    title: "Надзор за исполнением законов",
    desc: "Контроль соблюдения федерального законодательства органами власти, организациями и должностными лицами.",
  },
  {
    icon: "Shield",
    title: "Защита прав граждан",
    desc: "Охрана прав и свобод человека, реагирование на обращения граждан, восстановление нарушенных прав.",
  },
  {
    icon: "FileText",
    title: "Уголовное преследование",
    desc: "Надзор за законностью при расследовании уголовных дел, поддержание государственного обвинения.",
  },
  {
    icon: "AlertTriangle",
    title: "Противодействие коррупции",
    desc: "Проверки деклараций, контроль конфликта интересов, надзор за антикоррупционным законодательством.",
  },
];

type Section = "home" | "activity" | "contacts";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "activity", label: "Деятельность" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f2]" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* HEADER */}
      <header className="bg-[#0d1f3c] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => { setActiveSection("home"); setMenuOpen(false); }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 bg-[#b8860b] rounded flex items-center justify-center flex-shrink-0">
                <Icon name="Scale" size={18} className="text-white" />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs text-[#a0aec0] leading-none uppercase tracking-widest">Прокуратура</div>
                <div className="text-sm font-bold leading-tight tracking-wide">г. Сысерть</div>
              </div>
              <div className="text-left sm:hidden">
                <div className="text-sm font-bold leading-tight">Прокуратура г. Сысерть</div>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200 border-b-2 ${
                    activeSection === item.id
                      ? "border-[#b8860b] text-[#f0c040]"
                      : "border-transparent text-[#cbd5e0] hover:text-white hover:border-[#b8860b]/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-[#1e3a5f] py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "text-[#f0c040] bg-[#1e3a5f]"
                      : "text-[#cbd5e0] hover:bg-[#1e3a5f] hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ===== HOME ===== */}
      {activeSection === "home" && (
        <main>
          <section className="relative h-[480px] md:h-[560px] overflow-hidden">
            <img src={HERO_IMAGE} alt="Прокуратура Сысерть" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="max-w-xl">
                  <div className="text-[#b8860b] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                    Свердловская область
                  </div>
                  <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                    Прокуратура<br />города Сысерть
                  </h1>
                  <p className="text-[#a0b4cc] text-base md:text-lg leading-relaxed mb-8">
                    Стоим на защите законности, прав и свобод граждан Сысертского района
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveSection("contacts")}
                      className="px-6 py-3 bg-[#b8860b] hover:bg-[#d4a010] text-white text-sm font-semibold uppercase tracking-wider transition-colors"
                    >
                      Связаться
                    </button>
                    <button
                      onClick={() => setActiveSection("activity")}
                      className="px-6 py-3 border border-white/40 hover:border-white text-white text-sm font-semibold uppercase tracking-wider transition-colors"
                    >
                      О деятельности
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-[#0d1f3c] text-white">
            <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { num: "1992", label: "Год основания" },
                { num: "4 700+", label: "Жителей под защитой" },
                { num: "24/7", label: "Горячая линия" },
                { num: "100%", label: "Соблюдение закона" },
              ].map((s) => (
                <div key={s.label} className="border-r border-[#1e3a5f] last:border-0">
                  <div className="text-2xl font-bold text-[#f0c040]">{s.num}</div>
                  <div className="text-xs text-[#a0aec0] uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <section className="max-w-6xl mx-auto px-4 py-14">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1 h-10 bg-[#b8860b]" />
              <div>
                <div className="text-xs text-[#888] uppercase tracking-widest">Последние события</div>
                <h2 className="text-2xl font-bold text-[#0d1f3c]" style={{ fontFamily: "'Merriweather', serif" }}>
                  Новости и события
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-[#e2e8f0] hover:border-[#b8860b]/50 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white bg-[#0d1f3c] px-2 py-1">
                        {item.category}
                      </span>
                      <span className="text-xs text-[#888]">{item.date}</span>
                    </div>
                    <h3 className="text-[#0d1f3c] font-bold text-base leading-snug mb-2 group-hover:text-[#b8860b] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">{item.text}</p>
                  </div>
                  <div className="border-t border-[#e2e8f0] px-6 py-3 flex items-center gap-2 text-[#b8860b] text-xs font-semibold uppercase tracking-wider">
                    <Icon name="ArrowRight" size={14} />
                    Подробнее
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* ===== ACTIVITY ===== */}
      {activeSection === "activity" && (
        <main className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-10 bg-[#b8860b]" />
            <div>
              <div className="text-xs text-[#888] uppercase tracking-widest">О прокуратуре</div>
              <h2 className="text-2xl font-bold text-[#0d1f3c]" style={{ fontFamily: "'Merriweather', serif" }}>
                Деятельность и полномочия
              </h2>
            </div>
          </div>

          <div className="bg-[#0d1f3c] text-white p-8 md:p-10 mb-10">
            <p className="text-[#a0b4cc] leading-relaxed text-base mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Прокуратура города Сысерть — орган государственного надзора, осуществляющий от имени Российской Федерации
              надзор за соблюдением Конституции РФ и исполнением законов, действующих на территории Сысертского района.
            </p>
            <p className="text-[#a0b4cc] leading-relaxed text-base">
              В своей работе прокуратура руководствуется принципами законности, единства, централизации,
              независимости и гласности, обеспечивая верховенство закона и защиту общественных интересов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {activities.map((a) => (
              <div
                key={a.title}
                className="bg-white border border-[#e2e8f0] p-6 hover:shadow-md hover:border-[#b8860b]/50 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d1f3c] flex items-center justify-center flex-shrink-0">
                    <Icon name={a.icon} size={22} className="text-[#f0c040]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1f3c] text-base mb-2">{a.title}</h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f8f5ee] border-l-4 border-[#b8860b] p-8">
            <h3 className="text-[#0d1f3c] font-bold text-lg mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Обращения граждан
            </h3>
            <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
              Каждый гражданин вправе обратиться в прокуратуру с жалобой или заявлением.
              Обращения принимаются лично, почтой или через официальный сайт Генеральной прокуратуры РФ.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-[#0d1f3c]">
                <Icon name="Clock" size={15} className="text-[#b8860b]" />
                Рассматривается в течение 30 дней
              </div>
              <div className="flex items-center gap-2 text-[#0d1f3c]">
                <Icon name="Lock" size={15} className="text-[#b8860b]" />
                Конфиденциальность гарантирована
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ===== CONTACTS ===== */}
      {activeSection === "contacts" && (
        <main className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-10 bg-[#b8860b]" />
            <div>
              <div className="text-xs text-[#888] uppercase tracking-widest">Как с нами связаться</div>
              <h2 className="text-2xl font-bold text-[#0d1f3c]" style={{ fontFamily: "'Merriweather', serif" }}>
                Контактная информация
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              {[
                {
                  icon: "MapPin",
                  title: "Адрес",
                  lines: ["624020, Свердловская область,", "г. Сысерть, ул. Ленина, д. 35"],
                },
                {
                  icon: "Phone",
                  title: "Телефон",
                  lines: ["+7 (34374) 6-00-00", "Приёмная прокурора"],
                },
                {
                  icon: "Mail",
                  title: "Электронная почта",
                  lines: ["sysert@prokuratura66.ru"],
                },
                {
                  icon: "Clock",
                  title: "Режим работы",
                  lines: [
                    "Пн–Чт: 09:00 – 18:00",
                    "Пт: 09:00 – 16:45",
                    "Сб–Вс: выходной",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e2e8f0] p-5 flex items-start gap-4 hover:border-[#b8860b]/50 hover:shadow-sm transition-all"
                >
                  <div className="w-11 h-11 bg-[#0d1f3c] flex items-center justify-center flex-shrink-0">
                    <Icon name={card.icon} size={18} className="text-[#f0c040]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888] uppercase tracking-widest mb-1">{card.title}</div>
                    {card.lines.map((line) => (
                      <div key={line} className="text-[#0d1f3c] font-medium text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-[#0d1f3c] text-white p-8">
                <div className="text-[#b8860b] text-xs uppercase tracking-widest mb-2">Руководство</div>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Merriweather', serif" }}>
                  Прокурор города
                </h3>
                <p className="text-[#a0b4cc] text-sm mb-6">
                  Личный приём граждан осуществляется по предварительной записи
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-[#cbd5e0]">
                    <Icon name="Calendar" size={15} className="text-[#b8860b]" />
                    Вторник, четверг: 14:00 – 17:00
                  </div>
                  <div className="flex items-center gap-3 text-[#cbd5e0]">
                    <Icon name="Phone" size={15} className="text-[#b8860b]" />
                    Запись по телефону приёмной
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f5ee] border-l-4 border-[#b8860b] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="AlertCircle" size={16} className="text-[#b8860b]" />
                  <span className="font-bold text-[#0d1f3c] text-sm uppercase tracking-wide">Горячая линия</span>
                </div>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-3">
                  По фактам коррупции, нарушений прав граждан и иным неотложным вопросам:
                </p>
                <div className="text-[#0d1f3c] font-bold text-xl">+7 (800) 250-77-55</div>
                <div className="text-[#888] text-xs mt-1">Бесплатно по России</div>
              </div>

              <div className="bg-white border border-[#e2e8f0] p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Globe" size={16} className="text-[#0d1f3c]" />
                  <span className="font-bold text-[#0d1f3c] text-sm uppercase tracking-wide">Онлайн-обращение</span>
                </div>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
                  Подать обращение в электронной форме можно через портал Генеральной прокуратуры РФ
                </p>
                <a
                  href="https://epp.genproc.gov.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#0d1f3c] text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#1e3a5f] transition-colors"
                >
                  <Icon name="ExternalLink" size={14} />
                  Перейти на портал
                </a>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer className="bg-[#0d1f3c] text-white mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#b8860b] flex items-center justify-center">
                <Icon name="Scale" size={18} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Прокуратура г. Сысерть</div>
                <div className="text-[#a0aec0] text-xs">Свердловская область</div>
              </div>
            </div>
            <nav className="flex flex-wrap gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="text-[#a0aec0] hover:text-white text-xs uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="text-[#a0aec0] text-xs">
              © 2026 Прокуратура г. Сысерть
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;