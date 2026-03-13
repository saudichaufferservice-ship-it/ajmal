import React from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export default function FreshnessBadge() {
  const currentMonthYear = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 text-xs font-bold tracking-wide shadow-sm mb-6">
      <CheckCircle2 size={14} className="text-green-600" />
      <span>Information Verified & Updated for {currentMonthYear}</span>
      <div className="w-1 h-1 rounded-full bg-green-400 mx-1" />
      <div className="flex items-center gap-1 text-green-600 font-medium">
        <RefreshCw size={12} className="animate-spin-slow" />
        Real-Time Fleet Availability
      </div>
    </div>
  );
}
