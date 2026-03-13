import React from 'react';
import { Sparkles } from 'lucide-react';

interface ExecutiveSummaryProps {
  intent: string;
  entities: string[];
  summary: string;
}

export default function ExecutiveSummary({ intent, entities, summary }: ExecutiveSummaryProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-6 rounded-2xl shadow-sm mb-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-accent/10 transition-colors" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
          <Sparkles className="text-gold-accent" size={24} />
        </div>
        
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Executive Overview</span>
            <div className="flex flex-wrap gap-2">
              {entities.map((entity, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                  {entity}
                </span>
              ))}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-black border-l-2 border-gold-accent pl-3">
            {intent}
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-sm">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
