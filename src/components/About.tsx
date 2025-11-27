import { Button } from "@/components/ui/button";
import aboutMascot from "@/assets/about-mascot.jpg";
const About = () => {
  return <section id="about" className="py-20 bg-teal">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src={aboutMascot} alt="Hyde Hermit Studio Mascot" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hey, We're Hyde Hermit Studio!
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/90">
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