import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const buildRoot = join(process.cwd(), ".next/server/app");
const origin = "https://www.empoweredwithinna.com";
const articleSlugs = [
  "gut-brain-connection",
  "healthcare-fails-women",
  "corporate-wellness",
  "perimenopause-gut-health",
  "root-cause-nutrition",
  "stress-gut-polyvagal",
];

function read(relativePath) {
  return readFileSync(join(buildRoot, relativePath), "utf8");
}

function metadataFrom(html) {
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(
    /<meta name="description" content="(.*?)"\s*\/>/s,
  )?.[1];
  const canonical = html.match(
    /<link rel="canonical" href="(.*?)"\s*\/>/s,
  )?.[1];
  return { title, description, canonical };
}

function structuredDataTypes(html) {
  const types = [];
  const scripts = html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  );

  for (const [, json] of scripts) {
    const data = JSON.parse(json);
    if (data["@type"]) types.push(data["@type"]);
    if (Array.isArray(data["@graph"])) {
      types.push(...data["@graph"].map((item) => item["@type"]));
    }
  }

  return types;
}

const pages = [
  { route: "/", file: "index.html" },
  { route: "/blogs", file: "blogs.html" },
  {
    route: "/central-texas-functional-nutrition",
    file: "central-texas-functional-nutrition.html",
  },
  {
    route: "/functional-nutrition-consultations",
    file: "functional-nutrition-consultations.html",
  },
  { route: "/gut-health-nutrition", file: "gut-health-nutrition.html" },
  {
    route: "/perimenopause-nutrition-support",
    file: "perimenopause-nutrition-support.html",
  },
  { route: "/functional-lab-testing", file: "functional-lab-testing.html" },
  { route: "/about-inna-benyukhis", file: "about-inna-benyukhis.html" },
  { route: "/contact", file: "contact.html" },
  { route: "/medical-disclaimer", file: "medical-disclaimer.html" },
  ...articleSlugs.map((slug) => ({
    route: `/blogs/${slug}`,
    file: `blogs/${slug}.html`,
  })),
];

const titles = new Set();

for (const page of pages) {
  const html = read(page.file);
  const metadata = metadataFrom(html);
  const expectedCanonical =
    page.route === "/" ? origin : `${origin}${page.route}`;

  assert.ok(metadata.title, `${page.route} is missing a title`);
  assert.ok(
    metadata.description,
    `${page.route} is missing a meta description`,
  );
  assert.equal(
    metadata.canonical,
    expectedCanonical,
    `${page.route} has an incorrect canonical`,
  );
  assert.ok(!titles.has(metadata.title), `${page.route} has a duplicate title`);
  assert.doesNotMatch(
    metadata.title,
    /Empowered Wellness with Inna.*Empowered Wellness with Inna/,
    `${page.route} repeats the site name in its title`,
  );
  assert.doesNotMatch(html, /Rosales|rosalesyard|Lawn Care Services/i);
  titles.add(metadata.title);
}

const homepage = read("index.html");
assert.equal(
  (homepage.match(/<header/g) ?? []).length,
  1,
  "Homepage must have one header",
);
assert.equal(
  (homepage.match(/<main/g) ?? []).length,
  1,
  "Homepage must have one main",
);
assert.ok(structuredDataTypes(homepage).includes("Organization"));
assert.ok(structuredDataTypes(homepage).includes("WebSite"));
assert.ok(structuredDataTypes(homepage).includes("Person"));

const centralTexasPage = read("central-texas-functional-nutrition.html");
for (const city of ["Buda", "Kyle", "Austin", "San Marcos"]) {
  assert.match(
    centralTexasPage,
    new RegExp(city),
    `Central Texas page is missing ${city}`,
  );
}

for (const slug of articleSlugs) {
  const types = structuredDataTypes(read(`blogs/${slug}.html`));
  assert.ok(
    types.includes("BlogPosting"),
    `${slug} is missing BlogPosting JSON-LD`,
  );
  assert.ok(
    types.includes("BreadcrumbList"),
    `${slug} is missing breadcrumb JSON-LD`,
  );
}

const robots = read("robots.txt.body");
assert.match(robots, /User-Agent: \*/);
assert.match(robots, new RegExp(`Sitemap: ${origin}/sitemap\\.xml`));

const sitemap = read("sitemap.xml.body");
assert.doesNotMatch(sitemap, /empowerednutritionwithinna/i);
for (const page of pages) {
  const url = page.route === "/" ? origin : `${origin}${page.route}`;
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap is missing ${url}`);
}

const openGraphMeta = JSON.parse(read("opengraph-image.meta"));
assert.equal(openGraphMeta.status, 200);
assert.equal(openGraphMeta.headers["content-type"], "image/png");

console.log(`SEO checks passed for ${pages.length} indexable pages.`);
