import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import bossmonstaLogo from "@/assets/bossmonsta-logo.png";
import newejhjrLogo from "@/assets/newejhjr-logo.png";
import partyWantedLogo from "@/assets/party-wanted-logo.png";
import tlakuiloKalliLogo from "@/assets/tlakuilo-kalli-logo.png";

// Client logos - replace placeholders with your actual client logos
const clients = [
  { name: "Boss Monsta", logo: bossmonstaLogo },
  { name: "Newejhjr", logo: newejhjrLogo },
  { name: "Party Wanted", logo: partyWantedLogo },
  { name: "Tlakuilo Kalli", logo: tlakuiloKalliLogo },
  { name: "Client 5", logo: null },
  { name: "Client 6", logo: null },
  { name: "Client 7", logo: null },
  { name: "Client 8", logo: null },
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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors min-w-[200px]">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="h-36 w-auto object-contain" />
                  ) : (
                    <span className="text-white font-semibold text-lg">{client.name}</span>
                  )}
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
