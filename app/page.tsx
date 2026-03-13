import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  MessageCircle, Star, CheckCircle,
  Shield, Briefcase, Users, Snowflake, Wifi, Coffee,
  Plane, PhoneCall, MapPin, ArrowRight
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { cities } from '@/data/cities';
import VIPCars from '@/components/VIPCars';
import HomeFAQ from '@/components/HomeFAQ';
import TrustSignals from '@/components/TrustSignals';
import AuthorAuthority from '@/components/AuthorAuthority';
import { services } from '@/data/services';

import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: 'Saudi Chauffeur Service | Premium GMC Fleet Across KSA',
  description: 'Professional GMC chauffeur service across Saudi Arabia. Airport transfers, Hajj & Umrah transport, city-to-city travel, and GCC border crossing. Book via WhatsApp.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO — Cinematic Slider Layout
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[max(700px,100vh)] flex flex-col justify-center bg-[#0c1320] pt-20">
        {/* Background Accents (No background image) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C49A6C]/5 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#701D45]/5 rounded-full blur-[100px] -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Copy */}
            <div className="py-12 md:py-20">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#C49A6C]" />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#C49A6C]">Kingdom's Premier Chauffeur Service · Since 2018</span>
              </div>

              {/* Main headline */}
              <h1 className="text-[32px] md:text-[56px] font-normal text-white leading-tight mb-6 md:mb-8 text-balance">
                Executive<br />
                <span className="text-[#C49A6C]">Ground Transport</span><br />
                Across Saudi Arabia.
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed mb-10 md:mb-12 font-light">
                Discreet. Punctual. Impeccable. Elite fleet of GMC, Mercedes, and Cadillac chauffeurs for airports, Hajj, Umrah, and GCC border crossings — 24/7.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#book"
                  className="group inline-flex items-center justify-center sm:justify-start gap-3 px-8 py-5 sm:py-4 bg-[#C49A6C] text-[#0c1320] font-black text-sm rounded-lg hover:bg-[#e8c98f] transition-all duration-300 shadow-lg shadow-[#C49A6C]/20 uppercase tracking-widest"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                  <ArrowRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
                <Link
                  href="tel:+966549100151"
                  className="inline-flex items-center justify-center sm:justify-start gap-3 px-8 py-5 sm:py-4 border border-white/25 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneCall size={16} />
                  +966 54 910 0151
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Slider */}
            <div className="relative">
              <HeroSlider />
            </div>

          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-[#C49A6C]/10 backdrop-blur-sm border-t border-[#C49A6C]/20 mt-12 md:mt-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#C49A6C]/20">
              {[
                { val: '6+', label: 'Years Operating' },
                { val: '24/7', label: 'Concierge Support' },
                { val: '5★', label: 'Client Rating' },
              ].map((s, i) => (
                <div key={i} className="py-4 sm:py-5 text-center px-4">
                  <p className="text-[#C49A6C] text-xl sm:text-2xl font-black">{s.val}</p>
                  <p className="text-slate-400 text-[10px] sm:text-[11px] uppercase tracking-widest mt-0.5 sm:mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOOKING PANEL
      ═══════════════════════════════════════════ */}
      <section id="book" className="bg-white py-12 md:py-24 scroll-mt-20">
        <div className="w-full px-0 md:max-w-6xl md:mx-auto md:px-6 lg:px-12">
          <div className="bg-slate-950 rounded-none md:rounded-2xl p-6 md:p-12 shadow-2xl border-y md:border border-slate-800">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#C49A6C] font-bold mb-4">Instant Booking</p>
                <h2 className="text-2xl md:text-4xl font-black text-white">Reserve Your Chauffeur</h2>
              </div>
              <a href="tel:+966549100151" className="inline-flex items-center justify-center md:justify-start gap-3 bg-[#C49A6C]/10 border border-[#C49A6C]/30 rounded-xl w-full md:w-auto px-6 py-4 hover:bg-[#C49A6C]/20 transition-colors">
                <PhoneCall size={18} className="text-[#C49A6C]" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Available 24/7</p>
                  <p className="text-white font-black text-lg leading-none">+966 54 910 0151</p>
                </div>
              </a>
            </div>
            <BookingForm dark title="Homepage Inquiry" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO WE ARE — 3 pillars
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#701D45] font-bold mb-3">Our Promise</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Why Clients Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
            {[
              { num: '01', img: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp", title: "Elite Chauffeurs", desc: "Vetted, bilingual professionals trained in diplomatic protocols and VIP discretion." },
              { num: '02', img: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp", title: "Always Punctual", desc: "We arrive 15 minutes early. No exceptions — your time is the priority." },
              { num: '03', img: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp", title: "5-Star Cabin", desc: "Latest-model GMC Yukons with leather, climate zones, wifi, and refreshments." }
            ].map((f, i) => (
              <div key={i} className="bg-white group p-10 hover:bg-[#0c1320] transition-all duration-500 overflow-hidden relative">
                {/* Number */}
                <span className="absolute top-6 right-8 text-[80px] font-black text-slate-50 group-hover:text-white/5 leading-none select-none transition-colors">{f.num}</span>
                {/* Image */}
                <div className="relative w-full h-32 mb-6">
                  <Image src={f.img} alt={f.title} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-3 transition-colors">{f.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CHAUFFEUR SERVICES — Grid layout
      ═══════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15vw] font-black text-slate-100/50 pointer-events-none select-none uppercase -z-0">
          Services
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold-accent font-black mb-4">Elite Solutions</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase font-heading leading-tight">
              Executive Chauffeur <br /> <span className="text-gold-accent">Services.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-gold-accent/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-accent group-hover:rotate-6 transition-all duration-500">
                  <service.icon size={32} className="text-gold-accent group-hover:text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-slate-50">
                  <Link 
                    href={`https://wa.me/966549100151?text=Hello! I would like to get a quote for ${service.title} service.`}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-gold-accent transition-all duration-300 shadow-lg text-sm uppercase tracking-widest"
                  >
                    <MessageCircle size={18} className="text-green-400" />
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/contact/" 
              className="inline-flex items-center gap-3 text-slate-900 font-bold hover:text-gold-accent transition-colors group px-8 py-3 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md"
            >
              See All Services
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FLEET
      ═══════════════════════════════════════════ */}
      <div id="fleet">
        <VIPCars />
      </div>

      {/* ═══════════════════════════════════════════
          COMFORT — Split layout
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/fleet/mercedes-vito-vip-shuttle-service-ksa.webp"
                alt="VIP Shuttle"
                fill
                className="object-contain p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1320]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-10 bg-[#C49A6C] mb-3" />
                <h3 className="text-2xl font-black text-white">First Class, On the Road.</h3>
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#701D45] font-bold mb-3">Cabin Specs</p>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">Designed for Executive Comfort.</h2>
                <p className="text-slate-500 leading-relaxed">
                  Every GMC Yukon in our fleet is configured to create a first-class environment — from hand-stitched leather seating to noise-isolated cabins.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Snowflake, label: "3-Zone Climate", sub: "Cooling & Heating" },
                  { icon: Wifi, label: "Fast Wi-Fi", sub: "Unlimited data" },
                  { icon: Coffee, label: "Refreshments", sub: "Evian / Fiji" },
                  { icon: Shield, label: "Privacy Glass", sub: "Full blackout tint" },
                  { icon: Briefcase, label: "XL Boot", sub: "6–8 large bags" },
                  { icon: Users, label: "Up to 7 Seats", sub: "Spacious layout" }
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-[#C49A6C]/40 hover:bg-[#C49A6C]/5 transition-all group">
                    <a.icon size={18} className="text-[#C49A6C] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{a.label}</p>
                      <p className="text-xs text-slate-400">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AIRPORT — Dark banner
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0c1320] text-white overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 flex items-center justify-end p-12 opacity-40">
            <div className="relative w-full h-full max-w-xl">
              <Image src="/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp" alt="Airport Transfer" fill className="object-contain" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1320] via-[#0c1320]/80 to-transparent" />
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Plane size={16} className="text-[#C49A6C]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C49A6C] font-bold">Airport Transfers · JED · RUH · DMM</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Arrive in Style.<br /><span className="text-[#C49A6C]">Every Time.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              We monitor your flight in real-time and have your dedicated chauffeur waiting at arrivals — holding your name sign — before you clear customs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/966549100151" className="inline-flex items-center gap-3 px-8 py-4 bg-[#C49A6C] text-[#0c1320] font-black text-sm rounded-lg hover:bg-[#e8c98f] transition-colors">
                <MessageCircle size={18} />
                Book Airport Transfer
              </Link>
              <Link href="tel:+966549100151" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors">
                <PhoneCall size={16} />
                Call Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST SIGNALS
      ═══════════════════════════════════════════ */}
      <TrustSignals />

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C49A6C] font-bold mb-3">Client Reviews</p>
            <h2 className="text-3xl md:text-5xl font-black text-white">The Gold Standard.<br /><span className="text-[#C49A6C]">Proven.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Corporate Delegation", city: "Riyadh → Jeddah", text: "The chauffeur was impeccably dressed, on time, and drove magnificently. Our delegation was extremely impressed.", rating: 5 },
              { name: "Family — Hajj Season", city: "Jeddah → Makkah", text: "Stress-free and comfortable. The vehicle was spotless, cool, and the driver was respectful and professional.", rating: 5 },
              { name: "Business Executive", city: "King Fahd Causeway", text: "Seamless border crossing. Better than any service I've used in Europe. This is truly world-class.", rating: 5 }
            ].map((r, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-[#C49A6C]/40 transition-all">
                <div className="flex gap-1 text-[#C49A6C] mb-5">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div>
                    <p className="font-bold text-white text-sm">{r.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={11} className="text-slate-500" />
                      <p className="text-xs text-slate-500">{r.city}</p>
                    </div>
                  </div>
                  <CheckCircle size={18} className="text-[#C49A6C]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CITIES
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900">Available Across the Kingdom</h2>
            <p className="text-slate-400 text-sm mt-2">Click your city to see routes and pricing.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-chauffeur-service/`}
                className="px-5 py-3 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-[#701D45] hover:text-white hover:border-[#701D45] transition-all duration-200"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#701D45] font-bold mb-3">Quick Answers</p>
            <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          </div>
          <HomeFAQ />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AUTHOR
      ═══════════════════════════════════════════ */}
      <AuthorAuthority />

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#701D45] relative overflow-hidden text-center">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="h-px w-12 bg-[#C49A6C] mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Your Journey.<br />Elevated.
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-10">
            WhatsApp us now for an instant quote. Your dedicated chauffeur is standing by.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/966549100151" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black rounded-xl hover:bg-[#128C7E] transition-colors shadow-2xl text-sm">
              <MessageCircle size={20} />
              Book Now on WhatsApp
            </Link>
            <Link href="tel:+966549100151" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm">
              <PhoneCall size={18} />
              +966 54 910 0151
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Saudi Chauffeur Service",
          "url": "https://saudichauffeurservice.com",
          "telephone": "+966549100151",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+966549100151", "contactType": "customer service" }
        }) }}
      />
    </main>
  );
}
