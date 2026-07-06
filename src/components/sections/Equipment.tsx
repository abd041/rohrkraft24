import Image from "next/image";
import { EQUIPMENT_ITEMS } from "@/data/equipment";

export function Equipment() {
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
