import React from 'react';
import { ShieldCheck, Award, BadgeCheck } from 'lucide-react';
import Schema from '@/components/Schema';

export default function AuthorAuthority() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="w-24 h-24 bg-[#0F172A] rounded-2xl flex-shrink-0 flex items-center justify-center">
            <span className="text-3xl text-[#C49A6C] font-bold">AS</span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <h3 className="text-xl font-bold text-slate-900">Ajmal Sabi</h3>
              <BadgeCheck size={20} className="text-[#C49A6C]" />
            </div>
            <p className="text-xs font-bold text-[#701D45] uppercase tracking-wider mb-3">CEO & Founder, Saudi Chauffeur Service</p>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              With over a decade of experience in luxury transport across Saudi Arabia and the GCC, Ajmal leads operations with a commitment to safety, VIP discretion, and punctuality.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                <ShieldCheck size={12} className="text-green-600" /> Verified Expert
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                <Award size={12} className="text-[#C49A6C]" /> Licensed Fleet Operator
              </span>
            </div>
          </div>
        </div>
      </div>

      <Schema
        type="Person"
        data={{
          "@id": "https://saudichauffeurservice.com/#ajmal-sabi",
          name: "Ajmal Sabi",
          jobTitle: "CEO & Founder",
          worksFor: { "@type": "Organization", name: "Saudi Chauffeur Service" },
          knowsAbout: ["VIP Transportation", "Saudi Arabia Travel", "Logistics", "Fleet Management"]
        }}
      />
    </section>
  );
}
