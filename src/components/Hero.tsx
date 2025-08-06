import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-blue via-background to-warm-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Paws & Shine
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Premium pet grooming services for cats and dogs in Toronto. 
                Gentle care, stylish results, and stress-free visits for your furry friends.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg">
                Book an Appointment
              </Button>
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Certified Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Stress-Free Environment</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Happy dog and cat together - professional pet grooming" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pet-orange rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;