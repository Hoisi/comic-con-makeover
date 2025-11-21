import { Brush, Wrench, Sparkles, Search } from "lucide-react";
import ParallaxLayer from "@/components/ParallaxLayer";

const features = [
  {
    icon: Brush,
    title: "Custom Designs",
    description: "Unique creations tailored to your vision",
  },
  {
    icon: Wrench,
    title: "Handcrafted",
    description: "Every piece made with care and attention",
  },
  {
    icon: Sparkles,
    title: "Quality Materials",
    description: "Only the finest supplies for lasting beauty",
  },
  {
    icon: Search,
    title: "Wide Selection",
    description: "Browse our diverse collection of curiosities",
  },
];

const Features = () => {
  return (
    <section className="relative py-20 bg-forest overflow-hidden">
      <ParallaxLayer speed={0.4} className="absolute inset-0 bg-tropical-leaves opacity-40" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-forest-light/50 hover:bg-forest-light transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-4 rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
