import { SubpageHero } from "@/components/blocks/SubpageHero";
import { ContactForm } from "@/components/blocks/ContactForm";
import { ContactSidebar } from "@/components/blocks/ContactSidebar";
import { ContactVorteile } from "@/components/blocks/ContactVorteile";
import { SITE } from "@/lib/constants";

export function ContactPageTemplate() {
  return (
    <>
      <SubpageHero
        breadcrumb="Kontakt"
        label="Kontakt"
        title="Sofort Hilfe erhalten"
        subtitle={`Rohr verstopft? Notfall? Oder einfach eine Frage? Schildern Sie uns Ihr Problem – wir melden uns sofort oder sind in ${SITE.reactionTime} bei Ihnen.`}
      />

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
