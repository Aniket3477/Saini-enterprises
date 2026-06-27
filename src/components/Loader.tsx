import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white"
    >
      <div className="text-center space-y-6">
        {/* Animated Brand Core Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-primary to-secondary text-accent shadow-2xl relative"
        >
          <Sparkles className="w-10 h-10 fill-accent" />
        </motion.div>

        {/* Brand Text */}
        <div className="space-y-1.5">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            SAINI ENTERPRISES
          </motion.h1>
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium"
          >
            सैनी एंटरप्राइजेज • Haridwar
          </motion.span>
        </div>

        {/* Loading Bar */}
        <div className="w-40 h-1 bg-zinc-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="relative w-1/2 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
