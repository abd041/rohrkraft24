import Image from "next/image";
import Link from "next/link";
import { SubpageHero } from "@/components/blocks/SubpageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { BLOG_POSTS } from "@/data/blog";
import { SITE } from "@/lib/constants";

export function BlogIndexTemplate() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <SubpageHero
        variant="premium"
        breadcrumb="Blog"
        label="Wissen & Ratgeber"
        title={
          <>
            {SITE.name}
            <br />
            Blog
          </>
        }
        subtitle="Praxisnahe Tipps zu Rohrreinigung, Kosten und Schadensvermeidung – speziell für Berlin und Brandenburg."
      />

      <section className="blog-premium">
        <div className="container">
          {featured && (
            <Link href={featured.href} className="blog-premium__featured">
              <div className="blog-premium__featured-media">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  width={900}
                  height={560}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  priority
                />
              </div>
              <div className="blog-premium__featured-body">
                <span className="blog-premium__kicker">{featured.category}</span>
                <h2 className="blog-premium__featured-title">{featured.title}</h2>
                <p className="blog-premium__featured-excerpt">{featured.excerpt}</p>
                <span className="blog-premium__more">Weiterlesen →</span>
              </div>
            </Link>
          )}

          <div className="blog-premium__grid">
            {rest.map((post, index) => (
              <Link
                key={post.href}
                href={post.href}
                className="blog-premium__tile"
                style={{ animationDelay: `${0.08 + index * 0.06}s` }}
              >
                <div className="blog-premium__tile-media">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={640}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="blog-premium__tile-body">
                  <span className="blog-premium__kicker">{post.category}</span>
                  <h2 className="blog-premium__tile-title">{post.title}</h2>
                  <p className="blog-premium__tile-excerpt">{post.excerpt}</p>
                  <span className="blog-premium__more">Weiterlesen →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="premium" />
    </>
  );
}
