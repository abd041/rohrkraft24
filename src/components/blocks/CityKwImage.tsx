import { IMAGES as IMG } from "@/lib/constants";

type CityKwImageProps = {
  src: string;
  alt: string;
  caption: string;
};

export function CityKwImage({ src, alt, caption }: CityKwImageProps) {
  return (
    <section className="kw-premium">
      <div className="container">
        <figure className="kw-premium__figure">
          <img
            src={`${IMG}/${src}`}
            alt={alt}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="kw-premium__img"
          />
          <figcaption className="kw-premium__caption">{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
