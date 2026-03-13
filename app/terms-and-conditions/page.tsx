import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Saudi Chauffeur Service',
  description: 'Our terms and conditions govern the use of Saudi Chauffeur Service website and chauffeur services.',
  alternates: { canonical: '/terms-and-conditions/' },
};

export default function TermsAndConditions() {
  return (
    <div className="bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-normal leading-tight mb-16 text-center">Terms and Conditions</h1>
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-paragraph space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Acceptance of Terms</h2>
            <p>By accessing or using our website and chauffeur services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Booking and Payment</h2>
            <p>Bookings made via the website or WhatsApp are subject to availability and confirmation. Confirmation of your booking will be provided via the contact information you provide.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Cancellations and Refunds</h2>
            <p>Our cancellation policy is detailed in our Booking Policy. Please refer to that document for information on timelines and potential charges for cancellations.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Liability</h2>
            <p>Saudi Chauffeur Service shall not be liable for any indirect or consequential loss or damage arising from the use of our website or chauffeur services, to the extent permitted by law.</p>
          </section>

          <div className="pt-12 text-sm text-gray-400">
            Last Updated: March 2026
          </div>
        </div>
      </div>
    </div>
  );
}
