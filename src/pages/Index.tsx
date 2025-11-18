import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AdBanner from "@/components/AdBanner";
import Features from "@/components/Features";
import Products from "@/components/Products";
import CustomOrders from "@/components/CustomOrders";
import Community from "@/components/Community";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <AdBanner />
      <Features />
      <Products />
      <CustomOrders />
      <Community />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
