import { useEffect, useState } from "react";
import halftoneBackground from "@/assets/halftone-background.jpg";

const GoogleAds = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${halftoneBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: "transform"
        }}
      />
      
      {/* Overlay for better ad visibility */}
      <div className="absolute inset-0 bg-black z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ad Slot 1 */}
          <div className="relative min-h-[250px] border-2 border-dashed border-muted rounded-lg overflow-hidden bg-muted/20">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Advertisement
            </div>
            {/* Google Ad will be inserted here */}
            <img 
              alt="Advertisement" 
              className="w-full h-full object-cover" 
              src="https://tpc.googlesyndication.com/daca_images/simgad/14886815988342110867"
            />
          </div>

          {/* Ad Slot 2 */}
          <div className="relative min-h-[250px] border-2 border-dashed border-muted rounded-lg overflow-hidden bg-muted/20">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Advertisement
            </div>
            {/* Google Ad will be inserted here */}
            <img 
              alt="Advertisement" 
              className="w-full h-full object-cover" 
              src="https://tpc.googlesyndication.com/daca_images/simgad/14886815988342110867"
            />
          </div>

          {/* Ad Slot 3 */}
          <div className="relative min-h-[250px] border-2 border-dashed border-muted rounded-lg overflow-hidden bg-muted/20">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Advertisement
            </div>
            {/* Google Ad will be inserted here */}
            <img 
              alt="Advertisement" 
              className="w-full h-full object-cover" 
              src="https://tpc.googlesyndication.com/daca_images/simgad/14886815988342110867"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAds;
