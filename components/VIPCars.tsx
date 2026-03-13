import React from 'react';
import { Users, Briefcase, MessageCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { vehicles } from '@/data/fleet';

export default function VIPCars() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C49A6C]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#701D45]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C49A6C]" />
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#C49A6C] font-black">Elite Fleet Collection</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">The Kingdom's Premier<br /><span className="text-gold-accent">Luxury Fleet.</span></h2>
          </div>
          <div className="max-w-xs">
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              From executive sedans to VIP coaches, every vehicle is maintained to a 5-star protocol standard for discerning clients.
            </p>
            <Link href="https://wa.me/966549100151" className="inline-flex items-center gap-2 text-[#C49A6C] text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all group">
              View All Specs <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.filter(car => car && car.image && car.image.length > 5).map((car) => (
            <div key={car.slug} className="group relative bg-slate-900/40 backdrop-blur-sm rounded-[2rem] border border-white/5 overflow-hidden hover:border-[#C49A6C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C49A6C]/10 translate-y-0 hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative h-56 w-full pt-8 bg-gradient-to-b from-white/5 to-transparent">
                <div className="relative h-40 w-[90%] mx-auto">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
                
                {/* Badge Overlay */}
                {car.badge && (
                  <div className="absolute top-6 left-6">
                    <span 
                      className="text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest text-white shadow-lg backdrop-blur-md"
                      style={{ backgroundColor: car.badgeColor || '#C49A6C' }}
                    >
                      {car.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Information */}
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-[10px] text-[#C49A6C] font-bold uppercase tracking-[0.2em] mb-2">{car.category}</p>
                  <h3 className="text-xl font-black text-white group-hover:text-[#C49A6C] transition-colors">{car.name}</h3>
                </div>

                {/* Technical Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/5">
                    <Users size={16} className="text-slate-500" />
                    <div>
                        <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">Capacity</p>
                        <p className="text-xs text-zinc-200 font-bold">{car.passengers} Seats</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/5">
                    <Briefcase size={16} className="text-slate-500" />
                    <div>
                        <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">Storage</p>
                        <p className="text-xs text-zinc-200 font-bold">{car.luggage} Bags</p>
                    </div>
                  </div>
                </div>

                {/* Feature Icons List */}
                <div className="space-y-3 mb-8">
                  {car.features.slice(0, 3).map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs text-slate-400 font-light">
                      <div className="w-1 h-1 rounded-full bg-[#C49A6C]" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Booking Button */}
                <Link
                  href="https://wa.me/966549100151"
                  className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 text-white text-xs font-black rounded-2xl hover:bg-[#C49A6C] hover:border-[#C49A6C] hover:text-[#0c1320] transition-all duration-300 uppercase tracking-widest"
                >
                  <MessageCircle size={16} className="group-hover/btn:scale-110 transition-transform" />
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#C49A6C]/10 border border-[#C49A6C]/20 flex items-center justify-center">
                <ShieldCheck className="text-[#C49A6C]" size={32} />
              </div>
              <div>
                <p className="text-white font-black text-lg uppercase tracking-wider">Operational Integrity</p>
                <p className="text-slate-500 text-sm font-light">Every vehicle is GPS-monitored, fully insured, and routinely sanitized for VIP protocol.</p>
              </div>
            </div>
            <div className="flex justify-between md:justify-end gap-12 lg:gap-20">
              {[
                ['100%', 'Safety Record'],
                ['4.9/5', 'Client Reviews'],
                ['24/7', 'Protocol Ops']
              ].map(([val, label]) => (
                <div key={label} className="text-left md:text-center">
                  <p className="text-[#C49A6C] text-2xl font-black">{val}</p>
                  <p className="text-slate-500 text-[9px] uppercase tracking-widest mt-1 font-bold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
