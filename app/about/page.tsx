import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, UserCheck, Star, Globe, Clock, MessageCircle, ChevronRight, Briefcase } from 'lucide-react';
import TrustSignals from '@/components/TrustSignals';
import AuthorAuthority from '@/components/AuthorAuthority';

export const metadata: Metadata = {
  title: 'Our Heritage & Mission | Saudi Chauffeur Service',
  description: 'Founded with a vision for executive protocol, Saudi Chauffeur Service provides elite ground transportation across the Kingdom and GCC borders.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 5-Star Heritage Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-900 border-b border-white/5">
        <div className="absolute inset-0 z-0 text-white">
          <Image 
            src="/gmc-fleet/premium-gmc-fleet-riyadh.webp" 
            alt="Saudi Chauffeur Service Heritage" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center text-white">
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
             <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Protocol Heritage</span>
              </div>
            </div>

            <h1 className="text-[32px] font-normal leading-tight uppercase text-white">
              Legacy of <br />
              <span className="text-gold-accent">Excellence.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0 mb-12">
               Since 2018, we have defined the 5-star ground transportation protocol for dignitaries, business leaders, and discerning families in the Kingdom.
            </p>

            <div className="flex justify-center pt-8">
               <Link href="/#book" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 font-bold rounded-full hover:bg-gold-accent hover:text-white shadow-2xl tracking-[0.3em] uppercase text-xs transition-all active:scale-95">
                 Secure Protocol
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <p className="text-primary font-bold tracking-[0.5em] uppercase text-xs">Our Commitment</p>
                    <h2 className="text-5xl font-black text-slate-900 uppercase font-heading leading-tight">Mission <br /> <span>Protocol.</span></h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                       To provide seamless, secure, and prestigious mobility solutions that reflect the hospitality and vision of Saudi Arabia. We bridge cities with a fleet that represents the latest in automotive luxury.
                    </p>
                 </div>
                 
                 <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                    <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Vision 2030 Alignment</p>
                    <p className="text-slate-600 font-light text-lg leading-relaxed">
                       &quot;Supporting the Kingdom&apos;s growth as a global hub for business and tourism by providing world-class ground transportation that meets international standards.&quot;
                    </p>
                 </div>
              </div>

              <div className="relative group">
                 <div className="aspect-square rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white relative z-10">
                    <Image 
                      src="/gmc-fleet/luxury-gmc-yukon-xl-saudi-arabia.webp" 
                      alt="Signature Fleet Presence" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                    />
                 </div>
                 <div className="absolute -inset-10 bg-gold-accent/5 rounded-full blur-[100px] -z-0" />
              </div>
           </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-black uppercase tracking-widest font-heading mb-20">Five Pillars <br /> <span className="text-gold-accent">of Trust.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8">
               {[
                 { icon: ShieldCheck, title: "INTEGRITY", desc: "Honesty in every quote." },
                 { icon: UserCheck, title: "DISCRETION", desc: "Confidentiality assured." },
                 { icon: Clock, title: "PUNCTUALITY", desc: "15-min early arrival." },
                 { icon: Star, title: "HOSPITALITY", desc: "Refined cabin protocol." },
                 { icon: Globe, title: "GCC SCALE", desc: "Regional border depth." }
               ].map((value, i) => (
                 <div key={i} className="space-y-6 group">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gold-accent group-hover:border-gold-accent transition-all duration-300">
                       <value.icon size={28} className="text-gold-accent group-hover:text-white" />
                    </div>
                    <div className="space-y-1">
                       <h4 className="text-sm font-bold tracking-widest uppercase">{value.title}</h4>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{value.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Authority Sections */}
      <TrustSignals />
      <AuthorAuthority />

      {/* Final Call to Action - Qatar Style */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
           <h2 className="text-5xl md:text-7xl font-black text-slate-900 font-heading leading-tight uppercase">The Choice of <br /> <span className="text-primary">DIGNITARIES.</span></h2>
           <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">Join the executive network that relies on us for mission-critical transportation across the Middle East.</p>
           
           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact/" className="px-12 py-6 bg-slate-900 text-white font-bold rounded-full hover:bg-gold-accent transition-all shadow-2xl tracking-[0.3em] uppercase text-xs">
                 Contact Concierge
              </Link>
              <Link href="https://wa.me/966549100151" className="flex items-center gap-3 px-12 py-6 bg-primary text-white font-bold rounded-full hover:bg-primary-hover shadow-2xl tracking-[0.3em] uppercase text-xs transition-all">
                 <MessageCircle size={20} />
                 WhatsApp Protocol
              </Link>
           </div>
        </div>
      </section>
    </>
  );
}
