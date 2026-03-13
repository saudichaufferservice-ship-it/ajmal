import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Saudi Chauffeur Service',
  description: 'Expert travel tips, guides, and news for transportation across Saudi Arabia, including Hajj, Umrah, and airport transfer guides.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndex() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 md:mb-32 space-y-6 px-4">
          <h1 className="text-[32px] font-normal tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-black uppercase md:capitalize">
            Our News & Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-2">
            Read the latest travel guides and expert tips for a seamless chauffeur-driven experience in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}/`}
              className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-gold-accent transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  priority={idx < 3}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md">
                    Travel Guide
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center text-xs text-gray-400 space-x-4 uppercase font-bold tracking-widest">
                  <span className="flex items-center"><Calendar size={14} className="mr-2" /> {post.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-2" /> Editorial Team</span>
                </div>
                <h2 className="text-2xl font-bold leading-snug group-hover:text-gold-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 mt-auto flex items-center font-bold group-hover:translate-x-2 transition-transform">
                  Read Full Guide <ChevronRight size={18} className="ml-1 text-gold-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
