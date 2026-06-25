'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    location: 'Malone Road Interior',
    type: 'Interior',
    tall: true,
    wide: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80',
    location: 'South Belfast Bedroom',
    type: 'Interior',
    tall: false,
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    location: 'Lisburn Road Exterior',
    type: 'Exterior',
    tall: false,
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    location: 'Antrim Road Living Room',
    type: 'Interior',
    tall: false,
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    location: 'Belfast City Centre Commercial',
    type: 'Commercial',
    tall: false,
    wide: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    location: 'Stranmillis Kitchen',
    type: 'Interior',
    tall: false,
    wide: false,
  },
];

const typeBadge: Record<string, string> = {
  Interior: 'bg-blue-500/80 text-white',
  Exterior: 'bg-emerald-500/80 text-white',
  Commercial: 'bg-amber-500/80 text-slate-900',
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-slate-950">
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
            Our Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Project Showcase
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Browse a selection of our completed projects across Belfast — each one a testament
            to meticulous craftsmanship and exceptional attention to detail.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.location}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                photo.tall && photo.wide ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.location}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Info */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350">
                <span
                  className={`self-start px-2.5 py-0.5 text-xs font-semibold rounded-full mb-2 ${typeBadge[photo.type]}`}
                >
                  {photo.type}
                </span>
                <div className="flex items-center gap-1.5 text-white">
                  <MapPin size={12} className="text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{photo.location}</span>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-amber-500/50 transition-all duration-400 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-amber-500/40 text-amber-400 font-semibold text-sm rounded-full hover:bg-amber-500/10 hover:border-amber-400/70 transition-all duration-300 tracking-wide"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
