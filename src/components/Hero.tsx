import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParallaxLayer from "@/components/ParallaxLayer";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParallaxLayer speed={0.3} className="absolute inset-0 bg-tropical-leaves opacity-50" />
      <ParallaxLayer speed={0.5} className="absolute inset-0 bg-tropical-waves opacity-30" />
      
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Unlock Your Creative Spirit
          <br />
          with Hyde Hermit Studio!
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Handcrafted curiosities and custom creations brought to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" variant="hero" className="text-lg">
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="heroSecondary" className="text-lg">
            Custom Orders
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
