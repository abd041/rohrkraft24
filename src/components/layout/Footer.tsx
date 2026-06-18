import Link from "next/link";
import { FOOTER_CITIES } from "@/data/cities";
import { SERVICE_LINKS, SITE } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Kontakt", href: "/kontakt/" },
  { label: "Impressum", href: "/impressum/" },
  { label: "Datenschutz", href: "/datenschutz/" },
  { label: "Blog", href: "/blog/" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__top-grid">
          <div>
            <h3 className="footer__heading">Dienstleistungen</h3>
            <div className="footer__links">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.href} href={`${link.href}/`} className="footer__link">
                  <span className="footer__link-arrow">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <div className="footer__links">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="footer__link">
                  <span className="footer__link-arrow">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer__heading">Öffnungszeiten</h3>
            <div className="footer__hours">
              <div className="footer__hours-row">
                <span>Montag – Freitag</span>
                <span className="footer__hours-time">07:00 – 20:00</span>
              </div>
              <div className="footer__hours-row">
                <span>Samstag</span>
                <span className="footer__hours-time">08:00 – 18:00</span>
              </div>
              <div className="footer__hours-row footer__hours-row--sunday">
                <span>Sonntag</span>
                <span className="footer__hours-time">10:00 – 16:00</span>
              </div>
              <Link href="/notdienst/" className="footer__notdienst-badge">
                24h Notdienst
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer__heading">Kontakt</h3>
            <div className="footer__contact-list">
              <div className="footer__contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{SITE.address}</span>
              </div>
              <div className="footer__contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="footer__contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__einsatz">
        <div className="container">
          <div className="footer__einsatz-grid">
            <div className="footer__einsatz-text">
              <p className="footer__heading">Einsatzgebiete</p>
              <p className="footer__einsatz-sub">Wir sind in Berlin und Umgebung für Sie im Einsatz</p>
              <div className="footer__cities-grid">
                <div className="footer__cities-col">
                  {FOOTER_CITIES.slice(0, 6).map((city) => (
                    <Link key={city.slug} href={`/rohrreinigung-${city.slug}/`} className="footer__city-link">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {city.label}
                    </Link>
                  ))}
                </div>
                <div className="footer__cities-col">
                  {FOOTER_CITIES.slice(6).map((city) => (
                    <Link key={city.slug} href={`/rohrreinigung-${city.slug}/`} className="footer__city-link">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/einsatzgebiete/" className="footer__all-cities">
                Alle 48 Städte ansehen →
              </Link>
            </div>

            <div className="footer__map-wrap">
              <iframe
                src={SITE.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rohrretter24 Standort"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom-bar">
        <div className="container footer__bottom">
          <p>© 2026 Rohrretter24. Alle Rechte vorbehalten.</p>
          <div className="footer__bottom-links">
            <Link href="/impressum/">Impressum</Link>
            <Link href="/datenschutz/">Datenschutz</Link>
            <Link href="/kontakt/">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
