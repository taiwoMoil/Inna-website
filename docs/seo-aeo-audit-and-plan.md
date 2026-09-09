# SEO and AEO audit and implementation plan

Audit date: 8 September 2026
Repository: `EmpoweredWithInna/website` at commit `e710d31`
Production host tested: `https://www.empoweredwithinna.com`

## Executive assessment

The site has a useful content foundation: the homepage and six blog articles are statically rendered, important content and crawlable links are present in HTML, pages have clear H1s, and the homepage contains genuine question-and-answer content. However, the implementation is **not ready for reliable search or answer-engine discovery** because several foundational signals are incorrect or missing.

The most serious problem is signal integrity. The live site is `www.empoweredwithinna.com`, but every page declares `https://empowerednutritionwithinna.com` as its canonical URL. That configured host did not resolve during this audit. All blog pages also inherit the homepage title, description, canonical, and social metadata. In addition, every page publishes JSON-LD for an unrelated Austin lawn-care company, including an unsupported 5.0 rating and 500 reviews. Search engines are therefore being told that the nutrition site belongs at another host and represents another business.

Fix those blockers before investing in content tooling, prompt tracking, `llms.txt`, or large-scale publishing. AEO rests on the same base as SEO: crawlable pages, stable canonical identity, accurate entities, original answers, trustworthy evidence, and measurement.

## Scope and method

This audit combined:

- source review of the three supplied guides, checked against Google Search Central, Bing/IndexNow, Schema.org, and OpenAI publisher documentation;
- repository inspection of routing, metadata, JSON-LD, content, assets, navigation, and rendering strategy;
- a successful local `next build` on 8 September 2026;
- production HTTP and rendered-HTML checks for the homepage, blog index, one article, discovery files, and referenced assets.

The verified research rubric and corrections to unsupported recommendations are in [`docs/research/seo-aeo-guidance.md`](./research/seo-aeo-guidance.md).

This was not a Search Console, analytics, backlink, log-file, or field Core Web Vitals audit because those systems were not provided. Scores from third-party “AI visibility” tools were also deliberately excluded: they are not search-engine metrics and would not repair the current technical blockers.

## Current scorecard

| Area | Status | Assessment |
|---|---|---|
| Crawlable HTML and routing | Amber | Main routes return 200 and are statically rendered, but discovery files and several referenced assets return 404. |
| Canonicals and page identity | Red | All pages canonicalize to a non-resolving, different domain and inherit homepage metadata. |
| Structured data and entity graph | Red | Global JSON-LD describes an unrelated lawn-care company and contains unsupported rating data. |
| On-page SEO | Amber/Red | Clear H1s and substantial copy exist, but article metadata is ineffective, service intent is trapped on one long page, and important media is broken. |
| Content trust / YMYL readiness | Red | Health and outcome claims lack visible citations and editorial controls; author and brand identity are inconsistent. |
| Answer readiness | Amber | FAQ and article sections contain direct answers, but summaries, citations, entity clarity, and page-specific machine-readable context are weak. |
| Internal architecture | Amber/Red | Blog posts are linked, but services lack durable landing pages and several navigation/contact links are placeholders or incorrect. |
| Performance and UX | Amber | Static generation is positive; duplicated page chrome, broad client-side rendering, an intrusive auto-open lead magnet, missing images, and raw LCP images need attention. |
| Measurement | Unknown/Red | No repository evidence of Search Console, Bing Webmaster Tools, analytics events, AI-referral reporting, or a repeatable AI citation benchmark. |

## Findings

### Critical — repair before the next production release

#### 1. Canonical host is wrong and does not resolve

`app/layout.tsx:32-64` hard-codes `https://empowerednutritionwithinna.com` for the author URL, `metadataBase`, canonical, Open Graph URL, and social images. Production actually redirects `https://empoweredwithinna.com` to `https://www.empoweredwithinna.com/` and serves the site there. During this audit the configured `empowerednutritionwithinna.com` host did not resolve.

