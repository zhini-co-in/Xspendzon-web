import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Layout.css';

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

export function Header({ onEmployee, onAdmin }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <nav className="header-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <LoginButtons onEmployee={onEmployee} onAdmin={onAdmin} />
      </div>
    </header>
  );
}

function LoginButtons({ onEmployee, onAdmin }) {
  return (
    <div className="login-buttons">
      <button type="button" className="btn btn-outline" onClick={onEmployee}>
        Login as Employee
      </button>
      <button type="button" className="btn btn-filled" onClick={onAdmin}>
        Login as Admin
      </button>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="logo">
      <XspendzonMark size={40} />
      <span className="logo-text">
        <span className="logo-text-x">X</span>
        <span className="logo-text-spend">spend</span>
        <span className="logo-text-zon">zon</span>
      </span>
    </Link>
  );
}

/**
 * Official Xspendzon mark: navy tile, gold / white X arrows, currency glyphs.
 */
export function XspendzonMark({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="xspendzon-mark"
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="22" fill="#1A3C6E" />
      <line x1="22" y1="78" x2="78" y2="22" stroke="#FFD166" strokeWidth="9" strokeLinecap="round" />
      <line x1="22" y1="42" x2="22" y2="22" stroke="#FFD166" strokeWidth="9" strokeLinecap="round" />
      <line x1="22" y1="22" x2="42" y2="22" stroke="#FFD166" strokeWidth="9" strokeLinecap="round" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
      <line x1="58" y1="78" x2="78" y2="78" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
      <line x1="78" y1="78" x2="78" y2="58" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
      <circle cx="50" cy="50" r="5.5" fill="#FFFFFF" />
      <text x="50" y="32" textAnchor="middle" fontSize="16" fontWeight="800" fill="#4ECDC4">₹</text>
      <text x="28" y="54" textAnchor="middle" fontSize="16" fontWeight="800" fill="#FFD166">£</text>
      <text x="72" y="54" textAnchor="middle" fontSize="16" fontWeight="800" fill="#4ECDC4">€</text>
      <text x="50" y="76" textAnchor="middle" fontSize="16" fontWeight="800" fill="#FFD166">$</text>
    </svg>
  );
}

export function Footer() {
  return <p className="landing-footer">© 2026 Xspendzon. All rights reserved.</p>;
}
