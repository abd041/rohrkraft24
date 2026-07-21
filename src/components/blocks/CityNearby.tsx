import Link from "next/link";
import type { CityNearbyLink } from "@/lib/city-pages";

type CityNearbyProps = {
  title: string;
  intro: string;
  links: CityNearbyLink[];
};

export function CityNearby({ title, intro, links }: CityNearbyProps) {
  if (links.length === 0) return null;

  return (
    <section className="nearby-premium">
      <header className="nearby-premium__intro">
        <div className="container">
          <div className="nearby-premium__intro-inner">
            <p className="nearby-premium__label">In der Region</p>
            <h2 className="nearby-premium__heading">{title}</h2>
            <p className="nearby-premium__lede">{intro}</p>
          </div>
        </div>
      </header>

      <div className="container nearby-premium__body">
        <ul className="nearby-premium__list">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nearby-premium__link">
                <span className="nearby-premium__link-label">{link.label}</span>
                {link.distance ? (
                  <span className="nearby-premium__link-meta">{link.distance}</span>
                ) : null}
                <span className="nearby-premium__link-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
