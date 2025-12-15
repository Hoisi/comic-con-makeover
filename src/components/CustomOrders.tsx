import bossmonstaLogo from "@/assets/bossmonsta-logo.png";
import newejhjrLogo from "@/assets/newejhjr-logo.png";
import partyWantedLogo from "@/assets/party-wanted-logo.png";
import tlakuiloKalliLogo from "@/assets/tlakuilo-kalli-logo.png";
import shepLogo from "@/assets/shep-logo.png";
import boldkoboldLogo from "@/assets/boldkobold-logo.png";
import smileBrightPinsLogo from "@/assets/smile-bright-pins-logo.png";
import letsTalkFiguresLogo from "@/assets/lets-talk-figures-logo.png";

const clients = [
  { name: "Boss Monsta", logo: bossmonstaLogo },
  { name: "Newejhjr", logo: newejhjrLogo },
  { name: "Party Wanted", logo: partyWantedLogo },
  { name: "Tlakuilo Kalli", logo: tlakuiloKalliLogo },
  { name: "Shep", logo: shepLogo },
  { name: "BoldKobold", logo: boldkoboldLogo },
  { name: "Smile Bright Pins", logo: smileBrightPinsLogo },
  { name: "Let's Talk Figures", logo: letsTalkFiguresLogo },
];

const CustomOrders = () => {
  return (
    <section id="custom" className="py-20 bg-gradient-accent overflow-hidden">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Clients We Work With
        </h2>
        
        <div className="logo-marquee-container">
          <div className="logo-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="logo-marquee-item">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="h-24 w-auto object-contain" />
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
