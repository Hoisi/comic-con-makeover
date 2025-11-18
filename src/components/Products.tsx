import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const products = [
  {
    name: "Miniature Dragon",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=400&fit=crop",
    description: "Hand-painted fantasy creature",
  },
  {
    name: "Enchanted Dice Set",
    price: "$32.00",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
    description: "Custom resin dice with magical swirls",
  },
  {
    name: "Woodland Diorama",
    price: "$68.00",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
    description: "Miniature forest scene in glass",
  },
  {
    name: "Glowing Mushroom",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&h=400&fit=crop",
    description: "LED-lit decorative piece",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted Curiosities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is meticulously crafted with love and attention to detail, bringing magic to everyday life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                <p className="font-bold text-secondary">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="default" className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
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
