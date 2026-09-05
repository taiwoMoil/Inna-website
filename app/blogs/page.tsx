import type { Metadata } from "next";
import { BlogIndex } from "../../components/BlogIndex";

export const metadata: Metadata = {
  title: "Functional Nutrition Articles",
  description:
    "Explore practical articles from Inna Benyukhis on gut health, hormones, stress, women’s health, and personalized functional nutrition.",
  alternates: { canonical: "/blogs" },
};

export default function BlogPage() {
  return <BlogIndex />;
}
