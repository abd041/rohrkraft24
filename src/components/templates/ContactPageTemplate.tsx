import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { ContactForm } from "@/components/blocks/ContactForm";
import { ContactSidebar } from "@/components/blocks/ContactSidebar";
import { ContactVorteile } from "@/components/blocks/ContactVorteile";

export function ContactPageTemplate() {
  return (
    <>
      <Breadcrumb current="Kontakt" />

      <section className="kontakt-hero">
        <div className="container">
          <div className="kontakt-hero-inner">
            <span className="kontakt-eyebrow">Kontakt</span>
            <h1 className="kontakt-title">Sofort Hilfe erhalten</h1>
            <p className="kontakt-subtitle">
              Rohr verstopft? Notfall? Oder einfach eine Frage? Schildern Sie uns Ihr Problem – wir melden
              uns sofort oder sind in 30–45 Minuten bei Ihnen.
            </p>
          </div>
        </div>
      </section>

      <section className="kontakt-section">
        <div className="container">
          <div className="kontakt-grid">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>

      <ContactVorteile />
    </>
  );
}
