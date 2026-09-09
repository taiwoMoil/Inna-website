export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  tags: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gut-brain-connection",
    title:
      "The Gut-Brain Connection: Why Your Anxiety Might Start in Your Stomach",
    description:
      "Explore the science behind the gut-brain axis and how it influences anxiety and digestion, with practical strategies for supporting balance.",
    publishedAt: "2025-01-15",
    category: "Gut Health",
    tags: ["Anxiety", "Microbiome", "Gut Health"],
  },
  {
    slug: "healthcare-fails-women",
    title: "When Standard Healthcare Fails Women: How to Advocate for Yourself",
    description:
      "Understand gender bias in medical care, why women can face delayed or incorrect diagnoses, and how to advocate for yourself.",
    publishedAt: "2025-01-05",
    category: "Women's Health",
    tags: ["Healthcare Advocacy", "Gender Bias", "Self-Advocacy"],
  },
  {
    slug: "corporate-wellness",
    title: "Corporate Wellness: How Gut Health Programs Can Support Employees",
    description:
      "Learn how digestive health can affect the workplace and what to consider when developing a responsible employee wellness program.",
    publishedAt: "2025-01-02",
    category: "Corporate Wellness",
    tags: ["Workplace Health", "Productivity", "Employee Wellness"],
  },
  {
    slug: "perimenopause-gut-health",
    title: "Perimenopause and Gut Health: What to Know",
    description:
      "Explore the relationship between perimenopause, hormones, and the gut microbiome, plus practical ways to support your health.",
    publishedAt: "2025-01-12",
    category: "Hormones",
    tags: ["Perimenopause", "Hormones", "Microbiome"],
  },
  {
    slug: "root-cause-nutrition",
    title: "Root-Cause Nutrition vs. Quick Fixes: Why Personalization Matters",
    description:
      "Learn why personalized nutrition strategies may be more sustainable than generic advice and how individual context shapes a plan.",
    publishedAt: "2025-07-10",
    category: "Nutrition",
    tags: ["Personalized Nutrition", "Testing", "Functional Nutrition"],
  },
  {
    slug: "stress-gut-polyvagal",
    title: "The Link Between Stress and Gut Health",
    description:
      "Explore how stress and the nervous system can affect digestion, along with practical tools that may support balance.",
    publishedAt: "2025-08-08",
    category: "Gut Health",
    tags: ["Stress", "Nervous System", "Gut Health"],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
