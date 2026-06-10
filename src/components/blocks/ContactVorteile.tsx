import { CONTACT_VORTEILE } from "@/data/contact";

export function ContactVorteile() {
  return (
    <section className="kontakt-vorteile">
      <div className="container">
        <h2 className="kontakt-vorteile-title">Ihre Vorteile auf einen Blick</h2>
        <div className="kontakt-vorteile-grid">
          {CONTACT_VORTEILE.map((item) => (
            <div
              key={item.title}
              className={`kontakt-vorteil-card rk-reveal${item.featured ? " kontakt-vorteil-card--featured" : ""}`}
              style={{ transitionDelay: item.delay }}
            >
              <div className="kontakt-vorteil-icon">
                {item.title === "Schnelle Reaktion" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )}
                {item.title === "Persönliche Beratung" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                )}
                {item.title === "Festpreis-Angebot" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
                    <path d="M17 6.5A7.5 7.5 0 1 0 17 17.5" />
                    <line x1="3" y1="10" x2="14" y2="10" />
                    <line x1="3" y1="14" x2="14" y2="14" />
                  </svg>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
