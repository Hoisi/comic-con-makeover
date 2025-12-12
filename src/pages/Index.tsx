import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import UpcomingEvents from "@/components/UpcomingEvents";
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
      <Products />
      <GoogleAds />
      <CustomOrders />
      <Community />
      <About />
      <InstagramFeed />
      <UpcomingEvents />
      <Newsletter />
      <Footer />
    </div>;
};
export default Index;