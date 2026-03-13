export interface Vehicle {
  name: string;
  slug: string;
  passengers: number;
  luggage: number;
  features: string[];
  image: string;
  category: 'sedan' | 'suv' | 'van' | 'bus';
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    name: "Mercedes S-Class",
    slug: "mercedes-s-class",
    passengers: 3,
    luggage: 2,
    features: ["Air Conditioning", "Leather Interior", "Rear Entertainment", "Privacy Glass"],
    image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
    category: "sedan",
    description: "The epitome of luxury sedans. The Mercedes S-Class offers an unmatched first-class experience with executive rear seating, ambient lighting, and whisper-quiet cabin."
  },
  {
    name: "Cadillac Escalade",
    slug: "cadillac-escalade",
    passengers: 7,
    luggage: 4,
    features: ["Air Conditioning", "Premium Sound", "Captain Seats", "Panoramic Roof"],
    image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
    category: "suv",
    description: "The iconic American SUV. The Cadillac Escalade delivers bold presence, spacious luxury, and commanding road authority for groups and families."
  },
  {
    name: "GMC Yukon XL",
    slug: "gmc-yukon-xl",
    passengers: 7,
    luggage: 4,
    features: ["Air Conditioning", "Premium Comfort", "Spacious Cabin", "All-Terrain Ready"],
    image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
    category: "suv",
    description: "Our signature fleet vehicle. The GMC Yukon XL is the backbone of Saudi Chauffeur Service, offering premium comfort and reliability across all Saudi terrain."
  },
  {
    name: "Ford Taurus",
    slug: "ford-taurus",
    passengers: 3,
    luggage: 2,
    features: ["Air Conditioning", "Modern Interior", "Fuel Efficient", "Smooth Ride"],
    image: "/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
    category: "sedan",
    description: "The modern executive sedan. The Ford Taurus combines sleek design with advanced technology for efficient city and highway transfers."
  },
  {
    name: "BMW",
    slug: "bmw",
    passengers: 3,
    luggage: 2,
    features: ["Air Conditioning", "Executive Lounge", "Gesture Control", "Ambient Lighting"],
    image: "/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
    category: "sedan",
    description: "German engineering at its finest. The BMW provides dynamic driving performance paired with an ultra-luxurious passenger experience."
  },
  {
    name: "Genesis",
    slug: "genesis",
    passengers: 3,
    luggage: 2,
    features: ["Air Conditioning", "Quilted Leather", "Advanced Safety", "Smart Cruise"],
    image: "/fleet/genesis-g80-luxury-transport-ksa.webp",
    category: "sedan",
    description: "Korean luxury redefined. The Genesis surprises with world-class craftsmanship, a serene cabin, and cutting-edge driver assistance technology."
  },
  {
    name: "Mercedes Vito",
    slug: "mercedes-vito",
    passengers: 7,
    luggage: 4,
    features: ["Air Conditioning", "Spacious Seating", "Sliding Doors", "Group-Ready"],
    image: "/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
    category: "van",
    description: "The premium people mover. The Mercedes Vito offers first-class group transportation with generous space, easy access, and Mercedes-Benz quality throughout."
  },
  {
    name: "Mercedes Sprinter",
    slug: "mercedes-sprinter",
    passengers: 14,
    luggage: 4,
    features: ["Air Conditioning", "VIP Configuration", "USB Charging", "Large Luggage Bay"],
    image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
    category: "van",
    description: "The ultimate group transfer vehicle. Our Mercedes Sprinter is configured for VIP travel, perfect for corporate delegations, wedding parties, and pilgrim groups."
  }
];
