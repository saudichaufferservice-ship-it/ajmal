import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, ChevronRight, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Schema from '@/components/Schema';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pt-20 pb-32">
      <Schema 
        type="FAQPage"
        data={{
          name: post.title,
          headline: post.title,
          datePublished: post.date,
          image: post.image,
          author: {
            "@type": "Person",
            "name": "Saudi Chauffeur Service Editorial"
          }
        }}
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://saudichauffeurservice.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://saudichauffeurservice.com/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": `https://saudichauffeurservice.com/blog/${post.slug}/`
            }
          ]
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-6 animate-in slide-in-from-top-12 duration-1000">
           <Link href="/blog/" className="inline-flex items-center text-xs text-gray-400 uppercase font-bold tracking-widest hover:text-gold-accent transition-colors">
            <ChevronRight size={14} className="rotate-180 mr-2" /> Back to Blog
          </Link>
          <h1 className="text-[32px] font-normal leading-10">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-sm font-bold uppercase tracking-widest text-gray-400 space-x-8">
            <div className="flex items-center"><Calendar size={18} className="mr-2 text-gold-accent" /> {post.date}</div>
            <div className="flex items-center"><User size={18} className="mr-2 text-gold-accent" /> Saudi Chauffeur Service</div>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl skew-y-1 transform scale-95 duration-1000 relative">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8 font-paragraph">
          <p className="text-xl font-medium text-black">{post.excerpt}</p>
          <div className="w-full h-px bg-gray-100 my-12" />
          <div className="space-y-6">
            {post.content}
            {/* Added more content blocks for better programmatic structure */}
            <h2 className="text-[32px] font-normal text-black pt-8 border-t border-slate-50">The Professional Chauffeur Advantage</h2>
            <p>Choosing a professional chauffeur-driven transportation service like Saudi Chauffeur Service ensures that you focus on your journey rather than the technicalities of the commute. Our GMC SUVs are chosen for their premium comfort and road stability, especially on long stretches between major Saudi cities.</p>
            <h2 className="text-[32px] font-normal text-black pt-8 border-t border-slate-50">Reliability You Can Trust</h2>
            <p>Whether you're traveling for the holy pilgrimages of Hajj and Umrah or attending business summits in Riyadh, our team of dedicated drivers is trained for punctuality and professional conduct. We understand the unique requirements of travel in Saudi Arabia, including border crossings and airport protocols.</p>
          </div>
        </div>

        <div className="mt-20 p-12 bg-black rounded-[2.5rem] text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/20 rounded-full translate-x-12 -translate-y-12" />
          <h3 className="text-[32px] font-normal relative">Experience the difference today</h3>
          <p className="text-gray-400 max-w-lg relative leading-relaxed">Book a reliable chauffeur for your next trip in Saudi Arabia with any of our premium services.</p>
          <Link href="https://wa.me/966549100151" className="px-10 py-5 bg-gold-accent text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all flex items-center shadow-lg active:scale-95 group relative" rel="nofollow">
            <MessageCircle className="mr-3 group-hover:scale-110" />
            Book Your Ride via WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
