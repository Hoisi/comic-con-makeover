import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import UpcomingEvents from "@/components/UpcomingEvents";
import Products from "@/components/Products";
import GoogleAds from "@/components/GoogleAds";
import CustomOrders from "@/components/CustomOrders";
import Community from "@/components/Community";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import PhotoPortfolio from "@/components/PhotoPortfolio";
import CustomOrdersSection from "@/components/CustomOrdersSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <Products />
      <CustomOrders />
      <Community />
      <About />
      <PhotoPortfolio />
      <CustomOrdersSection />
      <InstagramFeed />
      <GoogleAds />
      <UpcomingEvents />
      <Newsletter />
      <Footer />
    </div>;
};
export default Index;