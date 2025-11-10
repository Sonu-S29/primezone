
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactUsPage() {
  return (
    <div>
      <section className="bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Maps */}
          <Card>
              <CardHeader>
                <CardTitle>Our Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                     <div>
                        <h3 className="font-bold flex items-center gap-2 mb-2"><MapPin/> Jogeshwari</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d241238.81418146254!2d72.54561129453127!3d19.135867299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7337ae704d1%3A0xeb9d18351a79413f!2sPrimezone%20Computer%20Education%20%7C%20Best%20computer%20institute%20%26%20classes%20in%20Jogeshwari%20Mumbai!5e0!3m2!1sen!2sin!4v1753973268532!5m2!1sen!2sin" width="100%" height="250" style={{border:0, borderRadius: "0.5rem"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                     <div>
                        <h3 className="font-bold flex items-center gap-2 mb-2"><MapPin/> Vile Parle</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d241238.81418146254!2d72.54561129453127!3d19.135867299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93b792d5e83%3A0xd7635d0de4b921f1!2sPrimezone%20Computer%20Education%20%7C%20Best%20computer%20institute%20%26%20classes%20in%20Vile%20Parle%20Mumbai!5e0!3m2!1sen!2sin!4v1753973302240!5m2!1sen!2sin" width="100%" height="250" style={{border:0, borderRadius: "0.5rem"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-headline">Get in Touch</h2>
                  <div className="grid sm:grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Email Us</h3>
                        <a href="mailto:pzofficial123@gmail.com" className="text-muted-foreground hover:text-primary">pzofficial123@gmail.com</a> | <a href="mailto:primezonecomputer@gmail.com" className="text-muted-foreground hover:text-primary">primezonecomputer@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Call Us</h3>
                        <a href="tel:+919769730087" className="text-muted-foreground hover:text-primary">(+91) 97697 30087</a> | <a href="tel:+919321773941" className="text-muted-foreground hover:text-primary">(+91) 93217 73941</a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
          </Card>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
