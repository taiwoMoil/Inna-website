import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = [
    "corporate-wellness",
    "gut-brain-connection",
    "healthcare-fails-women",
    "perimenopause-gut-health",
    "root-cause-nutrition",
    "stress-gut-polyvagal",
  ];

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blogs`, changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blogs/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
