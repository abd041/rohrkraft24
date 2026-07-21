import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

type BlogProps = {
  variant?: "default" | "premium";
};

export function Blog({ variant = "default" }: BlogProps) {
  if (variant === "premium") {
    return (
      <section className="home-blog-premium">
        <header className="home-blog-premium__intro">
          <div className="container home-blog-premium__intro-row">
            <div>
              <p className="home-blog-premium__label">Ratgeber &amp; Tipps</p>
              <h2 className="home-blog-premium__heading">
                Wissenswertes
                <br />
                rund ums Rohr
              </h2>
            </div>
            <Link href="/blog/" className="btn btn-outline home-blog-premium__all">
              Alle Artikel →
            </Link>
          </div>
        </header>

        <div className="container home-blog-premium__body">
          <div className="home-blog-premium__grid">
            {BLOG_POSTS.map((post, index) => (
              <Link
                key={post.href}
                href={post.href}
                className="home-blog-premium__tile"
                style={{ animationDelay: `${0.08 + index * 0.06}s` }}
              >
                <div className="home-blog-premium__media">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={500}
                    height={320}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="home-blog-premium__copy">
                  <span className="home-blog-premium__cat">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="home-blog-premium__more">Weiterlesen →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section blog-section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="section-label">Ratgeber & Tipps</p>
            <h2 className="section-title">Wissenswertes rund ums Rohr</h2>
          </div>
          <Link
            href="/blog/"
            className="btn btn-navy"
            style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}
          >
            Alle Artikel →
          </Link>
        </div>

        <div className="blog__grid">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={post.href}
              href={post.href}
              className="blog-card rk-reveal"
              style={{ transitionDelay: `${((index + 2) % 6) * 0.07}s` }}
            >
              <div className="blog-card__img">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={500}
                  height={333}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                <span className="blog-card__cat">{post.category}</span>
              </div>
              <div className="blog-card__body">
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__read">Weiterlesen →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
