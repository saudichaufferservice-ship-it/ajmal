import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking Policy | Saudi Chauffeur Service',
  description: 'Our booking policy outlines the procedures, timelines, and terms for booking a ride with Saudi Chauffeur Service.',
  alternates: { canonical: '/booking-policy/' },
};

export default function BookingPolicy() {
  return (
    <div className="bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-normal leading-tight mb-16 text-center">Booking Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-paragraph space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Booking Process</h2>
            <p>Our chauffeur service bookings can be made through our website form or instantly via WhatsApp. Once we receive your request, our team will provide a quote and confirmation based on your requirements.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Wait Times</h2>
            <p>For airport pickups, a complimentary wait time of 60 minutes is included, starting from your flight's arrival. For other pickups, a complimentary wait time of 15 minutes is provided.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Cancellations</h2>
            <p>Cancellations made at least 24 hours before the scheduled pickup time are typically free of charge. Cancellations within 24 hours may incur a fee based on the trip details and vehicle preparation.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Changes to Bookings</h2>
            <p>Changes to your booking (e.g., date, time, or location) should be communicated to us as soon as possible via WhatsApp or email. We will do our best to accommodate any changes subject to availability.</p>
          </section>

          <div className="pt-12 text-sm text-gray-400">
            Last Updated: March 2026
          </div>
        </div>
      </div>
    </div>
  );
}
