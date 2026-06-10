import Image from "next/image";
import { IMAGES, SITE } from "@/lib/constants";
import { CheckIcon, PhoneIcon } from "@/components/icons";

const POINTS = [
  "Tiefgehendes Fachwissen",
  "Jahrelange Erfahrung im Rhein-Main-Gebiet",
  "Modernste Hochdrucktechnik",
];

export function About() {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">
        <div className="team__grid">
          <div className="team__content">
            <p className="section-label">Hier sind wir Zuhause!</p>
            <h2 className="section-title mb-4">
              Fachbetrieb mit über 10 Jahren Erfahrung in der Rohrreinigung
            </h2>
            <p className="team__text">
              Rohrkraft24 steht seit über einem Jahrzehnt für Qualität, Verlässlichkeit und
              Kundenzufriedenheit im Rhein-Main-Gebiet. Wir setzen auf eine entscheidende
              Fähigkeit, um erstklassige Ergebnisse zu garantieren.
            </p>
            <ul className="team__bullets">
              {POINTS.map((point) => (
                <li key={point} className="team__bullet">
                  <span className="team__bullet-icon">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="team__text" style={{ marginBottom: "2rem" }}>
              Unsere erfahrenen Mitarbeiter arbeiten mit präzisen Methoden und neuester
              Ausrüstung, um selbst die hartnäckigsten Verstopfungen schnell und sauber zu
              beseitigen. Von der Abflussreinigung über die Kanalreinigung bis hin zur
              Kamerainspektion und Kanalsanierung – alles aus einer Hand.
            </p>
            <div className="team__ctas">
              <a href={SITE.phoneHref} className="btn btn-primary">
                <PhoneIcon /> {SITE.phone}
              </a>
              <a href={SITE.phoneHref} className="btn btn-navy">
                Termin vereinbaren
              </a>
            </div>
          </div>

          <figure className="team__photo">
            <Image
              src={`${IMAGES}/rohrkraft24-team-rohrreinigung-hessen.webp`}
              alt="Rohrkraft24 Team – Professionelle Rohrreinigung in Hessen"
              width={800}
              height={600}
              loading="lazy"
            />
            <div className="team__photo-badge">
              <span className="team__photo-badge-num">10+</span>
              <span className="team__photo-badge-label">
                Jahre
                <br />
                Erfahrung
              </span>
            </div>
            <figcaption className="team__photo-caption">
              Unser zertifiziertes Team im Einsatz – schnell, sauber und zum Festpreis im
              gesamten Rhein-Main-Gebiet
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
