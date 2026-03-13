import type { Metadata, Viewport } from 'next';
import { Roboto, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Schema from '@/components/Schema';
import EntityMarkup from '@/components/EntityMarkup';
import ScrollProgress from '@/components/ScrollProgress';
import KnowledgeGraph from '@/components/KnowledgeGraph';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
});

export const metadata: Metadata = {
  title: {
    default: 'Chauffeur Service Across Saudi Arabia | Saudi Chauffeur Service',
    template: '%s | Saudi Chauffeur Service',
  },
  description: 'Reliable GMC chauffeur transportation for Hajj pilgrims, Umrah travelers, tourists, business travelers, and special events in Saudi Arabia and GCC.',
  category: 'VIP Ground Transportation & Luxury Travels',
  keywords: [
    "Saudi Chauffeur Service", "GMC Yukon Chauffeur", "VIP Transport Riyadh", "Luxury Car Rental Jeddah", 
    "Airport Transfer KSA", "Makkah to Madinah VIP Transfer", "Saudi Border Crossing Transport", 
    "Professional Chauffeur KSA", "Executive Car Rental Saudi Arabia",
    "Bilingual Chauffeur Riyadh", "GMC Fleet Jeddah Airport", "VIP Pilgrimage Transport",
    "Hajj and Umrah Chauffeur", "Diplomatic Protocol Transport KSA", "Riyadh Business Travel"
  ],
  creator: 'Saudi Chauffeur Service',
  publisher: 'Saudi Chauffeur Service',
  authors: [{ name: 'Ajmal Sabi', url: 'https://saudichauffeurservice.com/' }],
  applicationName: 'Saudi Chauffeur Service',
  appleWebApp: {
    capable: true,
    title: 'Saudi Chauffeur',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL('https://saudichauffeurservice.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saudichauffeurservice.com/',
    siteName: 'Saudi Chauffeur Service',
    title: 'Saudi Chauffeur Service | Premium Chauffeur Across KSA',
    description: 'Reliable GMC chauffeur transportation for Hajj, Umrah, business, and tourism across Saudi Arabia and GCC.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Saudi Chauffeur Service Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saudi Chauffeur Service',
    description: 'Premium GMC SUV Chauffeur Service in Saudi Arabia & GCC.',
    images: ['/og-image.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${roboto.variable} ${notoArabic.variable} antialiased min-h-screen flex flex-col bg-white text-black`} suppressHydrationWarning>
        <KnowledgeGraph />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-20">
          <EntityMarkup />
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Schema 
          type="LocalBusiness"
          data={{
            name: "Saudi Chauffeur Service",
            image: "https://saudichauffeurservice.com/logo.png",
            logo: "https://saudichauffeurservice.com/logo.png",
            "@id": "https://saudichauffeurservice.com",
            url: "https://saudichauffeurservice.com",
            telephone: "+966549100151",
            priceRange: "$$$",
            sameAs: [
              "https://wa.me/966549100151",
              "https://www.google.com/search?q=Saudi+Chauffeur+Service"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              "telephone": "+966549100151",
              "contactType": "customer service",
              "areaServed": ["SA", "AE", "QA", "KW", "BH"],
              "availableLanguage": ["English", "Arabic"]
            },
            address: {
              "@type": "PostalAddress",
              "addressLocality": "Riyadh",
              "addressCountry": "SA",
              "addressRegion": "KSA"
            },
            geo: {
              "@type": "GeoCoordinates",
              "latitude": 24.7136,
              "longitude": 46.6753
            },
            areaServed: [
              { "@type": "City", "name": "Riyadh" },
              { "@type": "City", "name": "Jeddah" },
              { "@type": "City", "name": "Makkah" },
              { "@type": "City", "name": "Madinah" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "United Arab Emirates" }
            ],
            knowsAbout: [
              "VIP Chauffeur Service",
              "Airport Meet & Greet",
              "Point-to-Point Intercity Transport",
              "Hajj & Umrah Pilgrimage Travel",
              "GCC Border Crossing"
            ],
            brand: {
              "@type": "Brand",
              "name": "Saudi Chauffeur Service"
            },
            founder: {
              "@type": "Person",
              "name": "Ajmal Sabi",
              "jobTitle": "CEO & Founder"
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          }}
        />
      </body>
    </html>
  );
}
