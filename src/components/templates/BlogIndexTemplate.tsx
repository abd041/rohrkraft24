import Link from "next/link";
import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { BLOG_POSTS } from "@/data/blog";

export function BlogIndexTemplate() {
  return (
    <>
      <Breadcrumb current="Blog" />

      <section className="blog-index-hero">
        <div className="container">
          <p className="section-label" style={{ color: "rgba(255,255,255,0.7)" }}>
            Wissen & Ratgeber
          </p>
          <h1>Rohrretter24 Blog</h1>
          <p>Expertenwissen rund um Rohrreinigung, Kanalsanierung und Rohrprobleme – verständlich erklärt.</p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="blog__grid">
            {BLOG_POSTS.map((post, index) => (
              <article key={post.href} className="blog-card rk-reveal" style={{ transitionDelay: `${index * 0.07}s` }}>
                <Link href={post.href} className="blog-card__img">
                  <img src={post.image} alt={post.alt} loading="lazy" width="400" height="220" />
                  <span className="blog-card__cat">{post.category}</span>
                </Link>
                <div className="blog-card__body">
                  <h2 className="blog-card__title">
                    <Link href={post.href} style={{ color: "inherit", textDecoration: "none" }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__footer">
                    <span className="blog-card__date">📅 {post.date}</span>
                    <Link href={post.href} className="blog-card__read">
                      Weiterlesen →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
