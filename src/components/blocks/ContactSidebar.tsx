import { CONTACT_TRUST_POINTS } from "@/data/contact";
import { OPENING_HOURS, SITE } from "@/lib/constants";

type ContactSidebarProps = {
  variant?: "default" | "premium";
};

export function ContactSidebar({ variant = "default" }: ContactSidebarProps) {
  if (variant === "premium") {
    return (
      <aside className="kontakt-premium__aside">
        <div className="kontakt-premium__panel">
          <p className="kontakt-premium__panel-label">Direkt erreichen</p>
          <a href={SITE.phoneHref} className="kontakt-premium__link">
            <span className="kontakt-premium__link-label">Telefon · 24/7</span>
            <span className="kontakt-premium__link-value">{SITE.phone}</span>
            <span className="kontakt-premium__link-sub">Sofort erreichbar – auch nachts</span>
          </a>
          <a href={`mailto:${SITE.email}`} className="kontakt-premium__link">
            <span className="kontakt-premium__link-label">E-Mail</span>
            <span className="kontakt-premium__link-value">{SITE.email}</span>
            <span className="kontakt-premium__link-sub">Antwort innerhalb von 2 Stunden</span>
          </a>
          <div className="kontakt-premium__hours">
            <span className="kontakt-premium__link-label">Bürozeiten</span>
            <span className="kontakt-premium__link-value">{OPENING_HOURS.display[0]}</span>
            <span className="kontakt-premium__link-sub">
              {OPENING_HOURS.display[1]} · {OPENING_HOURS.display[2]} · Notdienst 24/7
            </span>
          </div>
        </div>

        <div className="kontakt-premium__trust">
          <p className="kontakt-premium__trust-title">Warum {SITE.name}?</p>
          <ul className="kontakt-premium__trust-list">
            {CONTACT_TRUST_POINTS.map((point, i) => (
              <li key={point.title}>
                <span className="kontakt-premium__trust-index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>{point.title}</strong> – {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="kontakt-premium__rating">
          <p>
            <strong>{SITE.reactionTime}</strong> Reaktionszeit · {SITE.travelFeeShort}
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="kontakt-sidebar">
      <div className="kontakt-info-cards">
        <a href={SITE.phoneHref} className="kontakt-info-card kontakt-info-card--link">
          <div className="kontakt-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div className="kontakt-info-text">
            <span className="kontakt-info-label">Telefon · 24/7 Notdienst</span>
            <span className="kontakt-info-value">{SITE.phone}</span>
            <span className="kontakt-info-sub">Sofort erreichbar – auch nachts</span>
          </div>
          <svg className="kontakt-info-arrow" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>

        <a href={`mailto:${SITE.email}`} className="kontakt-info-card kontakt-info-card--link">
          <div className="kontakt-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="kontakt-info-text">
            <span className="kontakt-info-label">E-Mail</span>
            <span className="kontakt-info-value">{SITE.email}</span>
            <span className="kontakt-info-sub">Antwort innerhalb von 2 Stunden</span>
          </div>
          <svg className="kontakt-info-arrow" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>

        <div className="kontakt-info-card">
          <div className="kontakt-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="kontakt-info-text">
            <span className="kontakt-info-label">Bürozeiten</span>
            <span className="kontakt-info-value">{OPENING_HOURS.display[0]}</span>
            <span className="kontakt-info-sub">
              {OPENING_HOURS.display[1]} · {OPENING_HOURS.display[2]} · Notdienst 24/7
            </span>
          </div>
        </div>
      </div>

      <div className="kontakt-trust">
        <h3>Warum {SITE.name}?</h3>
        <ul className="kontakt-trust-list">
          {CONTACT_TRUST_POINTS.map((point) => (
            <li key={point.title}>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>{point.title}</strong> – {point.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="kontakt-rating">
        <div className="kontakt-rating-text">
          <strong>{SITE.reactionTime}</strong> Reaktionszeit · {SITE.travelFeeShort}
        </div>
      </div>
    </aside>
  );
}
