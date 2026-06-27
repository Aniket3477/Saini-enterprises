import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPromoIdx, setCurrentPromoIdx] = useState(0);

  const promos = [
    { text: "✨ FESTIVE CELEBRATION: Get Up To 20% Off On Custom Gift Hampers! • Order via WhatsApp 🎁", link: "https://wa.me/916395349865" },
    { text: "💄 GLAMOUR EXCLUSIVE: Flat 10% Off On Premium Cosmetics Combos! • Limited Time Only ✨", link: "https://wa.me/916395349865" },
    { text: "📍 VISIT OUR HARIDWAR STORE: Explore 500+ Beauty Products & Accessories! 🛍️", href: "#categories" },
    { text: "🎉 SPECIAL OFFER: Free Bespoke Gift Wrapping on Orders Above ₹499! • Chat to Customize 💝", link: "https://wa.me/916395349865" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setCurrentPromoIdx((prev) => (prev + 1) % promos.length);
    }, 4500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, [promos.length]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Products', href: '#products' },
    { name: 'Special Occasions', href: '#occasions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 110; // height of header with promo banner
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* Auto-rotating promotional banner */}
      <div className="gradient-pink text-white text-[10px] sm:text-xs font-bold tracking-wider py-1.5 px-4 overflow-hidden relative flex items-center justify-center border-b border-white/10 shadow-sm z-10 select-none">
        <div className="max-w-7xl mx-auto w-full text-center relative flex items-center justify-center h-4 sm:h-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPromoIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center w-full"
            >
              {promos[currentPromoIdx].link ? (
                <a
                  href={promos[currentPromoIdx].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center justify-center gap-1.5 cursor-pointer w-full truncate px-4"
                >
                  {promos[currentPromoIdx].text}
                </a>
              ) : (
                <a
                  href={promos[currentPromoIdx].href}
                  onClick={(e) => {
                    if (promos[currentPromoIdx].href?.startsWith('#')) {
                      handleLinkClick(e, promos[currentPromoIdx].href);
                    }
                  }}
                  className="hover:underline flex items-center justify-center gap-1.5 cursor-pointer w-full truncate px-4"
                >
                  {promos[currentPromoIdx].text}
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex flex-col select-none group"
          >
            <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase">
              SAINI ENTERPRISES
            </span>
            <span className="text-[10px] font-bold tracking-widest text-primary dark:text-pink-400 uppercase -mt-0.5">
              सैनी एंटरप्राइजेज • PREMIUM COSMETICS & GIFTS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-pink-400 transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-pink-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions & Toggles */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-pink-400 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Quick Contact Buttons */}
            <a
              href="tel:+916395349865"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full gradient-pink text-white font-bold text-xs shadow-md hover:shadow-pink-200/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/916395349865"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-pink-500 text-pink-600 dark:text-pink-400 font-bold text-xs hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburguer & Theme Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-pink-400 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-pink-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-800 dark:text-zinc-200 hover:bg-brand-light dark:hover:bg-zinc-900 hover:text-primary dark:hover:text-pink-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
                <a
                  href="tel:+916395349865"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary dark:text-pink-400 font-medium text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +91 63953 49865</span>
                </a>
                <a
                  href="https://wa.me/916395349865"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
