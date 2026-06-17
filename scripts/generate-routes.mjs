import { readFileSync, writeFileSync } from "fs";
import { SERVICES } from "./services-config.mjs";

const cities = JSON.parse(readFileSync("src/data/berlin-cities.json", "utf8"));

const mainPages = ["kontakt", "einsatzgebiete", "impressum", "datenschutz"];

const blogPosts = ["rohrreinigung-kosten", "rohrverstopfung-ursachen", "kanalinspektion-kamera"];

const routes = [];

for (const s of SERVICES) {
  routes.push({ path: `/${s.slug}/`, slug: s.slug, type: "service" });
}

for (const s of SERVICES) {
  for (const c of cities) {
    routes.push({
      path: `/${s.slug}-${c.slug}/`,
      slug: `${s.slug}-${c.slug}`,
      type: "city-service",
      service: s.slug,
      city: c.slug,
    });
  }
}

for (const p of mainPages) {
  routes.push({ path: `/${p}/`, slug: p, type: "main" });
}

routes.push({ path: "/blog/", slug: "blog", type: "blog-index" });

for (const p of blogPosts) {
  routes.push({ path: `/blog/${p}/`, slug: p, type: "blog-post", blogSlug: p });
}

writeFileSync("src/data/site-routes.json", JSON.stringify(routes, null, 2));
console.log("Total routes:", routes.length);
