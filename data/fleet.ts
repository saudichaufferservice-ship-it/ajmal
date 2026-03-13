export interface Vehicle {
  name: string;
  slug: string;
  passengers: number;
  luggage: number;
  features: string[];
  image: string;
  category: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

export const vehicles: Vehicle[] = [
  {
    name: "Mercedes S-Class",
    slug: "mercedes-s-class",
    passengers: 3,
    luggage: 2,
    features: ["Maybach Comfort", "First-Class Rear", "Ambient Lighting", "Executive Protocol"],
    image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
    category: "VIP Sedan",
    description: "The epitome of luxury sedans. The Mercedes S-Class offers an unmatched first-class experience with executive rear seating and whisper-quiet cabin.",
    badge: "VIP Elite",
    badgeColor: "#C49A6C"
  },
  {
    name: "Cadillac Escalade",
    slug: "cadillac-escalade",
    passengers: 7,
    luggage: 4,
    features: ["AKG Studio Sound", "OLED Displays", "Captain Seating", "Magnetic Ride"],
    image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
    category: "Luxury SUV",
    description: "The iconic American SUV. The Cadillac Escalade delivers bold presence, spacious luxury, and commanding road authority.",
    badge: "Presidential",
    badgeColor: "#0c1320"
  },
  {
    name: "GMC Yukon XL Denali",
    slug: "gmc-yukon-xl",
    passengers: 7,
    luggage: 6,
    features: ["Massaging Seats", "XL Cargo Space", "Bilingual Driver", "4x4 Capability"],
    image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
    category: "Executive SUV",
    description: "Our signature fleet vehicle. Specially configured for the Kingdom's terrain with ultimate comfort and massive luggage capacity.",
    badge: "Most Popular",
    badgeColor: "#701D45"
  },
  {
    name: "Ford Taurus",
    slug: "ford-taurus",
    passengers: 4,
    luggage: 2,
    features: ["Modern Design", "Quiet Cabin", "Reliable Performance", "Eco-Efficient"],
    image: "/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
    category: "Executive Sedan",
    description: "The modern executive sedan. The Ford Taurus combines sleek design with advanced technology for efficient city transfers.",
    badge: "Business",
    badgeColor: "#475569"
  },
  {
    name: "BMW 7 Series",
    slug: "bmw",
    passengers: 3,
    luggage: 2,
    features: ["Executive Lounge", "Rear Theatre", "BMW Live Cockpit", "Gesture Control"],
    image: "/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
    category: "Luxury Sedan",
    description: "German engineering at its finest. The BMW 7 Series provides dynamic performance paired with an ultra-luxurious passenger experience.",
    badge: "Precision",
    badgeColor: "#2563EB"
  },
  {
    name: "Genesis G80",
    slug: "genesis",
    passengers: 3,
    luggage: 2,
    features: ["Quilted Leather", "Ergo-Motion Seat", "Serene Cabin", "Advanced Safety"],
    image: "/fleet/genesis-g80-luxury-transport-ksa.webp",
    category: "Premium Sedan",
    description: "Korean luxury redefined. The Genesis surprises with world-class craftsmanship and a serene, library-quiet cabin.",
    badge: "Modern Luxury",
    badgeColor: "#059669"
  },
  {
    name: "Mercedes Vito",
    slug: "mercedes-vito",
    passengers: 7,
    luggage: 6,
    features: ["VIP Shuttle Configuration", "Face-to-Face Seats", "Electric Doors", "Ample Space"],
    image: "/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
    category: "Luxury Van",
    description: "The premium people mover. The Mercedes Vito offers first-class group transportation with generous space and easy access.",
    badge: "Group VIP",
    badgeColor: "#9333EA"
  },
  {
    name: "Mercedes Sprinter",
    slug: "mercedes-sprinter",
    passengers: 14,
    luggage: 10,
    features: ["Stand-up Cabin", "VIP Leather Seats", "USB Charging", "Large Cargo Bay"],
    image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
    category: "VIP Minibus",
    description: "The ultimate group transfer vehicle. Configured for VIP travel, perfect for corporate delegations and pilgrim groups.",
    badge: "Executive Coach",
    badgeColor: "#C49A6C"
  },
  {
    name: "Luxurious Bus",
    slug: "luxury-bus",
    passengers: 30,
    luggage: 40,
    features: ["Full Climate Control", "On-board Lavatory", "Reclining Seats", "LCD Screens"],
    image: "", 
    category: "Large Group",
    description: "Premium large-scale transportation. Our luxury coaches are perfect for large corporate events, weddings, and pilgrim delegations.",
    badge: "Large Scale",
    badgeColor: "#F59E0B"
  }
];
