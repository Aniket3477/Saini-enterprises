import { useState } from 'react';
import { ShoppingCart, MessageSquare, Star, Sparkles, CheckCircle } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Featured() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cosmetics', 'Gift Items', 'Fashion Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleWhatsAppInquiry = (productName: string) => {
    const text = `Hello SAINI ENTERPRISES, I saw the beautiful *${productName}* on your website. Is this item currently in stock at your Bahadarabad store? I would love to know more about the pricing and available options!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916395349865?text=${encodedText}`, '_blank');
  };

  return (
    <section id="products" className="py-20 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">Featured Catalog</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              Featured Products in Store
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0 rounded" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal max-w-xl">
              Take a glance at some of our highly-demanded cosmetics, custom boutique gift sets, and luxury accessories available today.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 self-center md:self-end bg-zinc-50 dark:bg-zinc-800/60 p-1.5 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'gradient-pink text-white shadow-md scale-102'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-pink-400 hover:bg-white dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.01] border border-pink-100/30 dark:border-zinc-700/50"
              >
                {/* Product Image Panel */}
                <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-zinc-900/95 text-zinc-800 dark:text-zinc-200 shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Popular Stamp */}
                  {product.isPopular && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white shadow-sm">
                        <Sparkles className="w-3 h-3 fill-white" />
                        <span>Best Seller</span>
                      </span>
                    </div>
                  )}

                  {/* Overlay Availability Label */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>In Stock</span>
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    {/* Star Rating decoration */}
                    <div className="flex items-center space-x-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                      <span className="text-zinc-400 text-xs font-semibold ml-1.5">5.0</span>
                    </div>
                    
                    <h3 className="font-serif font-bold text-zinc-900 dark:text-white group-hover:text-primary dark:group-hover:text-pink-400 transition-colors text-base sm:text-lg line-clamp-1">
                      {product.name}
                    </h3>
                    
                    <span className="block text-xs font-medium text-zinc-400 dark:text-zinc-500">
                      SAINI Genuine Stock
                    </span>
                  </div>

                  {/* Interactive Button Panel */}
                  <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/40 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">
                      Available in Store
                    </span>

                    <button
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Promo banner at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-r from-pink-500/10 via-purple-500/5 to-amber-500/10 border border-pink-500/15 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Looking for something custom or specific brands?
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              We frequently procure imported perfumes, bridal cosmetic kits, customized party toys, and high-end accessories upon request.
            </p>
          </div>
          <a
            href="tel:+916395349865"
            className="px-6 py-3 rounded-xl gradient-pink text-white font-bold text-sm shadow-lg hover:shadow-pink-200/50 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
          >
            Special Order Request
          </a>
        </motion.div>

      </div>
    </section>
  );
}