Impact:

- every indexable page declares an unreachable canonical destination;
- canonical signals conflict with redirects, internal URLs, and the served host;
- social previews request assets from the wrong host;
- search engines may exclude or consolidate the live URLs unpredictably.

#### 2. Every route inherits homepage metadata and homepage canonical

The blog index and all six articles render the homepage title, homepage description, and homepage canonical in production. The blog index is a client component using `next/head` (`app/blogs/page.tsx:1-5,126-129`), and each article component follows the same client-side pattern. The App Router route (`app/blogs/[slug]/page.tsx`) has neither `metadata` nor `generateMetadata`.

Impact:

- seven distinct content URLs present the same identity to crawlers;
- articles cannot earn clear query relevance or accurate search/social previews;
- all articles point canonical authority away from themselves.

#### 3. Global structured data describes the wrong company

`components/structuredData.tsx:3-95` identifies the site as “Rosales Yard Maintenance,” links to `rosalesyard.com`, names John Rosales, supplies an Austin address and coordinates, lists lawn-care services, and claims a 5.0 aggregate rating from 500 reviews. `app/layout.tsx:111` publishes this object on every route.

Impact:

- the entity is factually false and disconnected from visible content;
- it violates Google's requirement that structured data truthfully represent the page;
- it can destroy eligibility for rich results and creates a manual-action/spam risk;
- it gives answer engines a confidently wrong machine-readable identity.

Remove it immediately. Do not replace it with guessed address, credentials, ratings, or review counts.

#### 4. Discovery endpoints are absent

Production returned 404 for `/robots.txt` and `/sitemap.xml`. The repository contains an empty, incorrectly named `app/robot.ts`; Next.js expects `app/robots.ts` for generated robots metadata. No sitemap implementation exists.

Absence of `robots.txt` does not itself block crawling, but it prevents a clear crawler policy and sitemap declaration. The missing sitemap slows discovery and makes index monitoring harder.

#### 5. Critical social/editorial assets return 404

Production results:

| URL | Result |
|---|---:|
| `/manifest.json` | 404 |
| `/apple-touch-icon.png` | 404 |
| `/inna.jpg` (declared OG/Twitter image) | 404 |
| `/Inna.jpg` | 200 |
| `/blog-images/gut-brain-connection.jpg` | 404 |

All six blog cards declare files under `/blog-images/` (`app/blogs/page.tsx:21-106`), but that directory is absent. Two articles render missing featured images. The OG failure is a case-sensitive filename mismatch.

### High priority — trust, relevance, and extractability

#### 6. Health and performance claims are not visibly sourced

The site makes precise claims such as a 92% success rate and 500+ clients (`components/hero.tsx:153-162`), “88% of our clients” (`components/FAQ.tsx:42-44`), changes in intestinal permeability and blood flow, misdiagnosis rates, corporate ROI, and case-study outcomes. The articles contain no external source links or reference sections, even when they say “studies show,” “systematic review,” or “meta-analysis.”

This is a health-related YMYL site. Unsupported clinical, outcome, and commercial claims weaken user trust and the evidence an answer engine can cite. Each claim needs one of three outcomes: a primary source, documented first-party methodology/sample/date, or removal/qualification.

#### 7. Person and brand identity are inconsistent

The site alternates among “Inna Topiler,” “Inna Benyukhis,” and “Inna”; the business alternates between “Empowered Wellness with Inna” and “Empowered Nutrition with Inna”; the code uses two different domains. The Twitter creator also assumes `@InnaTopiler` without an authoritative profile link.

Answer engines need a connected, consistent entity. Confirm the public professional name, legal/business name, canonical domain, credentials, geographic/service facts, phone, and official profiles before writing `Person` or `Organization` markup.

#### 8. Trust and editorial pages are missing

