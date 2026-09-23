import React from 'react';
import { Header, Footer } from './Layout';
import './AboutPage.css';

const STATS = [
  { value: '< 2 min', label: 'Avg. approval time' },
  { value: '100%', label: 'Digital audit trail' },
  { value: '0', label: 'Paper forms' },
];

const VALUES = [
  {
    icon: '🚫',
    title: 'Eliminate manual workflows',
    desc: 'Replace paper forms and email chains with structured digital flows.',
  },
  {
    icon: '⏱️',
    title: 'Sub-two-minute approvals',
    desc: 'Push notifications with one-tap actions keep approvers moving fast.',
  },
  {
    icon: '📜',
    title: '100% audit trail',
    desc: 'Every expense, comment, approval decision and invoice permanently stored.',
  },
  {
    icon: '🤖',
    title: 'AI-first experience',
    desc: 'OCR auto-fills fields; a multilingual agent lets people file without opening the app.',
  },
  // {
  //   icon: '☁️',
  //   title: 'Flexible deployment',
  //   desc: 'AWS cloud, on-premise, or hybrid — whatever your data governance policy demands.',
  // },
  {
    icon: '🔒',
    title: 'Enterprise-grade security',
    desc: 'Biometric auth, session management and Indian data-protection compliance, built in.',
  },
];

export default function AboutPage({ onEmployeeLogin, onAdminLogin }) {
  return (
    <div className="ap">
      <div className="ap-hero-shell">
        <Header onEmployee={onEmployeeLogin} onAdmin={onAdminLogin} />
        <section className="ap-hero">
          <p className="ap-eyebrow">ABOUT XSPENDZON</p>
          <h1 className="ap-title">Stop chasing invoices.</h1>
          <p className="ap-quote">Capture · Approve · Track.</p>
          <p className="ap-subtitle">
            Built by Atom8 IT solutions , Coimbatore — Xspendzon is a
            cloud-native, AI-powered expense management platform for
            enterprises, working across mobile, WhatsApp, Telegram and a
            browser-based admin panel.
          </p>
          <div className="ap-stats">
            {STATS.map((s) => (
              <div className="ap-stat" key={s.label}>
                <span className="ap-stat-value">{s.value}</span>
                <span className="ap-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="ap-story">
        <h2 className="ap-story-title">Why we built Xspendzon</h2>
        <p className="ap-story-body">
          Manual, paper-driven expense processes cost businesses time, invite
          fraud, and turn month-end reconciliation into a nightmare. We built
          Xspendzon to close that loop end to end — snap an invoice, let AI
          extract the details, approve it in under two minutes, and reconcile
          it with your books in one click. No paper, no chasing, no
          surprises.
        </p>
      </section>

      <section className="ap-values">
        <h2 className="ap-values-title">What we care about</h2>
        <div className="ap-values-grid">
          {VALUES.map((v) => (
            <div className="ap-value-card" key={v.title}>
              <div className="ap-value-icon">{v.icon}</div>
              <div>
                <h3 className="ap-value-title">{v.title}</h3>
                <p className="ap-value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-contact">
        <h2 className="ap-contact-title">Get in touch</h2>
        <p className="ap-contact-sub">
          Questions about Xspendzon for your organisation? We'd love to talk.
        </p>
        <div className="ap-contact-grid">
          <a className="ap-contact-item" href="mailto:Xspendzon@zhini.co.in">
            <span className="ap-contact-icon">✉️</span>
            Xspendzon@zhini.co.in
          </a>
          {/* <a
            className="ap-contact-item"
            href="https://www.trisentrix.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ap-contact-icon">🌐</span>
            www.trisentrix.com
          </a> */}
          <span className="ap-contact-item">
            <span className="ap-contact-icon">📍</span>
            Coimbatore, India,
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
