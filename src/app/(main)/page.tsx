
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Primezone Computer Education | Best Computer Classes in Mumbai",
  description: "Join the best computer classes in Mumbai at Primezone Computer Education. Expert-led training in Data Analytics, Full-Stack Dev, Graphic Design, and Digital Marketing with 100% placement assistance in Jogeshwari and Vile Parle.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