There are no dedicated About/author, Contact, Privacy, Terms, medical disclaimer, editorial policy, or content-review pages. The footer's visible phone number is `(312) 404-4675`, but its link dials `555-123-4567` (`components/footer.tsx:231-234`). Social links are placeholders. Credential badges have no links to issuers or verification.

These gaps matter independently of rankings: they prevent visitors and retrieval systems from verifying who created the content, the scope of service, how health content is reviewed, and how personal data is handled.

#### 9. Articles lack editorial metadata and article schema

Dates and “By Inna” are plain text rather than semantic `<time>` elements and links to a stable author page. There is no `BlogPosting`/`Article` schema, `BreadcrumbList`, `dateModified`, reviewer, citation list, or page-specific OG image. Visible breadcrumbs are a good start, but they are not connected to structured data.

Use article markup only after the displayed author and dates are accurate. Never update `dateModified` simply to look fresh.

#### 10. Services have no search landing pages

The site exposes offerings as sections on the homepage, while most navigation links point to fragments. There are no focused, self-canonical pages for functional nutrition, GI-MAP support, DUTCH hormone testing, perimenopause nutrition, gut health, or corporate wellness services.

Create only pages that correspond to real, distinct services and user intents. Each should explain who it is for, what is and is not provided, process, evidence/limitations, pricing or consultation path where appropriate, FAQs, and related resources. Avoid near-duplicate location or symptom pages.

### Medium priority — quality and operational improvements

#### 11. Homepage duplicates document landmarks

The root layout already renders `Header` and `<main>` (`app/layout.tsx:115-118`), while `app/page.tsx:21-34` renders another `Header` and nested `<main>`. Production contains two headers and two main landmarks. Remove the page-level header and use a non-`main` wrapper or let the layout own the single main landmark.

#### 12. Client JavaScript is broader than needed

The blog index and all six article components are client components mainly to support filters/sharing interactions. This prevents simple server-route metadata patterns and increases hydration. The production build reports 143 kB first-load JS on the homepage, 110 kB on the blog index, and 130 kB on article routes; homepage HTML transferred about 163 kB in the audit request.

Keep core article/page content as server components and isolate only interactive filters, accordions, share controls, chat, and forms into small client islands.

#### 13. Image and page-experience work is needed

The homepage hero and story use raw `<img>` despite importing or being able to use `next/image`; the build warns about both. The global CSS also imports Font Awesome from a third-party CDN. The lead magnet auto-opens from the root layout, which should be tested against Google's intrusive-interstitial guidance and real conversion/engagement data.

No field Core Web Vitals conclusion can be made without Search Console or CrUX data. Measure representative templates before and after changes rather than treating a lab score as a ranking guarantee.

#### 14. FAQ is useful but schema is not the priority

The homepage has eight direct questions and answers rendered in HTML, which is positive for users and answer extraction. First fix their unsupported claims and make the accordion accessible (`aria-expanded` and relationships). `FAQPage` JSON-LD is optional and low priority: Google generally limits FAQ rich results to well-known authoritative government and health sites, and no primary source guarantees an AI-citation benefit.

#### 15. Verification values and miscellaneous metadata are placeholders

`app/layout.tsx:80-83` publishes literal Google and Yandex placeholder verification tokens. Remove them until real values are configured. The `keywords`, `classification`, and custom `other` metadata do not compensate for weak canonical, content, or entity signals.

## Implementation plan

### Phase 0 — restore truthful, indexable identity (P0, 1–2 engineering days)

