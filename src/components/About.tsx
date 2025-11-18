import { Button } from "@/components/ui/button";
import aboutMascot from "@/assets/about-mascot.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-teal">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={aboutMascot}
                alt="Hyde Hermit Studio Mascot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hey, We're Hyde Hermit Studio!
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/90">
              <p>
                Hyde Hermit Studio was founded on the belief that art and imagination should be accessible to everyone. 
                What started as a small workshop has blossomed into a vibrant creative space where unique handcrafted 
                items come to life.
              </p>
              <p>
                Every piece we create is made with passion and attention to detail. From miniature fantasy creatures 
                to custom dice sets and enchanting dioramas, we pour our hearts into each creation. We believe that 
                handmade items carry a special magic that mass-produced goods simply cannot replicate.
              </p>
              <p>
                Our studio is more than just a business—it's a community of creative souls who share a love for 
                craftsmanship and imagination. Whether you're a collector, a gamer, or simply someone who appreciates 
                the beauty of handmade art, we invite you to explore our world and become part of our story.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg" className="bg-white text-teal hover:bg-white/90">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
