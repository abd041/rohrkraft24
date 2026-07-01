import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

export const geistSans = GeistSans;

export const nexa = localFont({
  src: [
    {
      path: "../../public/fonts/nexa/Nexa-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/nexa/Nexa-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nexa/Nexa-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
