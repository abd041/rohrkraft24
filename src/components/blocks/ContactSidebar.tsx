import { CONTACT_TRUST_POINTS } from "@/data/contact";
import { OPENING_HOURS, SITE } from "@/lib/constants";

export function ContactSidebar() {
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <div className="kontakt-rating-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="#f59e0b" width="16" height="16">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="kontakt-rating-text">
          <strong>{String(SITE.rating).replace(".", ",")}</strong> · {SITE.reviewCount} Google-Bewertungen
        </div>
      </div>
    </aside>
  );
}
