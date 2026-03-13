import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Saudi Chauffeur Service',
  description: 'Our privacy policy outlines how Saudi Chauffeur Service collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy-policy/' },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-normal leading-tight mb-16 text-center">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-paragraph space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Introduction</h2>
            <p>At Saudi Chauffeur Service, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we handle your personal data when you visit our website and use our chauffeur services.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">The Data We Collect</h2>
            <p>We may collect, use, store, and transfer different kinds of personal data about you, including identity data, contact data, technical data, and usage data when you make a booking or interact with our support team.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">How We Use Your Data</h2>
            <p>We will only use your personal data for the purpose for which we collected it, which includes performing the chauffeur service booking you have requested and updating you on your ride status.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest border-l-4 border-gold-accent pl-4">Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
          </section>
          
          <div className="pt-12 text-sm text-gray-400">
            Last Updated: March 2026
          </div>
        </div>
      </div>
    </div>
  );
}
