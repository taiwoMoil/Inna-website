# Local SEO & AEO audit and implementation plan

Audit date: 8 September 2026
Scope: `www.empoweredwithinna.com`, its current repository, public search results, and the requested Central Texas service area.

## Decision summary

The site now has several important technical basics in place: a preferred `www` origin, generated `robots.txt` and XML sitemap, unique blog metadata, and truthful high-level `Organization`/`WebSite` JSON-LD. Those are material improvements over the earlier audit.

It is **not yet locally discoverable for the requested market**. The first-party site gives search engines no clear reason to associate the practice with **Buda, Kyle, Austin, or San Marcos**. "Austin" appears only in a personal-story sentence and in one testimonial; Buda, Kyle, and San Marcos do not appear in the site source. The footer instead says only "Serving clients nationwide via telehealth." The result is a generic nationwide wellness site, not a clearly defined Central Texas practice.

External listings already associate the business with Buda/Austin, but they disagree with the website and with one another. That inconsistency is the highest-priority local SEO problem. Do not create a set of thin, copy-pasted city pages to compensate; that risks doorway-page/spam issues and will not create trustworthy local relevance.

This document is a plan only. No production SEO, content, listing, or tracking changes were made as part of this audit.

## Geographic target model

Use the following working market model, subject to business-owner confirmation:

| Tier | Places | Role in the plan |
|---|---|---|
| Primary home market | Buda, TX | Use as the primary local identity only if the confirmed business address and Google Business Profile eligibility support it. |
| Core service area | Buda, Kyle, Austin, San Marcos | Name all four as places served by the actual consultation model. Build them into the site's service-area page, service-page coverage statements, local citations, and tracking set. |
| Secondary area | Nearby Central Texas communities that Inna genuinely serves, for example Dripping Springs, Wimberley, South Austin, and the Hays County corridor | Add only after the owner confirms the places and there is a useful, truthful reason to name them. |
| Nationwide virtual care | United States | Keep this only if legally/operationally true. It should supplement—not replace—the Central Texas message. |

This targets every requested city without claiming an office, a local result, or in-person availability where none exists.

## Method and limits

The audit included a source review of all public routes, metadata, JSON-LD, sitemap/robots generators, content, assets, navigation, and public indexed-search checks on 8 September 2026. The homepage and article content are crawlable in public search.

The following were not available, so they must be baselined before work begins: Google Search Console, Google Business Profile, Bing Webmaster Tools, analytics, call/Calendly tracking, review access, server logs, rank tracking, backlink data, and field Core Web Vitals. The local shell could not resolve the production hostname and the repository currently has no installed `next` binary, so the local build-based SEO check could not run. These are verification limits, not evidence that the public site is offline.

The attached screenshot is treated as evidence of prior issues. In the current source, the footer telephone URI is correct and the Google/Yandex placeholder verification tags are absent. The identity conflict it highlights remains visible: image text calls the practitioner "Inna Topiler," while the visible bio, external profiles, and several author bios say "Inna Benyukhis."

## Findings

### P0 — local entity and market signals are missing

1. **No target-city service signal on the first-party site.** A source scan finds no Buda, Kyle, or San Marcos mention. Austin appears as the location of a past doctor's visit and as the location of one testimonial, not as a service location. There is no local title, heading, service-area section, address, map, local contact page, local business markup, or geographic landing page.

2. **The website conflicts with discoverable third-party identity data.** The footer says nationwide telehealth, while publicly indexed profiles place the business in Buda and Austin. The Nextdoor result lists `370 Elliott Ranch Road, Buda, TX 78610`; the BNI listing has an Austin map point and a different email address; the LinkedIn profile says Buda and serves people in and around Austin. The owner must verify the canonical business name, public address/status, phone, email, primary category, service model, and all official profiles before any listing sync or markup.

3. **Google Business Profile eligibility is unknown.** An online-only business is not eligible for a Google Business Profile. If Inna meets clients in person at a staffed Buda location during stated hours, a profile may be appropriate; if consultations are virtual only, do not create or keep a location profile merely to rank in Maps. This decision changes the local strategy and must be made first.

