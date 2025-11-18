import { Card } from "@/components/ui/card";

const AdBanner = () => {
  return (
    <div className="sticky top-16 z-40 bg-forest/95 backdrop-blur-sm border-b border-border py-3">
      <div className="container">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Ad Slot 1 */}
          <Card className="bg-muted border-2 border-dashed border-border/50 h-[90px] w-[728px] max-w-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-medium">Advertisement</p>
              <p className="text-xs text-muted-foreground/60">728 x 90</p>
            </div>
          </Card>

          {/* Ad Slot 2 - Desktop Only */}
          <Card className="hidden lg:flex bg-muted border-2 border-dashed border-border/50 h-[90px] w-[300px] items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-medium">Advertisement</p>
              <p className="text-xs text-muted-foreground/60">300 x 90</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
