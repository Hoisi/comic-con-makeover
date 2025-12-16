import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const products = [{
  name: "Miniature Dragon",
  originalPrice: "$65.00",
  salePrice: "$45.00",
  savings: "31%",
  image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=400&fit=crop",
  badges: ["SALE", "LIMITED STOCK", "SHIPS MID JAN"],
  daysLeft: 54
}, {
  name: "Enchanted Dice Set",
  originalPrice: "$45.00",
  salePrice: "$32.00",
  savings: "29%",
  image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
  badges: ["SALE", "SHIPS MID JAN"],
  daysLeft: 54
}, {
  name: "Woodland Diorama",
  originalPrice: "$85.00",
  salePrice: "$68.00",
  savings: "20%",
  image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
  badges: ["SHIPS MID DEC"],
  daysLeft: 54
}, {
  name: "Glowing Mushroom",
  originalPrice: "$38.00",
  salePrice: "$28.00",
  savings: "26%",
  image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&h=400&fit=crop",
  badges: ["SHIPS MID JAN"],
  daysLeft: 54
}];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted Curiosities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ​
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden relative rounded-lg m-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="text-[0.65rem] px-2 py-1 rounded-full uppercase tracking-widest font-medium"
                      style={{
                        backgroundColor: 'hsl(var(--teal))',
                        color: 'hsl(var(--primary-foreground))'
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Container */}
              <div className="px-4 pb-2">
                <h3 className="font-bold text-lg uppercase tracking-wide text-foreground mb-2 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-muted-foreground line-through text-sm">
                    {product.originalPrice}
                  </span>
                  <span className="text-teal font-medium">
                    {product.salePrice}
                  </span>
                  {product.savings && (
                    <span className="text-teal text-xs">
                      Save {product.savings}!
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Section */}
              <div className="px-4 pb-4">
                <div
                  className="h-1 rounded-full mb-2"
                  style={{ backgroundColor: 'hsl(var(--muted-foreground) / 0.3)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '54%',
                      backgroundColor: 'hsl(var(--teal))'
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-3 h-3 text-teal" />
                  <span className="text-teal font-medium">Limited Time</span>
                  <span className="text-muted-foreground ml-auto">
                    {product.daysLeft} Days Left
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
