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
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm mb-3">We Accept</p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#016FD0"/>
                    <path d="M15 12h4v8h-4z" fill="white"/>
                    <path d="M20 12h4v8h-4z" fill="white"/>
                    <path d="M25 12h4v8h-4z" fill="white"/>
                    <path d="M30 12h4v8h-4z" fill="white"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#1434CB"/>
                    <path d="M20 12l-6 8h12l6-8z" fill="#FFA200"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#00579F"/>
                    <path d="M18 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" fill="#FAA61A"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#EB001B"/>
                    <circle cx="18" cy="16" r="6" fill="#EB001B"/>
                    <circle cx="30" cy="16" r="6" fill="#F79E1B"/>
                    <path d="M24 10a6 6 0 0 0 0 12 6 6 0 0 0 0-12z" fill="#FF5F00"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#000000"/>
                    <path d="M24 10l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" fill="white"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#5A31F4"/>
                    <path d="M20 16l4-4v8l-4-4zm8-4v8l4-4-4-4z" fill="white"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#FF9900"/>
                    <path d="M18 12c2 2 2 5 0 8-2-2-2-6 0-8zm6 0c2 2 2 5 0 8-2-2-2-6 0-8zm6 0c2 2 2 5 0 8-2-2-2-6 0-8z" fill="#000000"/>
                  </svg>
                </div>
                <div className="bg-white rounded p-1.5 h-7 w-11 flex items-center justify-center">
                  <svg viewBox="0 0 48 32" className="h-4 w-auto">
                    <rect width="48" height="32" rx="4" fill="#5469D4"/>
                    <circle cx="18" cy="16" r="4" fill="white"/>
                    <circle cx="30" cy="16" r="4" fill="#5469D4" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-center md:text-right md:mt-8">&copy; {new Date().getFullYear()} Hyde Hermit Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
