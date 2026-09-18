import React from 'react';
import LandingHero from './LandingHero';
import { Header, Footer } from './Layout';
import './LandingScreen.css';

const FEATURES = [
  {
    icon: '🪪',
    iconBg: '#E3F2FD',
    iconColor: '#1565C0',
    title: 'Employee Expense Management',
    desc: 'Easy expense submission with invoice scanning and geo tagging.',
  },
  {
    icon: '✅',
    iconBg: '#E8F5E9',
    iconColor: '#2E7D32',
    title: 'Approval Workflows',
    desc: 'Multi-level approvals (Super Admin → Admin → Final Approval).',
  },
  {
    icon: '📍',
    iconBg: '#FCE4EC',
    iconColor: '#C2185B',
    title: 'Geo Tagging & Location Control',
    desc: 'Restrict expenses to specific locations.',
  },
  {
    icon: '💰',
    iconBg: '#FFF8E1',
    iconColor: '#F9A825',
    title: 'Budget Management',
    desc: 'Set budgets for groups and get alerts on overspending.',
  },
  {
    icon: '📄',
    iconBg: '#F3E5F5',
    iconColor: '#7B1FA2',
    title: 'AI Invoice Reader',
    desc: 'Auto-read bills and fill expense details instantly.',
  },
  {
    icon: '📊',
    iconBg: '#E0F7FA',
    iconColor: '#00838F',
    title: 'Reports & Insights',
    desc: 'Detailed reports by category, user, geo area and more.',
  },
];

const AUDIENCE = [
  {
    icon: '👥',
    title: 'Enterprise Teams',
    desc: 'Manage expenses across departments and locations.',
  },
  {
    icon: '✈️',
    title: 'Business Travel',
    desc: 'Track travel, stay and client-related expenses.',
  },
  {
    icon: '🛠️',
    title: 'Project Based Teams',
    desc: 'Create dedicated groups with custom rules and budgets.',
  },
  {
    icon: '🛡️',
    title: 'Compliance Ready',
    desc: 'Maintain audit-ready records with full transparency.',
  },
];

/**
 * Marketing home. Two entry points: employee app vs admin panel.
 */
export default function LandingScreen({ onEmployeeLogin, onAdminLogin }) {
  return (
    <div className="landing">
      <div className="hero-shell">
        <Header onEmployee={onEmployeeLogin} onAdmin={onAdminLogin} />
        <LandingHero />
      </div>
      <Features />
      <Audience />
      <BottomCta />
      <Footer />
    </div>
  );
}

function Features() {
  return (
    <section className="features" id="features">
      <p className="features-eyebrow">KEY FEATURES</p>
      <h2 className="features-title">
        Everything you need to manage
        <br />
        business expenses
      </h2>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div
              className="feature-icon"
              style={{ backgroundColor: f.iconBg, color: f.iconColor }}
            >
              {f.icon}
            </div>
            <div className="feature-card-text">
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="audience">
      <h2 className="audience-title">Perfect for every business</h2>
      <div className="audience-grid">
        {AUDIENCE.map((a) => (
          <div className="audience-card" key={a.title}>
            <div className="audience-icon">{a.icon}</div>
            <div className="audience-card-text">
              <h3 className="audience-card-title">{a.title}</h3>
              <p className="audience-card-desc">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="bottom-cta">
      <h2 className="bottom-cta-title">Take control of your business expenses</h2>
      <p className="bottom-cta-sub">
        Employees submit expenses. Admins approve and report.
      </p>
    </section>
  );
}
