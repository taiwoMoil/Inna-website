# Landing-page SEO and AEO audit

Audit date: 2026-09-05  
Branch reviewed: `client-preview/landing-page-redesign`

## Executive verdict

The redesign is moving in the right direction: the homepage has a descriptive, server-rendered H1; the hero image uses `next/image` with dimensions, responsive sizing, descriptive alt text, and priority loading; navigation is made from crawlable links; the site has `robots.ts`, `sitemap.ts`, and homepage JSON-LD; and the redesign removed unsupported success-rate counters from the hero.

The preview should not ship as the SEO/AEO baseline until the blog metadata and health-content trust issues below are resolved. Google now explicitly says that “AEO/GEO” for its generative search features is still foundational SEO: crawlable pages plus unique, expert, useful content. It does **not** require an `llms.txt`, special AI schema, artificial “chunking,” or rewrites for every long-tail query ([Google generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Bing likewise says the same crawl, indexing, structure, authority, and trust signals support both standard results and Copilot citations ([Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).

## Release priorities

### P0 — Give every indexable route its own metadata and canonical

- `app/layout.tsx` supplies homepage-oriented title, description, Open Graph fields, and image to every route that does not override them.
- `app/blogs/page.tsx` and the six article components use `next/head` inside Client Components. In the App Router, route metadata should be exported from a Server Component with `metadata` or `generateMetadata`; interactive UI can be moved into a child Client Component ([Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)).
- Add a static metadata export for `/blogs` and `generateMetadata` for `/blogs/[slug]`, including a unique title, description, canonical URL, Open Graph URL/type/image, and Twitter image. Keep `metadataBase` at the root.
- Add `Article`/`BlogPosting` JSON-LD per article with accurate `headline`, canonical `mainEntityOfPage`, `author` URL, `datePublished`, `dateModified` only when genuinely updated, and crawlable representative images. Google recommends author identity, real dates, and relevant high-resolution article images ([Google Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)).

### P0 — Strengthen trust for health/YMYL content

Health guidance receives greater scrutiny for trust and E-E-A-T. Google recommends clear authorship, author background, demonstrable expertise, and easily verifiable accuracy for topics that can affect health ([Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

- Change article bylines from plain “By Inna” to a link to a substantive practitioner bio showing the exact credential, credentialing body, scope of practice, experience, and verified professional profiles.
- Add primary-source citations beside factual medical/scientific claims. Several articles currently say “research shows” or present medical and business statistics without a linked source.
- Add visible published/updated dates and a short editorial/medical-review statement where appropriate. Do not refresh dates unless the content was substantively reviewed.
- Substantiate or soften numerical and outcome claims such as `88%`, `92%`, `500+`, `5,000+`, “hundreds,” fixed improvement timelines, “90% improved,” “100% Satisfaction Guarantee,” “HIPAA Compliant,” and “24/7 support.” Preserve testimonials only with documented consent and label them as individual experiences, not typical outcomes.
- Avoid language that implies diagnosis, treatment, cure, or guaranteed outcomes when the practitioner’s stated service is nutrition coaching. Use precise support-oriented language and add an appropriate educational/not-medical-advice notice.

### P0 — Fix missing assets before indexing the preview

- Every blog card/article references `/blog-images/...`, but `public/blog-images` is absent. This creates broken images on all six sitemap-listed articles and prevents those images from being crawled or used in article/search features. Google recommends representative, crawlable, indexable, high-quality images ([Google image SEO](https://developers.google.com/search/docs/appearance/google-images)).
- The branch now removes the missing `/apple-touch-icon.png` and `/manifest.json` references, preventing those avoidable 404s.
- The branch now connects the header’s “Resources” link to the blog preview’s `#resources` ID.

### P1 — Make answer-friendly content useful, not formulaic

- Keep the visible FAQ and strengthen it with concise first-sentence answers, then supporting detail, limitations, and a relevant internal link. Descriptive headings, concise sections, tables where genuinely useful, evidence, and freshness help Bing reference content accurately in AI answers ([Bing AI Performance guidance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)).
- Build durable pages around actual client decisions: who the service is for/not for, what happens in an assessment, what each test can and cannot establish, pricing/ranges, timelines as non-guaranteed examples, practitioner scope, and when to seek licensed medical care. Do not create thin pages for every query variation.
- FAQPage schema is optional and low priority. Google normally shows FAQ rich results only for well-known authoritative government and health sites, so do not treat FAQ markup as a visibility shortcut ([Google FAQ rich-result change](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). If added, every marked-up question and answer must match visible page content.

### P1 — Keep structured data accurate and modest

The homepage `WebSite` + `Organization` + `Person` + `Service` graph in `components/structuredData.tsx` is relevant to visible content, uses stable `@id` links, and safely escapes `<`, matching Next.js guidance ([Next.js JSON-LD guide](https://nextjs.org/docs/app/guides/json-ld)). The `Organization`, `Person`, and `Service` types are valid Schema.org vocabulary ([Organization](https://schema.org/Organization), [Person](https://schema.org/Person), [Service](https://schema.org/Service)).

Before release:

- Confirm the business name, practitioner name, email, credentials, “United States” service area, and canonical host (`https://www.empoweredwithinna.com`) with the client.
- Add only verified `sameAs` profile URLs and credential details.
- Do not add ratings, review counts, medical specialties, or local address data unless true and visible. Structured data must represent page content and does not guarantee a rich result ([Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)).
- Validate the deployed URLs with Schema.org Validator and Google Rich Results Test; a valid `Service` entity helps machine understanding but does not create a dedicated Google rich result by itself.

### P1 — Improve sitemap freshness and submission

`app/robots.ts` correctly permits public crawling, blocks `/api/`, and references the sitemap. `app/sitemap.ts` lists the homepage, blog index, and all six current article URLs.

- Add accurate `lastModified` values sourced from real content records; list only canonical, indexable, 200-status URLs. Next.js supports `lastModified` in generated sitemap entries ([Next.js sitemap convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)).
- Submit the deployed sitemap in Google Search Console and Bing Webmaster Tools. Bing recommends XML sitemaps with canonical URLs and accurate freshness signals and supports IndexNow for added, changed, or deleted URLs ([Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a), [Bing IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby)). IndexNow is useful when publishing activity justifies it; it is not a ranking shortcut.

### P1 — Protect page experience and Core Web Vitals

- `LeadMagnet autoOpen={true}` opens a full-screen promotional dialog three seconds after every page load. Replace this with an inline CTA, a small non-obscuring banner, or a user-triggered dialog. Google advises against promotional interstitials that obstruct the main content ([Google interstitial guidance](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials)).
- The static hero and fixed image geometry are good starts. Measure the deployed preview on mobile and desktop rather than assuming performance. Targets are LCP within 2.5 seconds, INP under 200 ms, and CLS under 0.1 at the 75th percentile ([Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)).
- Audit client JavaScript: many landing sections are Client Components. Keep interactivity client-side, but move static copy and noninteractive sections to Server Components where practical.

## What not to spend time on

- The `keywords` array in `app/layout.tsx` produces a meta-keywords tag, which Google explicitly ignores for indexing and ranking ([Google supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags)). The terms are better used naturally in accurate visible copy where relevant.
- Do not add an `llms.txt` solely for Google, invent “AI-only” markup, mass-produce question pages, or repeat keyword variants. Google explicitly says these are unnecessary or potentially spammy ([Google generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- Do not promise rankings, rich results, or AI citations. Eligibility and validation never guarantee appearance.

## Preview acceptance checklist

- [ ] Unique server-generated title, description, canonical, Open Graph, and Twitter data for homepage, blog index, and every article
- [ ] Article JSON-LD, linked expert byline, real dates, and source citations on all health articles
- [ ] Unsupported numerical/outcome/compliance claims verified or rewritten
- [ ] All sitemap URLs return 200 and all referenced images/icons return 200
- [ ] Header/footer in-page links resolve to existing IDs
- [ ] No automatic content-obscuring promotional modal on landing
- [ ] Rich Results Test and Schema.org Validator pass on representative deployed URLs
- [ ] Search Console and Bing Webmaster Tools verified; sitemap submitted
- [ ] Mobile and desktop Core Web Vitals measured against 2.5 s LCP / 200 ms INP / 0.1 CLS targets
