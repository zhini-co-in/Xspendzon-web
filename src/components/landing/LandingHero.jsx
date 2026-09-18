import React from 'react';
import './LandingHero.css';

const CURRENCIES = [
  ['US'],
  ['IN'],
  ['GB'],
  ['EU'],
  ['CA'],
  ['AU'],
  ['AE'],
];

export default function LandingHero() {
  return (
    <section className="hero hero-v2">
      <div className="hero-bg-shape hero-bg-shape-1" />
      <div className="hero-bg-shape hero-bg-shape-2" />
      <div className="hero-bg-shape hero-bg-shape-3" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="copy-eyebrow">SHARED EXPENSES, STRONGER CONNECTIONS</p>

          <h1 className="copy-title">
            Split smart.
            <br />
            <span className="copy-title-accent">Settle fast.</span>
          </h1>

          <p className="copy-body">
            Xspendzon makes sharing expenses with friends, roommates,
            family, and travel groups effortless. Create a group, add
            expenses, and let Xspendzon handle the math — so you can
            focus on the people, not the payments.
          </p>

          <div className="store-row">
            <a
              className="store-button"
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
            >
              <span className="store-icon apple-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M17.05 12.54c-.02-2.1 1.72-3.11 1.8-3.16-.98-1.43-2.51-1.63-3.05-1.65-1.3-.14-2.56.78-3.22.78-.67 0-1.69-.77-2.78-.75-1.43.02-2.75.83-3.48 2.12-1.5 2.61-.38 6.45 1.06 8.56.71 1.03 1.55 2.18 2.66 2.14 1.07-.04 1.48-.69 2.78-.69 1.29 0 1.66.69 2.8.66 1.16-.02 1.9-1.04 2.6-2.08.82-1.2 1.16-2.37 1.18-2.43-.03-.01-2.32-.89-2.35-3.5ZM14.93 6.35c.58-.7.97-1.68.86-2.65-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.62-.88 2.57.94.07 1.89-.48 2.47-1.18Z"
                  />
                </svg>
              </span>
              <span className="store-copy">
                <small>GET IT ON</small>
                <strong>App Store</strong>
              </span>
            </a>

            <a
              className="store-button"
              href="https://play.google.com/store/apps/details?id=com.zhini.XSpendzon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="store-icon play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3.3 2.9 14.2 12 3.3 21.1c-.2-.4-.3-.9-.3-1.5V4.4c0-.6.1-1.1.3-1.5Z" fill="#29b6f6" />
                  <path d="m14.2 12 3.4-2.8 2.6 1.5c.7.4.7 1.1 0 1.5l-2.6 1.5-3.4-2.7Z" fill="#ffd54f" />
                  <path d="m3.3 2.9 13.3 6.3-2.4 2.8L3.3 2.9Z" fill="#66bb6a" />
                  <path d="m3.3 21.1 10.9-9.1 2.4 2.7-13.3 6.4Z" fill="#ef5350" />
                </svg>
              </span>
              <span className="store-copy">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>

          <p className="free-note">Free to use. No complicated setup.</p>
        </div>

        <div className="hero-stage">
          <div className="device-stage">
            <div className="badge-col badge-col-left">
              <BrandBadge type="whatsapp" label={<>Add expenses<br />via WhatsApp</>} />
              <BrandBadge type="track" label={<>Track<br />Expenses</>} />
              <BrandBadge type="settle" label={<>Smart<br />Settle-up</>} />
            </div>

            <div className="device-stage-inner">
              <Laptop />
              <Phone />
            </div>

            <div className="badge-col badge-col-right">
              <BrandBadge type="telegram" label={<>Add expenses<br />via Telegram</>} />
              <BrandBadge type="currency" label={<>Global currency<br />support</>} />
              <BrandBadge type="notification" label={<>Instant<br />notifications</>} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandBadge({ type, label }) {
  const icons = {
    whatsapp: (
      <span className="brand-icon whatsapp-icon">
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="19" fill="#25D366" />
    <g transform="translate(8 8)">
      <path
        fill="#fff"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </g>
  </svg>
</span>
    ),

    telegram: (
      <span className="brand-icon telegram-icon">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="#2AABEE" />
          <path d="M30.1 10.2 25.2 29c-.4 1.4-1.1 1.7-2.2 1.1l-6-4.4-2.9 2.8c-.3.3-.6.6-1.2.6l.4-6.1 11.2-10.1c.5-.5-.1-.7-.8-.2L10 21.4l-6-1.9c-1.3-.4-1.3-1.3.3-1.9l23.1-8.9c1.1-.4 2 .2 1.7 1.5Z" fill="#fff" />
        </svg>
      </span>
    ),

    track: (
      <span className="brand-icon track-icon">
        <i /><i /><i />
      </span>
    ),

    settle: <span className="brand-icon settle-icon">⚡</span>,

    currency: (
      <span className="brand-icon currency-icon" aria-label="Global currencies">
        {CURRENCIES.map(([code, currency, accent]) => (
          <CountryFlag key={code} code={code} currency={currency} accent={accent} />
        ))}
      </span>
    ),

    notification: (
      <span className="brand-icon notification-icon">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path d="M20 35a4.2 4.2 0 0 0 4-3h-8a4.2 4.2 0 0 0 4 3Z" fill="currentColor" />
          <path d="M31.2 27.3 28.8 24V16a8.8 8.8 0 0 0-7-8.5V6.3a1.8 1.8 0 1 0-3.6 0v1.2a8.8 8.8 0 0 0-7 8.5v8l-2.4 3.3c-.8 1.1 0 2.5 1.4 2.5h19.6c1.4 0 2.2-1.4 1.4-2.5Z" fill="currentColor" />
        </svg>
      </span>
    ),
  };

  return (
    <div className={`float-badge brand-badge brand-${type}`}>
      <span className="brand-badge-icon">{icons[type]}</span>
      <span className="float-badge-label">{label}</span>
    </div>
  );
}

function CountryFlag({ code, currency, accent }) {
  const flag = {
    US: <><rect width="36" height="24" fill="#fff" />{[0,1,2,3,4,5,6].map(y => <rect key={y} y={y * 24 / 7} width="36" height={24 / 7} fill={y % 2 === 0 ? '#b22234' : '#fff'} />)}<rect width="16" height="13" fill="#3c3b6e" /></>,
    IN: <><rect width="36" height="24" fill="#fff" /><rect width="36" height="8" fill="#ff9933" /><rect y="16" width="36" height="8" fill="#138808" /><circle cx="18" cy="12" r="3" fill="none" stroke="#1b4d9b" strokeWidth="1" /></>,
    GB: <><rect width="36" height="24" fill="#2447a8" /><path d="M0 0 36 24M36 0 0 24" stroke="#fff" strokeWidth="6" /><path d="M0 0 36 24M36 0 0 24" stroke="#cf142b" strokeWidth="2.5" /><path d="M18 0v24M0 12h36" stroke="#fff" strokeWidth="8" /><path d="M18 0v24M0 12h36" stroke="#cf142b" strokeWidth="4" /></>,
    EU: <><rect width="36" height="24" rx="2" fill="#1647a5" /><g fill="#ffd34d"><circle cx="18" cy="4" r="1"/><circle cx="25" cy="6" r="1"/><circle cx="30" cy="12" r="1"/><circle cx="25" cy="18" r="1"/><circle cx="18" cy="20" r="1"/><circle cx="11" cy="18" r="1"/><circle cx="6" cy="12" r="1"/><circle cx="11" cy="6" r="1"/></g></>,
    CA: <><rect width="36" height="24" fill="#fff" /><rect width="9" height="24" fill="#d52b1e" /><rect x="27" width="9" height="24" fill="#d52b1e" /><path d="m18 5 1.7 5 4-2-2 4.1 3.7 2.4-4.7.5.5 4.6-3.2-3-3.2 3 .5-4.6-4.7-.5 3.7-2.4-2-4.1 4 2L18 5Z" fill="#d52b1e" /></>,
    AU: <><rect width="36" height="24" fill="#1f3f9f" /><rect width="17" height="12" fill="#2447a8" /><path d="M0 0 17 12M17 0 0 12" stroke="#fff" strokeWidth="4" /><path d="M8.5 0v12M0 6h17" stroke="#fff" strokeWidth="5" /><path d="M8.5 0v12M0 6h17" stroke="#cf142b" strokeWidth="2.5" /><circle cx="27" cy="8" r="2" fill="#fff"/><circle cx="31" cy="13" r="1.4" fill="#fff"/><circle cx="25" cy="16" r="1.2" fill="#fff"/></>,
    AE: <><rect width="36" height="8" fill="#14805d" /><rect y="8" width="36" height="8" fill="#fff" /><rect y="16" width="36" height="8" fill="#111" /><rect width="8" height="24" fill="#d82027" /></>,
  }[code];

  return (
    <span className="currency-flag" title={`${currency} (${code})`}>
      <svg viewBox="0 0 36 24" aria-hidden="true">{flag}</svg>
      <small style={{ '--flag-accent': accent }}>{currency}</small>
    </span>
  );
}

function Laptop() {
  return (
    <div className="laptop">
      <div className="laptop-body">
        <div className="laptop-screen"><LaptopScreen /></div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}

function LaptopScreen() {
  return (
    <div className="laptop-screen-inner">
      <aside className="laptop-nav">
        <div className="laptop-nav-brand">
          <span className="laptop-nav-mark">X</span>
          <span className="laptop-nav-name">Xspendzon</span>
        </div>
        <NavItem label="Dashboard" active />
        <NavItem label="Groups" />
        <NavItem label="Expenses" />
        <NavItem label="Settlements" />
        <NavItem label="Reports" />
        <NavItem label="Members" />
        <NavItem label="Settings" />
      </aside>

      <main className="laptop-main">
        <div className="dashboard-topbar">
          <div>
            <h2>Good morning, Alex!</h2>
            <p>Here's your shared expenses overview</p>
          </div>
          <div className="date-control">▣ &nbsp; May 2026 &nbsp;⌄</div>
        </div>

        <div className="kpi-row">
          <Kpi label="Total balance" value="₹ 12,48,500" sub="↑ 12% from last month" />
          <Kpi label="Pending settlements" value="₹ 24,300" sub="● 6 expenses" />
          <Kpi label="Active groups" value="12" sub="120 people" />
          <Kpi label="Total members" value="48" sub="Across groups" />
        </div>

        <div className="dashboard-content">
          <div className="expense-chart-card">
            <div className="card-heading"><strong>Expenses by Category</strong><span>This Month ▾</span></div>
            <div className="chart-area">
              <DonutChart />
              <div className="chart-legend">
                <span><i className="dot travel" />Travel <b>32%</b></span>
                <span><i className="dot food" />Food <b>24%</b></span>
                <span><i className="dot shopping" />Shopping <b>18%</b></span>
                <span><i className="dot utilities" />Utilities <b>12%</b></span>
                <span><i className="dot entertainment" />Entertainment <b>8%</b></span>
                <span><i className="dot others" />Others <b>6%</b></span>
              </div>
            </div>
          </div>

          <div className="recent-card">
            <div className="card-heading"><strong>Recent Expenses</strong><a href="#expenses">View all</a></div>
            <Expense icon="✈️" title="Flight Ticket" sub="Go Trip" amount="₹ 12,450" status="Pending" />
            <Expense icon="🍽️" title="Dinner" sub="Office Lunch" amount="₹ 2,340" status="Approved" />
            <Expense icon="🏨" title="Hotel Stay" sub="Vacation" amount="₹ 8,900" status="Pending" />
            <Expense icon="🚕" title="Taxi" sub="Client Visit" amount="₹ 450" status="Approved" />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ label, active }) {
  return <div className={`nav-item${active ? ' nav-item-active' : ''}`}><span className="nav-item-mark" /><span className="nav-item-label">{label}</span></div>;
}

function Kpi({ label, value, sub }) {
  return <div className="kpi"><span className="kpi-label">{label}</span><strong className="kpi-value">{value}</strong><span className="kpi-sub">{sub}</span></div>;
}

function Expense({ icon, title, sub, amount, status }) {
  return <div className="expense-row"><span className="expense-icon">{icon}</span><span className="expense-info"><strong>{title}</strong><small>{sub}</small></span><span className="expense-right"><strong>{amount}</strong><small className={status.toLowerCase()}>{status}</small></span></div>;
}

function DonutChart() {
  const segments = [
    { value: 32, color: '#16b8d4' }, { value: 24, color: '#18c67a' },
    { value: 18, color: '#ffad2f' }, { value: 12, color: '#8d55dc' },
    { value: 8, color: '#f05b76' }, { value: 6, color: '#7792b7' },
  ];
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg className="donut-chart" viewBox="0 0 110 110" aria-hidden="true">
      <g transform="rotate(-90 55 55)">
        {segments.map((segment, index) => {
          const dash = (segment.value / 100) * circumference;
          const circle = <circle key={index} cx="55" cy="55" r={radius} fill="none" stroke={segment.color} strokeWidth="18" strokeDasharray={`${dash} ${circumference - dash}`} strokeDashoffset={-offset} />;
          offset += dash;
          return circle;
        })}
      </g>
      <text x="55" y="52" textAnchor="middle" className="donut-total">₹12.4L</text>
      <text x="55" y="65" textAnchor="middle" className="donut-caption">total</text>
    </svg>
  );
}

function Phone() {
  return (
    <div className="phone">
      <div className="phone-body">
        <div className="phone-screen">
          <div className="phone-notch" />
          <div className="phone-header">
            <div className="phone-brand"><span className="phone-logo">X</span><strong>Xspendzon</strong></div>
            <span className="phone-bell">♧</span>
          </div>
          <div className="phone-greeting"><small>Hi, Alex 👋</small><strong>Let's settle up!</strong></div>
          <div className="balance-card"><div><small>Total balance</small><strong>₹ 12,48,500</strong><span>You are owed →</span></div><span className="people-icon">♟</span></div>
          <div className="groups-heading"><strong>Your groups</strong><span>See all</span></div>
          <GroupRow icon="✈️" name="Goa Trip" members="5 members" amount="₹ 2,650" />
          <GroupRow icon="🏠" name="Flatmates" members="4 members" amount="₹ 1,200" />
          <GroupRow icon="🍽️" name="Office Lunch" members="8 members" amount="₹ 450" />
          <div className="phone-tabs"><span>⌂<small>Home</small></span><span>♧<small>Groups</small></span><b>+</b><span>◷<small>Activity</small></span><span>◉<small>Profile</small></span></div>
        </div>
      </div>
    </div>
  );
}

function GroupRow({ icon, name, members, amount }) {
  return <div className="group-row"><span className="group-icon">{icon}</span><span><strong>{name}</strong><small>{members}</small></span><b>{amount}</b></div>;
}