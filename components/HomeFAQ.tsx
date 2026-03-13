'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Schema from '@/components/Schema';

const faqs = [
  { q: "How do I book a chauffeur service?", a: "You can book by filling out our online form or contacting us directly via WhatsApp for instant confirmation. We recommend WhatsApp for the fastest response." },
  { q: "Do you provide airport pickup and meet & greet?", a: "Yes, we specialize in airport transfers across all major Saudi airports. Our drivers track your flight and meet you at the arrivals hall with a personalized name sign at no extra charge." },
  { q: "Can I book VIP transport from Makkah to Madinah?", a: "Absolutely. We provide luxury one-way and round-trip intercity transfers between Makkah and Madinah in our premium VIP GMC vehicles for maximum comfort." },
  { q: "Is advance booking required?", a: "While we recommend booking at least 24 hours in advance, we also handle immediate requests. Message us on WhatsApp to check availability for an instant ride." },
  { q: "Do you provide border-crossing services?", a: "Yes, we specialize in GCC cross-border transport through Al Nuwaiseeb and Al Khafji (Kuwait), Salwa (Qatar), Al Batha (UAE), and the King Fahd Causeway (Bahrain). Our chauffeurs are experts in checkpoint protocols." },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      <Schema
        type="FAQPage"
        data={{ mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }}
      />

      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className={`border rounded-2xl overflow-hidden transition-all ${openIndex === idx ? 'bg-white shadow-md border-[#701D45]/20' : 'bg-white border-slate-100'}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left px-6 py-5 flex justify-between items-center"
          >
            <span className={`font-bold text-sm pr-4 ${openIndex === idx ? 'text-[#701D45]' : 'text-slate-900'}`}>{faq.q}</span>
            <ChevronDown size={18} className={`flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180 text-[#701D45]' : 'text-slate-300'}`} />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-5">
              <div className="pt-3 border-t border-slate-50">
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