| Work item | Owner | Acceptance criteria |
|---|---|---|
| Choose and centralize the canonical origin, expected to be `https://www.empoweredwithinna.com` unless the owner chooses otherwise. Redirect every HTTP/HTTPS and apex/www variant to it. | Owner + Engineering | One hop to the preferred host; a shared `SITE_URL` drives metadata, sitemap, robots, JSON-LD, emails, and sharing. |
| Remove the Rosales JSON-LD. Add only verified `Organization`/`WebSite` data with stable `@id` values; add `Person` only after identity/credentials are confirmed. | Engineering + Owner | No unrelated or unsupported facts; Schema.org validation passes; visible content agrees with markup. |
| Implement `app/robots.ts` and `app/sitemap.ts`; delete the empty `app/robot.ts`. | Engineering | Both endpoints return 200; sitemap contains only canonical 200/indexable URLs and is declared in robots. |
| Move blog metadata to the App Router Metadata API. Create one typed post registry used by routes, index cards, sitemap, and schema. | Engineering | Every route has a unique title, description, self-canonical, OG URL/image, and accurate robots directive in rendered HTML. |
| Fix or remove every referenced asset; create purpose-built 1200×630 social images. | Design + Engineering | No 404s from page, metadata, manifest, favicon, or sitemap references; images have accurate dimensions and alt text. |
| Remove duplicated homepage header/main and placeholder verification tokens. | Engineering | Exactly one header and one main landmark; no fake verification metadata. |
| Add an automated production smoke test. | Engineering | CI checks status, canonical, title, description, H1, JSON-LD parseability, and critical assets for every public route. |

Do not submit the current URLs for indexing before this phase is deployed; the present canonical and entity signals are actively wrong.

### Phase 1 — establish trust and editorial structure (P1, 3–7 days)

1. Hold a 60-minute fact-verification session with the business owner. Confirm professional name, business name, credentials and issuers, years of experience, service area, contact details, official profiles, service scope, testimonial permissions, and whether every outcome statistic can be documented.
2. Create About/author, Contact, Privacy, Terms, medical disclaimer, and editorial/review-policy pages. Link them globally.
3. Fix the telephone URI and replace/remove placeholder social profiles. Link credentials to authoritative verification where available.
4. Review every health, outcome, testimonial, and corporate statistic. Add primary references close to claims and a references section; document first-party claim methodology or remove the number. Clearly label illustrative/composite case studies.
5. Convert author names into a consistent author entity and page. Display `datePublished`, honest `dateModified`, reviewer where applicable, and semantic `<time>` elements.
6. Add truthful `BlogPosting` and visible-breadcrumb-aligned `BreadcrumbList` JSON-LD with reusable organization/person `@id` references. Validate a representative article and then all articles.
7. Add concise “In brief” or “Key takeaways” sections to articles where they genuinely help, followed by the nuance, evidence, limitations, and action steps. Do not force a fixed word count or numeric density.

### Phase 2 — build an intent-led information architecture (P1/P2, 2–4 weeks)

1. Use Search Console data, real prospect questions, and service priorities to map audience → intent → canonical page. Begin with a small set of distinct service pages, not programmatic keyword variants.
2. Recommended initial page candidates, subject to service verification:
   - functional nutrition consultation;
   - gut health / digestive support;
   - perimenopause nutrition support;
   - functional lab testing, with separate GI-MAP or DUTCH pages only if each has a genuinely distinct service and sufficient substance;
   - corporate wellness programs.
3. Give each service page a direct opening answer, audience/eligibility, process, scope and limitations, evidence, expected costs/timelines where accurate, FAQs, practitioner identity, related articles, and one clear next action.
4. Build hub-and-spoke internal linking: service → supporting articles, article → relevant service, article → related evidence, and blog hub → all current posts. Use descriptive anchors and ensure every important page has internal inlinks.
5. Rework the six existing articles against query intent and evidence quality. Consolidate only true overlap; do not create one page for every AI-generated question variation.
6. Add original assets that demonstrate experience: practitioner-authored frameworks, anonymized and consented case methodology, checklists, decision aids, webinar transcripts, or calculators with clear assumptions.

### Phase 3 — performance, crawler access, and distribution (P2, 1–2 weeks, can overlap Phase 2)

