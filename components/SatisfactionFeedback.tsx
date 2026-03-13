'use client';
import { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';

export default function SatisfactionFeedback() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-3 p-6 bg-green-50 text-green-700 border border-green-200 rounded-2xl justify-center text-sm font-bold animate-in fade-in duration-300">
        <CheckCircle2 size={24} className="text-green-600" />
        Thank you! Your feedback helps us improve our information accuracy.
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-3xl gap-6 mt-12 mb-12 shadow-sm transition-all hover:border-gold-accent group">
      <div className="text-center sm:text-left">
        <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-gold-accent transition-colors">
          Did this page match your search intent?
        </h4>
        <p className="text-sm text-gray-500">
          We use this data to improve search relevance and content quality for all travelers.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSubmitted(true)}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gold-accent hover:border-gold-accent hover:text-white transition-all text-sm font-bold text-gray-600 shadow-sm"
        >
          <ThumbsUp size={18} /> Yes
        </button>
        <button 
          onClick={() => setSubmitted(true)}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-black hover:border-black hover:text-white transition-all text-sm font-bold text-gray-600 shadow-sm"
        >
          <ThumbsDown size={18} /> No
        </button>
      </div>
    </div>
  );
}
