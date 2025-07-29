"use server";
import { personalizedCourseRecommendation, PersonalizedCourseRecommendationInput, PersonalizedCourseRecommendationOutput } from "@/ai/flows/course-recommendation";
import { z } from "zod";

const InputSchema = z.object({
    careerGoals: z.string().min(10, "Please describe your career goals in more detail."),
    educationalBackground: z.string().min(10, "Please provide more details about your education."),
    interests: z.string().min(10, "Please tell us more about your interests."),
});


export async function getCourseRecommendations(
  input: PersonalizedCourseRecommendationInput
): Promise<{ success: boolean; data: PersonalizedCourseRecommendationOutput | null; error: any | null }> {
  const parsed = InputSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, data: null, error: parsed.error.flatten().fieldErrors };
  }

  try {
    const result = await personalizedCourseRecommendation(parsed.data);
    return { success: true, data: result, error: null };
  } catch (e) {
    console.error(e);
    return { success: false, data: null, error: "An unexpected error occurred. Please try again." };
  }
}
