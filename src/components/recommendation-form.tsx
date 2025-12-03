
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getCourseRecommendations } from "@/app/actions";
import type { PersonalizedCourseRecommendationOutput } from "@/ai/flows/course-recommendation";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, Lightbulb, BookOpen } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  careerGoals: z.string().min(20, { message: "Please provide more details about your career goals." }),
  educationalBackground: z.string().min(10, { message: "Please tell us about your past education." }),
  interests: z.string().min(10, { message: "Please share some of your interests." }),
});

type FormData = z.infer<typeof formSchema>;

export default function RecommendationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedCourseRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      careerGoals: "",
      educationalBackground: "",
      interests: "",
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setResult(null);
    setError(null);
    const response = await getCourseRecommendations(data);
    if (response.success && response.data) {
      setResult(response.data);
    } else {
        const errorMessage = typeof response.error === 'string' 
            ? response.error 
            : "An error occurred. Please check your inputs and try again.";
      setError(errorMessage);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Tell Us About Yourself</CardTitle>
          <CardDescription>The more details you provide, the better our recommendations will be.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action="https://formspree.io/f/xnnawrlz" method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="careerGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your career goals?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., I want to become a full-stack web developer and work for a startup." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="educationalBackground"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your educational background?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., I have a Bachelor's degree in Commerce." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your interests?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., I enjoy problem-solving, creative design, and technology." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Recommendations...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-accent"/> Your Personalized Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><BookOpen className="h-5 w-5"/> Recommended Courses</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                {result.courseRecommendations.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Lightbulb className="h-5 w-5"/> Reasoning</h3>
              <p className="text-muted-foreground">{result.reasoning}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
                <a href="/courses/diploma">Explore Courses in Detail</a>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
