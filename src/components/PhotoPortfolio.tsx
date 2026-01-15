import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import booth1 from "@/assets/booth-1.jpg";
import booth2 from "@/assets/booth-2.jpg";
import booth3 from "@/assets/booth-3.jpg";
import booth4 from "@/assets/booth-4.jpg";
import booth5 from "@/assets/booth-5.jpg";
import booth6 from "@/assets/booth-6.jpg";
import booth7 from "@/assets/booth-7.jpg";
import booth8 from "@/assets/booth-8.jpg";
import booth9 from "@/assets/booth-9.jpg";
import booth10 from "@/assets/booth-10.jpg";
import booth11 from "@/assets/booth-11.jpg";
import booth12 from "@/assets/booth-12.jpg";
import booth13 from "@/assets/booth-13.jpg";
import booth14 from "@/assets/booth-14.jpg";
import booth15 from "@/assets/booth-15.jpg";

const portfolioImages = [
  { src: booth1, alt: "Hyde Hermit Studio booth at convention" },
  { src: booth2, alt: "Hyde Hermit Studio booth display" },
  { src: booth3, alt: "Hyde Hermit Studio convention setup" },
  { src: booth4, alt: "Hyde Hermit Studio booth with merchandise" },
  { src: booth5, alt: "Hyde Hermit Studio vendor booth" },
  { src: booth6, alt: "Hyde Hermit Studio at convention event" },
  { src: booth7, alt: "Hyde Hermit Studio booth setup" },
  { src: booth8, alt: "Hyde Hermit Studio merchandise display" },
  { src: booth9, alt: "Hyde Hermit Studio outdoor booth" },
  { src: booth10, alt: "Hyde Hermit Studio tent setup" },
  { src: booth11, alt: "Hyde Hermit Studio outdoor vendor display" },
  { src: booth12, alt: "Hyde Hermit Studio full booth display with plushies and pins" },
  { src: booth13, alt: "Hyde Hermit Studio indoor convention booth with banner" },
  { src: booth14, alt: "Hyde Hermit Studio outdoor tent setup with colorful display" },
  { src: booth15, alt: "Hyde Hermit Studio convention booth with plushies and merchandise" },
];

const PhotoPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="booth-portfolio" className="py-16 relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Booth Portfolio
        </h2>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Portfolio image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoPortfolio;
