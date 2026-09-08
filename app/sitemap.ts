import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "../lib/blogPosts";
import { SITE } from "../lib/site";

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
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.origin}/blogs/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
