// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import GutBrainConnection from "../../../components/blogs/gut-brain-connection";
import PerimenopauseGutHealth from "../../../components/blogs/perimenopause-gut-health";
import RootCauseNutritionPage from "../../../components/blogs/root-cause-nutrition";
import StressGutPolyvagalPage from "../../../components/blogs/stress-gut-polyvagal";
import HealthcareFailsWomen from "../../../components/blogs/healthcare-fails-women";
import CorporateWellness from "../../../components/blogs/corporate-wellness";
import type { Metadata } from "next";
import { getBlogPost } from "../../../lib/blogPosts";
import { SITE } from "../../../lib/site";

// Map slugs to their corresponding components
const blogComponents = {
  "gut-brain-connection": GutBrainConnection,
  "perimenopause-gut-health": PerimenopauseGutHealth,
  "root-cause-nutrition": RootCauseNutritionPage,
  "stress-gut-polyvagal": StressGutPolyvagalPage,
  "healthcare-fails-women": HealthcareFailsWomen,
  "corporate-wellness": CorporateWellness,
};

const blogMetadata: Record<string, { title: string; description: string }> = {
  "gut-brain-connection": {
    title: "The Gut-Brain Connection",
    description:
      "Explore the gut-brain axis and practical ways to support digestive and emotional wellness.",
  },
  "perimenopause-gut-health": {
    title: "Perimenopause and Gut Health",
    description:
      "Explore the relationship between perimenopause, estrogen, and the gut microbiome.",
  },
  "root-cause-nutrition": {
    title: "Root-Cause Nutrition vs. Quick Fixes",
    description:
      "Learn why personalized nutrition can support more sustainable change than generic advice.",
  },
  "stress-gut-polyvagal": {
    title: "The Hidden Link Between Stress and Gut Issues",
    description:
      "Explore stress and gut health through Polyvagal Theory and practical support strategies.",
  },
  "healthcare-fails-women": {
    title: "When Standard Healthcare Fails Women",
    description:
      "Understand gender bias, delayed diagnoses, and ways women can advocate for attentive care.",
  },
  "corporate-wellness": {
    title: "Corporate Wellness and Gut Health",
    description:
      "Explore how digestive health affects workplace wellbeing, productivity, and support programs.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = blogMetadata[slug];
  const post = getBlogPost(slug);
  if (!entry || !post) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blogs/${slug}` },
    authors: [{ name: SITE.practitioner.name, url: `${SITE.origin}${SITE.practitioner.path}` }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blogs/${slug}`,
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: ["/opengraph-image"] },
  };
}

// This component dynamically renders a blog post based on the slug
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const BlogComponent = blogComponents[slug as keyof typeof blogComponents];
  const post = getBlogPost(slug);

  // If the slug doesn't match any component, show a 404 page
  if (!BlogComponent || !post) {
    notFound();
  }

  const url = `${SITE.origin}/blogs/${post.slug}`;
  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    mainEntityOfPage: url,
    image: `${SITE.origin}/opengraph-image`,
    author: { "@id": `${SITE.origin}/#inna-benyukhis`, name: SITE.practitioner.name },
    publisher: { "@id": `${SITE.origin}/#organization` },
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.origin}/blogs` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />
      <div className="blog-article-redesign">
        <BlogComponent />
      </div>
    </>
  );
}

// This function tells Next.js which blog slugs to pre-render at build time
export async function generateStaticParams() {
  const slugs = Object.keys(blogComponents);

  return slugs.map((slug) => ({
    slug,
  }));
}
