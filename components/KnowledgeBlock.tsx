import React from 'react';
import { BookOpen } from 'lucide-react';

interface KnowledgeBlockProps {
  heading: string;
  context: string;
  structuredAnswer: string;
  bulletPoints?: string[];
}

export default function KnowledgeBlock({ heading, context, structuredAnswer, bulletPoints }: KnowledgeBlockProps) {
  return (
    <article 
      className="bg-white border-l-4 border-gold-accent pl-8 py-8 my-12 relative shadow-[0_15px_40px_rgba(0,0,0,0.03)] rounded-2xl border border-slate-100 overflow-hidden group"
      data-service-insight="true"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-10 group-hover:bg-gold-accent/5 transition-all duration-500" />
      
      <div className="flex items-center gap-3 mb-6 text-gold-accent font-bold text-[10px] uppercase tracking-[0.3em]">
        <BookOpen size={16} strokeWidth={2.5} />
        <span>Elite Service Insight</span>
      </div>
      
      <h3 className="text-2xl font-normal text-slate-900 mb-4 font-heading">
        {heading}
      </h3>
      
      <p className="text-xs text-slate-400 font-bold mb-6 tracking-widest uppercase">
        {context}
      </p>
      
      <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none font-light">
        <p className="text-slate-700 font-normal mb-8 bg-slate-50/50 p-4 rounded-xl border-l-2 border-gold-accent/30">{structuredAnswer}</p>
        
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="mt-8 space-y-4">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="relative pl-8 text-slate-500">
                <div className="absolute left-0 top-1.5 w-4 h-px bg-gold-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
