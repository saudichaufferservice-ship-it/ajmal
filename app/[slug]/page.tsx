import { Metadata } from 'next';
import Image from 'next/image';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import BookingForm from '@/components/BookingForm';
import { ChevronRight, Plane, Building2, MapPin, Milestone, Star, MessageCircle, Clock, Calendar, CheckCircle, ShieldCheck, Globe, Map, Navigation, ArrowRight, Shield, Users, Briefcase, Snowflake } from 'lucide-react';
import Link from 'next/link';
import Schema from '@/components/Schema';
import { notFound } from 'next/navigation';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import FreshnessBadge from '@/components/FreshnessBadge';
import ServiceClustering from '@/components/ServiceClustering';
import ContentStructureTOC from '@/components/ContentStructureTOC';
import TrustSignals from '@/components/TrustSignals';
import KnowledgeBlock from '@/components/KnowledgeBlock';
import SatisfactionFeedback from '@/components/SatisfactionFeedback';

export async function generateStaticParams() {
  const cityParams = cities.map((city) => ({
    slug: city.slug + '-chauffeur-service',
  }));
  const serviceParams = services.map((service) => ({
    slug: service.slug,
  }));
  return [...cityParams, ...serviceParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = slug.replace('-chauffeur-service', '');
  const city = cities.find(c => c.slug === citySlug);
  if (city && slug.endsWith('-chauffeur-service')) {
    return {
      title: `Chauffeur Service in ${city.name} | Saudi Chauffeur Service`,
      description: `Book chauffeur transportation in ${city.name} including airport transfers, city travel, tourist rides, and event transportation with professional GMC SUVs.`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  const service = services.find(s => s.slug === slug);
  if (service) {
    return {
      title: `${service.title} in Saudi Arabia | Saudi Chauffeur Service`,
      description: `${service.description} ${service.longDescription}`,
      alternates: { canonical: `/${slug}/` },
    };
  }
  return {};
}

export default async function DynamicSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const citySlug = slug.replace('-chauffeur-service', '');
  const city = cities.find(c => c.slug === citySlug && slug.endsWith('-chauffeur-service'));
  const service = services.find(s => s.slug === slug);

  if (city) {
    return (
      <>
        <Schema 
          type="LocalBusiness"
          data={{
            name: `Saudi Chauffeur Service ${city.name}`,
            description: `Professional chauffeur service in ${city.name}, Saudi Arabia.`,
            address: { "@type": "PostalAddress", "addressLocality": city.name, "addressCountry": "SA" },
            telephone: "+966549100151",
            url: `https://saudichauffeurservice.com/${slug}/`
          }}
        />

        {/* Elite 5-Star City Hero */}
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/gmc-fleet/luxury-gmc-yukon-xl-saudi-arabia.webp" 
              alt={`${city.name} Premium Chauffeur Service`} 
              fill 
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
             <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">{city.name} Executive Hub</span>
                  </div>
                </div>

                <h1 className="text-[32px] font-normal leading-tight text-white font-heading px-2">
                  PROTOCOL <br className="hidden md:block" />
                  <span className="text-gold-accent">EXCELLENCE</span> <br className="hidden md:block" />
                  IN {city.name.toUpperCase()}
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
                  Direct ramp access, hotel protocols, and inner-city executive mobility in our signature GMC fleet.
                </p>

                <div className="flex justify-center pt-12 sm:pt-20 px-6">
                   <Link href="#book" className="w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 bg-white text-slate-900 font-bold rounded-full hover:bg-gold-accent hover:text-white shadow-2xl tracking-[0.3em] uppercase text-[10px] sm:text-xs transition-all active:scale-95 text-center">
                     Get Quote
                   </Link>
                </div>
             </div>
          </div>
        </section>

        {/* Integrated 5-Star Booking Form */}
        <section id="book" className="relative -mt-12 z-20 pb-24">
           <div className="max-w-5xl mx-auto px-0 md:px-4">
              <div className="bg-white rounded-none md:rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] p-5 md:p-12 border-y md:border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="text-center mb-12">
                   <h2 className="text-3xl font-black text-slate-900 uppercase tracking-widest font-heading">{city.name} Regional Protocol</h2>
                   <div className="w-16 h-1 bg-gold-accent mx-auto mt-4" />
                </div>
                <BookingForm title={`${city.name} Chauffeur`} />
              </div>
           </div>
        </section>

        {/* City Specific Expertise */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <div className="space-y-6">
                    <p className="text-gold-accent font-bold tracking-[0.4em] uppercase text-xs">Regional Connectivity</p>
                    <h2 className="text-5xl font-black text-slate-900 uppercase font-heading leading-tight">Corporate & <br /> <span>Diplomatic Care.</span></h2>
                    <p className="text-slate-500 font-light text-xl leading-relaxed">
                       Our {city.name} operations are designed for high-performance mobility. We understand the unique logistics of {city.name}&apos;s economic zones and residential protocols.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     {[
                        { icon: Plane, label: "Airport Protocol", text: "Direct meet-and-greet at arrivals." },
                        { icon: Building2, label: "Embassy Support", text: "Secure movement for diplomatic missions." },
                        { icon: Map, label: "Custom Itineraries", text: "Flexible paths for business summits." },
                        { icon: ShieldCheck, label: "Secure Transport", text: "GPS tracked VIP collection." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 group">
                           <div className="w-12 h-12 bg-slate-50 flex-shrink-0 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors">
                              <item.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                           </div>
                           <div className="space-y-1">
                              <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.label}</p>
                              <p className="text-xs text-slate-400 font-light">{item.text}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white relative z-10">
                    <Image 
                      src="/gmc-fleet/black-gmc-chauffeur-service-ksa.webp" 
                      alt={`${city.name} Protocol SUV`} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-0" />
               </div>
            </div>
          </div>
        </section>

        {/* Neighborhood / Service Clustering */}
        <ServiceClustering 
          title={`Executive Mobility in ${city.name}`}
          items={services.map(s => ({
            name: `${s.title} in ${city.name}`,
            url: `/${s.slug}/`
          }))}
        />
        
        <TrustSignals />
        <KnowledgeBlock 
          heading={`Regional Logistics Insight: ${city.name}`}
          context={`Operational protocols for ${city.name} executive ground travel.`}
          structuredAnswer={`Our ${city.name} operations prioritize absolute discretion and punctuality. We provide specialized bypass paths for airport arrivals and hotel-to-hub executive shuttles.`}
          bulletPoints={[
             `15-minute early arrival guarantee for all ${city.name} collections.`,
             `Bilingual protocol drivers with deep local navigation knowledge.`,
             `Latest model GMC Yukon XL fleet with privacy-suite interiors.`
          ]}
        />
      </>
    );
  }

  if (service) {
    return (
      <>
        <Schema 
          type="TransportationService"
          data={{
            name: `${service.title} Saudi Arabia`,
            description: service.description,
            provider: { "@type": "LocalBusiness", "name": "Saudi Chauffeur Service" },
            url: `https://saudichauffeurservice.com/${slug}/`
          }}
        />

        {/* Elite 5-Star Service Hero */}
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/gmc-fleet/premium-gmc-fleet-riyadh.webp" 
              alt={`${service.title} Excellence`} 
              fill 
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
             <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-1000">
                <p className="text-gold-accent font-bold tracking-[0.5em] uppercase text-xs">Signature Series</p>
                <h1 className="text-[32px] font-normal leading-tight text-white font-heading uppercase px-2 text-balance">
                  {service.title.split(' ')[0]} <br className="hidden sm:block" />
                  <span className="text-gold-accent font-normal">{service.title.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
                  {service.description} Dedicated high-performance ground transportation for the GCC region.
                </p>
                <div className="flex justify-center pt-12 sm:pt-20 px-6">
                   <Link href="#book" className="w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 bg-white text-slate-900 font-bold rounded-full hover:bg-gold-accent hover:text-white shadow-2xl tracking-[0.3em] uppercase text-[10px] sm:text-xs transition-all active:scale-95 text-center">
                     Get Quote
                   </Link>
                </div>
             </div>
          </div>
        </section>

        {/* Integrated Booking Form */}
        <section id="book" className="relative -mt-12 z-20 pb-24">
           <div className="max-w-5xl mx-auto px-0 md:px-4">
              <div className="bg-white rounded-none md:rounded-[2.5rem] shadow-3xl p-5 md:p-12 border-y md:border border-slate-100">
                <BookingForm title={service.title} />
              </div>
           </div>
        </section>

        {/* Service Logistics Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                   <h2 className="text-5xl font-black text-slate-900 uppercase font-heading leading-tight">Protocol <br /> <span>Specifications.</span></h2>
                   <p className="text-xl text-slate-500 font-light leading-relaxed">
                     {service.longDescription}
                   </p>
                   <div className="grid grid-cols-2 gap-8">
                      {[
                        { icon: Shield, label: "Insurance", text: "Full GCC Coverage" },
                        { icon: Clock, label: "Wait Time", text: "60 Mins Inc." },
                        { icon: Users, label: "Drivers", text: "Elite Certified" },
                        { icon: Snowflake, label: "Fleet", text: "Latest Models" }
                      ].map((spec, i) => (
                        <div key={i} className="flex flex-col gap-2">
                           <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                              <spec.icon size={20} className="text-primary" />
                           </div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{spec.label}</p>
                           <p className="text-sm font-bold text-slate-900">{spec.text}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center space-y-8 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h3 className="text-4xl font-black font-heading uppercase">Elite <br /> <span className="text-gold-accent"> Concierge.</span></h3>
                   <p className="text-slate-400 font-light leading-relaxed">Need a customized itinerary for multiple cities? Support for flight changes or embassy protocols?</p>
                   <Link href="https://wa.me/966549100151" className="inline-block px-12 py-5 border border-white/20 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all">
                      Connect via WhatsApp
                   </Link>
                </div>
             </div>
          </div>
        </section>

        <ServiceClustering 
          title={`Regional Footprint for ${service.title}`}
          items={cities.map(c => ({
            name: `${service.title} in ${c.name}`,
            url: `/${c.slug}-chauffeur-service/`
          }))}
        />
      </>
    );
  }

  notFound();
}