4. **The current structured-data graph cannot express local service truth.** It has an accurate generic `Organization` and `WebSite`, but no confirmed business location, telephone, `sameAs`, practitioner entity, or `areaServed`. Do not add those values until the fact sheet is approved. `areaServed` is descriptive entity data, not a map-ranking switch.

### P0 — trust, medical-content, and conversion risks

5. **Health and outcome claims are not supported on-page.** Claims include a 92% success rate, 500+ clients, 88% of clients seeing multiple providers, 24/7 support, a 100% satisfaction guarantee, exact outcomes/timelines in testimonials, and clinical assertions in articles. There are no visible citations, methods, evidence review, or legal/disclaimer pages. This is a health-adjacent YMYL context: retain a claim only when it can be documented, appropriately qualified, and consistent with the practitioner's scope.

6. **Identity and authorship are inconsistent.** Current UI/source contains Inna Topiler, Inna Benyukhis, and simply Inna. Blog JSON-LD calls the author `Inna`, without a canonical Person `@id` or author page. This weakens both local entity matching and answer-engine confidence.

7. **Trust pages are absent.** There are no standalone About/credentials, Contact, Privacy, Terms, medical disclaimer, or editorial/review-policy pages. The visible claims of HIPAA compliance, certifications, and evidence-based care need substantiation or removal/qualification.

8. **The main hero's "Start Free Consultation" control is not linked or wired to an action.** It is a plain button. This directly wastes organic and local traffic that reaches the page.

### P1 — information architecture and AEO gaps

9. **Services are homepage sections rather than indexable intent pages.** Functional nutrition, GI-MAP, DUTCH, perimenopause, and corporate wellness do not have dedicated canonical service pages. Search engines and answer systems cannot reliably match those distinct needs to a specific page.

10. **The site has only eight indexable URLs.** The sitemap contains the homepage, blog index, and six articles. None is a genuine local-service destination. Existing content is mostly national education; it is not connected internally to a Central Texas service topic.

11. **Articles have a good baseline but incomplete trust signals.** Individual titles, descriptions, canonical URLs, `BlogPosting`, and breadcrumbs are now present. However, articles have generic author identity, no visibly linked source lists, no honest review/update policy, generic social images, and several clinical/statistical claims that need validation. The content contains direct answers, but unverified assertions make poor answer-engine citation candidates.

12. **The homepage's most useful facts are buried in a long, highly client-rendered page.** Important service and FAQ material is present in public HTML, but it is surrounded by animated/duplicated promotional content and unsupported claims. The hero also uses `Math.random()` in a client component, which can cause hydration instability. Keep critical local/service content stable and close to the top of its canonical page.

13. **Internal-link architecture is weak.** Header/footer navigation largely goes to homepage fragments; service entries in the footer do not point to actual pages. Blog articles need clear links to the relevant service, practitioner, evidence, and Central Texas coverage pages.

### P1 — local visibility cannot be measured yet

14. **No evidence of local search or local-pack monitoring exists.** There is no rank baseline for Buda, Kyle, Austin, or San Marcos, no Search Console geography/query baseline, no Google Business Profile performance export, and no local citation/review inventory. We therefore cannot honestly claim the business is or is not ranking in a given map pack today—only that the website gives almost no target-city signal.

15. **Public results expose conflicting/stale messages.** A public result for the practice is discoverable for Buda through Nextdoor, while another Austin directory uses a different email and a broad map location. Search caches also show older website copy. After the identity decision, correct the facts at their source and allow recrawling; do not try to force a specific cached snippet.

## Implementation plan — do not execute until approved

### Phase 0 — approved business facts and local eligibility (owner + marketing, 1–2 days)

Create a signed-off one-page business fact sheet. It must answer:

1. Is **Inna Benyukhis** the exact public professional name? Is "Empowered Wellness with Inna" the exact business name?
2. Is `370 Elliott Ranch Road, Buda, TX 78610` a real, customer-facing location during staffed hours? If not, should the business be marketed as virtual-only and should any existing local listing be corrected/removed?
3. Are services virtual, in-person, or both? Which of Buda, Kyle, Austin, San Marcos, and nearby communities are genuinely served?
4. What exact phone, email, booking URL, hours, primary category, credentials, credential-verification links, legal entity, privacy contact, and official social profiles should be public?
5. Which outcome claims, testimonials, ratings, guarantees, HIPAA statements, and clinical assertions have written evidence and permission?

