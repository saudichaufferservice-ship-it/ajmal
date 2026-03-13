import React from 'react';
import { MessageCircle, Globe, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-white pt-32 pb-12 overflow-hidden">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="space-y-10">
            <Link href="/" className="flex flex-col group">
              <span className="text-3xl font-black tracking-tighter text-white flex items-center">
                SAUDI <span className="ml-2 text-primary">CHAUFFEUR</span>
              </span>
              <div className="flex items-center gap-3 mt-1">
                <div className="h-[1px] w-10 bg-gold-accent" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-slate-400 font-bold">First Class Travel</span>
              </div>
            </Link>
            <p className="text-slate-400 font-light leading-relaxed text-sm max-w-xs">
              Providing professional ground transportation and executive protocol across the Kingdom of Saudi Arabia and GCC borders since 2018.
            </p>
            <div className="flex gap-4">
               {['wa', 'ig', 'fb', 'tw'].map((social) => (
                 <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent transition-all cursor-pointer group">
                   <Star size={14} className="text-slate-400 group-hover:text-white" />
                 </div>
               ))}
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold-accent">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Airport Transfers', href: '/airport-transfer-saudi-arabia/' },
                { name: 'Border Crossing', href: '/saudi-border-crossing-transport/' },
                { name: 'Hajj & Umrah Transport', href: '/hajj-umrah-transport/' },
                { name: 'City to City Transfer', href: '/saudi-city-to-city-transfer/' },
                { name: 'Tourist Transport', href: '/saudi-tourist-transport/' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-light flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Hubs */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold-accent">Regional Hubs</h4>
            <ul className="space-y-4">
              {[
                { name: 'Riyadh Chauffeur', href: '/riyadh-chauffeur-service/' },
                { name: 'Jeddah Chauffeur', href: '/jeddah-chauffeur-service/' },
                { name: 'Makkah Chauffeur', href: '/makkah-chauffeur-service/' },
                { name: 'Dammam Chauffeur', href: '/dammam-chauffeur-service/' },
                { name: 'Medina Chauffeur', href: '/medina-chauffeur-service/' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-light flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gold-accent">Concierge Support</h4>
            <div className="space-y-6">
               <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-3">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Available 24/7</p>
                  <Link href="tel:+966549100151" className="text-lg font-bold block hover:text-gold-accent transition-colors">+966 54 910 0151</Link>
                  <p className="text-xs text-slate-400">Support for Flight Delays & Gate Changes.</p>
               </div>
               <Link 
                href="https://wa.me/966549100151" 
                className="flex items-center justify-center gap-3 w-full py-4 bg-primary rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-xl"
               >
                 <MessageCircle size={18} />
                 Live WhatsApp Help
               </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Saudi Chauffeur Service. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
             <Link href="/privacy-policy/" className="text-slate-500 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">Privacy Policy</Link>
             <Link href="/terms-conditions/" className="text-slate-500 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">Terms of Service</Link>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Licensed Protocol</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
