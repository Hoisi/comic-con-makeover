import { useState, useRef, useEffect } from "react";
import { ShoppingCart, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import hydeLogo from "@/assets/hyde-logo.png";

const Header = () => {
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={hydeLogo} alt="Hyde Hermit Studio" className="h-16" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#custom" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Clients
          </a>
          <a href="#booth-portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Booth Portfolio
          </a>
          
          {/* Animated Search */}
          <div className="relative flex items-center">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
                isSearchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="h-8 w-full border-border/50 bg-background/50 text-sm"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="relative z-10"
            >
              {isSearchOpen ? (
                <X className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <Search className="h-5 w-5 transition-transform duration-200" />
              )}
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-teal text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;