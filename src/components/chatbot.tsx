
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getChatbotResponse, Message } from "@/app/actions";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";


const introductoryMessage: Message = {
    role: "model",
    content: "Hello! What are you looking for today?",
    buttons: [
        { text: "Courses", payload: "courses" },
        { text: "Career Guidance", payload: "career_guidance" },
        { text: "Suggestions", payload: "suggestions" }
    ]
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([introductoryMessage]);
            setShowInput(false);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollableNode = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollableNode) {
                 scrollableNode.scrollTo({
                    top: scrollableNode.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [messages, loading]);

    const handleButtonClick = async (payload: string, text: string) => {
        if (loading) return;

        const userMessage: Message = { role: "user", content: text };
        const newMessages: Message[] = [...messages, userMessage];
        setMessages(newMessages);
        setLoading(true);
        setShowInput(false);

        try {
            const result = await getChatbotResponse(newMessages, payload);
            const botResponse = result.response;
            setMessages(prev => [...prev, botResponse]);
            setShowInput(!botResponse.buttons || botResponse.buttons.length === 0);
        } catch (error) {
            console.error("Chatbot error:", error);
            setMessages(prev => [...prev, { role: "model", content: "Sorry, I'm having trouble connecting. Please try again later." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage: Message = { role: "user", content: input };
        const newMessages: Message[] = [...messages, userMessage];
        setMessages(newMessages);
        const currentInput = input;
        setInput("");
        setLoading(true);

        try {
            const result = await getChatbotResponse(newMessages, currentInput);
            const botResponse = result.response;
            setMessages(prev => [...prev, botResponse]);
            setShowInput(!botResponse.buttons || botResponse.buttons.length === 0);
        } catch (error) {
            console.error("Chatbot error:", error);
            setMessages(prev => [...prev, { role: "model", content: "Sorry, I'm having trouble connecting. Please try again later." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50">
                <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full w-14 h-14 shadow-lg">
                    {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
                </Button>
            </div>

            {isOpen && (
                <div className="fixed bottom-20 right-4 z-50 w-full max-w-sm">
                    <Card className="flex flex-col h-[60vh] shadow-xl animate-fade-in-up">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Bot className="h-6 w-6 text-primary" />
                                <CardTitle>Primezone Assistant</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow overflow-hidden p-0">
                            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                                <div className="space-y-4">
                                    {messages.map((message, index) => (
                                        <div key={index}>
                                            <div
                                                className={cn("flex items-end gap-2", {
                                                    "justify-end": message.role === "user",
                                                })}
                                            >
                                                {message.role === "model" && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                                                <div
                                                    className={cn(
                                                        "rounded-lg px-3 py-2 max-w-[85%] text-sm prose prose-sm",
                                                        {
                                                            "bg-primary text-primary-foreground": message.role === "user",
                                                            "bg-muted": message.role === "model",
                                                        }
                                                    )}
                                                >
                                                   <ReactMarkdown
                                                        components={{
                                                            a: ({node, ...props}) => <Link href={props.href ?? '#'} {...props} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" />,
                                                            p: ({node, ...props}) => <p className="my-0" {...props} />,
                                                            ul: ({node, ...props}) => <ul className="my-2 pl-4" {...props} />,
                                                            li: ({node, ...props}) => <li className="my-1" {...props} />
                                                        }}
                                                    >
                                                        {message.content}
                                                    </ReactMarkdown>
                                                </div>
                                                {message.role === "user" && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                                            </div>
                                             {message.role === 'model' && message.buttons && message.buttons.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {message.buttons.map((button, btnIndex) => (
                                                        <Button
                                                            key={btnIndex}
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => handleButtonClick(button.payload, button.text)}
                                                            disabled={loading}
                                                        >
                                                            {button.text}
                                                        </Button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {loading && (
                                        <div className="flex items-center gap-2">
                                            <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                                            <div className="bg-muted rounded-lg px-3 py-2">
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </CardContent>
                         {showInput && (
                            <CardFooter className="pt-4">
                                <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Type your message..."
                                        disabled={loading}
                                        autoFocus
                                    />
                                    <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                         )}
                    </Card>
                </div>
            )}
        </>
    );
}
