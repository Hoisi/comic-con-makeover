import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Features from "@/components/Features";
import Products from "@/components/Products";
import GoogleAds from "@/components/GoogleAds";
import CustomOrders from "@/components/CustomOrders";
import Community from "@/components/Community";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <Features />
      <Products />
      <GoogleAds className="bg-slate-900" />
      <CustomOrders />
      <Community />
      <About />
      <InstagramFeed />
      <Newsletter />
      <Footer />
    </div>;
};
export default Index;