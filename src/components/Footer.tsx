import React from 'react';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, '#home')}
              className="flex flex-col select-none"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                SAINI ENTERPRISES
              </span>
              <span className="text-xs font-sans tracking-widest text-primary dark:text-pink-400 font-bold">
                सैनी एंटरप्राइजेज • COSMETICS & GIFTS
              </span>
            </a>
            
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Your premium destination for authentic cosmetics, gorgeous fashion handbags, cuddly soft toys, decorative items, and personalized festive gifting bundles. Proudly serving the Haridwar district with trust.
            </p>

            {/* Social Handles */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/916395349865"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp Store"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollToSection(e, '#home')}
                  className="hover:text-primary transition-colors block py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollToSection(e, '#about')}
                  className="hover:text-primary transition-colors block py-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => handleScrollToSection(e, '#categories')}
                  className="hover:text-primary transition-colors block py-1"
                >
                  Product Categories
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleScrollToSection(e, '#products')}
                  className="hover:text-primary transition-colors block py-1"
                >
                  Featured Products
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollToSection(e, '#gallery')}
                  className="hover:text-primary transition-colors block py-1"
                >
                  Store Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Directions Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-sans">Contact & Help</h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <span className="text-zinc-500 leading-normal">
                  Rawali Mehdood Main Road, Brahmpuri, Bahadarabad, Haridwar, Uttarakhand – 249402
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-primary shrink-0" />
                <a href="tel:+916395349865" className="hover:text-primary transition-colors">
                  +91 63953 49865
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=SAINI+ENTERPRISES+Rawali+Mehdood+Haridwar"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-accent uppercase tracking-wider hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Row: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {currentYear} SAINI ENTERPRISES. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-primary fill-primary" />
            <span>for Saini Enterprises (सैनी एंटरप्राइजेज)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
