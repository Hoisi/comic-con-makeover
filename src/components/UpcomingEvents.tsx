const conventions = [
  {
    name: "Tiki Con",
    location: "San Diego, CA",
    date: "March 2025",
  },
  {
    name: "Island Fest",
    location: "Miami, FL", 
    date: "April 2025",
  },
  {
    name: "Pacific Pop Expo",
    location: "Portland, OR",
    date: "May 2025",
  },
  {
    name: "Aloha Comic Con",
    location: "Honolulu, HI",
    date: "June 2025",
  },
  {
    name: "Tropical Traders Fair",
    location: "Austin, TX",
    date: "July 2025",
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {conventions.map((convention, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-forest-light/50 hover:bg-forest-light transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mb-4 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-teal">
                {convention.name.split(' ').map(w => w[0]).join('')}
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
