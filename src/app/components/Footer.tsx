'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-amber-500/40">
                <Image
                  src="/logo.png"
                  alt="SB Painter and Decorator Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-white text-sm leading-none">
                  SB Painter &amp; Decorator
                </p>
                <p className="text-amber-400 text-xs tracking-[0.15em] uppercase mt-0.5">
                  Belfast, Northern Ireland
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Professional painting and decorating services across Belfast and Northern Ireland.
              Trusted by hundreds of satisfied homeowners with a 100% recommendation rate.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Steven
            </h4>
            <div className="space-y-3.5">
              <a
                href="tel:+447359612095"
                className="flex items-center gap-2.5 text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200"
              >
                <Phone size={14} className="text-amber-500 flex-shrink-0" />
                +44 7359 612095
              </a>
              <a
                href="mailto:Steven.boobyer@me.com"
                className="flex items-center gap-2.5 text-slate-500 hover:text-amber-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} className="text-amber-500 flex-shrink-0" />
                Steven.boobyer@me.com
              </a>
              <div className="flex items-center gap-2.5 text-slate-500 text-sm">
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                Belfast, Northern Ireland, UK
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} SB Painter &amp; Decorator. All rights
            reserved.
            <span className="mx-2 text-slate-700">·</span>
            <span className="text-slate-600">Painter and Decorator Belfast, Northern Ireland</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-xs font-semibold transition-colors"
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
