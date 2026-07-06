import type { CSSProperties } from "react";
import Link from "next/link";
import { BlogBreadcrumb } from "@/components/blocks/BlogBreadcrumb";
import { BlogContent } from "@/components/blocks/BlogContent";
import { PhoneIcon } from "@/components/icons";
import { CTABanner } from "@/components/sections/CTABanner";
import { IMAGES, COPY, SITE } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { getRelatedBlogPosts, type BlogPostData } from "@/lib/blog-posts";

/*
 * BLOG ARTICLE HERO VARIANT
 * Switch the active variant by changing the value below:
 *   "centered"  →  Variant A (default) – solid overlay, centered text
 *   "magazine"  →  Variant B – gradient overlay, left-aligned editorial style
 */
const HERO_VARIANT: "centered" | "magazine" = "centered";

const SERVICE_LINKS = [
  { href: "/rohrreinigung/", label: "Rohrreinigung" },
  { href: "/kamera-inspektion/", label: "TV-Kamera-Inspektion" },
  { href: "/rohrreparatur/", label: "Rohrreparatur" },
  { href: "/leckageortung/", label: "Leckageortung" },
  { href: "/notdienst/", label: "24h Notdienst" },
];

type BlogPostTemplateProps = {
  post: BlogPostData;
};

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const related = getRelatedBlogPosts(post.slug);
  const imgBase = IMAGES;

  const heroStyle = post.hero.image
    ? ({
        "--hero-img": `url(${imgBase}/${post.hero.image})`,
        "--hero-img-sm": `url(${imgBase}/${post.hero.imageSm})`,
        } as CSSProperties)
    : undefined;

  return (
    <>
      <BlogBreadcrumb current={post.hero.title} />

      {/* ── Blog Article Hero ─────────────────────────────────────
          Variant A (--centered): solid overlay, content centred  ← DEFAULT
          Variant B (--magazine): gradient overlay, editorial left
          To switch: change HERO_VARIANT constant at top of file.
      ──────────────────────────────────────────────────────────── */}
      <section
        className={`blog-article-hero blog-article-hero--${HERO_VARIANT}${!post.hero.image ? " blog-article-hero--no-image" : ""}`}
        style={heroStyle}
        aria-label={post.hero.title}
      >
        <div className="blog-article-hero__overlay" aria-hidden="true" />
        <div className="blog-article-hero__content container">
          <span className="blog-article-hero__cat">{post.hero.category}</span>
          <h1 className="blog-article-hero__title">{post.hero.title}</h1>
          <div className="blog-article-hero__meta">
            {post.hero.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="container">
          <div className="blog-layout">
            <article className="blog-content">
              <BlogContent blocks={post.blocks} />

              {post.faq.length > 0 && (
                <>
                  <h2 id="faq">Häufige Fragen</h2>
                  {post.faq.map((item) => (
                    <div
                      key={item.question}
                      style={{ borderBottom: "1px solid var(--gray-200)", padding: "1.1rem 0" }}
                    >
                      <strong style={{ display: "block", color: "var(--navy)", marginBottom: "0.4rem" }}>
                        {item.question}
                      </strong>
                      <p style={{ margin: 0, color: "var(--gray-600)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </>
              )}

              <div className="blog-author">
                <div className="blog-author__avatar">
                  <Logo height={40} href={null} variant="header" />
                </div>
                <div>
                  <p className="blog-author__name">{SITE.name} Redaktion</p>
                  <p className="blog-author__role">
                    {COPY.team.charAt(0).toUpperCase() + COPY.team.slice(1)} – {COPY.specialization} in Berlin und Umgebung
                  </p>
                </div>
              </div>
            </article>

            <aside className="blog-sidebar">
              {post.toc.length > 0 && (
                <div className="blog-sidebar__box rk-reveal rk-visible" style={{ transitionDelay: "0s" }}>
                  <h3>Inhaltsverzeichnis</h3>
                  <ul className="blog-toc">
                    {post.toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div
                className="blog-sidebar__box rk-reveal"
                style={{ background: "var(--secondary)", borderColor: "var(--secondary)", transitionDelay: "0.07s" }}
              >
                <h3 style={{ color: "white" }}>Jetzt Hilfe erhalten</h3>
                <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", marginBottom: "1rem", lineHeight: 1.6 }}>
                  Problem? Wir sind 24/7 für Sie da – auch nachts und am Wochenende.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", background: "white", color: "var(--primary)" }}
                >
                  <PhoneIcon /> {SITE.phone}
                </a>
              </div>

              {related.length > 0 && (
                <div className="blog-sidebar__box rk-reveal" style={{ transitionDelay: "0.14s" }}>
                  <h3>Weitere Artikel</h3>
                  <ul className="blog-related">
                    {related.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="blog-sidebar__box rk-reveal" style={{ transitionDelay: "0.21s" }}>
                <h3>Unsere Leistungen</h3>
                <ul className="blog-related">
                  {SERVICE_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
