import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
const products = [{
  name: "Miniature Dragon",
  originalPrice: "$65.00",
  salePrice: "$45.00",
  savings: "31%",
  image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=400&fit=crop",
  description: "Hand-painted fantasy creature",
  badges: ["SALE", "LIMITED STOCK", "SHIPS MID JANUARY"],
  daysLeft: 54
}, {
  name: "Enchanted Dice Set",
  originalPrice: "$45.00",
  salePrice: "$32.00",
  savings: "29%",
  image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
  description: "Custom resin dice with magical swirls",
  badges: ["SALE", "SHIPS MID JANUARY"],
  daysLeft: 54
}, {
  name: "Woodland Diorama",
  originalPrice: "$85.00",
  salePrice: "$68.00",
  savings: "20%",
  image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
  description: "Miniature forest scene in glass",
  badges: ["SHIPS MID DECEMBER"],
  daysLeft: 54
}, {
  name: "Glowing Mushroom",
  originalPrice: "$38.00",
  salePrice: "$28.00",
  savings: "26%",
  image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&h=400&fit=crop",
  description: "LED-lit decorative piece",
  badges: ["SHIPS MID JANUARY"],
  daysLeft: 54
}];
const Products = () => {
  return <section id="products" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted Curiosities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ​
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-0 rounded-xl" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="aspect-square overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} className="bg-teal text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                      {badge}
                    </Badge>)}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1 text-foreground uppercase tracking-wide">{product.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  <span className="text-xl font-bold text-secondary">{product.salePrice}</span>
                  <span className="text-xs text-teal font-semibold">Save {product.savings}</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-teal font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 bg-teal rounded-full"></span>
                      Limited Time
                    </span>
                    <span className="text-muted-foreground">{product.daysLeft} Days Left</span>
                  </div>
                  <Progress value={35} className="h-1.5" />
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>;
};
export default Products;