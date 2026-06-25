'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home, Sun, Hammer, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Interior Painting & Decorating',
    description:
      'Full room transformations with precise walls, ceilings, and flawless woodwork and skirting finishes that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    tag: 'Most Popular',
  },
  {
    icon: Sun,
    title: 'Exterior Painting',
    description:
      'Weatherproof, durable painting for masonry, doors, window frames, and all exterior home features — built to endure every Belfast winter.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    tag: null,
  },
  {
    icon: Hammer,
    title: 'Surface Preparation & Protection',
    description:
      'Professional filling, sanding, and priming ensuring a long-lasting, guaranteed finish. The foundation that makes every project exceptional.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    tag: null,
  },
  {
    icon: Building2,
    title: 'Commercial & Domestic Decorating',
    description:
      'Tailored painting and decorating solutions for Belfast households and light commercial properties alike — always professional, always on time.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tag: null,
  },
];

export default function Services() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-28 bg-slate-900">
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
            What We Offer
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Specialist Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From first brush stroke to final inspection — every service delivered with the
            precision and care your home deserves.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
              onClick={scrollToContact}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-900/10" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {service.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full shadow-lg">
                    {service.tag}
                  </span>
                )}
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-3">
                  <service.icon size={17} className="text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-amber-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                  Get a Quote <ArrowRight size={14} />
                </div>
              </div>

              {/* Gold border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-amber-500/50 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