**Gate:** no local schema, address, Google Business Profile change, location page, or citation work begins before this fact sheet is approved.

### Phase 1 — establish one truthful Central Texas entity (engineering + owner, 2–4 days)

1. Create a durable `/contact` page and an `/about-inna-benyukhis` practitioner page. Publish the verified public name, service model, contact details, credentials, scope, and booking path.
2. Add `/privacy`, `/terms`, `/medical-disclaimer`, and `/editorial-policy`; make them globally discoverable.
3. Add a concise, prominent coverage statement to the homepage, Contact page, About page, and every new service page. Proposed wording, subject to approval: **"Virtual functional nutrition consultations for clients in Buda, Kyle, Austin, San Marcos, and throughout Central Texas; nationwide availability where appropriate."**
4. Extend the JSON-LD entity graph only with verified visible facts: organization/practitioner `@id`s, logo, URL, telephone, email, `sameAs`, and—where accurate—`areaServed` for Buda, Kyle, Austin, and San Marcos. Link article authors to the verified practitioner entity.
5. Standardize the exact name, phone, email, URL, and location/service model in the site, Calendar booking profile, BNI, Nextdoor, LinkedIn, and every profile the owner controls. Correct externally visible contradictions at their source.
6. Connect the hero's primary CTA to the approved booking/contact flow and track its click.

**Acceptance criteria:** a searcher and a crawler can see the same approved business identity and the same explicit four-city coverage statement; no unverified address, rating, review count, or credential is published.

### Phase 2 — build local relevance without doorway pages (content + engineering, 1–2 weeks)

1. Publish one substantial canonical **Central Texas service-area page** (for example, `/central-texas-functional-nutrition`). It should explain: consultation format; who is served; Buda, Kyle, Austin, and San Marcos coverage; how virtual/in-person appointments work; service scope/limitations; local booking logistics; relevant FAQs; practitioner identity; citations/claims policy; and links to every core service.
2. Publish genuine service pages first, beginning with the services Inna actually sells:
   - `/functional-nutrition-consultations`
   - `/gut-health-nutrition`
   - `/perimenopause-nutrition-support`
   - `/functional-lab-testing` (only with clear scope and limitations)
   - `/corporate-wellness` (only if an active offering)

   Each page should name the Central Texas coverage in natural language, answer the primary intent directly, identify who it is for/not for, explain the process, show practitioner credentials, link to evidence, and provide one honest CTA.

3. Do **not** launch separate Buda, Kyle, Austin, and San Marcos pages just by swapping city names. Create a city-specific page only after it has distinct, useful content: a confirmed in-person offering or event, city-specific booking logistics, a real local partnership/resource, a consented local case study, or genuinely different client need. Each must be reviewed independently for duplication and value.
4. If approved content supports all four later, build a small location hub that links to those pages and uses original on-page content. No city page should claim an office unless that office exists and is customer-facing.
5. Update the blog hub and each relevant article with contextual links to one service page, the practitioner page, the Central Texas coverage page, and cited primary research. Add compact, honest answer summaries where they help readers; do not add FAQ markup as a citation gimmick.

**Acceptance criteria:** all four requested cities are mentioned in useful first-party coverage content and in service-page coverage statements; every location mention agrees with the fact sheet; no near-duplicate pages are indexed.

### Phase 3 — local profiles, authority, and reviews (owner + marketing, 2–6 weeks)

1. If—and only if—the eligibility gate is passed, claim/verify the Google Business Profile with the approved name, category, address or hidden service area, hours, booking link, service list, description, photos, and four-core-city service area. If virtual-only, focus on the first-party site and legitimate third-party profiles instead of a Maps listing.
2. Audit owner-controlled citations first: Google, Bing Places where eligible, Apple Business Connect where eligible, BNI, Nextdoor, LinkedIn, Fullscript, professional association/credential profiles, and relevant local organizations. Use one approved NAP/service-model record everywhere.
3. Build genuine Central Texas authority through local partnerships, speaking/events, resource pages, professional associations, and earned mentions. Cite only facts that are true and provide useful local context.
4. Create a permission-based review request process. Never gate reviews, solicit only positive reviews, create reviews, or mark testimonials up as aggregate ratings without policy-compliant evidence.

