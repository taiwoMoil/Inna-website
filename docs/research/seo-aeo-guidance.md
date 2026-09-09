# SEO and AEO guidance for the Inna website audit

Research date: 8 September 2026

## Executive synthesis

The three supplied guides point toward the same practical operating model: make valuable pages crawlable, describe each page and entity unambiguously, publish original answerable content, connect related pages, and measure both conventional search performance and AI mentions/citations. The Cresto guide frames this particularly well as **access → representation → selection → outcome**. Value Add VC adds useful operational ideas—Search Console feedback loops, cannibalization checks, internal-link/orphan detection, content refreshes, and deterministic publishing checks. Vydera adds a workable page-review checklist covering metadata, headings, structured data, internal links, content gaps, and extractable answers.

Those guides are secondary sources and mix sound practice with unverified formulas. The defensible foundation is simpler: Google says the same people-first, technically accessible SEO fundamentals apply to its generative AI features; Bing explicitly connects discoverability, structured content, sitemaps, and IndexNow freshness with Bing/Copilot grounding; OpenAI documents crawler access rather than any special content or schema ranking formula. There is no official evidence that number-first titles, a required number in every paragraph, fixed word counts, a universal `FAQPage` rollout, or `llms.txt` will improve AI citations.

## Audit criteria, in priority order

### 1. Crawl, render, and index control

