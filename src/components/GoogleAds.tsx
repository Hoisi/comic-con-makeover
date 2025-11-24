const GoogleAds = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
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
