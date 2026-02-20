import type { Metadata } from "next";
import CertificatesClient from "./CertificatesClient";

export const metadata: Metadata = {
  title: "Our Certifications",
  description: "Proudly recognized by leading authorities in skill development and education.",
  alternates: {
    canonical: "/certificates",
  },
};

export default function CertificatesPage() {
  return <CertificatesClient />;
}