**Acceptance criteria:** the controlled-profile inventory has no unresolved name/phone/email/address/service-model conflict, and every published review/testimonial has documented permission and appropriate claims review.

### Phase 4 — technical quality, trust cleanup, and AEO (engineering + content, 1–2 weeks)

1. Document, source, qualify, or remove every health, performance, testimonial, certification, HIPAA, guarantee, and statistic claim. Add visible references and a clearly scoped disclaimer where appropriate.
2. Make the author name uniform, link it to the practitioner page, display meaningful publication/review dates, and complete `BlogPosting` with only accurate fields. Use page-specific social images for key service/content pages.
3. Keep content and metadata server-rendered where possible; isolate only the interactive controls. Fix hydration instability and remove broken/nonfunctional navigation or CTAs.
4. Run production checks for every public route: HTTP status, redirect, robots directive, self-canonical, title, description, H1, schema parseability, links, assets, and city/service coverage. Restore dependencies and make `npm run check:seo` a CI gate.
5. Submit/monitor sitemap URLs in Google Search Console and Bing Webmaster Tools after the corrected pages are live. Do not use Google's Indexing API for ordinary service/location pages.
6. Permit desired search crawlers in CDN/WAF policy, including `OAI-SearchBot` if ChatGPT search visibility is wanted. Treat `GPTBot` training permission as a separate business decision.

### Phase 5 — baseline, local tracking, and iteration (start before launch; ongoing)

Record a baseline before changes, then measure monthly:

| Outcome | Measurement | Target geography |
|---|---|---|
| Organic visibility | Search Console impressions, clicks, CTR, indexed/canonical coverage, and landing pages for city/service queries | Buda, Kyle, Austin, San Marcos |
| Local visibility | Manual/incognito and location-simulated checks for the fixed query set; Google Business Profile performance when eligible | One representative ZIP/location per city |
| Conversions | Booking CTA clicks, contact submits, qualified consultation bookings, source/UTM | All four cities where voluntarily captured |
| Entity consistency | Monthly controlled-profile audit: name, phone, email, URL, address/service-area model | Website + all priority listings |
| AEO | Fixed prompt set: brand mention, citation URL, accuracy, and referred sessions/conversions | Central Texas and city-specific prompts |

Initial query set (not promised rankings):

- `functional nutritionist Buda TX`, `gut health nutritionist Buda TX`
- `functional nutritionist Kyle TX`, `gut health nutritionist Kyle TX`
- `functional nutritionist Austin TX`, `perimenopause nutritionist Austin TX`
- `functional nutritionist San Marcos TX`, `gut health nutritionist San Marcos TX`
- Brand-plus-city queries for each city and a Central Texas virtual-consultation query

Track the same queries and locations every time, save the date/device/location, and distinguish organic results from map results. The goal is demonstrated improvement in relevant impressions, qualified leads, and accurate local representation—not an unsupported promise of a particular rank or map-pack placement.

## Release order and approval gates

```text
Owner fact sheet + GBP eligibility decision
              ↓
Identity, contact/legal pages, one consistent local coverage statement
              ↓
Central Texas page + real service pages + internal links
              ↓
Listings/citations/reviews (only where policy and facts allow)
              ↓
Health-claim evidence + author/editorial improvements + production QA
              ↓
Search/Maps/AEO baseline and monthly iteration
```

## Sources consulted

- [Google Business Profile eligibility and guidelines](https://support.google.com/business/answer/3038177)
- [Google guidance on doorway abuse](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google AI features and website guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Schema.org `areaServed`](https://schema.org/areaServed)
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)

## Implementation dependencies supplied by the owner

Before implementation, provide the approved business fact sheet; access or exports for Search Console, Google Business Profile (if any), Bing Webmaster Tools, analytics, Calendly, and the controlled-listing inventory; and documentation/permission for health claims, testimonials, credentials, and reviews. Without these, implementation should stop at truthful site architecture and must not assert local facts that cannot be verified.
