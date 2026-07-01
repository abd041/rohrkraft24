import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";

type LogoProps = {
  className?: string;
  height?: number;
  href?: string | null;
};

export function Logo({ className = "", height = 36, href = "/" }: LogoProps) {
  const image = (
    <img
      src={`${IMAGES}/logo.svg`}
      alt={SITE.name}
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
