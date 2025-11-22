import { Facebook, Instagram, Twitter, Mail, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Hyde Hermit Studio</h3>
            <p className="text-white/80">
              Handcrafted curiosities and custom creations
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#custom" className="text-white/80 hover:text-white transition-colors">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="TikTok">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Bluesky">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-4">We Accept</p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Pay_logo.svg/320px-Amazon_Pay_logo.svg.png" alt="Amazon Pay" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Discover_Card_logo.svg" alt="Discover" className="h-6 w-auto" />
                </div>
              </div>
            </div>
            <p className="text-white/60 text-center">&copy; {new Date().getFullYear()} Hyde Hermit Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
