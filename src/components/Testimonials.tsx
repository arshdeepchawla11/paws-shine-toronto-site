import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialDog1 from "@/assets/testimonial-dog1.jpg";
import testimonialCat1 from "@/assets/testimonial-cat1.jpg";
import testimonialDog2 from "@/assets/testimonial-dog2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bella the Pomeranian",
      owner: "Jessica M.",
      image: testimonialDog1,
      review: "Sarah is absolutely wonderful! Bella used to be so anxious about grooming, but now she actually gets excited when we pull up to Paws & Shine. The transformation is amazing!",
      rating: 5
    },
    {
      name: "Whiskers the Persian",
      owner: "David L.",
      image: testimonialCat1,
      review: "As a Persian cat owner, finding someone who understands long-haired cats is crucial. Sarah's attention to detail and gentle approach makes Whiskers look like a show cat every time!",
      rating: 5
    },
    {
      name: "Charlie the Beagle",
      owner: "Maria R.",
      image: testimonialDog2,
      review: "Charlie always comes home looking handsome and smelling amazing! The nail trimming service is a lifesaver - I could never do it myself. Highly recommend Paws & Shine!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 via-secondary/50 to-soft-blue/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Happy Pets, Happy Families
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it! Here's what our furry clients and their families have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-card/90 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                {/* Pet Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pet-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ VIP Pet
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-pet-orange fill-current" />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-muted-foreground text-center mb-6 italic leading-relaxed">
                  "{testimonial.review}"
                </blockquote>

                {/* Pet and Owner Info */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    with {testimonial.owner}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Pets</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Love & Care</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">⭐ 5.0</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;