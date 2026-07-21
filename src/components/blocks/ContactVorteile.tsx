import { CONTACT_VORTEILE } from "@/data/contact";

type ContactVorteileProps = {
  variant?: "default" | "premium";
};

export function ContactVorteile({ variant = "default" }: ContactVorteileProps) {
  if (variant === "premium") {
    return (
      <section className="kontakt-vorteile-premium">
        <header className="kontakt-vorteile-premium__intro">
          <div className="container">
            <div className="kontakt-vorteile-premium__intro-inner">
              <p className="kontakt-vorteile-premium__label">Ihre Vorteile</p>
              <h2 className="kontakt-vorteile-premium__heading">
                Warum Kunden uns
                <br />
                anrufen
              </h2>
            </div>
          </div>
        </header>

        <div className="container">
          <ol className="kontakt-vorteile-premium__list">
            {CONTACT_VORTEILE.map((item, i) => (
              <li key={item.title} className="kontakt-vorteile-premium__item">
                <span className="kontakt-vorteile-premium__index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

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
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
