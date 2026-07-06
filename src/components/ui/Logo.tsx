import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";

type LogoProps = {
  className?: string;
  height?: number;
  href?: string | null;
  variant?: "header" | "footer";
};

// SVG viewBox="60 195 365 100" → intrinsic aspect ratio 365/100 = 3.65
// Providing explicit width prevents layout shift while the SVG loads.
const LOGO_ASPECT_RATIO = 365 / 100;

export function Logo({ className = "", height = 36, href = "/", variant = "header" }: LogoProps) {
  const src = variant === "footer"
    ? `${IMAGES}/logo-footer.svg`
    : `${IMAGES}/logo-header.svg`;

  const image = (
    <img
      src={src}
      alt={SITE.name}
      width={Math.round(height * LOGO_ASPECT_RATIO)}
      height={height}
      className={`site-logo ${className}`.trim()}
    />
  );

  if (href === null) return image;

  return (
    <Link href={href} className="logo" aria-label={`${SITE.name} Startseite`}>
      {image}
    </Link>
  );
}
