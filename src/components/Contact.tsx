import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to give your furry friend the royal treatment? Contact us to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Book Your Appointment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Pet Parent Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input placeholder="(416) 555-0123" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Pet Name</label>
                  <Input placeholder="Fluffy" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Pet Type</label>
                  <Input placeholder="Dog / Cat" className="bg-background/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Services Needed</label>
                <Input placeholder="Full grooming, nail trim, bath only..." className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Special Notes</label>
                <Textarea 
                  placeholder="Any special needs, anxiety concerns, or specific requests..." 
                  className="bg-background/50 min-h-[100px]"
                />
              </div>

              <Button variant="cta" className="w-full">
                Send Appointment Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours to confirm your appointment time.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Salon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Queen Street West<br />
                      Toronto, ON M5H 2M9<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">(416) 555-PAWS</p>
                    <p className="text-muted-foreground">(416) 555-7297</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@pawsandshine.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gentle-gray rounded-lg flex items-center justify-center relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8267855644093!2d-79.3871875!3d43.6532198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sQueen%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;