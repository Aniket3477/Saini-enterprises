/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Featured from './components/Featured';
import WhyChooseUs from './components/WhyChooseUs';
import Occasions from './components/Occasions';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Simulated asset pre-loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader-screen" />}
      </AnimatePresence>

      <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans transition-colors duration-300 antialiased selection:bg-primary selection:text-white">
        {/* Sticky Header Nav */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Core Layout Sections */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Us Section */}
          <About />

          {/* Categories Grid Section */}
          <Categories />

          {/* Featured Store Products */}
          <Featured />

          {/* Unique Business Value Propositions */}
          <WhyChooseUs />

          {/* Event Gifting & Special Occasions Section */}
          <Occasions />

          {/* Interactive Lightbox Gallery */}
          <Gallery />

          {/* Verified Customer Reviews */}
          <Reviews />

          {/* Contact Details, Map & WhatsApp Inquiry Form */}
          <Contact />
        </main>

        {/* Footer Navigation & Copyrights */}
        <Footer />

        {/* Floating Utilities */}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}

