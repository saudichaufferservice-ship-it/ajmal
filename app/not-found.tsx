import Link from 'next/link';
import { Home, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center space-y-10 animate-in fade-in zoom-in duration-700">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-gray-100">404</h1>
          <h2 className="text-4xl lg:text-5xl font-normal leading-tight">Page Not Found</h2>
          <p className="text-xl text-gray-500 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Link 
            href="/" 
            className="px-10 py-5 bg-black text-white font-bold rounded-xl hover:bg-gold-accent transition-all flex items-center justify-center shadow-xl"
          >
            <Home size={20} className="mr-3" />
            Back to Home
          </Link>
          <Link 
            href="https://wa.me/966549100151?text=Hello%20I%20am%20having%20trouble%20finding%20a%20page" 
            className="px-10 py-5 border-2 border-black font-bold rounded-xl hover:bg-black hover:text-white transition-all flex items-center justify-center"
          >
            <MessageCircle size={20} className="mr-3" />
            Help via WhatsApp
          </Link>
        </div>
        
        <div className="pt-16">
          <div className="w-16 h-1 bg-gold-accent mx-auto rounded-full" />
        </div>
      </div>
    </div>
  );
}
