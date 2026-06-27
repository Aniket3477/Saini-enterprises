import React, { useState } from 'react';
import { Sparkles, Gift, ShoppingBag, Baby, CheckCircle2, ArrowRight } from 'lucide-react';
import { STORE_CATEGORIES } from '../data';
import { motion } from 'motion/react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Sparkles: Sparkles,
  Gift: Gift,
  ShoppingBag: ShoppingBag,
  Baby: Baby
};

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleScrollToProducts = () => {
    const element = document.querySelector('#products');
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
      id="categories"
      className="py-20 sm:py-24 bg-brand-light/50 dark:bg-zinc-950/40 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#E91E63_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-secondary dark:text-purple-400">Our Offerings</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Explore Handpicked Collections
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            We offer an incredible blend of global cosmetics, elegant gifts, and modern accessories designed to make you shine and your loved ones smile.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STORE_CATEGORIES.map((cat, idx) => {
            const IconComp = iconMap[cat.iconName] || Sparkles;
            const borderColors: { [key: string]: string } = {
              cosmetics: 'border-t-4 border-pink-500',
              gifts: 'border-t-4 border-purple-500',
              accessories: 'border-t-4 border-yellow-500',
              kids: 'border-t-4 border-blue-400'
            };
            const currentBorder = borderColors[cat.id] || 'border-zinc-100 dark:border-zinc-800';

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col h-full bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden card-shadow hover:shadow-xl border-x border-b border-zinc-100 dark:border-zinc-800 group transition-all duration-300 hover:scale-[1.01] ${currentBorder}`}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                  
                  {/* Category Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3 text-white">
                    <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl border border-white/20">
                      <IconComp className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif font-bold text-lg leading-snug">{cat.title}</h3>
                  </div>
                </div>

                {/* Categories Items Details */}
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                      Premium Catalog Include
                    </span>
                    <ul className="space-y-2">
                      {cat.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-primary dark:text-pink-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 mt-6">
                    <button
                      onClick={handleScrollToProducts}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-primary dark:text-pink-400 group-hover:translate-x-1.5 transition-transform"
                    >
                      <span>View in Store Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
