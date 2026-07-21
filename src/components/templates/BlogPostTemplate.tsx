import type { CSSProperties } from "react";
import Link from "next/link";
import { BlogBreadcrumb } from "@/components/blocks/BlogBreadcrumb";
import { BlogContent } from "@/components/blocks/BlogContent";
import { PhoneIcon } from "@/components/icons";
import { CTABanner } from "@/components/sections/CTABanner";
import { IMAGES, COPY, SITE } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { getRelatedBlogPosts, type BlogPostData } from "@/lib/blog-posts";

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

      <section
        className={`blog-post-premium-hero${!post.hero.image ? " blog-post-premium-hero--no-image" : ""}`}
        style={heroStyle}
        aria-label={post.hero.title}
      >
        <div className="blog-post-premium-hero__veil" aria-hidden />
        <div className="container blog-post-premium-hero__content">
          <p className="blog-post-premium-hero__cat">{post.hero.category}</p>
          <h1 className="blog-post-premium-hero__title">{post.hero.title}</h1>
          <div className="blog-post-premium-hero__meta">
            {post.hero.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-post-premium">
        <div className="container blog-post-premium__layout">
          <article className="blog-post-premium__main">
            <div className="blog-content">
              <BlogContent blocks={post.blocks} />
            </div>

            {post.faq.length > 0 && (
              <div className="blog-post-premium__faq">
                <h2 id="faq">Häufige Fragen</h2>
                {post.faq.map((item) => (
                  <div key={item.question} className="blog-post-premium__faq-item">
                    <strong>{item.question}</strong>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="blog-post-premium__author">
              <div className="blog-post-premium__author-logo">
                <Logo height={36} href={null} variant="header" />
              </div>
              <div>
                <p className="blog-post-premium__author-name">{SITE.name} Redaktion</p>
                <p className="blog-post-premium__author-role">
                  {COPY.team.charAt(0).toUpperCase() + COPY.team.slice(1)} – {COPY.specialization}{" "}
                  in Berlin und Umgebung
                </p>
              </div>
            </div>
          </article>

          <aside className="blog-post-premium__aside">
            {post.toc.length > 0 && (
              <div className="blog-post-premium__nav">
                <p className="blog-post-premium__nav-label">Inhalt</p>
                <ul>
                  {post.toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="blog-post-premium__help">
              <p className="blog-post-premium__help-label">Jetzt Hilfe erhalten</p>
              <p className="blog-post-premium__help-text">
                Problem? Wir sind 24/7 für Sie da – auch nachts und am Wochenende.
              </p>
              <a href={SITE.phoneHref} className="btn btn-primary blog-post-premium__help-cta">
                <PhoneIcon /> {SITE.phone}
              </a>
            </div>

            {related.length > 0 && (
              <div className="blog-post-premium__nav">
                <p className="blog-post-premium__nav-label">Weitere Artikel</p>
                <ul>
                  {related.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="blog-post-premium__nav">
              <p className="blog-post-premium__nav-label">Leistungen</p>
              <ul>
                {SERVICE_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner variant="premium" />
    </>
  );
}
