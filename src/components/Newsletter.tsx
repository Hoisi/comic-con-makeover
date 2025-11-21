import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ParallaxLayer from "@/components/ParallaxLayer";

const Newsletter = () => {
  return (
    <section className="relative py-12 md:py-20 bg-navy overflow-hidden">
      <ParallaxLayer speed={0.3} className="absolute inset-0 bg-tropical-waves opacity-50" />
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stay in the Loop!
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8">
            Subscribe to get updates on new products, exclusive offers, and creative inspiration
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
            />
            <Button variant="secondary" type="submit" className="h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
