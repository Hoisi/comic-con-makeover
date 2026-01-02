import gx3Logo from "@/assets/gx3-logo.webp";
import gsfcLogo from "@/assets/gsfc-logo.png";
import fxdeLogo from "@/assets/fxde-logo.png";
import reddingAnimeLogo from "@/assets/redding-anime-logo.png";

const conventions = [
  {
    name: "GX3",
    location: "Anaheim, CA",
    date: "January 2025",
    logo: gx3Logo,
  },
  {
    name: "GSFC",
    location: "San Diego, CA",
    date: "March 2025",
    logo: gsfcLogo,
  },
  {
    name: "FXDE",
    location: "TBD",
    date: "2025",
    logo: fxdeLogo,
  },
  {
    name: "Redding Anime",
    location: "Redding, CA",
    date: "2026",
    logo: reddingAnimeLogo,
  },
];

const UpcomingEvents = () => {
  return (
    <section className="relative py-20 bg-forest overflow-hidden">
      <div className="absolute inset-0 bg-tropical-leaves opacity-40"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-white/80 text-lg">Find us at these upcoming conventions!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {conventions.map((convention, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-forest-light/50 hover:bg-forest-light transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-32 h-20 mb-4 flex items-center justify-center">
                <img 
                  src={convention.logo} 
                  alt={convention.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{convention.name}</h3>
              <p className="text-white/70 text-sm">{convention.location}</p>
              <p className="text-teal text-sm font-medium mt-2">{convention.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
