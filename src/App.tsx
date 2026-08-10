import { useMemo, useState } from 'react';
import './dashboard.css';
import { ArrowRight, Bell, CalendarDays, ChevronRight, Clock3, FileLock2, Globe2, Instagram, MapPin, Menu, Minus, Plus, ShieldCheck, Smartphone, Star, Ticket, X } from 'lucide-react';

const problems = [
  { icon: '◷', title: 'Забыли дату выезда?', text: 'Штрафы за оверстей растут с каждым днем.' },
  { icon: '▣', title: 'Ищете паспорт в галерее?', text: 'Фото документов теряются среди тысяч снимков.' },
  { icon: '⌁', title: 'Срочно нужен визаран?', text: 'Поиск проверенных перевозчиков в чатах в последний момент.' },
];

const features = [
  { icon: Clock3, title: 'Точный визовый таймер', text: 'Настраиваемые push-уведомления за 30, 14, 7 и 3 дня до необходимости выезда.', accent: 'lime' },
  { icon: FileLock2, title: 'Сейф документов', text: 'Паспорт, визы, страховки и права под рукой даже без интернета.', accent: 'blue' },
  { icon: Ticket, title: 'Быстрый визаран', text: 'Прямая интеграция с организаторами — честные цены, отзывы и мгновенная бронь.', accent: 'orange' },
];

const steps = [
  ['01', 'Приложение видит, что до визарана осталось 10 дней, и предлагает доступные даты.'],
  ['02', 'Вы выбираете маршрут, дату и удобное место посадки.'],
  ['03', 'Подтверждаете бронь и получаете билет прямо внутри приложения.'],
];

const faqs = [
  ['Безопасно ли хранить фото паспорта в приложении?', 'Да. Документы зашифрованы и хранятся локально на вашем устройстве.'],
  ['Что делать, если даты визы изменились?', 'Просто обновите дату въезда в настройках — таймер пересчитает срок автоматически.'],
  ['Как происходит оплата и бронирование визарана?', 'Вы выбираете поездку, проверяете детали и оплачиваете безопасно внутри приложения.'],
  ['Работает ли приложение для других стран SEA?', 'Сейчас мы начинаем с Вьетнама и постепенно добавляем новые направления.'],
];

