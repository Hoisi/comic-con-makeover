import { Button } from "@/components/ui/button";

const CustomOrders = () => {
  return (
    <section id="custom" className="py-20 bg-gradient-accent">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bring Your Ideas to Life!
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Have a unique vision? Let's collaborate to create something truly special. 
            From custom miniatures to personalized decorations, we'll work together 
            to bring your imagination into reality.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-teal hover:bg-white/90">
            Start Custom Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders;
