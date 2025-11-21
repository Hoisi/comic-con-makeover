import { Button } from "@/components/ui/button";
import ParallaxLayer from "@/components/ParallaxLayer";

const Community = () => {
  return (
    <section className="relative py-12 bg-forest overflow-hidden">
      <ParallaxLayer speed={0.35} className="absolute inset-0 bg-tropical-flowers opacity-30" />
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto bg-terracotta rounded-lg overflow-hidden">
          <div className="flex items-center flex-col md:flex-row">
            {/* Mascot Image Section */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-white/10 flex items-center justify-center border-r-0 md:border-r-2 border-dashed border-white/30">
              <span className="text-white/60 text-center px-4">Add your Discord mascot image here</span>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Join Our Discord Community!
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Connect with fellow creators, share your work, and get exclusive updates
              </p>
              <div>
                <Button 
                  asChild
                  className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto rounded-md shadow-lg hover:shadow-xl transition-all"
                >
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
