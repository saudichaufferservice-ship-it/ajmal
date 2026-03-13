import { Metadata } from 'next';
import Image from 'next/image';
import { routes, Route } from '@/data/routes';
import BookingForm from '@/components/BookingForm';
import { ChevronRight, ArrowRight, MapPin, Milestone, Star, MessageCircle, Clock, Calendar, CheckCircle, Navigation } from 'lucide-react';
import Link from 'next/link';
import Schema from '@/components/Schema';
import { notFound } from 'next/navigation';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import FreshnessBadge from '@/components/FreshnessBadge';
import ServiceClustering from '@/components/ServiceClustering';
import ContentStructureTOC from '@/components/ContentStructureTOC';

export async function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = routes.find(r => r.slug === slug);
  
  if (!route) return {};

  return {
    title: `Chauffeur Service from ${route.from} to ${route.to} | Saudi Chauffeur Service`,
    description: `Book a professional chauffeur transfer from ${route.from} to ${route.to}. Reliable GMC SUV transport with a journey time of approx ${route.time}.`,
    alternates: {
      canonical: `/routes/${route.slug}/`,
    },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routes.find(r => r.slug === slug);

  if (!route) {
    notFound();
  }

  return (
    <>
      <Schema 
        type="TransportationService"
        data={{
          name: `Chauffeur Transfer ${route.from} to ${route.to}`,
          description: `Professional inter-city chauffeur service from ${route.from} to ${route.to}.`,
          originAddress: {
            "@type": "PostalAddress",
            "addressLocality": route.from
          },
          destinationAddress: {
            "@type": "PostalAddress",
            "addressLocality": route.to
          },
          provider: {
            "@type": "LocalBusiness",
            "name": "Saudi Chauffeur Service"
          },
          url: `https://saudichauffeurservice.com/routes/${route.slug}/`
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
                "name": "Routes",
                "item": "https://saudichauffeurservice.com/saudi-city-to-city-transfer/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `${route.from} to ${route.to}`,
                "item": `https://saudichauffeurservice.com/routes/${route.slug}/`
              }
            ]
          }}
        />

        <section className="bg-white pt-24 pb-32 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-3/5 space-y-10 animate-in slide-in-from-left duration-700">
              <div className="flex items-center space-x-4">
                <span className="px-5 py-2 bg-black text-white rounded-full text-sm font-bold tracking-widest uppercase">
                  City-to-City
                </span>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm flex items-center">
                  <Navigation size={16} className="mr-2" />
                  Popular Route
                </span>
              </div>
              
              <FreshnessBadge />

              <h1 className="text-[32px] font-normal leading-tight text-black uppercase md:capitalize">
                Chauffeur Service from {route.from} to {route.to}
              </h1>

              <ExecutiveSummary 
                intent={`Booking a car from ${route.from} to ${route.to}?`}
                entities={[`${route.from}`, `${route.to}`, "Intercity Transfer", "GMC SUV", `${route.distance}`]}
                summary={`Secure a premium VIP transfer from ${route.from} to ${route.to}. We provide door-to-door ground transportation covering ${route.distance} in approximately ${route.time}. Enjoy a comfortable, uninterrupted journey in our luxury GMC fleet.`}
              />

              <ContentStructureTOC 
                items={[
                  { id: "overview", title: `Route Overview & Details` },
                  { id: "included", title: `What's Included in Your Trip` },
                  { id: "fleet", title: `Premium Intercity Fleet` }
                ]}
              />

              <div id="overview" className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-y border-gray-100 mt-8">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Travel Distance</p>
                  <p className="text-3xl font-bold">{route.distance}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Est. Travel Time</p>
                  <p className="text-3xl font-bold">{route.time}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Service Level</p>
                  <p className="text-3xl font-bold">Premium</p>
                </div>
              </div>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                Avoid the stress of public transport and fly in comfort. Book a private chauffeur service from {route.from} 
                to {route.to} and enjoy a premium travel experience in our chauffeur-driven GMC SUVs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-10 px-2 sm:px-0">
                <Link href="#book" className="w-full sm:w-auto px-10 py-5 bg-[#C49A6C] text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-center uppercase tracking-widest">
                  Secure Protocol
                </Link>
                <Link href={`https://wa.me/966549100151?text=Hello, I want to book a transfer from ${route.from} to ${route.to}`} className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-all flex items-center justify-center">
                  <MessageCircle size={20} className="mr-3 text-[#25D366]" />
                  WhatsApp
                </Link>
              </div>
            </div>
            <div id="book" className="lg:w-2/5 w-full">
              <BookingForm title={`${route.from} to ${route.to} Transfer`} />
            </div>
          </div>
        </div>
      </section>

      <section id="included" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[32px] font-normal">What's included in your trip from {route.from}</h2>
            <p className="text-gray-500">Premium service standards for all inter-city transfers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Point-to-Point Pickup", desc: "Enjoy the convenience of door-to-door transportation, exactly as you scheduled." },
              { title: "Complimentary Stops", desc: "For long journeys, we include short stops for rest, prayer, or snacks in between cities." },
              { title: "Bottled Water & Wi-Fi", desc: "Stay refreshed and connected throughout your ride across Saudi Arabia." },
              { title: "Spacious Luggage Area", desc: "Our GMC SUVs offer ample room for your suitcases, ensuring a clutter-free ride." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all border border-transparent hover:border-gold-light group">
                <div className="p-4 bg-gray-50 rounded-xl mb-6 inline-block group-hover:bg-gold-light transition-colors">
                  <CheckCircle className="text-gold-accent" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-3xl overflow-hidden shadow-2xl skew-x-1">
              <Image 
                src="/gmc-fleet/premium-gmc-fleet-riyadh.webp" 
                alt={`Premium GMC Yukon chauffeur for ${route.from} to ${route.to} transfer`} 
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center text-white space-x-12">
                  <div className="text-center">
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-gold-accent">{route.from}</p>
                    <p className="text-xl font-bold">Origin</p>
                  </div>
                  <div className="flex-grow border-t border-dashed border-gold-accent relative">
                    <Navigation className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-90 text-gold-accent" size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs uppercase font-bold tracking-widest mb-1 text-gold-accent">{route.to}</p>
                    <p className="text-xl font-bold">Destination</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-[32px] font-normal">Effortless travel from {route.from} to {route.to}</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Traveling between {route.from} and {route.to} can be exhausting and stressful. 
                Our chauffeur service provides the perfect solution, offering privacy, safety, and 
                comfort for individuals and groups.
              </p>
              <div className="space-y-4">
                <p className="font-bold border-l-4 border-gold-accent pl-4 text-xl">Travel Guide:</p>
                <div className="grid grid-cols-1 gap-4">
                  <p className="text-gray-600 flex items-start">
                    <Star className="text-gold-accent mr-3 mt-1 flex-shrink-0" size={18} fill="currentColor" />
                    <strong>Pickup:</strong> Any hotel, residence, or airport in {route.from}.
                  </p>
                  <p className="text-gray-600 flex items-start">
                    <Star className="text-gold-accent mr-3 mt-1 flex-shrink-0" size={18} fill="currentColor" />
                    <strong>Route:</strong> Scenic views and smooth highways between the cities.
                  </p>
                  <p className="text-gray-600 flex items-start">
                    <Star className="text-gold-accent mr-3 mt-1 flex-shrink-0" size={18} fill="currentColor" />
                    <strong>Drop-off:</strong> Any destination in {route.to} including major landmarks.
                  </p>
                </div>
              </div>
              <Link href="https://wa.me/966549100151" className="inline-block px-10 py-5 bg-black text-white font-bold rounded-xl hover:bg-gold-accent transition-all ring-offset-2 hover:ring-2 ring-gold-accent" rel="nofollow">
                Book a Ride to {route.to}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] font-normal mb-8">Ready for your trip?</h2>
          <p className="text-gray-500 text-lg mb-12">
            Experience the comfort and reliability of our professional chauffeur service from {route.from} to {route.to} today.
          </p>
          <Link href="https://wa.me/966549100151" className="px-10 py-5 bg-gold-accent text-white font-bold rounded-xl hover:bg-black transition-all flex items-center justify-center w-full sm:w-auto mx-auto shadow-2xl" rel="nofollow">
            <MessageCircle className="mr-3" />
            Instant WhatsApp Booking
          </Link>
        </div>
      </section>

      <ServiceClustering 
        title="Other Popular Routes"
        items={routes.filter(r => r.slug !== route.slug).slice(0, 8).map(r => ({
          name: `${r.from} to ${r.to}`,
          url: `/routes/${r.slug}/`
        }))}
      />
    </>
  );
}
