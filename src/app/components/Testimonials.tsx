'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Margaret O'Brien",
    location: 'Malone Road, Belfast',
    date: 'March 2024',
    rating: 5,
    text: 'Steven transformed our entire downstairs in just three days. The attention to detail was incredible — the skirting boards and coving look absolutely immaculate. Would recommend to absolutely anyone in Belfast without hesitation.',
    service: 'Interior Decorating',
    initials: 'MO',
  },
  {
    name: 'Patrick Sullivan',
    location: 'Lisburn Road, Belfast',
    date: 'January 2024',
    rating: 5,
    text: 'Had our entire exterior repainted before Christmas. Steven was professional, tidy, and the finish is outstanding. Already had three neighbours ask for his number. Brilliant value for such premium work.',
    service: 'Exterior Painting',
    initials: 'PS',
  },
  {
    name: 'Claire McAlister',
    location: 'Stranmillis, Belfast',
    date: 'November 2023',
    rating: 5,
    text: 'I was nervous about having work done before the holidays but Steven was absolutely brilliant. He worked around us, kept everything spotless, and the results are stunning. Our home feels completely transformed.',
    service: 'Full Home Interior',
    initials: 'CM',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            What Clients Say
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            100% Recommendation Rate
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every single client who has hired SB Painter &amp; Decorator has recommended us to
            others. Here&apos;s what Belfast homeowners have to say.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative bg-slate-800/50 border border-slate-700 hover:border-amber-500/40 rounded-2xl p-7 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-400 group flex flex-col"
            >
              {/* Decorative quote */}
              <div className="absolute top-5 right-5 text-amber-500/15 group-hover:text-amber-500/25 transition-colors duration-300">
                <Quote size={44} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="border-t border-slate-700 pt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{review.location}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="inline-block px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs rounded-full font-medium">
                    {review.service}
                  </span>
                  <p className="text-slate-600 text-xs mt-1">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7 bg-amber-500/5 border border-amber-500/20 rounded-2xl"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-base">Perfect Recommendation Score</p>
            <p className="text-slate-400 text-sm mt-0.5">
              Every client who has hired Steven has recommended him to friends and family
            </p>
          </div>
          <div className="font-serif text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent flex-shrink-0">
            100%
          </div>
        </motion.div>
      </div>
    </section>
  );
}
