import { Link } from "react-router-dom";
import { ArrowLeft, Package, Globe, Clock, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12 md:py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🚚 Shipping Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Everything you need to know about how we ship your orders.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Processing Time</h3>
              <p className="text-muted-foreground text-sm">2–5 business days</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Truck className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Free Shipping</h3>
              <p className="text-muted-foreground text-sm">On U.S. orders $150+</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Globe className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">International</h3>
              <p className="text-muted-foreground text-sm">We ship worldwide</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Package className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Tracking</h3>
              <p className="text-muted-foreground text-sm">Included with every order</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Processing</h2>
              <p className="text-muted-foreground">
                Orders are typically processed within 2–5 business days after purchase (excluding weekends and holidays). Processing can vary based on order volume.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Shipping Rates</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-foreground">FREE domestic shipping</span> on all U.S. orders of $150 or more.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>
                    For orders under $150, shipping is calculated at checkout based on carrier rates and your address.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">International Shipping</h2>
              <p className="text-muted-foreground">
                Yes! We ship worldwide. International customers are responsible for any customs duties, taxes, or import fees charged in their country.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Tracking</h2>
              <p className="text-muted-foreground">
                Once your order ships, you will receive a confirmation email with tracking information so you can follow its progress.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Weekends & Holidays</h2>
              <p className="text-muted-foreground">
                Shipments do not go out on weekends or U.S. holidays. Please allow extra time during peak seasons.
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Questions about shipping?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is happy to help with any shipping inquiries.
            </p>
            <a 
              href="mailto:hydehermitstudios@gmail.com" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
