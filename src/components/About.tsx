import { Award, Heart, Clock } from "lucide-react";
import sarahImage from "@/assets/sarah-groomer.jpg";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certified Professional",
      description: "Licensed and certified groomer"
    },
    {
      icon: Clock,
      title: "10+ Years Experience",
      description: "Trusted by Toronto pet families"
    },
    {
      icon: Heart,
      title: "Gentle Approach",
      description: "Specialized in anxious pets"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={sarahImage} 
                alt="Sarah - Professional Pet Groomer" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-pet-orange text-white p-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Pets</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Sarah, Your Pet's New Best Friend
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 10 years of professional grooming experience, Sarah is a certified 
                  groomer who specializes in creating a calm, stress-free environment for pets 
                  of all temperaments.
                </p>
                <p>
                  Sarah's gentle approach and deep understanding of animal behavior has made 
                  Paws & Shine the go-to grooming salon for pet families across Toronto. She 
                  believes every pet deserves to feel comfortable and loved during their grooming experience.
                </p>
                <p>
                  When she's not grooming, Sarah volunteers at local animal shelters and 
                  continues her education in the latest grooming techniques and pet care practices.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-soft-blue/30 p-6 rounded-2xl">
              <p className="text-foreground italic text-lg">
                "Every pet has their own personality, and my job is to make sure they feel 
                safe and comfortable throughout their grooming experience. It's not just about 
                looking good – it's about feeling good too!"
              </p>
              <p className="text-primary font-semibold mt-3">- Sarah, Owner & Lead Groomer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;