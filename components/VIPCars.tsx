import React from 'react';
import { Users, Briefcase, MessageCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const cars = [
  { name: "GMC Yukon XL Denali", badge: "Platinum Elite", badgeColor: "#C49A6C", category: "Signature Series", passengers: 7, luggage: 6, features: ["Massaging Seats", "Rear Entertainment", "Protocol Driver"], image: "/gmc-fleet/luxury-gmc-yukon-xl-saudi-arabia.webp" },
  { name: "GMC Yukon XL Premium", badge: "Gold Class", badgeColor: "#701D45", category: "Executive Class", passengers: 7, luggage: 5, features: ["Top-Tier Comfort", "Bilingual Driver", "On-Board Wifi"], image: "/gmc-fleet/premium-gmc-fleet-riyadh.webp" },
  { name: "GMC Yukon XL Protocol", badge: "Diplomatic", badgeColor: "#0c1320", category: "VIP Diplomatic", passengers: 7, luggage: 6, features: ["Armored Option", "Satellite Comms", "Elite Captain"], image: "/gmc-fleet/black-gmc-chauffeur-service-ksa.webp" },
  { name: "GMC Yukon XL Airport", badge: "Swift Transfer", badgeColor: "#2563EB", category: "Airport Special", passengers: 7, luggage: 8, features: ["Extra Boot Space", "Meet & Greet", "Flight Tracking"], image: "/gmc-fleet/gmc-yukon-airport-transfer-jeddah.webp" },
  { name: "GMC Yukon XL Hajj", badge: "Pilgrim Care", badgeColor: "#059669", category: "Hajj & Umrah", passengers: 7, luggage: 5, features: ["Makkah Expert Driver", "Spacious Cabin", "Prayer Stop Ready"], image: "/gmc-fleet/vip-gmc-transportation-makkah.webp" },
  { name: "GMC Yukon XL Business", badge: "Corporate", badgeColor: "#475569", category: "Corporate Fleet", passengers: 7, luggage: 4, features: ["Privacy Tints", "USB-C Charging", "Daily Rates"], image: "/gmc-fleet/chauffeur-driven-gmc-yukon-saudi.webp" },
  { name: "GMC Yukon XL Tourist", badge: "Leisure", badgeColor: "#9333EA", category: "Tourist Class", passengers: 7, luggage: 4, features: ["Panoramic Roof", "Tour Guide Option", "Flexible Routes"], image: "/gmc-fleet/gmc-yukon-xl-luxury-chauffeur-saudi.webp" },
  { name: "GMC Interior Suite", badge: "All Models", badgeColor: "#C49A6C", category: "Standard in All", passengers: 7, luggage: 6, features: ["Leather Seating", "Triple-Zone A/C", "Premium Sound"], image: "/gmc-fleet/gmc-interior-luxury-transport-saudi.webp" },
];

export default function VIPCars() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C49A6C] font-bold mb-3">GMC Fleet Collection</p>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">The Kingdom's Premier<br />Executive Fleet.</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Every vehicle is configured, insured, and maintained to a 5-star standard for executive ground transport.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cars.map((car, i) => (
            <div key={i} className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-[#C49A6C]/40 hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <div className="relative h-44 bg-slate-800">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: car.badgeColor }}
                  >
                    {car.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-[10px] text-[#C49A6C] font-bold uppercase tracking-widest mb-1">{car.category}</p>
                  <h3 className="text-base font-black text-white">{car.name}</h3>
                </div>

                {/* Specs row */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Users size={13} className="text-slate-500" />
                    <span>{car.passengers} seats</span>
                  </div>
                  <div className="w-px h-4 bg-slate-700" />
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Briefcase size={13} className="text-slate-500" />
                    <span>{car.luggage} bags</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {car.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-[#C49A6C] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="https://wa.me/966549100151"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-xl hover:bg-[#C49A6C] hover:border-[#C49A6C] hover:text-[#0c1320] transition-all duration-300 group/btn"
                >
                  <MessageCircle size={14} />
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom guarantee bar */}
        <div className="mt-12 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#C49A6C]" size={28} />
            <div>
              <p className="text-white font-bold text-sm">Fleet Guarantee</p>
              <p className="text-slate-400 text-xs">Every vehicle is insured, GPS-tracked, and certified under KSA regulations.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-10">
            {[['100%', 'Compliant'], ['4.9/5', 'Rating'], ['24/7', 'Support']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-[#C49A6C] text-xl font-black">{val}</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
