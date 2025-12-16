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

const portfolioImages = [
  { src: booth1, alt: "Hyde Hermit Studio booth at convention" },
  { src: booth2, alt: "Hyde Hermit Studio booth display" },
  { src: booth3, alt: "Hyde Hermit Studio convention setup" },
  { src: booth4, alt: "Hyde Hermit Studio booth with merchandise" },
  { src: booth5, alt: "Hyde Hermit Studio vendor booth" },
  { src: booth6, alt: "Hyde Hermit Studio at convention event" },
  { src: booth7, alt: "Hyde Hermit Studio booth setup" },
  { src: booth8, alt: "Hyde Hermit Studio merchandise display" },
];

const PhotoPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
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