function App() {
  const [faq, setFaq] = useState(0);
  const [menu, setMenu] = useState(false);
  const [days, setDays] = useState(12);
  const [lastEntry, setLastEntry] = useState('2024-06-18');
  const [visaType, setVisaType] = useState('E-visa · 90 дней');

  const exitDate = useMemo(() => {
    const date = new Date(`${lastEntry}T00:00:00`);
    date.setDate(date.getDate() + (visaType.includes('30') ? 30 : 90));
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  }, [lastEntry, visaType]);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top"><span className="brand-mark">◢</span><b>daycount</b></a>
          <div className={`nav-links ${menu ? 'open' : ''}`}>
            <a href="#top">Overview</a>
            <a href="#features">Days left</a>
            <a href="#how">Visa runs</a>
            <a href="#security">Documents</a>
            <a className="nav-plan" href="#calculator">Plan a trip</a>
          </div>
          <div className="nav-actions">
            <span className="nav-icon">◌</span>
            <span className="nav-icon">♧</span>
            <span className="nav-avatar">A</span>
            <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* ===== HERO ===== */}
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot"/> YOUR VISA, AT A GLANCE</div>
            <h1>Ваши дни.<br/><em>Под контролем.</em></h1>
            <p className="hero-text">Точный счётчик визы, документы и визаран — в одном спокойном, понятном интерфейсе.</p>
            <div className="hero-buttons">
              <a className="button button-dark" href="#calculator">Открыть таймер <ArrowRight size={17}/></a>
              <a className="button button-light" href="#features">Посмотреть возможности <CalendarDays size={17}/></a>
            </div>
            <div className="store-note">
              <span><Smartphone size={15}/> Web · iOS · Android</span>
              <span className="tiny-sep"/>
              <span>Ваши данные — ваши правила</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-window">
              <div className="dash-topline">
                <span className="dash-dot green"/>
                <b>Vietnam · visa overview</b>
                <span className="dash-date">18 Jun 2024</span>
              </div>
              <div className="dash-summary">
                <div>
                  <span className="dash-label">CURRENT VISA</span>
                  <strong>{days} <small>DAYS LEFT</small></strong>
                  <div className="dash-progress"><i/></div>
                  <span className="dash-muted">Expires 18 September 2024</span>
                </div>
                <div className="dash-stat">
                  <span>Next reminder</span>
                  <b>in 3 days</b>
                  <small>Push notification</small>
                </div>
                <div className="dash-stat">
                  <span>Visa type</span>
                  <b>E-visa</b>
                  <small>Single entry · 90 days</small>
                </div>
              </div>
              <div className="dash-grid">
                <div className="dash-panel metrics-panel">
                  <div className="panel-head">
                    <b>Days used</b>
                    <span>June <ChevronRight size={13}/></span>
                  </div>
                  <div className="chart">
                    <i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/>
                  </div>
                  <div className="chart-axis">
                    <span>10 am</span><span>12 pm</span><span>2 pm</span><span>4 pm</span>
                  </div>
                  <div className="metric-row">
                    <span>Average per day</span>
                    <b>4.2 days</b>
                  </div>
                </div>
                <div className="dash-panel map-panel">
                  <div className="panel-head">
                    <b>Next visa run</b>
                    <span className="panel-green">New option</span>
                  </div>
                  <div className="route-art">
                    <div className="route-circle one"/>
                    <div className="route-circle two"/>
                    <div className="route-circle three"/>
                    <div className="route-path"/>
                    <span className="route-pin pin-a">N</span>
                    <span className="route-pin pin-b">M</span>
                    <span className="route-pin pin-c">✓</span>
                    <span className="route-name name-a">Nha Trang</span>
                    <span className="route-name name-b">Moc Bai</span>
                  </div>
                </div>
                <div className="dash-panel trip-panel">
                  <div className="panel-head">
                    <b>Upcoming trip</b>
                    <span>22 Aug · 06:30</span>
                  </div>
                  <div className="trip-main">
                    <div className="trip-badge"><MapPin size={16}/></div>
                    <div>
                      <b>Nha Trang <em>→</em> Moc Bai</b>
                      <small>Verified organizer · 1 seat reserved</small>
                    </div>
                    <ChevronRight size={17}/>
                  </div>
                  <button className="dash-book" onClick={() => setDays(Math.max(0, days - 1))}>
                    Open booking <ArrowRight size={14}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TICKER ===== */}
        <section className="ticker">
          <div>НЕ ТЕРЯЙТЕ ДНИ <span>✦</span> НЕ ТЕРЯЙТЕ ДЕНЬГИ <span>✦</span> ЖИВИТЕ СПОКОЙНО <span>✦</span> НЕ ТЕРЯЙТЕ ДНИ <span>✦</span></div>
        </section>

        {/* ===== PROBLEMS ===== */}
        <section className="problems container">
          <div className="section-intro">
            <div className="eyebrow">01 · ЗНАКОМО?</div>
            <h2>Виза не должна<br/><em>управлять</em> вашей жизнью.</h2>
          </div>
          <div className="problem-grid">
            {problems.map((p) => (
              <div className="problem-card" key={p.title}>
                <span className="problem-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ArrowRight size={18}/>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="features section-dark" id="features">
          <div className="container">
            <div className="section-intro light">
              <div className="eyebrow">02 · ВСЁ ПОД КОНТРОЛЕМ</div>
              <h2>Ваши документы.<br/><em>Ваши правила.</em></h2>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, ...feature }, index) => (
                <div className={`feature-card ${feature.accent}`} key={feature.title}>
                  <div className="feature-icon"><Icon size={23}/></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <div className="feature-number">0{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="how container" id="how">
          <div className="section-intro">
            <div className="eyebrow">03 · БРОНИРОВАНИЕ ВИЗАРАНА</div>
            <h2>От идеи до билета<br/><em>за 2 минуты.</em></h2>
          </div>
          <div className="steps">
            <div className="route-line"/>
            {steps.map(([number, text]) => (
              <div className="step" key={number}>
                <span>{number}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="route-preview">
            <div className="route-heading">
              <span>МАРШРУТ</span>
              <b>Нячанг <i>→</i> Мокбай</b>
            </div>
            <div className="route-map">
              <div className="map-dot dot-a"/>
              <div className="map-dot dot-b"/>
              <div className="map-route"/>
              <div className="map-label label-a">Нячанг</div>
              <div className="map-label label-b">Мокбай</div>
              <span className="map-water">VIETNAM<br/><small>CAMBODIA</small></span>
            </div>
          </div>
        </section>

        {/* ===== SECURITY ===== */}
        <section className="security section-sand" id="security">
          <div className="container security-grid">
            <div>
              <div className="eyebrow">04 · ДОВЕРЯЙТЕ СПОКОЙНО</div>
              <h2>Ваши данные<br/>под <em>защитой.</em></h2>
              <p className="lead">Мы создали приложение, которому можно доверить самое важное.</p>
            </div>
            <div className="security-list">
              <div>
                <ShieldCheck/>
                <span>
                  <b>AES-256 шифрование</b>
                  <small>Данные хранятся локально на вашем устройстве.</small>
                </span>
              </div>
              <div>
                <FileLock2/>
                <span>
                  <b>Только для ваших глаз</b>
                  <small>Мы не передаём сканы документов третьим лицам.</small>
                </span>
              </div>
              <div>
                <Star/>
                <span>
                  <b>Проверенные партнёры</b>
                  <small>Верифицированные организаторы и прозрачные отзывы.</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CALCULATOR ===== */}
        <section className="calculator container" id="calculator">
          <div className="calculator-copy">
            <div className="eyebrow">05 · ПРОВЕРЬТЕ ПРЯМО СЕЙЧАС</div>
            <h2>Когда заканчивается<br/><em>ваша виза?</em></h2>
            <p>Введите данные — мы посчитаем точный день выезда и подберём подходящий визаран.</p>
          </div>
          <div className="calc-card">
            <label>
              Дата последнего въезда
              <input type="date" value={lastEntry} onChange={e => setLastEntry(e.target.value)}/>
            </label>
            <label>
              Тип визы
              <select value={visaType} onChange={e => setVisaType(e.target.value)}>
                <option>E-visa · 90 дней</option>
                <option>Туристическая · 30 дней</option>
              </select>
            </label>
            <div className="calc-result">
              <span>Вам нужно выехать до</span>
              <strong>{exitDate}</strong>
              <small>По текущему типу визы</small>
            </div>
            <a className="button button-dark full" href="#download">Подобрать визаран <ArrowRight size={17}/></a>
          </div>
        </section>

        {/* ===== QUOTES ===== */}
        <section className="quotes section-dark">
          <div className="container quote-inner">
            <div className="quote-mark">"</div>
            <blockquote>«Раньше я ставила три будильника и всё равно нервничала. Теперь просто открываю приложение — и знаю, что всё под контролем.»</blockquote>
            <div className="quote-author">
              <div className="author-avatar">К</div>
              <span>
                <b>Катя Морозова</b>
                <small>живёт в Нячанге 2 года</small>
              </span>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq container" id="faq">
          <div className="section-intro">
            <div className="eyebrow">06 · ЕСТЬ ВОПРОСЫ?</div>
            <h2>Ответы<br/><em>здесь.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div
                className={`faq-item ${faq === index ? 'active' : ''}`}
                key={question}
                onClick={() => setFaq(faq === index ? -1 : index)}
              >
                <div>
                  <span>0{index + 1}</span>
                  <b>{question}</b>
                </div>
                {faq === index ? <Minus size={19}/> : <Plus size={19}/>}
                {faq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="final-cta" id="download">
          <div className="container final-inner">
            <div>
              <div className="eyebrow">НАЧНИТЕ СЕГОДНЯ</div>
              <h2>Не держите даты<br/>в голове — доверьте их<br/><em>«Счётчику дней».</em></h2>
              <a className="button button-dark" href="#top">Скачать приложение <ArrowRight size={17}/></a>
            </div>
            <div className="qr-card">
              <div className="qr"><div className="qr-pattern">▦</div></div>
              <b>Наведите камеру,<br/>чтобы скачать</b>
              <small>Доступно в App Store<br/>и Google Play</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#top"><span className="brand-mark">◢</span><b>daycount</b></a>
        <span>© 2024 · Сделано с заботой о тех, кто живёт во Вьетнаме</span>
        <div><Instagram size={17}/><Globe2 size={17}/></div>
      </footer>
    </div>
  );
}

export default App;
