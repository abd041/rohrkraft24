import { SubpageHero } from "@/components/blocks/SubpageHero";
import { ContactForm } from "@/components/blocks/ContactForm";
import { ContactSidebar } from "@/components/blocks/ContactSidebar";
import { ContactVorteile } from "@/components/blocks/ContactVorteile";
import { CTABanner } from "@/components/sections/CTABanner";
import { SITE } from "@/lib/constants";

export function ContactPageTemplate() {
  return (
    <>
      <SubpageHero
        variant="premium"
        breadcrumb="Kontakt"
        label="Kontakt"
        title={
          <>
            Sofort Hilfe
            <br />
            erhalten
          </>
        }
        subtitle={`Rohr verstopft? Notfall? Oder einfach eine Frage? Schildern Sie uns Ihr Problem – wir melden uns sofort oder sind in ${SITE.reactionTime} bei Ihnen.`}
      />

      <section className="kontakt-premium">
        <div className="container kontakt-premium__grid">
          <ContactForm variant="premium" />
          <ContactSidebar variant="premium" />
        </div>
      </section>

      <ContactVorteile variant="premium" />
      <CTABanner variant="premium" />
    </>
  );
}
