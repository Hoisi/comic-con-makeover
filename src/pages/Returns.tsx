import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw, Clock, Mail, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
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
            🔄 Returns & Refunds
          </h1>
          <p className="text-muted-foreground mb-12">
            We want you to love your purchase. Here's our return policy.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Return Window</h3>
              <p className="text-muted-foreground text-sm">30 days from delivery</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <RotateCcw className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Exchanges</h3>
              <p className="text-muted-foreground text-sm">Available for in-stock items</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Damaged Items</h3>
              <p className="text-muted-foreground text-sm">Report within 7 days</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Refund Time</h3>
              <p className="text-muted-foreground text-sm">3–10 business days</p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Return Policy</h2>
              <p className="text-muted-foreground">
                We want you to love your purchase! If you're not satisfied, returns are accepted within 30 days of delivery for unused items in their original condition with all packaging.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">How to Initiate a Return</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <p className="text-muted-foreground">
                    Contact our customer support team at{" "}
                    <a href="mailto:hydehermitstudios@gmail.com" className="text-primary hover:underline">
                      hydehermitstudios@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <p className="text-muted-foreground">Include your order number and reason for return</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <p className="text-muted-foreground">Once approved, we'll send you return instructions</p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Return Shipping</h2>
              <p className="text-muted-foreground">
                Unless an item is defective or we shipped the wrong product, return shipping costs are the customer's responsibility.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Refund Processing</h2>
              <p className="text-muted-foreground">
                After we receive and inspect your returned item, we will issue your refund to the original payment method. Please allow 3–10 business days for your bank to process the refund.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Exchanges</h2>
              <p className="text-muted-foreground">
                Exchanges are possible when the requested item is in stock. Contact support to start an exchange.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8 border-primary/30 bg-primary/5">
              <h2 className="text-xl font-bold text-foreground mb-4">Damaged or Incorrect Items</h2>
              <p className="text-muted-foreground">
                We're sorry if something went wrong! Email us within 7 days of delivery with photos and your order number. We will send a replacement or issue a full refund at no cost to you.
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Need to start a return?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is ready to assist you with your return or exchange.
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

export default Returns;
