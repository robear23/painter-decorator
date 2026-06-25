'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const services = [
  'Interior Painting & Decorating',
  'Exterior Painting',
  'Surface Preparation & Priming',
  'Commercial Decorating',
  'Full Home Transformation',
  'Other / Not Sure',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    'w-full bg-slate-900 border border-slate-700 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200';

  return (
    <section id="contact" className="py-28 bg-slate-950">
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
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Start Your Transformation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your space? Get a free, no-obligation quote from Belfast&apos;s
            most trusted painter and decorator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                Painter &amp; Decorator Belfast
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                SB Painter &amp; Decorator provides professional painting and decorating
                services across Belfast and Northern Ireland. Whether you need expert{' '}
                <span className="text-amber-400 font-medium">domestic painting in Belfast</span>,
                a full interior transformation, or commercial decorating services — Steven
                Boobyer delivers quality you can trust, backed by a 100% satisfaction guarantee.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href="tel:+447359612095"
                className="group flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 hover:border-amber-500/40 rounded-xl transition-all duration-300 hover:bg-amber-500/5"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    +44 7359 612095
                  </p>
                </div>
              </a>

              <a
                href="mailto:Steven.boobyer@me.com"
                className="group flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 hover:border-amber-500/40 rounded-xl transition-all duration-300 hover:bg-amber-500/5"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    Steven.boobyer@me.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    Service Area
                  </p>
                  <p className="text-white font-semibold">Belfast &amp; Northern Ireland</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                    Response Time
                  </p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* SEO block */}
            <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
              <p className="text-slate-400 text-sm leading-relaxed">
                Looking for a reliable{' '}
                <strong className="text-amber-400 font-semibold">
                  painter and decorator in Belfast
                </strong>
                ? SB Painting &amp; Decorating offers professional{' '}
                <strong className="text-amber-400 font-semibold">
                  domestic painting services in Belfast
                </strong>
                , expert exterior decoration, and complete{' '}
                <strong className="text-amber-400 font-semibold">
                  home decor services across Northern Ireland
                </strong>{' '}
                — all backed by a full satisfaction guarantee.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center py-16 bg-slate-800/30 border border-amber-500/20 rounded-2xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-18 h-18 w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={36} className="text-amber-400" />
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-400 max-w-xs leading-relaxed">
                  Thanks for reaching out. Steven will be in touch within 24 hours to discuss
                  your project.
                </p>
                <a
                  href="tel:+447359612095"
                  className="mt-6 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                >
                  Or call now: +44 7359 612095
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-slate-800/30 border border-slate-700 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set('email')}
                      placeholder="your@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="+44 7XXX XXXXXX"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        value={form.service}
                        onChange={set('service')}
                        className={`${inputCls} appearance-none pr-10`}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Tell us about your project — room sizes, any special requirements, preferred timeline..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 font-bold text-sm rounded-xl tracking-wide hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send size={15} />
                  Send Message &amp; Get a Free Quote
                </button>

                <p className="text-slate-600 text-xs text-center">
                  We typically respond within 24 hours. Your details are kept private and never
                  shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
