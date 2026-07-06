import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export function Blog() {
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
