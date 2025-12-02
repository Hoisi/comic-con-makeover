import { Instagram } from "lucide-react";
import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-16 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: 'url(/images/palm-pattern.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80"></div>
      <div className="container relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Follow Us on Instagram</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            @hydehermit - Check out our latest updates and behind-the-scenes content
          </p>
        </div>

        <div className="elfsight-app-b3afc477-e22f-4767-b4b9-f2d40c87bf1f" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramFeed;
