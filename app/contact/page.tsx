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
    <div className="bg-white pt-24 pb-24 md:pt-32 md:pb-48">
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
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/2 space-y-8 md:space-y-12">
            <div className="space-y-4 px-4 overflow-hidden">
              <h1 className="text-3xl md:text-[32px] font-black leading-tight uppercase font-heading">Contact the Protocol Team</h1>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light max-w-lg">
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
                  <div className="p-4 bg-slate-50 rounded-xl mr-4 md:mr-6 group-hover:bg-gold-light transition-colors shrink-0">
                    <item.icon className="text-gold-accent" size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400">{item.title}</p>
                    <Link 
                      href={item.href} 
                      className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-gold-accent transition-colors"
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
                <Link href="https://wa.me/966549100151" className="inline-flex items-center px-6 md:px-8 py-4 bg-gold-accent text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all group shadow-lg text-sm md:text-base uppercase tracking-widest" rel="nofollow">
                 <MessageCircle className="mr-3 group-hover:animate-bounce" />
                 Chat with Us Now
                </Link>
            </div>
          </div>

          <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-slate-50 rounded-3xl lg:rounded-[3rem] overflow-hidden relative border border-slate-100 shadow-2xl mt-8 lg:mt-0">
             <Image 
               src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" 
               alt="VIP GMC Yukon chauffeur service at luxury hotel in Saudi Arabia" 
               fill
               className="object-cover"
             />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                 <span className="text-[10px] text-white font-bold tracking-widest uppercase">Operating Region-Wide</span>
               </div>
             </div>
          </div>
        </div>

        {/* Semantic SEO Block */}
        <div className="mt-24 border-t border-slate-100 pt-16 animate-in slide-in-from-bottom duration-1000">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase font-heading">Executive Chauffeur Services Across Saudi Arabia</h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
              Whether you require a <strong className="font-bold text-slate-900">VIP airport transfer in Riyadh</strong>, diplomatic protocol in <strong className="font-bold text-slate-900">Jeddah</strong>, or luxury ground mobility for religious pilgrimages in <strong className="font-bold text-slate-900">Makkah and Medina</strong>, our centralized dispatch team coordinates every detail of your itinerary. 
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
              As a premier <strong className="font-bold text-slate-900">Saudi chauffeur service</strong>, we specialize in high-net-worth individual (HNWI) travel, corporate roadshows, and cross-border GCC transfers. Our dedicated concierge is available 24/7—contact us today via WhatsApp or email for immediate, secure protocol arrangements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
