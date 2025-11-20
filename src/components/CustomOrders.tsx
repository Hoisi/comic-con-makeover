import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Placeholder client logos - replace with your actual client logos
const clients = [
  { name: "Client 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 2", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 4", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 5", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 6", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 7", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "Client 8", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
];

const CustomOrders = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section id="custom" className="py-20 bg-gradient-accent overflow-hidden">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Clients We Work With
        </h2>
        
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_auto] mx-8"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-24 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors min-w-[200px]">
                  <span className="text-white font-semibold text-lg">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrders;
