import React, { useState } from 'react';
import { Header, Footer } from './Layout';
import './FAQPage.css';

const FAQS = [
  {
    q: 'What is Xspendzon?',
    a: 'Xspendzon is a cloud-native, AI-powered expense management platform. It takes an expense claim from invoice capture through multi-level approval to ERP reconciliation — across mobile, WhatsApp, Telegram and a browser-based admin panel.',
  },
  {
    q: 'How can employees file an expense?',
    a: 'Through the mobile app, a WhatsApp or Telegram message, or even a voice note — whichever is fastest. AI extracts the vendor, amount, date and category automatically from a photographed invoice.',
  },
  // {
  //   q: 'Which languages does the AI agent support?',
  //   a: 'English, Hindi, Tamil, Telugu, Kannada, Malayalam and Bengali, with more regional languages on the roadmap.',
  // },
  {
    q: "Is my organisation's data secure?",
    a: 'Yes. Documents are encrypted at rest and in transit, returning mobile users unlock with biometrics, and admins get full session visibility with the ability to log out any device remotely.',
  },
  {
    q: 'Is Xspendzon compliant with Indian data protection law?',
    a: 'Xspendzon is designed around the DPDP Act 2023 — with consent capture on first login, a defined data retention policy, and a right-to-erasure workflow for departing employees.',
  },
  {
    q: 'Can Xspendzon connect to Tally or SAP?',
    a: 'Yes. Approved expenses sync via a Tally-compatible XML export or a direct REST API push, and via an open API for other ERPs — eliminating double entry.',
  },
 
  // {
  //   q: 'Do you offer a free trial?',
  //   a: 'Yes — a 3-month free trial with every feature included, for teams from 5 up to 500+ seats. No credit card required.',
  // },
  {
    q: 'Does Xspendzon support multi-currency expenses?',
    a: 'Yes. Invoice a trip in any currency and Xspendzon fetches and locks the exchange rate on the date of the expense, converting it to your base currency automatically.',
  },
  {
    q: 'What happens if an expense exceeds a policy limit?',
    a: "It's flagged for the admin's review rather than silently blocked or auto-rejected — you stay in control of the final call.",
  },
  {
    q: 'How fast are approvals, really?',
    a: 'Most approvals happen in under 2 minutes — approvers can act from a push notification, a one-click email link, or a chat reply.',
  },
];

export default function FAQPage({ onEmployeeLogin, onAdminLogin }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faqp">
      <div className="faqp-hero-shell">
        <Header onEmployee={onEmployeeLogin} onAdmin={onAdminLogin} />
        <section className="faqp-hero">
          <p className="faqp-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h1 className="faqp-title">Got questions? We've got answers.</h1>
          <p className="faqp-subtitle">
            Everything you need to know about security, pricing, integrations
            and how Xspendzon fits into your finance stack.
          </p>
        </section>
      </div>

      <section className="faqp-list">
        {FAQS.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div className={`faqp-item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faqp-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faqp-icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="faqp-answer">{item.a}</p>}
            </div>
          );
        })}
      </section>

      <section className="faqp-cta">
        <h2 className="faqp-cta-title">Still have a question?</h2>
        <p className="faqp-cta-sub">
          Reach us at{' '}
          {/* <a href="mailto:sesh@trisentrix.com" className="faqp-cta-link">
            sesh@trisentrix.com
          </a>{' '} */}
          — we're happy to help.
        </p>
      </section>

      <Footer />
    </div>
  );
}
