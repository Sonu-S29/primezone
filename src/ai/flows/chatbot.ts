'use server';

/**
 * @fileOverview A guided chatbot flow for Primezone Computer Education.
 *
 * - chatFlow - A function that handles the chatbot conversation with guided paths.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { personalizedCourseRecommendation } from './course-recommendation';

const ButtonSchema = z.object({
  text: z.string(),
  payload: z.string(),
});

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
  buttons: z.array(ButtonSchema).optional(),
});
export type Message = z.infer<typeof MessageSchema>;

const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string().optional(),
});

const ChatOutputSchema = z.object({
  response: MessageSchema,
});

const diplomaCourses = [
  "Diploma In Accounting",
  "Diploma In Financial Accounting",
  "Diploma In Computer Application",
  "Diploma In Financial & Management",
  "Diploma In Programming Course",
  "Diploma In Graphic & Animation",
  "Diploma In Ethical Hacking",
  "Diploma In Digital Marketing",
  "Full-Stack Development",
  "Data Analytics",
];

const shortTermCourseCategories = {
    Account: ["Office Automation", "MS Office", "Advanced Excel", "Tally Prime + GST", "Taxation Auditing", "Management Skill", "Share Market", "CCC"],
    Programming: ["Web Development", "Web Designing", "DSA", "C", "C++", "Python", "Front-End Development", "Back-End Development", "Database", "Angular", "HTML-CSS", "JavaScript", "Core Java", "C#", "React", "Advanced Java", "PowerBI"],
    'Digital Marketing': ["SEO", "WordPress", "Content Creation", "SMO", "Google Analytics"],
    Graphics: ["CorelDRAW", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Video|Sound Editing", "Adobe Animation", "3D MAX", "Canva Design", "After Effects", "Premiere Pro", "Figma", "AutoCAD", "Revit"]
};

const contactInfo = "\n\nFor more details, you can contact us at:\n**Jogeshwari:** [9769730087](tel:+919769730087)\n\n**Vile Parle:** [9321773941](tel:+919321773941)";

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input): Promise<{ response: Message }> => {
    const userMessage = input.message?.trim().toLowerCase();
    const lastBotMessage = input.history.slice().reverse().find(m => m.role === 'model')?.content;

    // Path for "Suggestions"
    if (lastBotMessage?.includes("What is your educational background")) {
        return {
            response: {
                role: 'model',
                content: "Great. Now, what are your interests or fields you are passionate about?",
            }
        };
    }
    if (lastBotMessage?.includes("what are your interests")) {
        const historyText = input.history.map(m => `${m.role}: ${m.content}`).join('\n');
        const careerGoalsMatch = historyText.match(/career goals\?\nuser: (.*)/);
        const backgroundMatch = historyText.match(/educational background.*\nuser: (.*)/);

        const careerGoals = careerGoalsMatch ? careerGoalsMatch[1] : "Not specified";
        const educationalBackground = backgroundMatch ? backgroundMatch[1] : "Not specified";
        const interests = userMessage || "Not specified";

        try {
             const recommendations = await personalizedCourseRecommendation({
                careerGoals,
                educationalBackground,
                interests,
            });
            
            const recommendationText = `Based on what you told me, here are some courses I'd recommend:\n\n**Courses:**\n- ${recommendations.courseRecommendations.join('\n- ')}\n\n**Reasoning:**\n${recommendations.reasoning}\n\nWould you like to explore something else? ${contactInfo}`;
            
            return {
                response: {
                    role: 'model',
                    content: recommendationText,
                    buttons: [
                        { text: "Courses", payload: "courses" },
                        { text: "Career Guidance", payload: "career_guidance" },
                        { text: "Suggestions", payload: "suggestions" }
                    ]
                }
            };
        } catch (e) {
             return {
                response: {
                    role: 'model',
                    content: "I had some trouble generating recommendations. Please try again. What are you looking for?",
                     buttons: [
                        { text: "Courses", payload: "courses" },
                        { text: "Career Guidance", payload: "career_guidance" },
                        { text: "Suggestions", payload: "suggestions" }
                    ]
                }
            };
        }
    }


    if (userMessage === 'courses') {
      return {
        response: {
          role: 'model',
          content: "Great! Are you interested in a Diploma or a Short-term course?",
          buttons: [
            { text: "Diploma", payload: "diploma" },
            { text: "Short-term", payload: "short_term" },
          ],
        },
      };
    }

    if (userMessage === 'diploma') {
      const courseList = diplomaCourses.map(course => `- ${course}`).join('\n');
      return {
        response: {
          role: 'model',
          content: `Here are our Diploma courses:\n${courseList}\n\nYou can find more details on our [diploma courses page](/courses/diploma). What else can I help with? ${contactInfo}`,
           buttons: [
                { text: "Courses", payload: "courses" },
                { text: "Career Guidance", payload: "career_guidance" },
                { text: "Suggestions", payload: "suggestions" }
            ]
        },
      };
    }
    
    if (userMessage === 'short_term') {
        return {
            response: {
                role: 'model',
                content: "Which category of short-term courses are you interested in?",
                buttons: [
                    { text: "Account", payload: "short_term_account" },
                    { text: "Programming", payload: "short_term_programming" },
                    { text: "Digital Marketing", payload: "short_term_digital_marketing" },
                    { text: "Graphics", payload: "short_term_graphics" },
                ]
            }
        }
    }

    if (userMessage?.startsWith('short_term_')) {
        const category = userMessage.replace('short_term_', '').replace(/_/g, ' ');
        const categoryKey = Object.keys(shortTermCourseCategories).find(k => k.toLowerCase() === category) as keyof typeof shortTermCourseCategories | undefined;
        
        if (categoryKey) {
            const courses = shortTermCourseCategories[categoryKey];
            const courseList = courses.map(course => `- ${course}`).join('\n');
            return {
                response: {
                    role: 'model',
                    content: `Here are the courses under ${categoryKey}:\n${courseList}\n\nFor more details, visit our [short-term courses page](/courses/short-term). What else can I help you with? ${contactInfo}`,
                    buttons: [
                        { text: "Courses", payload: "courses" },
                        { text: "Career Guidance", payload: "career_guidance" },
                        { text: "Suggestions", payload: "suggestions" }
                    ]
                }
            };
        }
    }


    if (userMessage === 'career_guidance') {
      return {
        response: {
          role: 'model',
          content: `Of course! For career guidance, you can contact our counselors at:\n\n**Jogeshwari:** [9769730087](tel:+919769730087)\n\n**Vile Parle:** [9321773941](tel:+919321773941)\n\nWhat else can I help with?`,
          buttons: [
            { text: "Courses", payload: "courses" },
            { text: "Career Guidance", payload: "career_guidance" },
            { text: "Suggestions", payload: "suggestions" }
          ]
        },
      };
    }
    
    

    if (userMessage === 'suggestions') {
      return {
        response: {
          role: 'model',
          content: "I can help with that! To give you the best recommendation, I need to ask a few questions. First, what are your career goals?",
        },
      };
    }
     if (lastBotMessage?.includes("career goals?")) {
        return {
            response: {
                role: 'model',
                content: "Thanks! What is your educational background or what are you currently studying?",
            }
        };
    }


    // Fallback and initial message
    return {
      response: {
        role: 'model',
        content: "Hello! What are you looking for today?",
        buttons: [
          { text: "Courses", payload: "courses" },
          { text: "Career Guidance", payload: "career_guidance" },
          { text: "Suggestions", payload: "suggestions" }
        ],
      },
    };
  }
);