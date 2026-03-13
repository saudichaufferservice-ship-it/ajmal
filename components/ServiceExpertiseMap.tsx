import React from 'react';
import { Layers, Map as MapIcon, Compass, Anchor } from 'lucide-react';

export default function ServiceExpertiseMap() {
  const categories = [
    {
      title: "Intercity & Border Transport",
      icon: MapIcon,
      depth: "Comprehensive",
      topics: [
        "Saudi-Kuwait: Al Nuwaiseeb & Al Khafji",
        "Saudi-Qatar: Salwa (Abu Samra) VIP Route",
        "Saudi-UAE: Al Batha Cross-Border",
        "Saudi-Bahrain: King Fahd Causeway"
      ]
    },
    {
      title: "Executive Fleet Management",
      icon: Layers,
      depth: "In-Depth",
      topics: [
        "GMC Yukon Maintenance Standards",
        "Luxury SUV Passenger Capacities",
        "Real-Time Fleet Tracking Tracking",
        "Chauffeur Defensive Driving"
      ]
    },
    {
      title: "VIP & Corporate Travel",
      icon: Anchor,
      depth: "Expert Level",
      topics: [
        "Diplomatic Protocol Transport",
        "Airport Meet & Greet Logistics",
        "Event and Conference Retainers",
        "Corporate Account Management"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-gold-accent text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-gray-100">
            <Compass size={16} /> Industry-Leading Logistics Knowledge
          </div>
          <h2 className="text-3xl md:text-5xl font-normal mb-6 text-black">Regional Chauffeur Expertise</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just provide rides; we own the specialized knowledge surrounding VIP transportation in Saudi Arabia. Discover our service depth across key operational domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-gold-accent shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-gold-accent">
                  <cat.icon size={28} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest bg-gold-accent/10 text-gold-accent px-3 py-1 rounded-full">
                  Service Category
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-6">{cat.title}</h3>
              
              <ul className="space-y-4">
                {cat.topics.map((topic, topicIdx) => (
                  <li key={topicIdx} className="flex items-start text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-accent mt-2 mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
