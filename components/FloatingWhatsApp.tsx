"use client";

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/966549100151?text=Hello%21%20I%20would%20like%20to%20book%20a%20chauffeur%20service."
      target="_blank"
      rel="nofollow"
      className="fixed bottom-6 right-6 z-[60] bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 lg:p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group flex items-center justify-center backdrop-blur-sm"
      aria-label="WhatsApp Contact"
    >
      <div className="absolute inset-0 rounded-full animate-ping-slow bg-[#25D366] opacity-20 pointer-events-none" />
      <MessageCircle size={32} strokeWidth={2.5} className="relative z-10" />
      <span className="max-w-0 group-hover:max-w-xs group-hover:ml-3 overflow-hidden transition-all duration-500 font-bold whitespace-nowrap text-base relative z-10">
        Book on WhatsApp
      </span>
    </Link>
  );
}
