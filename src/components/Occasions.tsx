import React from 'react';
import { Cake, HeartHandshake, Sparkles, PartyPopper, Heart, CalendarRange, ArrowUpRight, Gift } from 'lucide-react';
import { SPECIAL_OCCASIONS } from '../data';
import { motion } from 'motion/react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Cake: Cake,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  PartyPopper: PartyPopper,
  Heart: Heart,
  CalendarRange: CalendarRange
};

export default function Occasions() {
  const handleWhatsAppOccasionInquiry = (occasionName: string) => {
    const text = `Hello SAINI ENTERPRISES, I am planning a celebration for *${occasionName}* and would like to order some custom-packaged gifts, cosmetics combos, or decorative showpieces. Can you help me arrange this?`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916395349865?text=${encodedText}`, '_blank');
  };

  return (
    <section id="occasions" className="py-20 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">Perfect Curations</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Celebrate Every Occasion
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Whether it's a personal birthday, an annual anniversary, a grand wedding, or traditional festivals like Diwali, Eid, Christmas, or Raksha Bandhan, we arrange bespoke gift wrappers and custom hampers.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPECIAL_OCCASIONS.map((occ, idx) => {
            const IconComp = iconMap[occ.iconName] || Gift;

            return (
              <motion.div
                key={occ.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative p-6 sm:p-8 bg-gradient-to-br ${occ.colorClass} border rounded-[2rem] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Upper Body */}
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700 text-current">
                    <IconComp className="w-6 h-6 shrink-0" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white">
                    {occ.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {occ.description}
                  </p>
                </div>

                {/* Lower Action Row */}
                <div className="pt-6 mt-6 border-t border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Bespoke Hamper
                  </span>

                  <button
                    onClick={() => handleWhatsAppOccasionInquiry(occ.title)}
                    className="flex items-center space-x-1 text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-primary dark:group-hover:text-pink-400 transition-colors"
                  >
                    <span>Request Hamper</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extended occasion lists */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
            Including beautiful curated supplies for <span className="font-semibold text-zinc-700 dark:text-zinc-300">Housewarming Gifts, Baby Showers, New Year, Christmas, Raksha Bandhan, Diwali, and Teej celebrations</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
