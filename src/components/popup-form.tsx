"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from '@/hooks/use-toast';

export default function PopupForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [state, handleSubmit] = useForm("xnnawrlz");
    const { toast } = useToast();
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000); // 3 seconds delay

        // When the component unmounts or path changes, clear the timer
        // and close the dialog.
        return () => {
            clearTimeout(timer);
            setIsOpen(false);
        };
    }, [pathname]); // Re-run this effect whenever the page route changes

    useEffect(() => {
        if (state.succeeded) {
            toast({
                title: "Inquiry Sent!",
                description: "Thank you! Our team will contact you shortly.",
            });
            setIsOpen(false);
        }
    }, [state.succeeded, toast]);

    // Don't re-render the dialog if the form was just successfully submitted
    // This will prevent it from immediately re-appearing after submission.
    // It will reappear on the next page navigation.
    if (state.succeeded) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Quick Inquiry</DialogTitle>
                    <DialogDescription>
                        Interested in a course? Let us know and we'll get in touch!
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="popup-name">Name</Label>
                        <Input id="popup-name" name="name" placeholder="John Doe" required />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-sm" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="popup-phone">Phone Number</Label>
                        <Input id="popup-phone" name="phone" type="tel" placeholder="9876543210" required />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-sm" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="popup-email">Email</Label>
                        <Input id="popup-email" name="email" type="email" placeholder="john.doe@example.com" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="popup-course">Course Interested</Label>
                        <Input id="popup-course" name="course" placeholder="e.g., Data Analytics" required />
                         <ValidationError prefix="Course" field="course" errors={state.errors} className="text-destructive text-sm" />
                    </div>
                    <Button type="submit" disabled={state.submitting} className="mt-2">
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
