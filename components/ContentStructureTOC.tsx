import React from 'react';
import { List, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface TOCItem {
  id: string;
  title: string;
}

interface ContentStructureTOCProps {
  items: TOCItem[];
}

export default function ContentStructureTOC({ items }: ContentStructureTOCProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm mb-12">
      <div className="flex items-center gap-2 mb-4">
        <List className="text-gold-accent" size={20} />
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800">
          Page Structure & Navigation
        </h2>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link 
              href={`#${item.id}`}
              className="group flex items-center text-gray-600 hover:text-gold-accent transition-colors text-sm font-medium"
            >
              <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