1. Convert core pages/articles to server components and keep small interactive client islands.
2. Optimize the hero/LCP media with `next/image`, explicit sizes, responsive sources, compression, and correct priority. Remove unused third-party CSS/icons and measure layout shift from dialogs/widgets.
3. Test mobile templates with Search Console field Core Web Vitals plus lab diagnostics. Prioritize field failures affecting the largest route template.
4. Define crawler policy deliberately. If ChatGPT search visibility is desired, allow `OAI-SearchBot`; decide separately whether to allow `GPTBot` for potential training use. Check CDN/WAF logs for 403/429 responses to wanted crawlers.
5. Submit the corrected sitemap to Google Search Console and Bing Webmaster Tools. Use URL Inspection on representative templates after deployment.
6. Optionally add IndexNow for Bing/Copilot freshness after sitemap/canonical correctness. Do not use Google's Indexing API for these ordinary pages; Google restricts it to job posting and livestream pages.
7. Treat `llms.txt` as an experiment only after the fundamentals are complete. There is no primary evidence that it improves Google, Bing, or ChatGPT inclusion/citations.

### Phase 4 — measurement and iteration (ongoing, begin at launch)

Establish a baseline before content expansion:

| Metric group | Weekly/monthly measures |
|---|---|
| Technical | Valid indexed URLs, excluded/canonicalized URLs, sitemap errors, 4xx/5xx rate, structured-data errors, field CWV by template. |
| Search | Non-branded impressions/clicks/CTR/position by landing page and intent cluster; branded demand tracked separately. |
| Business | Organic consultation starts/completions, lead-magnet conversion, qualified lead rate, and assisted conversion. |
| AI referrals | Sessions and conversions from documented AI referrers, including ChatGPT's `utm_source=chatgpt.com`. |
| AI representation | For a fixed prompt set: engine/interface, date, locale, brand mentioned, clickable citation, exact cited URL/domain, accuracy, and sentiment. Use repeated samples and trends. |
| Authority | Accurate third-party profiles, earned citations/mentions, quality referring domains, and corrections to misinformation. |

Run a monthly review that connects releases to outcomes but does not attribute every ranking change to the latest edit. Refresh content when facts or user needs change, not by changing dates cosmetically.

## Recommended delivery sequence

```text
Fact and domain decision
        ↓
Canonical + wrong schema + robots/sitemap + metadata/assets
        ↓
Production crawl and validator gate
        ↓
Search Console/Bing submission and baseline
        ↓
Identity, trust pages, claim sourcing, article schema
        ↓
Service architecture and content improvement
        ↓
Performance work, AI crawler policy, IndexNow (optional)
        ↓
Monthly SEO/AEO measurement and iteration
```

## Definition of done for the foundational release

- All preferred public URLs return 200 and all non-preferred host variants redirect once to them.
- Every indexable route has one correct self-canonical, unique metadata, one clear H1, and no conflicting robots directives.
- `/robots.txt` and `/sitemap.xml` return 200; sitemap URLs are canonical and indexable.
- No page or structured-data object mentions Rosales Yard Maintenance, lawn care, unsupported ratings, or unverified entity facts.
- All metadata/page images return 200 with correct content types.
- Structured data parses and passes applicable policy/validator checks; visible and machine-readable facts agree.
- Public navigation contains no placeholder social links, wrong telephone URIs, or broken internal links.
- Health and outcome claims have reviewed sources/methodology or have been removed/qualified.
- Representative URLs are inspected in Search Console and Bing Webmaster Tools after deployment.
- A search/AI/business baseline and release annotation exist before Phase 2 publishing begins.

## What not to implement from the supplied guides

Do not adopt fixed 60-character titles, 150–155-character descriptions, minimum word counts, a number in every paragraph, universal FAQ schema, generic Google Indexing API submission, a claimed fixed redirect “link equity” loss, or `llms.txt` as a P0 visibility tactic. These are heuristics, unsupported formulas, or incorrect generalizations. The source-verified rationale is documented in the companion research note.
