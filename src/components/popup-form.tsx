"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

export default function PopupForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [state, handleSubmit] = useForm("xnnawrlz");
    const { toast } = useToast();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000); // 3 seconds delay

        return () => {
            clearTimeout(timer);
            setIsOpen(false);
        };
    }, [pathname]);

    useEffect(() => {
        if (state.succeeded) {
            toast({
                title: "Inquiry Sent!",
                description: "Thank you! Our team will contact you shortly.",
            });
            const timer = setTimeout(() => {
                setIsOpen(false);
                router.push('/courses/diploma');
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded, toast, router]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                {state.succeeded ? (
                    <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground mb-6">Your inquiry has been submitted. We will contact you shortly.</p>
                        <p className="text-xs text-muted-foreground italic">Redirecting to courses in 10 seconds...</p>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Quick Inquiry</DialogTitle>
                            <DialogDescription>
                                Interested in a course? Let us know and we'll get in touch!
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="popup-name">Name</Label>
                                <Input id="popup-name" name="name" placeholder="Enter your name" required />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-sm" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="popup-phone">Phone Number</Label>
                                <Input id="popup-phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-sm" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="popup-email">Email</Label>
                                <Input id="popup-email" name="email" type="email" placeholder="Enter your email" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="popup-course">Course Interested</Label>
                                <Input id="popup-course" name="course" placeholder="Enter course you're interested in" required />
                                <ValidationError prefix="Course" field="course" errors={state.errors} className="text-destructive text-sm" />
                            </div>
                            <Button type="submit" disabled={state.submitting} className="mt-2">
                                {state.submitting ? 'Submitting...' : 'Submit'}
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
