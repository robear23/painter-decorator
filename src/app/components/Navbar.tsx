'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/20 shadow-xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-amber-500/40 group-hover:ring-amber-400/70 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="SB Painter and Decorator Logo"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="text-left">
                <p className="font-serif text-base font-bold text-white leading-none tracking-wide">SB</p>
                <p className="text-amber-400 text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
                  Painter & Decorator
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-200 tracking-wide font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden md:flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 text-sm font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 group"
            >
              Get a Guaranteed Quote
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-amber-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-slate-950 border-l border-amber-500/20 flex flex-col pt-24 pb-8 md:hidden"
            >
              <div className="px-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left py-3.5 px-4 text-slate-300 hover:text-amber-400 hover:bg-amber-500/8 rounded-xl transition-all text-sm font-medium border-b border-slate-800/80"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-auto px-6">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-full text-sm tracking-wide hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  Get a Guaranteed Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
