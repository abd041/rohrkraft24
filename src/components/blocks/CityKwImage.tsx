import { IMAGES as IMG } from "@/lib/constants";

type CityKwImageProps = {
  src: string;
  alt: string;
  caption: string;
};

export function CityKwImage({ src, alt, caption }: CityKwImageProps) {
  return (
    <section className="section kw-image-section" style={{ background: "#f8fafc", padding: "2rem 0" }}>
      <div className="container">
        <figure className="kw-image-figure rk-reveal" style={{ transitionDelay: "0.07s" }}>
          <img
            src={`${IMG}/${src}`}
            alt={alt}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="kw-image"
          />
          <figcaption className="kw-image-caption">{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
