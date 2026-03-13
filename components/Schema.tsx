import React from 'react';

export default function Schema({ type, data }: { type: 'LocalBusiness' | 'TaxiService' | 'TransportationService' | 'FAQPage' | 'BreadcrumbList' | 'Person' | 'Organization' | 'WebPage' | 'Airport', data: any }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
