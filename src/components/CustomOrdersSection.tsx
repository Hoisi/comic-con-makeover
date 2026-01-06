import { Button } from "@/components/ui/button";
import { Package, Palette, MessageSquare } from "lucide-react";

const CustomOrdersSection = () => {
  return (
    <section id="custom-orders" className="py-20" style={{ backgroundColor: '#4FBFDF' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Custom Orders
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have a unique vision? We bring your ideas to life with custom merchandise, 
            artwork, and exclusive collaborations tailored just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center hover:bg-white/30 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Custom Artwork</h3>
            <p className="text-white/80">
              Commission original pieces featuring your characters, concepts, or brand identity.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center hover:bg-white/30 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Bulk & Wholesale</h3>
            <p className="text-white/80">
              Perfect for events, conventions, or retail. Get special pricing on large orders.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center hover:bg-white/30 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Collaborations</h3>
            <p className="text-white/80">
              Partner with us for exclusive merch drops, artist collabs, or special projects.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="font-semibold px-8 bg-white text-[#4FBFDF] hover:bg-white/90"
            onClick={() => window.location.href = '/contact'}
          >
            Inquire About Custom Orders
          </Button>
          <p className="text-sm text-white/80 mt-4">
            Or email us directly at{" "}
            <a 
              href="mailto:hydehermitstudios@gmail.com" 
              className="text-white hover:underline font-medium"
            >
              hydehermitstudios@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomOrdersSection;
