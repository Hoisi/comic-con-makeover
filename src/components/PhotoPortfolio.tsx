import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Placeholder images with varying aspect ratios for masonry effect
const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800", alt: "Convention booth display" },
  { src: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=800", alt: "Cosplay photo 1" },
  { src: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800", alt: "Merchandise display" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", alt: "Event setup" },
  
  { src: "https://images.unsplash.com/photo-1594652634010-275456c808d0?w=800", alt: "Convention crowd" },
  { src: "https://images.unsplash.com/photo-1608889175638-9322300c46e8?w=800", alt: "Product showcase" },
  { src: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800", alt: "Cosplay group" },
  { src: "https://images.unsplash.com/photo-1612036781124-847f8939b154?w=800", alt: "Booth visitors" },
  { src: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=800", alt: "Custom merchandise" },
  { src: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=800", alt: "Event highlights" },
  { src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800", alt: "Convention hall" },
];

const PhotoPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

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
