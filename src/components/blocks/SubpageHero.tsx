import { Breadcrumb } from "@/components/blocks/Breadcrumb";

type SubpageHeroProps = {
  label: string;
  title: string;
  subtitle?: string;
  meta?: React.ReactNode;
  breadcrumb?: string;
};

export function SubpageHero({ label, title, subtitle, meta, breadcrumb }: SubpageHeroProps) {
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
