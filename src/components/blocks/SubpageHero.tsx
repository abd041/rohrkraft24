import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/blocks/Breadcrumb";

type SubpageHeroProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  meta?: ReactNode;
  breadcrumb?: string;
  variant?: "default" | "premium";
};

export function SubpageHero({
  label,
  title,
  subtitle,
  meta,
  breadcrumb,
  variant = "default",
}: SubpageHeroProps) {
  if (variant === "premium") {
    return (
      <>
        {breadcrumb && <Breadcrumb current={breadcrumb} />}
        <section className="subpage-hero subpage-hero--premium">
          <div className="container">
            <div className="subpage-hero-premium__inner">
              <p className="subpage-hero-premium__label">{label}</p>
              <h1 className="subpage-hero-premium__title">{title}</h1>
              {subtitle && <p className="subpage-hero-premium__subtitle">{subtitle}</p>}
              {meta && <div className="subpage-hero-premium__meta">{meta}</div>}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {breadcrumb && <Breadcrumb current={breadcrumb} />}
      <section className="subpage-hero">
        <div className="container subpage-hero__inner">
          <span className="subpage-hero__label">{label}</span>
          <h1>{title}</h1>
          {subtitle && <p className="subpage-hero__subtitle">{subtitle}</p>}
          {meta && <div className="subpage-hero__meta">{meta}</div>}
        </div>
      </section>
    </>
  );
}
