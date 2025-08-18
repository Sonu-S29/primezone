
'use server';

/**
 * @fileOverview A simple chatbot flow for Primezone Computer Education.
 *
 * - chatFlow - A function that handles the chatbot conversation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessageSchema = z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
});

const ChatInputSchema = z.object({
  history: z.array(MessageSchema).describe('The conversation history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});

const systemPrompt = `You are a friendly and helpful chatbot for Primezone Computer Education.
Your goal is to assist users by answering their questions about courses, admissions, and other services offered by Primezone.
Keep your answers concise and to the point.
Here is the conversation history:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}
`;

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatInputSchema},
  prompt: systemPrompt,
});

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {text} = await prompt({
        history: input.history,
    });
    return { response: text };
  }
);
