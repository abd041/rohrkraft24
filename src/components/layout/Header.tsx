"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/constants";
import { ServiceIcon, type ServiceIconName } from "@/components/icons";
import { Logo } from "@/components/ui/Logo";
import { useModal } from "@/components/providers/ModalProvider";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesAccOpen, setServicesAccOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo height={44} variant="header" />

        <nav className="nav">
          <Link href="/" className="nav__link nav__link--icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>{" "}
            Startseite
          </Link>
          <Link href="/ueber-uns/" className="nav__link">
            Über uns
          </Link>

          <div
            className={`dropdown${dropdownOpen ? " is-open" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="dropdown__trigger" type="button">
              Dienstleistungen{" "}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="dropdown__menu">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.href} href={`${link.href}/`} className="dropdown__item">
                  <span className="dropdown__svc-icon">
                    <ServiceIcon name={link.icon as ServiceIconName} />
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/einsatzgebiete/" className="nav__link">
            Einsatzgebiete
          </Link>
          <Link href="/kontakt/" className="nav__link">
            Kontakt
          </Link>
          <Link href="/blog/" className="nav__link">
            Blog
          </Link>
        </nav>

        <div className="header__actions">
          <a href={SITE.phoneHref} className="header__email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>{" "}
            {SITE.phone}
          </a>
          <a href={SITE.phoneHref} className="header__notdienst">
            <span className="header__notdienst-dot" />
            24h Notdienst
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Menü"
          type="button"
          onClick={() => setMobileOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <div className="mobile-nav__panel">
          <div className="mobile-nav__header">
            <Logo height={32} className="site-logo--mobile-nav" variant="header" />
            <button
              className="mobile-nav__close"
              aria-label="Menü schließen"
              type="button"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="mobile-nav__body">
            <div className="mobile-nav__section">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mobile-nav__divider" />

            <div className="mobile-nav__section">
              <button
                type="button"
                className={`mobile-acc__trigger${servicesAccOpen ? " is-open" : ""}`}
                onClick={() => setServicesAccOpen(!servicesAccOpen)}
              >
                <span>Dienstleistungen</span>
                <svg className="mobile-acc__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className="mobile-acc__body"
                style={{ maxHeight: servicesAccOpen ? "500px" : "0" }}
              >
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={`${link.href}/`}
                    className="mobile-nav__link mobile-sub"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <a href={SITE.phoneHref} className="mobile-nav__cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>{" "}
              {SITE.phone}
            </a>
            <button
              type="button"
              className="mobile-nav__cta mobile-nav__cta--navy"
              onClick={() => {
                setMobileOpen(false);
                openModal("callback");
              }}
            >
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
