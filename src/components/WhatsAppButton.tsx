import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const text = "Hello SAINI ENTERPRISES, I am visiting your website and have a question regarding cosmetics or gift items. Can you please help me?";
    window.open(`https://wa.me/916395349865?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 select-none">
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
      
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap px-3.5 py-1.5 rounded-xl bg-zinc-900/90 text-white text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
