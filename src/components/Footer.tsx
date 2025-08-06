import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Paws & Shine</h3>
              <p className="text-background/70 leading-relaxed">
                Toronto's premier pet grooming salon, dedicated to providing gentle care 
                and beautiful results for your beloved furry friends.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-background/80">
              <Heart className="w-5 h-5 text-pet-orange fill-current" />
              <span>Made with love for pets since 2014</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Sarah</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pet Care Tips</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Get in Touch</h4>
            <div className="space-y-4 text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p>123 Queen Street West</p>
                  <p>Toronto, ON M5H 2M9</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>(416) 555-PAWS</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@pawsandshine.ca</span>
              </div>
            </div>

            <div className="bg-background/10 p-4 rounded-lg">
              <p className="text-sm text-background/80 mb-2">Emergency Pet Care:</p>
              <p className="text-background font-medium">For after-hours emergencies, please contact Toronto Animal Emergency Hospital at (416) 247-8387</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Paws & Shine Pet Grooming. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Booking Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;