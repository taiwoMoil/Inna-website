import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "../lib/blogPosts";
import { LOCAL_SERVICE_PAGE, SERVICE_PAGE_PATHS, SITE } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.origin,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.origin}/blogs`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE.origin}${LOCAL_SERVICE_PAGE}`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.origin}${SITE.practitioner.path}`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.origin}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.origin}/medical-disclaimer`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...SERVICE_PAGE_PATHS.map((path) => ({
      url: `${SITE.origin}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.origin}/blogs/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
