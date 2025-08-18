
"use server";
import { personalizedCourseRecommendation, PersonalizedCourseRecommendationInput, PersonalizedCourseRecommendationOutput } from "@/ai/flows/course-recommendation";
import { chat, ChatInput, ChatOutput } from "@/ai/flows/chatbot";
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

export async function sendOtp(phone: string): Promise<{ success: boolean, message: string }> {
  console.log(`Sending OTP to ${phone}`);
  // In a real app, you would integrate with an SMS gateway like Twilio here.
  // For this demo, we'll just simulate a success response.
  return { success: true, message: "OTP sent successfully. Check your phone." };
}

export async function verifyOtp(otp: string): Promise<{ success: boolean, message: string }> {
    console.log(`Verifying OTP ${otp}`);
    // In a real app, you'd check the OTP against a stored value.
    // For this demo, we'll accept any 6-digit code.
    if (/^\d{6}$/.test(otp)) {
        return { success: true, message: "Verification successful." };
    }
    return { success: false, message: "Invalid OTP." };
}

export async function getChatbotResponse(history: ChatInput['history']): Promise<ChatOutput> {
    return await chat({ history });
}
    
