import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import hydeLogo from "@/assets/hyde-logo.png";
const Header = () => {
  return <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={hydeLogo} alt="Hyde Hermit Studio" className="h-12" />
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
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>;
};
export default Header;