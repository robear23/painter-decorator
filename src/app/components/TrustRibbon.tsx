'use client';

import { motion } from 'framer-motion';
import { ThumbsUp, ShieldCheck, PoundSterling } from 'lucide-react';

const stats = [
  {
    icon: ThumbsUp,
    title: '100% Recommendation Rate',
    description: "A perfect score from every satisfied client across Belfast",
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guaranteed',
    description: "We stand behind every job — if you're not happy, we make it right",
  },
  {
    icon: PoundSterling,
    title: 'Budget-Friendly Rates',
    description: 'Premium quality craftsmanship at highly competitive local pricing',
  },
];

export default function TrustRibbon() {
  return (
    <section id="why-us" className="bg-slate-950 border-y border-amber-500/20 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-amber-500/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-8 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                <stat.icon size={22} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1.5">{stat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