- Important public routes return successful responses, require no login/CAPTCHA, and expose meaningful primary content and links in rendered HTML. For JavaScript sites, compare source/rendered output and test representative URLs in Search Console; Google processes JavaScript through crawling, rendering, and indexing, but blocked resources or conflicting JS-injected directives can prevent correct understanding ([Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)).
- `robots.txt`, page-level robots meta tags, and `X-Robots-Tag` express the intended policy without contradictions. Do not use `robots.txt` as a substitute for `noindex`; a crawler must be allowed to fetch a page to see its meta directives ([Google robots guidance](https://developers.google.com/search/docs/fundamentals/get-started), [robots meta specification](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)).
- If ChatGPT search visibility is wanted, do not block `OAI-SearchBot`. Treat `GPTBot` separately because it controls potential training use, not ChatGPT search inclusion. OpenAI says ChatGPT referral URLs include `utm_source=chatgpt.com`, which can be measured in analytics ([OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)). Also check CDN/WAF logs and bot rules for accidental 403/429 responses.
- XML sitemaps contain only absolute, preferred canonical, indexable URLs; `lastmod` is accurate when present; sitemaps are declared in `robots.txt` and submitted/monitored in Google Search Console and Bing Webmaster Tools. Google recommends a root-level sitemap and caps one sitemap at 50 MB or 50,000 URLs ([Google sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)); Bing likewise recommends canonical, current URLs and accurate freshness signals ([Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).
- Canonical signals agree across redirects, self-referencing `rel="canonical"`, internal links, and sitemaps. Google treats redirects and canonical annotations as strong signals and sitemap inclusion as weaker; contradictory signals should be fixed ([Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)).
- Internal navigation uses crawlable `<a href>` links, important pages are not orphaned, broken links and redirect chains are absent, URLs are descriptive and stable, and localized alternatives use valid reciprocal `hreflang` where applicable ([Google URL guidance](https://developers.google.com/search/docs/crawling-indexing/url-structure)).
- Optional for Bing/Copilot freshness: implement IndexNow for genuinely added, updated, or deleted URLs, with a valid host key and response/error monitoring ([IndexNow protocol](https://www.indexnow.org/documentation)).

### 2. Page identity and search presentation

- Every indexable page has a unique, accurate, concise `<title>`, a clear primary visual heading, and a useful page-specific meta description. Titles, headings, on-page text, link text, `og:title`, and site-name signals should not conflict. Google may rewrite title links and snippets based on the query and page content ([Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link), [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet)).
- Canonical URL, language, viewport, favicon, Open Graph, and social-card metadata are present and use crawlable absolute assets. Social metadata is primarily a sharing/brand-consistency concern, not a documented Google or answer-engine ranking factor.
- The page has a logical, accessible heading structure and descriptive link text. A single obvious main heading is useful for people and title interpretation, but “exactly one H1” and “never skip a heading level” should be treated as accessibility/editorial conventions, not hard Google indexing requirements.
- Mobile content is equivalent to desktop content, since Google uses the mobile version for indexing and ranking ([Google mobile-first guidance](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)).

### 3. Structured data and entity clarity

- JSON-LD is valid, represents visible page content, uses the most specific appropriate type, and includes all applicable required and recommended properties. Validate with Schema.org tooling and Google's Rich Results Test, then verify rendered markup with URL Inspection. Valid markup makes a page eligible for supported features; it does not guarantee display or higher ranking ([Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)).
- Establish one stable entity graph: a homepage `Organization` (or the more specific subtype) with canonical URL, name, logo, contact details and authoritative `sameAs` references; a homepage `WebSite` with consistent site name; and stable `@id` references reused by page-level markup. Google says homepage Organization markup can help disambiguate an organization and its administrative details ([Google Organization markup](https://developers.google.com/search/docs/appearance/structured-data/organization)); `WebSite` markup is the main structured signal for a preferred site name ([Google site-name documentation](https://developers.google.com/search/docs/appearance/site-names)).
- Add page-type markup only where it truthfully applies: for example `Article`/`BlogPosting` with author and dates for editorial content, `BreadcrumbList` for visible breadcrumbs, and relevant business/service types. Do not manufacture Q&A, ratings, dates, or other facts solely for markup.
- Treat `FAQPage` as low priority for this commercial site. Google now regularly shows FAQ rich results only for well-known authoritative government and health sites; unused FAQ markup is harmless but usually has no visible Google Search effect ([Google FAQ change](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). No supplied primary source proves that AI answer engines reward FAQ JSON-LD specifically.

### 4. Content quality and answer readiness

- Each important page serves a clear audience and intent, provides original/first-hand value, answers the user's core question, and substantiates material claims with named, preferably primary, sources. Show who created or reviewed editorial content, their relevant credentials, when substantive updates occurred, and how claims or comparisons were produced. Google's people-first guidance emphasizes originality, completeness, trust, clear authorship, and first-hand expertise ([Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- Make important answers easy to locate: concise summaries where they help the reader, descriptive question-led sections where natural, self-contained explanations, clear definitions, tables/lists for genuine comparisons, and explicit entity names instead of ambiguous pronouns. These are usability and extractability practices—not guaranteed citation triggers.
- Avoid unsupported statistics, artificial “factual density,” filler, forced exact-match repetition, boilerplate AI phrasing, and mass-produced near-duplicate query pages. Google warns that scaled unoriginal pages created to manipulate search or generative responses violate spam policy ([Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)). Its official AI-search advice favors unique, non-commodity, people-first material and says not to create pages for every fan-out query variation ([Google generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- Audit topic overlap using Search Console query/page data and editorial judgment. Merge only pages that truly duplicate intent; preserve distinct useful intents. Retire obsolete pages with 404/410 when no close replacement exists, and use a 301 only to a genuinely equivalent or consolidated destination.
- Freshness must be factual, not cosmetic: update content when the underlying information changes and keep visible and structured dates honest. Google explicitly warns against changing dates merely to appear fresh ([Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

### 5. Page experience, accessibility, and agent usability

- Test representative mobile templates against field Core Web Vitals, HTTPS, intrusive-interstitial, and visual-stability issues. Google recommends a good overall page experience and confirms Core Web Vitals are used by ranking systems, while warning that perfect tool scores do not guarantee rankings ([Google page-experience guidance](https://developers.google.com/search/docs/appearance/page-experience)).
- Use semantic HTML, alt text, labels, keyboard support, and accurate ARIA names/states. Besides benefiting users, OpenAI says ChatGPT Agent uses ARIA to interpret interactive controls ([OpenAI publisher/developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)).

### 6. Measurement and iteration

- Establish baselines in Google Search Console: indexed/canonical coverage, sitemap status, rich-result errors, queries, pages, impressions, clicks, CTR, and average position. Segment branded/non-branded and page type; compare like-for-like periods; annotate releases.
- In analytics, report organic landing-page outcomes and isolate AI referrals (including ChatGPT's documented UTM). Referral traffic does not capture unclicked mentions, so it is only one outcome measure.
- Build a stable, business-relevant prompt set by audience, journey stage, market, and branded/non-branded intent. On a fixed cadence record engine/model/interface, locale, date, exact answer, whether the brand is mentioned, whether a clickable citation exists, cited URL/domain, factual accuracy, and sentiment. AI responses are probabilistic; use repeated samples and trends rather than one-off screenshots or an unexplained visibility score.
- Review external sources that answer engines cite for target prompts. Representation may depend on reputable third-party profiles, directories, publications, and reviews as well as first-party pages. Correct inaccurate first-party facts first; pursue legitimate PR/partnership/profile hygiene rather than manufactured mentions.
- Prioritize changes by business value and evidence. Use controlled title/content tests where feasible, record pre/post query and position bands, and avoid attributing movement to one edit without accounting for seasonality, SERP changes, and ranking position.

## Claims from the supplied guides to downgrade or reject

| Claim | Assessment for this audit |
|---|---|
| Start every title/description/answer with a number | A site-specific copywriting hypothesis, not an official requirement. Test selectively; accuracy and descriptive relevance come first. |
| Titles must be under 60 characters; descriptions 150–155 | Useful display heuristics only. Google documents no fixed length limit and truncates to fit devices. |
| Google favors a required minimum word count (for example 800 words, or 120/150 words around a tool) | Reject. Google explicitly says it has no preferred word count. Match depth to user intent. |
| Put a verifiable number in every paragraph / achieve a fixed “factual density” | Unsupported and likely to harm readability or invite weak claims. Use concrete evidence where it genuinely informs the answer. |
| FAQ schema is a P0 “citation magnet” or universal rich-result tactic | Reject as a general Google tactic for this commercial site; current FAQ rich-result eligibility is narrowly limited. No primary evidence establishes an AI-citation boost. |
| Duplicate FAQ objects trigger a Google penalty suppressing all rich results | Unsupported as stated. Duplicate or misleading markup can be invalid/confusing, but the claimed blanket penalty is not in Google's published guidance. |
| AI engines directly parse JSON-LD and reward it for citations | Not established by the cited primary documentation. Use structured data for unambiguous, truthful machine-readable identity and supported search features—not as a guaranteed AEO lever. |
| Submit every new/updated normal page through Google's Indexing API | Reject. Google limits that API to pages with `JobPosting` or `BroadcastEvent` in a `VideoObject` ([official API scope](https://developers.google.com/search/apis/indexing-api/v3/using-api)). Use sitemaps, internal links, Search Console inspection where appropriate, and IndexNow for participating engines. |
| Never allow a removed URL to return 404; always redirect it | Reject. Redirect only where a relevant replacement exists; otherwise a truthful 404/410 is appropriate. |
| Each redirect hop loses about 10% link equity | Unsupported/obsolete formula. Avoid chains for speed, clarity, and signal consistency, not because of a fixed published loss percentage. |
| JavaScript pages require an iframe wrapper because Google has limited JS execution | Overstated. Google renders JavaScript, though server-rendered/static meaningful content is more robust and easier for crawlers. Audit actual rendered output rather than applying an iframe pattern by default. |
| `llms.txt` materially improves AI visibility | Experimental and not documented as an OpenAI, Google, or Bing ranking/inclusion requirement. Do not prioritize it ahead of normal crawlability, sitemaps, entity clarity, and useful HTML content. |

## How the three supplied guides informed this rubric

- [Value Add VC — AI SEO & AEO Guide](https://valueaddvc.com/seo-playbook/guide): useful leads for Search Console-driven iteration, title testing, content consolidation, internal-link graphs, schema validation, and publishing quality gates. Its fixed numeric formulas, FAQ emphasis, generic Google Indexing API use, and redirect claims should not be adopted as requirements.
- [Cresto Digital — AI SEO/AEO/GEO audit tools](https://crestodigital.github.io/insights/best-ai-seo-aeo-geo-audit-tools-2026/): strongest contribution is the four-layer audit and the recommendation to pair a technical crawler with repeatable mention/citation monitoring, including exact source URLs, market/model context, and business outcomes.
- [Vydera — prompts to audit SEO and AI visibility](https://vydera.com/en/lab/prompts-claude-seo-ai-visibility): its prompts are helpful checklists for HTML, internal links, schema, content gaps, and answer extractability. AI output must be checked against rendered pages, Search Console, validators, and primary documentation; prompt-generated “scores” are not search-engine metrics.

## Recommended evidence bundle for the implementation plan

1. Route/template inventory with intended indexability and canonical URL.
2. Rendered crawl export: status, robots, canonical, title, description, H1, word/content fingerprint, internal inlinks/outlinks, structured-data types, image/asset failures.
3. `robots.txt`, sitemap, Search Console coverage/performance, and Bing Webmaster Tools evidence.
4. Structured-data validation by representative template plus a documented entity/`@id` map.
5. Core Web Vitals field data and mobile template checks.
6. Content matrix: audience, intent, owner/author, evidence quality, last substantive review, overlap, and target action.
7. Baseline AI prompt/citation sample with engine, date, locale, exact cited sources, factual accuracy, and analytics referral baseline.
