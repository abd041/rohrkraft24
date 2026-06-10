import Link from "next/link";

type CityServiceBreadcrumbProps = {
  serviceLabel: string;
  serviceHref: string;
  current: string;
};

export function CityServiceBreadcrumb({ serviceLabel, serviceHref, current }: CityServiceBreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>{" "}
              Startseite
            </Link>
          </li>
          <li className="breadcrumb__item">
            <span className="breadcrumb__sep">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
            <Link href={serviceHref} className="breadcrumb__link">
              {serviceLabel}
            </Link>
          </li>
          <li className="breadcrumb__item">
            <span className="breadcrumb__sep">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
            <span className="breadcrumb__current">{current}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
