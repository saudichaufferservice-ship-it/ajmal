"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Airport', href: '/airport-transfer-saudi-arabia/' },
  { name: 'Border', href: '/saudi-border-crossing-transport/' },
  { name: 'Umrah', href: '/hajj-umrah-transport/' },
  { name: 'City Transfer', href: '/saudi-city-to-city-transfer/' },
  { name: 'Fleet', href: '/#fleet' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="relative h-12 w-48">
              <Image 
                src="/logo.svg" 
                alt="Saudi Chauffeur Service" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8 ml-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] 2xl:text-[11px] font-bold text-slate-900 hover:text-[#C49A6C] transition-colors uppercase tracking-widest whitespace-nowrap">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <Link href="tel:+966549100151" className="flex items-center gap-2 px-4 py-2 text-[11px] font-black text-slate-900 hover:text-[#C49A6C] transition-colors uppercase tracking-widest border border-slate-200 rounded-lg">
              <PhoneCall size={14} className="text-[#C49A6C]" />
              <span>Call Now</span>
            </Link>
            <Link
              href="https://wa.me/966549100151?text=Hello%21%20I%20would%20like%20to%20book%20a%20chauffeur%20service."
              className="flex items-center gap-2 px-6 py-3 bg-[#0c1320] text-white text-[11px] font-black rounded-lg hover:bg-black transition-all uppercase tracking-widest shadow-lg shadow-black/10"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              Book in 2 Mins
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-slate-900 focus:outline-none" aria-label="Menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden fixed inset-x-0 top-20 bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-6 space-y-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 px-5 text-slate-900 font-bold hover:bg-slate-50 rounded-xl transition-all active:scale-95"
            >
              <span className="text-sm uppercase tracking-wide">{link.name}</span>
              <ChevronRight size={18} className="text-[#701D45]/30" />
            </Link>
          ))}
          <div className="pt-6 pb-2 space-y-3 px-2">
            <Link href="tel:+966549100151" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 py-4 border-2 border-slate-100 rounded-xl text-lg font-bold text-slate-900">
              <PhoneCall size={20} className="text-[#701D45]" />
              +966 54 910 0151
            </Link>
            <Link
              href="https://wa.me/966549100151?text=Hello%21%20I%20would%20like%20to%20book%20a%20chauffeur%20service."
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#701D45] text-white font-bold rounded-xl text-sm shadow-lg shadow-[#701D45]/20"
            >
              <MessageCircle size={18} />
              Book Now via WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
