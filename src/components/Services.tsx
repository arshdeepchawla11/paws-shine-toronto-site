import { Sparkles, Scissors, Heart, Brush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Bathing",
      description: "Luxurious baths with premium shampoos and conditioners tailored to your pet's coat type."
    },
    {
      icon: Scissors,
      title: "Haircuts",
      description: "Professional styling and breed-specific cuts to keep your pet looking their absolute best."
    },
    {
      icon: Heart,
      title: "Nail Trimming",
      description: "Gentle and safe nail care to keep your pet comfortable and healthy."
    },
    {
      icon: Brush,
      title: "De-shedding",
      description: "Specialized treatments to reduce shedding and keep your home cleaner."
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive grooming services to keep your furry friends healthy, happy, and looking their best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pet-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            All services include nail trimming, ear cleaning, and a complimentary bandana!
          </p>
          <div className="inline-flex items-center gap-2 bg-accent/50 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Starting from $45</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;