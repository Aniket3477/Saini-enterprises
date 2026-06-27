import React from 'react';
import { ShieldCheck, Percent, Layers, Award, Heart, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';
import { motion } from 'motion/react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  ShieldCheck: ShieldCheck,
  Percent: Percent,
  Layers: Layers,
  Award: Award,
  Heart: Heart,
  MapPin: MapPin
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 sm:py-24 bg-zinc-50 dark:bg-zinc-950/60 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">Our Strengths</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Why Shop at Saini Enterprises?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            We are dedicated to building long-term relationships with Haridwar communities, driven by strict quality guidelines, fair pricing, and absolute warmth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((feat, idx) => {
            const IconComp = iconMap[feat.iconName] || ShieldCheck;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-[2rem] card-shadow border border-pink-100/40 dark:border-zinc-800/60 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10 dark:from-pink-950/40 dark:to-purple-950/40 flex items-center justify-center mb-6 group-hover:scale-108 transition-transform duration-300">
                  <IconComp className="w-8 h-8 text-primary dark:text-pink-400 group-hover:rotate-6 transition-transform" />
                </div>

                <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-white mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counter Section - Hand-Crafted */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 glass p-8 sm:p-12 rounded-[2.5rem] card-shadow">
          <div className="text-center space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary dark:text-pink-400">100%</span>
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 block">Genuine Brands</span>
          </div>
          <div className="text-center space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-purple-400">5,000+</span>
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 block">Happy Clients</span>
          </div>
          <div className="text-center space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500">10,000+</span>
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 block">Gifts Wrapped</span>
          </div>
          <div className="text-center space-y-1">
            <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-600 dark:text-purple-300">5+ Years</span>
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 block">Of Local Trust</span>
          </div>
        </div>

      </div>
    </section>
  );
}
