import { Button } from "@/components/ui/button";
import aboutMascot from "@/assets/about-mascot.jpg";
const About = () => {
  return <section id="about" className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Split layout container */}
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">
        {/* Left side - Full bleed image */}
        <div className="relative lg:w-[58%] min-h-[300px] lg:min-h-full">
          <img alt="Hyde Hermit Studio Mascot" className="absolute inset-0 w-full h-full object-cover object-center" src="/lovable-uploads/576704ab-10ed-4f90-9b97-f6aeec9f0a8a.jpg" />
        </div>
        
        {/* Right side - Content box with semi-transparent background */}
        <div className="lg:w-[42%] bg-teal/90 flex items-center">
          <div className="p-8 md:p-10 lg:p-12 xl:p-16 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hey, We're Hyde Hermit Studio!
            </h2>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-white/90">
              <p>
                Hyde Hermit Studio is a creative partnership between Hoi and Kai, two artists who specialize in making custom commission drawings, traditional artwork, tiki shirt apparel, plushies, keychains, tote bags, card mats, stickers, enamel pins, books, and prints.
              </p>
              <p>
                Our brand is represented by a unique hermit crab mascot named Hyde, which symbolizes the unique perspective of artists. Since 2017, we have been showcasing our work at events both locally in Los Angeles and out of state. We look forward to meeting you at future events.
              </p>
              <p>
                In addition to our physical artworks, we also offer live streaming on Twitch where we showcase the process of creating new products and give an exclusive behind-the-scenes look at our work. We invite you to come and visit us on Twitch and say hi as we continue to make new and exciting products.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg" className="bg-white text-teal hover:bg-white/90 shadow-none hover:shadow-none">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;