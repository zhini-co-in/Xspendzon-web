import React from 'react';
import { Header, Footer } from './Layout';
import './FeaturesPage.css';

const STATS = [
  { value: '< 2 min', label: 'Avg. approval time' },
  { value: '100%', label: 'Digital audit trail' },
  { value: '0', label: 'Paper forms' },
];

const CATEGORIES = [
  {
    id: 'capture',
    title: 'Smart Capture',
    tint: 'tint-green',
    items: [
      {
        icon: '📷',
        title: 'AI Invoice OCR',
        desc: 'Snap or forward an invoice and AI extracts vendor, amount, date, GST and category in seconds.',
      },
      {
        icon: '💬',
        title: 'File via WhatsApp, Telegram or in-app',
        desc: 'Employees can file a claim by chat message, voice note, or the mobile app — whichever is fastest.',
      },
      {
        icon: '📶',
        title: 'Offline-first capture',
        desc: 'No signal, no problem. Expenses save locally and sync automatically once you are back online.',
      },
    ],
  },
  {
    id: 'approvals',
    title: 'Approvals That Move Fast',
    tint: 'tint-blue',
    items: [
      {
        icon: '✅',
        title: 'Multi-level approval workflows',
        desc: 'Configurable single or dual-level approval, auto-triggered above your spend threshold.',
      },
      {
        icon: '📧',
        title: 'One-click email approval',
        desc: 'Approve or return an expense straight from a secure link in the notification email.',
      },
      {
        icon: '🧑\u200d💼',
        title: 'Delegation & escalation',
        desc: 'Set an out-of-office delegate, and stuck approvals auto-escalate so nothing sits idle.',
      },
      {
        icon: '🔔',
        title: 'Deep-linked notifications',
        desc: 'Tapping a push notification opens the exact expense — no hunting through a list.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Complete Financial Intelligence',
    tint: 'tint-gold',
    items: [
      {
        icon: '🌍',
        title: 'Multi-currency with live FX rates',
        desc: 'File an invoice in any currency — the rate is fetched, locked, and converted automatically.',
      },
      {
        icon: '🧾',
        title: 'GST input credit reports',
        desc: 'Structured GSTIN, CGST/SGST/IGST fields exported in a reconciliation-ready format for your CA.',
      },
      {
        icon: '💼',
        title: 'Travel advance management',
        desc: 'Disburse advances before a trip and let Xpendzon calculate the net payable or refund automatically.',
      },
      {
        icon: '📐',
        title: 'Expense policy engine',
        desc: 'Set per-category limits and pre-approval triggers — violations are flagged for review, never silently blocked.',
      },
    ],
  },
  {
    id: 'erp',
    title: 'ERP & Reporting',
    tint: 'tint-purple',
    items: [
      {
        icon: '🔗',
        title: 'Tally prime,Zoho Expense, Google sheets & SAP integration',
        desc: 'Sync approved expenses via XML export or a direct REST API push — zero double-entry.',
      },
      {
        icon: '📊',
        title: 'Audit-ready exports',
        desc: 'Download XLSX, CSV or Tally XML with the full approval trail built in.',
      },
      {
        icon: '📈',
        title: 'Real-time dashboards',
        desc: 'See budget burn, spend by category, and pending approvals the moment they update.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Enterprise-Grade Security',
    tint: 'tint-navy',
    items: [
      {
        icon: '🔐',
        title: 'Session management',
        desc: 'View every active device, log out remotely, and stay protected with automatic inactivity timeouts.',
      },
      {
        icon: '🛡️',
        title: 'Biometric authentication',
        desc: 'Face ID and fingerprint unlock for returning mobile users — no repeated OTP friction.',
      },
      {
        icon: '🔍',
        title: 'Duplicate & fraud detection',
        desc: 'Duplicate invoices and unusual spend patterns are automatically flagged for admin review.',
      },
      {
        icon: '📜',
        title: 'DPDP Act 2023 ready',
        desc: 'Consent capture, data retention policy, and right-to-erasure workflows built in for Indian compliance.',
      },
    ],
  },
  {
    id: 'ai-agent',
    title: 'Multilingual AI Agent',
    tint: 'tint-teal',
    items: [
      {
        icon: '🗣️',
        title: 'Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali + more',
        desc: 'Employees can file, query, or approve expenses in the language they are most comfortable with.',
      },
      {
        icon: '🔎',
        title: 'Ask it anything',
        desc: '"Show TechSupplies invoices from last quarter" — get an instant, accurate answer in chat.',
      },
      {
        icon: '⚡',
        title: 'Approve with a single reply',
        desc: '"Approve Rahul\u2019s ₹1,200 food expense" — done, logged, and the employee is notified.',
      },
    ],
  },
];

export default function FeaturesPage({ onEmployeeLogin, onAdminLogin }) {
  return (
    <div className="fp">
      <div className="fp-hero-shell">
        <Header onEmployee={onEmployeeLogin} onAdmin={onAdminLogin} />
        <section className="fp-hero">
          <p className="fp-eyebrow">CAPTURE · APPROVE · TRACK</p>
          <h1 className="fp-title">Everything your finance team needs</h1>
          <p className="fp-subtitle">
            From invoice snap to bank reconciliation — Xpendzon closes the loop
            for your finance team automatically, with zero paperwork.
          </p>
          <div className="fp-stats">
            {STATS.map((s) => (
              <div className="fp-stat" key={s.label}>
                <span className="fp-stat-value">{s.value}</span>
                <span className="fp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {CATEGORIES.map((cat) => (
        <section className={`fp-category ${cat.tint}`} key={cat.id} id={cat.id}>
          <h2 className="fp-category-title">{cat.title}</h2>
          <div className="fp-grid">
            {cat.items.map((item) => (
              <div className="fp-card" key={item.title}>
                <div className="fp-card-icon">{item.icon}</div>
                <div className="fp-card-text">
                  <h3 className="fp-card-title">{item.title}</h3>
                  <p className="fp-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="fp-cta">
        <h2 className="fp-cta-title">Ready to see it in action?</h2>
        <p className="fp-cta-sub">Start a free trial — no credit card required.</p>
      </section>

      <Footer />
    </div>
  );
}
