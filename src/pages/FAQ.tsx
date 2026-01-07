import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
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
            ❓ Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-12">
            Find answers to common questions about Hyde Hermit Studio.
          </p>

          <div className="space-y-8">
            {/* General Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">General</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="what-is-hyde">
                  <AccordionTrigger className="text-left">
                    What is Hyde Hermit Studio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Hyde Hermit Studio is an art and merchandise brand created by artists Hoi and Kai. We specialize in original artwork, enamel pins, plushies, apparel, books, prints, stickers, keychains, and more — all featuring unique designs and characters.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact">
                  <AccordionTrigger className="text-left">
                    How can I contact customer support?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    For any questions about your order, products, or policies, please email us at{" "}
                    <a href="mailto:hydehermitstudios@gmail.com" className="text-primary hover:underline">
                      hydehermitstudios@gmail.com
                    </a>{" "}
                    or use the <Link to="/contact" className="text-primary hover:underline">Contact Us form</Link> on our website.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wholesale">
                  <AccordionTrigger className="text-left">
                    Do you offer wholesale or bulk orders?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! For wholesale inquiries, please email us at{" "}
                    <a href="mailto:hydehermitstudios@gmail.com" className="text-primary hover:underline">
                      hydehermitstudios@gmail.com
                    </a>.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Shipping Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">🚚 Shipping</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="processing-time">
                  <AccordionTrigger className="text-left">
                    How long does it take to process my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Orders are typically processed within 2–5 business days after purchase (excluding weekends and holidays). Processing can vary based on order volume.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-rates">
                  <AccordionTrigger className="text-left">
                    What are your shipping rates?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2">
                      <li>FREE domestic shipping on all U.S. orders of $150 or more.</li>
                      <li>For orders under $150, shipping is calculated at checkout based on carrier rates and your address.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="international">
                  <AccordionTrigger className="text-left">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We ship worldwide. International customers are responsible for any customs duties, taxes, or import fees charged in their country.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tracking">
                  <AccordionTrigger className="text-left">
                    Will I receive a tracking number?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes — once your order ships, you will receive a confirmation email with tracking information so you can follow its progress.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="weekend-shipping">
                  <AccordionTrigger className="text-left">
                    Do you ship on weekends or holidays?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No — shipments do not go out on weekends or U.S. holidays. Please allow extra time during peak seasons.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Returns Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">🔄 Returns & Refunds</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="return-policy">
                  <AccordionTrigger className="text-left">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We want you to love your purchase! If you're not satisfied, returns are accepted within 30 days of delivery for unused items in their original condition with all packaging.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="initiate-return">
                  <AccordionTrigger className="text-left">
                    How do I initiate a return?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Contact our customer support team at{" "}
                    <a href="mailto:hydehermitstudios@gmail.com" className="text-primary hover:underline">
                      hydehermitstudios@gmail.com
                    </a>{" "}
                    with your order number and reason for return. Once approved, we'll send you return instructions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return-shipping">
                  <AccordionTrigger className="text-left">
                    Who pays for return shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Unless an item is defective or we shipped the wrong product, return shipping costs are the customer's responsibility.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="refund-timing">
                  <AccordionTrigger className="text-left">
                    When will I receive my refund?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After we receive and inspect your returned item, we will issue your refund to the original payment method. Please allow 3–10 business days for your bank to process the refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="exchange">
                  <AccordionTrigger className="text-left">
                    Can I exchange an item?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes — exchanges are possible when the requested item is in stock. Contact support to start an exchange.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="damaged-item">
                  <AccordionTrigger className="text-left">
                    What if my item arrives damaged or incorrect?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We're sorry! Email us within 7 days of delivery with photos and your order number. We will send a replacement or issue a full refund at no cost to you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're here to help! Reach out to our team anytime.
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

export default FAQ;
