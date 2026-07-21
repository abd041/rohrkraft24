import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="notfound-premium">
      <div className="container notfound-premium__inner">
        <p className="notfound-premium__label">Fehler 404</p>
        <h1 className="notfound-premium__title">
          Seite nicht
          <br />
          gefunden
        </h1>
        <p className="notfound-premium__text">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="notfound-premium__actions">
          <Link href="/" className="btn btn-primary">
            Zur Startseite
          </Link>
          <a href={SITE.phoneHref} className="btn btn-outline notfound-premium__secondary">
            {SITE.phone} anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
