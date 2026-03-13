import React from 'react';
import Link from 'next/link';
import { Tag } from 'lucide-react';

interface ServiceClusteringProps {
  title: string;
  items: { name: string; url: string }[];
}

export default function ServiceClustering({ title, items }: ServiceClusteringProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm my-12">
      <div className="flex items-center gap-3 mb-6 text-black font-bold uppercase tracking-widest text-xs">
        <Tag size={18} className="text-gold-accent" />
        {title}
      </div>
      
      <div className="flex flex-wrap gap-3">
        {items.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.url}
            className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gold-accent hover:text-white transition-all border border-transparent hover:border-gold-accent"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
