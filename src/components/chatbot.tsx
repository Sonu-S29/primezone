
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getChatbotResponse } from "@/app/actions";

type Message = {
    role: "user" | "model";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setMessages([{ role: "model", content: "Hello! How can I help you today?" }]);
        }
    }, [isOpen]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const newMessages: Message[] = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const result = await getChatbotResponse(newMessages);
            setMessages(prev => [...prev, { role: "model", content: result.response }]);
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
                                        <div
                                            key={index}
                                            className={cn("flex items-end gap-2", {
                                                "justify-end": message.role === "user",
                                            })}
                                        >
                                            {message.role === "model" && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                                            <div
                                                className={cn(
                                                    "rounded-lg px-3 py-2 max-w-[80%] text-sm",
                                                    {
                                                        "bg-primary text-primary-foreground": message.role === "user",
                                                        "bg-muted": message.role === "model",
                                                    }
                                                )}
                                            >
                                                {message.content}
                                            </div>
                                            {message.role === "user" && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
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
                        <CardFooter className="pt-4">
                            <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask a question..."
                                    disabled={loading}
                                />
                                <Button type="submit" size="icon" disabled={loading}>
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </>
    );
}
