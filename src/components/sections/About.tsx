import Image from "next/image";
import { COPY, IMAGES, SITE } from "@/lib/constants";
import { CheckIcon, PhoneIcon } from "@/components/icons";

const POINTS = [
  COPY.specialization.charAt(0).toUpperCase() + COPY.specialization.slice(1),
  "Jahrelange Erfahrung in Berlin und Umgebung",
  "Modernste Technik & professionelle Ausstattung",
];

type AboutProps = {
  variant?: "default" | "premium";
};

export function About({ variant = "default" }: AboutProps) {
  if (variant === "premium") {
    return (
      <section className="about-premium">
        <div className="container about-premium__grid">
          <div className="about-premium__content">
            <p className="about-premium__label">Hier sind wir Zuhause</p>
            <h2 className="about-premium__heading">
              Über {SITE.yearsExperience} Jahre
              <br />
              Erfahrung in Berlin
            </h2>
            <p className="about-premium__lede">
              {SITE.name} ist Ihr {COPY.partner}. Von Rohrreinigung über Leckageortung bis
              Sanitärarbeiten – alles aus einer Hand.
            </p>

            <ol className="about-premium__points">
              {POINTS.map((point, i) => (
                <li key={point} className="about-premium__point">
                  <span className="about-premium__index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>

            <p className="about-premium__body">
              Unser {COPY.technicians} arbeitet mit präzisen Methoden und professioneller
              Ausrüstung – Rothenberger Maschinen, RIDGID FlexShaft, TV-Kameras und Nasssauger –
              um Schäden schnell und sauber zu beheben.
            </p>

            <div className="about-premium__metrics">
              <div>
                <p className="about-premium__metric-value">{SITE.yearsExperience}</p>
                <p className="about-premium__metric-label">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="about-premium__metric-value">24/7</p>
                <p className="about-premium__metric-label">Notdienst</p>
              </div>
              <div>
                <p className="about-premium__metric-value">100 km</p>
                <p className="about-premium__metric-label">Einsatzradius</p>
              </div>
            </div>

            <div className="about-premium__ctas">
              <a href={SITE.phoneHref} className="btn btn-primary">
                <PhoneIcon /> {SITE.phone} – Anrufen
              </a>
              <a href="/kontakt/" className="btn btn-outline-dark">
                Kontakt aufnehmen
              </a>
            </div>
          </div>

          <figure className="about-premium__media">
            <Image
              src={`${IMAGES}/rohrretter24-team-berlin-rohrreinigung.webp`}
              alt={`${SITE.name} Team – Professioneller Service in Berlin`}
              width={900}
              height={700}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption className="about-premium__caption">
              Unser {COPY.team} im Einsatz – schnell, sauber und zum Festpreis in Berlin und
              Umgebung
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }

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
              src={`${IMAGES}/rohrretter24-team-berlin-rohrreinigung.webp`}
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
              Unser {COPY.team} im Einsatz – schnell, sauber und zum Festpreis in Berlin und
              Umgebung
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
