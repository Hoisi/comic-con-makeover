import { Button } from "@/components/ui/button";
import { Package, Palette, MessageSquare } from "lucide-react";

const CustomOrdersSection = () => {
  return (
    <section id="custom-orders" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Custom Orders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a unique vision? We bring your ideas to life with custom merchandise, 
            artwork, and exclusive collaborations tailored just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Custom Artwork</h3>
            <p className="text-muted-foreground">
              Commission original pieces featuring your characters, concepts, or brand identity.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Bulk & Wholesale</h3>
            <p className="text-muted-foreground">
              Perfect for events, conventions, or retail. Get special pricing on large orders.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Collaborations</h3>
            <p className="text-muted-foreground">
              Partner with us for exclusive merch drops, artist collabs, or special projects.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="font-semibold px-8"
            onClick={() => window.location.href = '/contact'}
          >
            Inquire About Custom Orders
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Or email us directly at{" "}
            <a 
              href="mailto:hydehermitstudios@gmail.com" 
              className="text-primary hover:underline"
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
