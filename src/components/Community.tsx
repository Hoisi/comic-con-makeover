import { Button } from "@/components/ui/button";
import discordMascot from "@/assets/discord-mascot.png";
const Community = () => {
  return <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-90" style={{
      backgroundImage: 'url(/images/hyde-pattern.jpg)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/60 to-forest/80"></div>
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto bg-terracotta rounded-lg overflow-hidden">
          <div className="flex items-center flex-col md:flex-row">
            {/* Mascot Image Section */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square flex items-center justify-center p-8">
              <img alt="Hyde mascot holding Discord logo" className="w-full h-full object-contain" src="/lovable-uploads/93087fe6-c70c-4afa-8dfd-f8d325236f9d.png" />
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
                <Button asChild className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto rounded-md shadow-lg hover:shadow-xl transition-all">
                  <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/mynBhc2zvA">
                    Join
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Community;