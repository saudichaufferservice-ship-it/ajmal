import React from 'react';
import Schema from '@/components/Schema';

export default function EntityMarkup({ pageType = "WebPage" }: { pageType?: string }) {
  return (
    <Schema 
      type="WebPage"
      data={{
        about: {
          "@type": "Thing",
          "name": "Luxury Chauffeur Service",
          "description": "Premium ground transportation and executive car hires in Saudi Arabia."
        },
        mentions: [
          { "@type": "City", "name": "Riyadh" },
          { "@type": "City", "name": "Jeddah" },
          { "@type": "City", "name": "Makkah" },
          { "@type": "City", "name": "Madinah" },
          { "@type": "Organization", "name": "Saudi Chauffeur Service" }
        ],
        specialty: [
          "VIP SUV Chauffeur",
          "Airport Transfers Riyadh/Jeddah",
          "Hajj & Umrah VIP Transport",
          "Corporate GCC Border Crossing",
          "Diplomatic Protocol Transport"
        ],
        inLanguage: "en-US"
      }}
    />
  );
}
