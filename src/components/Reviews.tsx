import { Star, Quote, Heart } from 'lucide-react';
import { REVIEWS } from '../data';
import { motion } from 'motion/react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Loved by Our Community
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Read real feedback from our regular customers in Bahadarabad and Haridwar who trust Saini Enterprises for their beauty and celebratory gifting moments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 rounded-[2.5rem] bg-white dark:bg-zinc-800 border border-pink-100/30 dark:border-zinc-800 flex flex-col justify-between card-shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-primary/10 dark:text-pink-500/10">
                <Quote className="w-12 h-12 transform rotate-180 fill-current" />
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center space-x-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 italic leading-relaxed font-normal relative z-10">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer Profile */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-zinc-200/40 dark:border-zinc-800/40 relative z-10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-primary/25"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                    {rev.name}
                    <span className="inline-flex items-center text-[10px] bg-primary/10 text-primary dark:bg-pink-400/10 dark:text-pink-300 px-1.5 py-0.5 rounded font-normal">
                      Verified Client
                    </span>
                  </h4>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 block">
                    {rev.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Google trust note */}
        <div className="mt-12 text-center flex items-center justify-center space-x-2 text-xs text-zinc-400">
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          <span>Rated 5.0 out of 5 stars based on local customer feedback</span>
        </div>

      </div>
    </section>
  );
}
