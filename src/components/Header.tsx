import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartDrawer } from "@/components/CartDrawer";
import hydeLogo from "@/assets/hyde-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header = () => {
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
        <Link to="/" className="flex items-center gap-2">
          <img src={hydeLogo} alt="Hyde Hermit Studio" className="h-16" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="bg-transparent text-sm font-medium text-foreground hover:text-primary hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
                  onClick={() => {
                    const element = document.getElementById('products');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2 bg-card border border-border shadow-lg">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/#products"
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">Pins</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/#products"
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">Stickers</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/#products"
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">Prints</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/#products"
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">Apparel</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/products"
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium text-teal">View All →</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a href="/#custom" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Clients
          </a>
          <a href="/#booth-portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
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

          <CartDrawer />
        </nav>
      </div>
    </header>
  );
};

export default Header;
