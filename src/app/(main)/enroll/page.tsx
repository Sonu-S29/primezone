import type { Metadata } from "next";
import EnrollClient from "./EnrollClient";

export const metadata: Metadata = {
  title: "Enroll Now",
  description: "Take the next step in your career journey. Fill out the form to enroll in our expert-led courses.",
  alternates: {
    canonical: "/enroll",
  },
};

export default function EnrollPage() {
  return <EnrollClient />;
}
