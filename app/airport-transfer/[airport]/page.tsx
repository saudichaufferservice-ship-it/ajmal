import Image from 'next/image';
import { airports, Airport } from '@/data/airports';
import BookingForm from '@/components/BookingForm';
import { ChevronRight, Plane, Building2, MapPin, Milestone, Star, MessageCircle, Clock, Calendar, CheckCircle, ShieldCheck, Globe, UserCheck, Briefcase, Snowflake, Users } from 'lucide-react';
import Link from 'next/link';
import Schema from '@/components/Schema';
import { notFound } from 'next/navigation';

import KnowledgeBlock from '@/components/KnowledgeBlock';

export async function generateStaticParams() {
  return airports.map((airport) => ({
    airport: airport.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ airport: string }> }) {
  const { airport: airportSlug } = await params;
  const airport = airports.find((a) => a.slug === airportSlug);

  if (!airport) return {};

  return {
    title: `Airport Transfer at ${airport.name} (${airport.code}) | Saudi Chauffeur Service`,
    description: `Book premium GMC chauffeur transfers at ${airport.name}. Professional meet and greet, luggage assistance, and executive protocol for all international and domestic terminals.`,
    alternates: {
      canonical: `/airport-transfer/${airport.slug}/`,
    },
  };
}

export default async function AirportPage({ params }: { params: Promise<{ airport: string }> }) {
  const { airport: airportSlug } = await params;
  const airport = airports.find((a) => a.slug === airportSlug);

  if (!airport) {
    notFound();
  }

  return (
    <>
      <Schema 
        type="Airport"
        data={{
          name: airport.name,
          iataCode: airport.code,
          address: { "@type": "PostalAddress", "addressLocality": airport.name, "addressCountry": "SA" }
        }}
      />

      {/* 5-Star Airport Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-32 overflow-hidden bg-slate-900 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/gmc-fleet/gmc-yukon-airport-transfer-jeddah.webp" 
            alt={`Airport Transfer at ${airport.name}`} 
            fill 
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
             <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">{airport.code} Terminal Protocol</span>
              </div>
            </div>

            <h1 className="text-[32px] font-normal leading-tight text-white font-heading uppercase">
              Elite Arrival <br />
              <span className="text-gold-accent">{airport.name}</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
               Experience the gold standard of airport transfers. Direct meet and greet, <br className="hidden md:block" /> executive luggage handling, and pristine GMC Yukon XL fleet.
            </p>

            <div className="flex justify-center pt-12 sm:pt-20 px-6">
               <Link href="#book" className="w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 bg-primary text-white font-bold rounded-full hover:bg-primary-hover shadow-2xl tracking-[0.3em] uppercase text-[10px] sm:text-xs transition-all active:scale-95 text-center">
                 Secure Protocol
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated 5-Star Booking Interface */}
      <section id="book" className="relative -mt-12 z-20 pb-24">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] p-6 sm:p-10 md:p-14 border border-slate-100 overflow-hidden relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-widest font-heading">{airport.code} GROUND PROTOCOL</h2>
                  <div className="w-16 h-1 bg-gold-accent mx-auto mt-4" />
               </div>
               <BookingForm title={`${airport.code} Airport Transfer`} />
            </div>
         </div>
      </section>

      {/* Terminal Insights Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <p className="text-gold-accent font-bold tracking-[0.4em] uppercase text-xs">First Class Experience</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-heading leading-tight">Terminal-to-Door <br /> <span>Service.</span></h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                       Our drivers are equipped with flight tracking and terminal access, ensuring that whether your flight lands early or is delayed, your chauffeur is waiting for you in the arrivals hall.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      { icon: Clock, label: "Live Tracking", text: "Flight stats monitored 24/7." },
                      { icon: UserCheck, label: "Meet & Greet", text: "Name board at arrivals hall." },
                      { icon: Briefcase, label: "Luggage Care", text: "End-to-end heavy lifting support." },
                      { icon: ShieldCheck, label: "VIP Express", text: "Fastest path to city centers." }
                    ].map((feat, i) => (
                       <div key={i} className="flex gap-4 group">
                          <div className="w-12 h-12 bg-slate-50 flex-shrink-0 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors">
                            <feat.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div className="space-y-1">
                             <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{feat.label}</h4>
                             <p className="text-xs text-slate-400 font-light">{feat.text}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 text-white space-y-10 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <h3 className="text-4xl font-black font-heading uppercase">Concierge Desk <br /> <span className="text-gold-accent"> {airport.code}.</span></h3>
                 <p className="text-slate-400 font-light leading-relaxed text-lg">Supporting groups, VIP delegations, and solo executive travelers across all terminals.</p>
                 <div className="flex flex-col gap-4">
                    <Link href="https://wa.me/966549100151" className="inline-flex justify-center items-center gap-3 py-6 px-10 bg-primary rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                       <MessageCircle size={20} />
                       Instant WhatsApp Quote
                    </Link>
                    <Link href="tel:+966549100151" className="text-center font-bold text-lg hover:text-gold-accent transition-colors">+966 54 910 0151</Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Fleet Banner */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-widest font-heading mb-16">Signature SUV Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { img: "/gmc-fleet/luxury-gmc-yukon-xl-saudi-arabia.webp", name: "GMC YUKON XL", class: "ELITE" },
                 { img: "/gmc-fleet/premium-gmc-fleet-riyadh.webp", name: "GMC YUKON DENALI", class: "FIRST" },
                 { img: "/gmc-fleet/black-gmc-chauffeur-service-ksa.webp", name: "CHEVROLET SUBURBAN", class: "BUSINESS" }
               ].map((car, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative h-48 w-full mb-6">
                       <Image src={car.img} alt={car.name} fill className="object-contain" />
                    </div>
                    <p className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-1">{car.class} CLASS</p>
                    <h4 className="text-xl font-black text-slate-900">{car.name}</h4>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Discerning Travelers Choose Us - Reused from Home */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-16">The Kingdom&apos;s Protocol Standard</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
               {[
                 { icon: ShieldCheck, label: "LATEST MODELS", desc: "Pristine Luxury" },
                 { icon: Globe, label: "GCC WIDE", desc: "Regional Network" },
                 { icon: Star, label: "4.9 RATING", desc: "Top Operations" },
                 { icon: Snowflake, label: "CHILL CABIN", desc: "Climate Choice" },
                 { icon: Users, label: "CAPTAINS", desc: "Elite Drivers" }
               ].map((item, i) => (
                 <div key={i} className="space-y-4 group cursor-default">
                    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-3xl mx-auto group-hover:bg-primary transition-colors">
                       <item.icon size={28} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                       <p className="font-bold text-sm tracking-tighter">{item.label}</p>
                       <p className="text-[10px] text-slate-400 font-bold uppercase">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <KnowledgeBlock 
            heading={`Airport Logistics Insight: ${airport.code}`}
            context={`Operational protocols for ${airport.name} ground travel.`}
            structuredAnswer={`Our ${airport.code} operations prioritize absolute discretion and punctuality. We provide specialized meet-and-greet in the arrivals hall and support for international luggage handling.`}
            bulletPoints={[
               `Real-time flight monitoring to ensure your chauffeur is at the gate on time.`,
               `60 minutes of complimentary wait time after landing for international flights.`,
               `Pristine GMC Yukon XL collection directly at terminal executive parking.`
            ]}
          />
        </div>
      </section>
    </>
  );
}
