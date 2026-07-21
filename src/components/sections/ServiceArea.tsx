import Script from "next/script";
import { ServiceAreaMap } from "@/components/map/ServiceAreaMap";
import { BUNDESLAENDER, BERLIN_CITIES, CITY_COUNT } from "@/data/cities";
import { SITE } from "@/lib/constants";

const PIN_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CHEVRON_ICON = (
  <svg className="map-city-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

type ServiceAreaProps = {
  mapKeyword?: string;
  currentCitySlug?: string;
  variant?: "default" | "premium";
};

export function ServiceArea({
  mapKeyword,
  currentCitySlug,
  variant = "default",
}: ServiceAreaProps = {}) {
  const isPremium = variant === "premium";

  const mapBody = (
    <div className="map-wrapper" {...(mapKeyword ? { "data-keyword": mapKeyword } : {})}>
      <div className="map-left map-left--embed" id="mapLeft">
        <div className="map-controls">
          <div className="map-state-badge visible" id="mapStateBadge">
            <span className="map-state-name" id="mapStateName">
              Berlin & Umgebung
            </span>
            <span className="map-state-count" id="mapStateCount">
              · {CITY_COUNT} Standorte
            </span>
          </div>
        </div>
        <div className="map-embed-wrap">
          <ServiceAreaMap highlightSlug={currentCitySlug} />
        </div>
        <div
          className="map-svg-container map-svg-container--hidden"
          id="mapSvgContainer"
          data-map-src="/germany-map.svg"
          {...(currentCitySlug ? { "data-current-slug": currentCitySlug } : {})}
          aria-hidden
        />
      </div>

      <div className="map-right">
        <div className="map-panel map-panel--hidden" id="mapPanelOverview" style={{ display: "none" }}>
          <h3 className="map-state-title">Region wählen</h3>
          <p className="map-state-sub">Unser aktuelles Einsatzgebiet</p>
          <ul className="map-state-list">
            {BUNDESLAENDER.map((state) => (
              <li key={state.name}>
                {state.active ? (
                  <button className="map-state-row map-state-row--active" id="berlinStateBtn" type="button">
                    <span className="map-state-name">{state.name}</span>
                    <span className="map-state-count">{"count" in state ? `${state.count} Standorte` : ""}</span>
                    <svg className="map-state-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                ) : (
                  <div className="map-state-row map-state-row--soon" aria-disabled="true">
                    <span className="map-state-name">{state.name}</span>
                    <span className="map-state-soon">demnächst</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="map-panel" id="mapPanelBerlin" style={{ display: "flex" }}>
          <span className={isPremium ? "map-area-premium__panel-label" : "section-label"}>
            Berlin & Umgebung · {CITY_COUNT} Standorte
          </span>
          <h3>Stadt wählen</h3>
          <p>Stadt auswählen – dann alle Leistungen sehen:</p>
          <ul className="map-city-list">
            {BERLIN_CITIES.map((city, index) => (
              <li key={city.slug}>
                <button
                  className={`map-city-link rk-reveal${currentCitySlug === city.slug ? " map-city-link--active" : ""}`}
                  type="button"
                  data-city={city.name}
                  data-slug={city.slug}
                  style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
                >
                  {PIN_ICON}
                  <span>{city.name}</span>
                  {CHEVRON_ICON}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="map-panel map-panel--hidden" id="mapPanelCity" style={{ display: "none" }}>
          <button className="map-back-link" id="mapBackToCities" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Alle Städte
          </button>
          <span className="section-label map-kw-city-label" id="mapCityLabel" />
          <h3 id="mapCityTitle">Leistung wählen</h3>
          <p>Alle Dienstleistungen in Ihrer Stadt:</p>
          <ul className="map-kw-list" id="mapCityKeywords" />
        </div>
      </div>
    </div>
  );

  const scripts = (
    <>
      <Script src="/map-interactive.js" strategy="afterInteractive" />
      <Script id="map-city-reveal" strategy="afterInteractive">
        {`(function(){
          var els = document.querySelectorAll('.map-city-link.rk-reveal');
          if (!('IntersectionObserver' in window)) {
            els.forEach(function(el){ el.classList.add('rk-visible'); });
            return;
          }
          var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if (e.isIntersecting) {
                e.target.classList.add('rk-visible');
                obs.unobserve(e.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
          els.forEach(function(el){ obs.observe(el); });
        })();`}
      </Script>
    </>
  );

  if (isPremium) {
    return (
      <section className="map-area-premium" id="standorte">
        <header className="map-area-premium__intro">
          <div className="container">
            <div className="map-area-premium__intro-inner">
              <p className="map-area-premium__label">Unser Einsatzgebiet</p>
              <h2 className="map-area-premium__heading">
                {SITE.name}
                <br />
                in Ihrer Nähe
              </h2>
              <p className="map-area-premium__lede">
                Schnell vor Ort in Berlin und im Umkreis von 100 km – wählen Sie Ihre Stadt.
              </p>
            </div>
          </div>
        </header>
        <div className="container map-area-premium__body">{mapBody}</div>
        {scripts}
      </section>
    );
  }

  return (
    <section className="citylinks section" id="standorte">
      <div className="container">
        <div className="map-section-header">
          <div>
            <p className="section-label">Unser Einsatzgebiet</p>
            <h2>{SITE.name} in Ihrer Nähe</h2>
            <p>Schnell vor Ort in Berlin und im Umkreis von 100 km – wählen Sie Ihre Stadt</p>
          </div>
        </div>
        {mapBody}
      </div>
      {scripts}
    </section>
  );
}
