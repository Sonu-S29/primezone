import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Primezone Computer Education | Vile Parle & Jogeshwari",
  description: "Unlock Your Potential in the Digital World. Primezone offers expert-led courses in programming, design, accounting, and more. Start your tech career with us today!",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}