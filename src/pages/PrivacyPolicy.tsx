import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Database, Eye, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🔒 Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last Updated: 1/13/2026
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <Database className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Data Collection</h3>
              <p className="text-muted-foreground text-sm">We collect only what's necessary</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Your Rights</h3>
              <p className="text-muted-foreground text-sm">Access, correct, or delete your data</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Eye className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Transparency</h3>
              <p className="text-muted-foreground text-sm">Clear about how we use your info</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Questions?</h3>
              <p className="text-muted-foreground text-sm">Contact us anytime</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-8">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <p className="text-muted-foreground">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from hydehermitstudio.com (the "Site").
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Personal Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
              <p className="text-muted-foreground mb-4">
                Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
              </p>
              <p className="text-muted-foreground mb-4">
                We collect Device Information using the following technologies:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Cookies:</span> Data files that are placed on your device or computer and often include an anonymous unique identifier.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Log files:</span> Track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, PayPal email, etc.), email address, and phone number. We refer to this information as "Order Information."
              </p>
              <p className="text-muted-foreground">
                For Art Commissions, we may also collect reference images, personal descriptions, and social media handles provided by you to complete the service.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">2. How Do We Use Your Personal Information?</h2>
              <p className="text-muted-foreground mb-4">
                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
              </p>
              <p className="text-muted-foreground mb-4">
                Additionally, we use this Order Information to:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Communicate with you (regarding orders or commissions);</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Screen our orders for potential risk or fraud; and</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services (such as new sticker drops or shop updates).</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Sharing Your Personal Information</h2>
              <p className="text-muted-foreground mb-4">
                We share your Personal Information with third parties to help us use your Personal Information, as described above.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Shopify:</span> We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here:{" "}
                    <a href="https://www.shopify.com/legal/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://www.shopify.com/legal/privacy
                    </a>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Payment Processors:</span> We use PayPal and other processors to handle transactions securely.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Compliance with Law:</span> Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">4. Behavioral Advertising</h2>
              <p className="text-muted-foreground mb-4">
                As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. You can opt-out of targeted advertising by using the links below:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Facebook:</span>{" "}
                    <a href="https://www.facebook.com/settings/?tab=ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://www.facebook.com/settings/?tab=ads
                    </a>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Google:</span>{" "}
                    <a href="https://www.google.com/settings/ads/anonymous" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://www.google.com/settings/ads/anonymous
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground">
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">7. Minors</h2>
              <p className="text-muted-foreground">
                The Site is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">8. Changes</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">9. Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at:
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground">
                Email:{" "}
                <a href="mailto:hydehermitstudios@gmail.com" className="text-primary hover:underline">
                  hydehermitstudios@gmail.com
                </a>
              </p>
            </div>
            <a href="mailto:hydehermitstudios@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
