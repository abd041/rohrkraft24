import Image from "next/image";
import { EQUIPMENT_ITEMS } from "@/data/equipment";

type EquipmentProps = {
  variant?: "default" | "premium";
};

export function Equipment({ variant = "default" }: EquipmentProps) {
  if (variant === "premium") {
    return (
      <section className="equipment-premium" id="ausstattung">
        <header className="equipment-premium__intro">
          <div className="container">
            <div className="equipment-premium__intro-inner">
              <p className="equipment-premium__label">Professionelle Ausstattung</p>
              <h2 className="equipment-premium__heading">
                Modernes Equipment
                <br />
                für schnelle Hilfe
              </h2>
              <p className="equipment-premium__lede">
                Für eine schnelle und fachgerechte Ausführung verfügen wir über moderne
                Ausrüstung – von TV-Kameras bis Rothenberger und RIDGID Systemen.
              </p>
            </div>
          </div>
        </header>

        <div className="container equipment-premium__body">
          <div className="equipment-premium__grid">
            {EQUIPMENT_ITEMS.map((item, index) => (
              <article
                key={item.title}
                className="equipment-premium__tile"
                style={{ animationDelay: `${0.06 + index * 0.05}s` }}
              >
                <div className="equipment-premium__media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={480}
                    height={320}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="equipment-premium__copy">
                  <h3 className="equipment-premium__title">{item.title}</h3>
                  <p className="equipment-premium__desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: "white" }} id="ausstattung">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Professionelle Ausstattung</p>
          <h2 className="section-title mb-4">Modernes Equipment für schnelle Hilfe</h2>
          <p className="section-subtitle mx-auto">
            Für eine schnelle und fachgerechte Ausführung verfügen wir über moderne und
            professionelle Ausrüstung – von TV-Kameras bis Rothenberger und RIDGID Systemen.
          </p>
        </div>

        <div className="equipment__grid">
          {EQUIPMENT_ITEMS.map((item) => (
            <div key={item.title} className="equipment-card rk-reveal">
              <div className="equipment-card__img-wrap">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={240}
                  className="equipment-card__img"
                />
              </div>
              <div className="equipment-card__body">
                <h3 className="equipment-card__title">{item.title}</h3>
                <p className="equipment-card__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
