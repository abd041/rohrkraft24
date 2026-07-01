import Image from "next/image";
import { COPY, IMAGES, SITE } from "@/lib/constants";
import { CheckIcon, PhoneIcon } from "@/components/icons";

const POINTS = [
  COPY.specialization.charAt(0).toUpperCase() + COPY.specialization.slice(1),
  "Jahrelange Erfahrung in Berlin und Umgebung",
  "Modernste Technik & professionelle Ausstattung",
];

export function About() {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">
        <div className="team__grid">
          <div className="team__content">
            <p className="section-label">Hier sind wir Zuhause!</p>
            <h2 className="section-title mb-4">
              {COPY.experience.charAt(0).toUpperCase() + COPY.experience.slice(1)}
            </h2>
            <p className="team__text">
              {SITE.name} ist Ihr {COPY.partner}. Von Rohrreinigung über Leckageortung bis
              Sanitärarbeiten – alles aus einer Hand.
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
              Unser {COPY.technicians} arbeitet mit präzisen Methoden und professioneller
              Ausrüstung – Rothenberger Maschinen, RIDGID FlexShaft, TV-Kameras und Nasssauger –
              um Schäden schnell und sauber zu beheben.
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
              alt={`${SITE.name} Team – Professioneller Service in Berlin`}
              width={800}
              height={600}
              loading="lazy"
            />
            <div className="team__photo-badge">
              <span className="team__photo-badge-num">{SITE.yearsExperience}</span>
              <span className="team__photo-badge-label">
                Jahre
                <br />
                Erfahrung
              </span>
            </div>
            <figcaption className="team__photo-caption">
              Unser {COPY.team} im Einsatz – schnell, sauber und zum Festpreis in Berlin
              und Umgebung
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
