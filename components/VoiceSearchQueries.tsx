import React from 'react';
import { Mic, Search, MessageSquareQuote } from 'lucide-react';

export default function VoiceSearchQueries() {
  const queries = [
    {
      intent: "Nearest Chauffeur",
      query: "Hey Siri, book a VIP chauffeur near me in Riyadh.",
      answer: "We offer instant dispatch of luxury GMC SUVs across Riyadh with under 30-minute arrival times for immediate bookings."
    },
    {
      intent: "Cost & Pricing",
      query: "How much does a chauffeur cost from Jeddah to Makkah?",
      answer: "Rates depend on the season and vehicle class. Contact us on WhatsApp for an instant, transparent quote with no hidden fees."
    },
    {
      intent: "Specific Requirements",
      query: "Can I hire a multi-lingual driver with a large SUV for 5 days?",
      answer: "Yes, our executive GMC fleet comes with highly-trained, bilingual chauffeurs available for daily, weekly, or monthly retainers."
    },
    {
      intent: "Border Crossing",
      query: "What's the best way to travel from Dubai to Saudi Arabia by car?",
      answer: "We provide seamless GCC border crossing services. Our drivers handle the route while you relax in a premium, Wi-Fi-enabled GMC SUV."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-accent rounded-full mix-blend-screen filter blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-gold-accent text-sm font-bold tracking-widest uppercase mb-6">
            <Mic size={16} /> Concierge Travel Support
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">Expert Travel Assistance</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our specialized team provides direct, precise answers for the most complex chauffeur requirements and luxury travel logistics in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {queries.map((q, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-gold-accent">
                  <MessageSquareQuote size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  {q.intent}
                </span>
              </div>
              <p className="text-2xl font-medium text-white mb-4 leading-relaxed group-hover:text-gold-accent transition-colors">
                "{q.query}"
              </p>
              <div className="h-px w-12 bg-gold-accent/50 mb-4" />
              <p className="text-gray-400 leading-relaxed text-lg">
                {q.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
