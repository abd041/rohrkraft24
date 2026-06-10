import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-800.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
});
