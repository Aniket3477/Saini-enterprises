import { Check, Store, ShieldAlert, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const highlights = [
    {
      title: 'A Legacy of Trust',
      desc: 'Deeply rooted in Haridwar, serving local families with genuine, curated merchandise.',
      icon: Store,
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300'
    },
    {
      title: 'Quality Above All',
      desc: 'We stock items only from certified manufacturers, completely avoiding cheap counter-feits.',
      icon: Award,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300'
    },
    {
      title: 'Exceptional Support',
      desc: 'Whether selecting a subtle lipstick shade or packing a complex festive gift, we assist you personally.',
      icon: Clock,
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300'
    }
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white dark:bg-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl -rotate-3 scale-102" />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-square border border-zinc-100 dark:border-zinc-800"
            >
              <img
                src="https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800"
                alt="SAINI ENTERPRISES Beautiful Shop Interior Cosmetics Counter"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-3xl font-serif font-extrabold block text-accent">5+</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-zinc-200">Years serving Uttarakhand</span>
              </div>
            </motion.div>
          </div>

          {/* About Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">About Our Boutique</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                Your Trusted Partner for Elegance & Thoughtful Gifting
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto lg:mx-0 rounded" />
            </div>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to <strong>SAINI ENTERPRISES (सैनी एंटरप्राइजेज)</strong>, a beautiful local hub situated on the busy Rawali Mehdood Main Road, Bahadarabad, Haridwar. For years, we have served as a premier destination for top-quality cosmetics, unique gift articles, and gorgeous daily fashion accessories.
              </p>
              <p>
                Our philosophy is simple: we believe that luxury and high quality shouldn't come with an unattainable price tag. By working directly with trusted beauty distributors, we provide authentic cosmetics like lipsticks, eyeliners, face creams, and hair care. At the same time, our collection of toys, greeting cards, teddy bears, and custom wrapping solutions makes every special event of your life memorable.
              </p>
            </div>

            {/* Highlights cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                const borderColors = [
                  'border-t-4 border-pink-500',
                  'border-t-4 border-purple-500',
                  'border-t-4 border-yellow-500'
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`p-5 rounded-2xl bg-white dark:bg-zinc-800 card-shadow transition-all hover:scale-[1.02] ${borderColors[index] || 'border-zinc-100 dark:border-zinc-800'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote block */}
            <div className="p-4 border-l-4 border-secondary bg-purple-500/5 rounded-r-xl">
              <p className="italic font-serif text-sm text-zinc-700 dark:text-zinc-300">
                "Whether it is a bridal makeover preparation, a child's birthday milestone, or packing custom corporate return gifts, we bring your vision to life with love and absolute care."
              </p>
              <span className="block mt-2 font-bold text-xs text-zinc-500 dark:text-zinc-400">— SAINI ENTERPRISES Family</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
