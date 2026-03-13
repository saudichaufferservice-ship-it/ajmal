import React from 'react';
import { ShieldCheck, Award, GraduationCap, Globe } from 'lucide-react';

const signals = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully compliant under KSA Transport Authority regulations with comprehensive fleet insurance." },
  { icon: Award, title: "Established 2018", desc: "Over 6 years of trusted executive ground transport across Saudi Arabia and the GCC." },
  { icon: GraduationCap, title: "Vetted Chauffeurs", desc: "Multilingual, background-checked professionals with VIP hospitality training." },
  { icon: Globe, title: "GCC-Wide Coverage", desc: "Seamless cross-border operations to Bahrain, Kuwait, Qatar, and UAE." }
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          {signals.map((s, i) => (
            <div key={i} className="bg-white p-8 flex flex-col items-start gap-4 hover:bg-slate-50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#701D45]/8 flex items-center justify-center group-hover:bg-[#701D45] transition-colors">
                <s.icon size={22} className="text-[#701D45] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
