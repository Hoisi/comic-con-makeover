import { Calendar } from "lucide-react";

const UpcomingEvents = () => {
  return (
    <section className="relative py-20 bg-forest overflow-hidden">
      <div className="absolute inset-0 bg-tropical-leaves opacity-40"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-white/80 text-lg">Stay tuned for exciting events coming soon!</p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center p-8 rounded-lg bg-forest-light/50">
            <div className="mb-4 p-4 rounded-full bg-primary/10">
              <Calendar className="h-12 w-12 text-teal" />
            </div>
            <p className="text-white/80 text-lg">Events coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
