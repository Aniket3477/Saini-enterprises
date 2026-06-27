import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 sm:py-24 bg-brand-light/30 dark:bg-zinc-950/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">Visual Tour</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Our Store Gallery
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Take a virtual tour of SAINI ENTERPRISES. See our organized product shelves, high-quality cosmetics counters, and beautiful gift collection displays.
          </p>
        </div>

        {/* Modern Bento/Grid Gallery Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6" />

              {/* Hover Contents */}
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-white">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg">
                    {item.title}
                  </h3>
                </div>
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Lightbox Implementation */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Central Image and Caption Card */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full flex flex-col items-center gap-4"
              >
                <div className="w-full aspect-[4/3] max-h-[70vh] rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                  <img
                    src={GALLERY_IMAGES[lightboxIndex].image}
                    alt={GALLERY_IMAGES[lightboxIndex].title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Caption Panel */}
                <div className="text-center text-white space-y-1 mt-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-accent">
                    {GALLERY_IMAGES[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    {GALLERY_IMAGES[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Image {lightboxIndex + 1} of {GALLERY_IMAGES.length}
                  </p>
                </div>
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
