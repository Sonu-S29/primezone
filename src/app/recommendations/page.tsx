import RecommendationForm from "@/components/recommendation-form";
import { Sparkles } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div>
      <section className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4">
            <Sparkles className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Course Recommender</h1>
          </div>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-3xl mx-auto">
            Not sure where to start? Let our AI assistant recommend the perfect course for you based on your goals, background, and interests.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <RecommendationForm />
      </section>
    </div>
  );
}
