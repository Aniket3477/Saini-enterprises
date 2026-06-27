import { Phone, MessageCircle, MapPin, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
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
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-light dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Visual background decorations */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-pink-200 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start self-center lg:self-start px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/35 text-pink-700 dark:text-pink-400 font-bold text-[11px] tracking-widest uppercase space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-primary" />
              <span>Premium Cosmetics & Gifts Boutique</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight"
              >
                SAINI ENTERPRISES
                <span className="block mt-2 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text gradient-pink">
                  सैनी एंटरप्राइजेज
                </span>
              </motion.h1>

              {/* Sub-categories row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-sm sm:text-base font-semibold text-zinc-600 dark:text-zinc-300"
              >
                <span className="text-pink-600 dark:text-pink-400">Cosmetics</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-purple-600 dark:text-purple-400">Gifts</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-amber-500">Beauty</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-purple-600 dark:text-purple-300">Accessories</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Discover premium cosmetics, thoughtful gifts, beauty essentials, fashion accessories, and everyday products—all in one place.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="tel:+916395349865"
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 text-white hover:bg-black font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span>Call Support</span>
              </a>

              <a
                href="https://wa.me/916395349865"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-pink-500 text-pink-600 dark:text-pink-400 bg-white dark:bg-zinc-900 font-bold text-sm hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Store</span>
              </a>

              <a
                href="https://maps.google.com/?q=SAINI+ENTERPRISES+Rawali+Mehdood+Haridwar"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>Get Directions</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-6 sm:pt-8 border-t border-pink-100 dark:border-zinc-900 flex justify-center lg:justify-start items-center space-x-8"
            >
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">100%</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest">Genuine Products</span>
              </div>
              <div className="w-px h-8 bg-pink-100 dark:bg-zinc-800" />
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">500+</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest">Beauty Items</span>
              </div>
              <div className="w-px h-8 bg-pink-100 dark:bg-zinc-800" />
              <div className="text-left">
                <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-pink-600 dark:text-pink-400">4.9/5</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest">Client Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative w-full max-w-md aspect-[4/5] sm:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800"
            >
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
                alt="Cosmetics & Gifts Boutique Showcase"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Floating elements inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 text-white">
                <span className="text-xs uppercase tracking-widest font-semibold text-accent flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-accent" /> Exclusive Bridal Kits
                </span>
                <h3 className="font-serif text-lg font-bold mt-1">Gifts That Inspire Love</h3>
                <p className="text-xs text-zinc-100 mt-1 line-clamp-2">
                  Elegant hampers, personalized gift arrangements, premium makeup palettes and custom wrapping available.
                </p>
              </div>
            </motion.div>

            {/* Extra floating badge outside */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:right-6 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-zinc-100 dark:border-zinc-700"
            >
              <div className="p-2.5 bg-rose-500 rounded-xl text-white">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="block font-bold text-sm text-zinc-900 dark:text-white">Family Owned</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Serving bahadarabad</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
