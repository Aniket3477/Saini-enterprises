import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Send, CheckCircle2, Clock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  inquiryType: string;
  message: string;
  date: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Cosmetics');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recentSubmissions, setRecentSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    // Load submissions from localStorage
    try {
      const saved = localStorage.getItem('saini_inquiries');
      if (saved) {
        setRecentSubmissions(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load inquiries', e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const newSubmission: ContactSubmission = {
      id: 'sub_' + Date.now(),
      name,
      phone,
      inquiryType,
      message,
      date: new Date().toLocaleDateString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newSubmission, ...recentSubmissions];
    setRecentSubmissions(updated);
    try {
      localStorage.setItem('saini_inquiries', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setInquiryType('Cosmetics');
    setMessage('');
    setIsSubmitted(false);
  };

  const handleSendToWhatsAppDirectly = () => {
    const text = `Hello SAINI ENTERPRISES,\nMy name is *${name}* (${phone}).\nI am inquiring about *${inquiryType}*:\n"${message}"\n\nSent from SAINI website.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/916395349865?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-brand-light/30 dark:bg-zinc-950/40 relative overflow-hidden"
    >
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-primary dark:text-pink-400">Get in Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Visit Us or Contact Today
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded" />
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            We are located right on Rawali Mehdood Main Road. Feel free to call us directly, message on WhatsApp, or send an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Store Information Card */}
            <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-pink-100/30 dark:border-zinc-800/80 card-shadow space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
                  SAINI ENTERPRISES
                </h3>
                <span className="text-xs font-bold text-transparent bg-clip-text gradient-pink block uppercase tracking-widest">
                  सैनी एंटरप्राइजेज
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">Our Address</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                      Rawali Mehdood Main Road,<br />
                      Brahmpuri, Bahadarabad,<br />
                      Haridwar, Uttarakhand – 249402
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">Phone & WhatsApp</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      +91 63953 49865
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">Store Timings</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      09:00 AM – 09:30 PM (All Days Open)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-pink-100/20 dark:border-zinc-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+916395349865"
                  className="flex items-center justify-center space-x-2 flex-grow py-3 px-4 rounded-xl gradient-pink text-white font-bold text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>
                <a
                  href="https://wa.me/916395349865"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center space-x-2 flex-grow py-3 px-4 rounded-xl border-2 border-pink-500 text-pink-600 dark:text-pink-400 font-bold text-xs hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 flex-grow min-h-[220px] aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
              <iframe
                title="Saini Enterprises Location Map Bahadrabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13838.25608889953!2d78.03159935293233!3d29.919864269874837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949df249980d9%3A0xc3cfbe5343d92f75!2sBahadrabad%2C%20Uttarakhand%20249402!5e0!3m2!1sen!2sin!4v1719500000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="h-full p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-pink-100/30 dark:border-zinc-800 card-shadow flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                        Send an Instant Inquiry
                      </h3>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        Fill in your details below and we will contact you back or save your list.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-name" className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="E.g. Priya Saini"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-primary dark:focus:border-pink-500 text-zinc-800 dark:text-zinc-100"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-phone" className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                          Phone Number <span className="text-primary">*</span>
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="E.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-primary dark:focus:border-pink-500 text-zinc-800 dark:text-zinc-100"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type select */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-inquiry" className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                        What are you looking for?
                      </label>
                      <select
                        id="form-inquiry"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-primary dark:focus:border-pink-500 text-zinc-800 dark:text-zinc-100"
                      >
                        <option value="Cosmetics">Cosmetics & Makeup kits</option>
                        <option value="Gift Hampers">Custom Gift Packs / Teddy Bears</option>
                        <option value="Fashion Accessories">Designer Handbags & Jewelry</option>
                        <option value="Kids & Toys">Kids School items / Soft Toys</option>
                        <option value="Special Occasion">Bridal Package / Festival Bulk Gifts</option>
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-message" className="text-xs font-bold text-zinc-600 dark:text-zinc-300">
                        Your Message / List <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="E.g. I need to order a gift hamper for my sister's birthday on next Sunday. Please suggest customized showpiece combinations..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-primary dark:focus:border-pink-500 text-zinc-800 dark:text-zinc-100 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-sm gradient-pink text-white hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Online Inquiry</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center space-y-6 py-12 flex-grow"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                        Thank you, <strong>{name}</strong>! Your inquiry about <strong>{inquiryType}</strong> has been logged in our local storage system successfully.
                      </p>
                    </div>

                    {/* Double-action for WhatsApp */}
                    <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 w-full max-w-md space-y-4">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider">
                        ⚡ Quick WhatsApp Option
                      </span>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Would you also like to send this query directly to our WhatsApp? This sends your message instantly to the store owner's phone for immediate response.
                      </p>
                      <button
                        onClick={handleSendToWhatsAppDirectly}
                        className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send to WhatsApp Now</span>
                      </button>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="text-xs font-semibold text-zinc-400 hover:text-primary dark:hover:text-pink-400 transition-colors underline decoration-dotted"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
