'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Luxury interior painting Belfast"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
        {/* Subtle gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-amber-950/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-amber-500/40 bg-amber-500/10 rounded-full backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-amber-400" />
          <span className="text-amber-300 text-xs font-semibold tracking-[0.15em] uppercase">
            Belfast&apos;s Premier Painting &amp; Decorating Service
          </span>
          <Sparkles size={12} className="text-amber-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1]"
        >
          Flawless Finishes.{' '}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Guaranteed Craftsmanship.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Professional domestic and commercial painting across Belfast. We don&apos;t just paint
          walls —{' '}
          <span className="text-white font-semibold">we transform spaces</span> with a 100%
          satisfaction guarantee.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 font-bold text-sm rounded-full tracking-wide hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
          >
            Get a Guaranteed Quote
          </button>
          <button
            onClick={() => scrollTo('#gallery')}
            className="w-full sm:w-auto px-9 py-4 border border-white/25 text-white font-semibold text-sm rounded-full tracking-wide hover:border-amber-400/60 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-300 backdrop-blur-sm"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">100%</span>
            <span className="text-slate-400 text-sm">Recommendation Rate</span>
          </div>
          <div className="hidden sm:block h-5 w-px bg-white/15" />
          <div className="text-sm text-slate-400">
            <span className="text-white font-bold">842+</span> Local Followers &amp; Clients
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#trust')}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400/50 hover:text-amber-400 transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase text-amber-400/40">Scroll</span>
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
}
