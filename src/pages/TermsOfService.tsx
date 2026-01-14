import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Scale, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const TermsOfService = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            📜 Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last Updated: 1/13/2026 
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <FileText className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Agreement</h3>
              <p className="text-muted-foreground text-sm">By using our site, you agree to these terms</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Intellectual Property</h3>
              <p className="text-muted-foreground text-sm">All artwork is protected</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Scale className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Governing Law</h3>
              <p className="text-muted-foreground text-sm">State of California, USA</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">Questions?</h3>
              <p className="text-muted-foreground text-sm">Contact us anytime</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="space-y-8">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground">
                This website is operated by Hyde Hermit Studio. Throughout the site, the terms "we", "us" and "our" refer to Hyde Hermit Studio. Hyde Hermit Studio offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
              </p>
              <p className="text-muted-foreground mt-4">
                By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 1 - Online Store Terms</h2>
              <p className="text-muted-foreground">
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 2 - Products and Services (Physical Goods)</h2>
              <p className="text-muted-foreground">
                Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Refund Policy. We have made every effort to display as accurately as possible the colors and images of our products (stickers, pins, apparel, etc.) that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 3 - Art Commissions</h2>
              <p className="text-muted-foreground mb-4">
                For custom commissions (traditional or digital), the following additional terms apply:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Approval:</span> Final artwork is subject to the client's approval based on the agreed-upon brief.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Usage:</span> Unless otherwise stated in a separate written agreement, Hyde Hermit Studio retains all copyright to the artwork. The client is granted a license for personal use only. Commercial use requires a separate licensing fee and agreement.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Refunds:</span> Commissions are non-refundable once work has commenced.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 4 - Accuracy of Billing and Account Information</h2>
              <p className="text-muted-foreground">
                We reserve the right to refuse any order you place with us. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. For more detail, please review our{" "}
                <Link to="/shipping" className="text-primary hover:underline">Shipping Policy</Link>.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8 border-primary/30 bg-primary/5">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 5 - Intellectual Property</h2>
              <p className="text-muted-foreground">
                The content on this website, including but not limited to the Hyde Hermit crab mascot, character designs, artwork, illustrations, and logos, are the intellectual property of Hoi and Kai (Hyde Hermit Studio). You may not reproduce, duplicate, copy, sell, or exploit any portion of the Service or artwork without express written permission from us.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 6 - Third-Party Links</h2>
              <p className="text-muted-foreground">
                Certain content, products, and services available via our Service may include materials from third-parties (e.g., payment processors like Shopify or PayPal). We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 7 - Prohibited Uses</h2>
              <p className="text-muted-foreground">
                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (d) to harass, abuse, insult, or harm based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 8 - Disclaimer of Warranties; Limitation of Liability</h2>
              <p className="text-muted-foreground">
                We do not guarantee that your use of our service will be uninterrupted, timely, secure, or error-free. In no case shall Hyde Hermit Studio, our directors, officers, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, or consequential damages of any kind arising from your use of any of the service or any products procured using the service.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 9 - Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of California, United States.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Section 10 - Changes to Terms of Service</h2>
              <p className="text-muted-foreground">
                You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website.
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Section 11 - Contact Information</h3>
            <p className="text-muted-foreground mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground">
                Email:{" "}
                <a href="mailto:hydehermitstudios@gmail.com" className="text-primary hover:underline">
                  hydehermitstudios@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Website:{" "}
                <a href="https://hydehermitstudio.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  https://hydehermitstudio.com/
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
    </div>;
};
export default TermsOfService;