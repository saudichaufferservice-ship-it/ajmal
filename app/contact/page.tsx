import { Mail, Phone, MapPin, MessageCircle, Clock, Globe, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Contact Us | Saudi Chauffeur Service',
  description: 'Get in touch with Saudi Chauffeur Service for quotes, bookings, and inquiries regarding chauffeur transportation in Saudi Arabia and GCC.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-32 pb-48">
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
              "name": "Contact Us",
              "item": "https://saudichauffeurservice.com/contact/"
            }
          ]
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4 px-4 overflow-hidden">
              <h1 className="text-[32px] font-normal leading-tight uppercase md:capitalize">Get in Touch</h1>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                We're here 24/7 to assist you with your transportation needs across Saudi Arabia and the GCC region. Reach out for a free quote.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Our Phone", value: "+966 54 910 0151", href: "tel:+966549100151" },
                { icon: Mail, title: "Our Email", value: "info@saudichauffeurservice.com", href: "mailto:info@saudichauffeurservice.com" },
                { icon: MapPin, title: "Office Location", value: "Riyadh, Kingdom of Saudi Arabia", href: "https://maps.google.com" },
                { icon: Clock, title: "Working Hours", value: "24 Hours Service / 7 Days a Week", href: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="p-4 bg-gray-50 rounded-xl mr-6 group-hover:bg-gold-light transition-colors">
                    <item.icon className="text-gold-accent" size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400">{item.title}</p>
                    <Link 
                      href={item.href} 
                      className="text-xl font-bold group-hover:text-gold-accent transition-colors"
                      rel={item.href.startsWith('http') ? "nofollow" : undefined}
                    >
                      {item.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-black rounded-[2.5rem] text-white space-y-8 animate-in slide-in-from-left duration-1000 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/20 rounded-full translate-x-12 -translate-y-12" />
               <h3 className="text-3xl font-normal">Need an instant quote?</h3>
               <p className="text-gray-400 leading-relaxed">Our support team is active on WhatsApp and typically responds within minutes.</p>
                <Link href="https://wa.me/966549100151" className="inline-flex items-center px-8 py-4 bg-gold-accent text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all group scale-100 hover:scale-105 active:scale-95 shadow-lg" rel="nofollow">
                 <MessageCircle className="mr-3 group-hover:animate-bounce" />
                 Chat with Us Now
                </Link>
            </div>
          </div>

          <div className="lg:w-1/2 aspect-square lg:aspect-auto bg-gray-50 rounded-[3rem] overflow-hidden relative border border-gray-100 shadow-2xl skew-y-1 transform scale-95 origin-center">
             <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
               <p className="text-black font-bold text-xl drop-shadow-lg p-10 bg-white/80 backdrop-blur-md rounded-2xl border border-white">
                 Interactive Map Placeholder
               </p>
             </div>
             <Image 
               src="/gmc-fleet/vip-gmc-transportation-makkah.webp" 
               alt="VIP GMC Yukon chauffeur service at luxury hotel in Saudi Arabia" 
               fill
               className="object-cover grayscale opacity-50"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
