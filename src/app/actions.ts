
"use server";
import { z } from "zod";


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

// export async function getCourseRecommendations(input: CourseRecommendationInput): Promise<CourseRecommendationOutput> {
//     return getCourseRecommendationsFlow(input);
// }

// export async function getChatbotResponse(history: {role: string, content: string}[], message: string) {
//     return askTutor(history, message);
// }

