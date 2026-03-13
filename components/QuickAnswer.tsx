import React from 'react';
import { Info } from 'lucide-react';

interface QuickAnswerProps {
  question: string;
  answer: string;
  listItems?: string[];
}

export default function QuickAnswer({ question, answer, listItems }: QuickAnswerProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-gold-accent/5 transition-colors" />
      <div className="flex items-center gap-2 mb-6 text-gray-400 font-bold uppercase tracking-widest text-xs">
        <Info size={16} className="text-gold-accent" />
        Quick Service Answer
      </div>
      
      {/* Definition list for Service Featured Content */}
      <dl>
        <dt className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-gold-accent transition-colors">
          {question}
        </dt>
        <dd className="text-gray-600 leading-relaxed text-lg mb-4">
          {answer}
        </dd>
        {listItems && listItems.length > 0 && (
          <dd>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
              {listItems.map((item, idx) => (
                <li key={idx}><strong>{item.split(':')[0]}:</strong>{item.split(':')[1] ? item.split(':')[1] : ''}</li>
              ))}
            </ul>
          </dd>
        )}
      </dl>
    </div>
  );
}
