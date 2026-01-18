import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem, isLoading } = useCartStore();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(24);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("No variant available");
      return;
    }

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });

    toast.success(`${product.node.title} added to cart!`);
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-background">
        <div className="container">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-teal" />
            <span className="ml-2 text-muted-foreground">Loading products...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-background">
        <div className="container">
          <div className="text-center py-20">
            <p className="text-destructive">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="products" className="py-20 bg-background">
        <div className="container">
          <div className="text-center py-20">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No products found</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted curiosities and custom creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => {
            const image = product.node.images.edges[0]?.node;
            const price = product.node.priceRange.minVariantPrice;
            const variant = product.node.variants.edges[0]?.node;
            const isAvailable = variant?.availableForSale ?? true;

            return (
              <Link
                to={`/product/${product.node.handle}`}
                key={product.node.id}
                className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden relative rounded-lg m-2">
                  {image ? (
                    <img
                      src={image.url}
                      alt={image.altText || product.node.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center rounded-lg">
                      <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                  {!isAvailable && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[0.65rem] px-2 py-1 rounded-full uppercase tracking-widest font-medium bg-destructive text-destructive-foreground">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Container */}
                <div className="px-4 pb-2">
                  <h3 className="font-bold text-lg uppercase tracking-wide text-foreground mb-2 leading-snug line-clamp-2">
                    {product.node.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-teal font-medium text-lg">
                      ${parseFloat(price.amount).toFixed(2)} {price.currencyCode}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="px-4 pb-4">
                  <Button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full bg-teal hover:bg-teal/90 text-primary-foreground"
                    size="sm"
                    disabled={!isAvailable || isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {isAvailable ? 'Add to Cart' : 'Sold Out'}
                      </>
                    )}
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
