import gx3Logo from "@/assets/gx3-logo.webp";
import gsfcLogo from "@/assets/gsfc-logo.png";
import fxdeLogo from "@/assets/fxde-logo.png";
import reddingAnimeLogo from "@/assets/redding-anime-logo.png";
import sdccLogo from "@/assets/sdcc-logo.png";
import ecccLogo from "@/assets/eccc-logo.png";
import motorizedAnimalLogo from "@/assets/motorized-animal-logo.png";
import tmgLogo from "@/assets/tmg-logo.svg";

const conventions = [{
  name: "MAW",
  location: "Commerce, CA",
  date: "February 8, 2026",
  logo: motorizedAnimalLogo
}, {
  name: "GX3",
  location: "San Jose, CA",
  date: "February 13, 2026",
  logo: gx3Logo
}, {
  name: "Redding Anime",
  location: "Redding, CA",
  date: "February 28, 2026",
  logo: reddingAnimeLogo
}, {
  name: "ECCC",
  location: "Seattle, WA",
  date: "March 5, 2026",
  logo: ecccLogo
}, {
  name: "GSFC",
  location: "San Diego, CA",
  date: "March 13, 2026",
  logo: gsfcLogo
}, {
  name: "FXDE",
  location: "Denver, CO",
  date: "May 28, 2026",
  logo: fxdeLogo
}, {
  name: "TMG",
  location: "Philadelphia, PA",
  date: "June 26, 2026",
  logo: tmgLogo
}, {
  name: "SDCC",
  location: "San Diego, CA",
  date: "July 23, 2026",
  logo: sdccLogo
}];
const UpcomingEvents = () => {
  return <section className="relative py-20 bg-forest overflow-hidden">
      <div className="absolute inset-0 bg-tropical-leaves opacity-40"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-white/80 text-lg">Find us at these upcoming conventions!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {conventions.map((convention, index) => <div key={index} style={{
          animationDelay: `${index * 100}ms`
        }} className="flex flex-col items-center text-center p-8 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in bg-[#30cf8a]">
              <div className="w-32 h-20 mb-4 flex items-center justify-center">
                <img src={convention.logo} alt={convention.name} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{convention.name}</h3>
              <p className="text-white/70 text-sm">{convention.location}</p>
              <p className="text-teal text-sm font-medium mt-2">{convention.date}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default UpcomingEvents;