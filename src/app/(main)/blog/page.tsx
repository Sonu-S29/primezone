import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest news, trends, and insights from the world of technology and education.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}