import { 
  Plane, 
  MapPin, 
  Map, 
  Milestone, 
  Globe, 
  Calendar,
  Building2,
  Users
} from 'lucide-react';

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: any;
  longDescription: string;
}

export const services: Service[] = [
  { 
    title: "Airport Transfer", 
    slug: "airport-transfer-saudi-arabia", 
    description: "Reliable airport pickups and drop-offs in Saudi Arabia.",
    longDescription: "Our professional chauffeurs provide seamless airport transfers across major cities, ensuring you reach your destination with comfort and ease.",
    icon: Plane
  },
  { 
    title: "City to City Transfer", 
    slug: "saudi-city-to-city-transfer", 
    description: "Comfortable travel between major cities in Saudi Arabia.",
    longDescription: "Experience hassle-free city-to-city travel in our premium GMC SUVs, perfect for long-distance journeys across the Kingdom.",
    icon: MapPin
  },
  { 
    title: "Border Crossing", 
    slug: "saudi-border-crossing-transport", 
    description: "VIP cross-border transportation across all Saudi and GCC borders.",
    longDescription: "We provide specialized VIP transportation services across all Saudi and GCC borders, including Al Batha (UAE), Al Nuwaiseeb and Al Khafji (Kuwait), Salwa (Qatar), and the King Fahd Causeway (Bahrain). Our chauffeurs are experts in cross-border logistics and checkpoint protocols.",
    icon: Globe
  },
  { 
    title: "UAE Border Crossing", 
    slug: "uae-border-crossing-transport", 
    description: "Transportation across the Saudi and UAE borders.",
    longDescription: "We specialize in VIP cross-border transport via Al Batha border, providing safe and reliable travel between Saudi Arabia and the UAE (Dubai, Abu Dhabi, Sharjah) in our premium GMC SUVs.",
    icon: Globe
  },
  { 
    title: "Kuwait Border Crossing", 
    slug: "kuwait-border-crossing-transport", 
    description: "Transportation across the Saudi and Kuwait borders.",
    longDescription: "Enjoy seamless border crossing via Al Nuwaiseeb or Al Khafji. We provide premium door-to-door transport from any Saudi city to Kuwait, handling the journey perfectly.",
    icon: Globe
  },
  { 
    title: "Bahrain Border Crossing", 
    slug: "bahrain-border-crossing-transport", 
    description: "Transportation across the Saudi and Bahrain borders via the Causeway.",
    longDescription: "Cross the King Fahd Causeway in comfort. Our VIP chauffeur service ensures smooth and reliable travel from Dammam, Khobar, or Riyadh directly into Bahrain via the major Saudi-Bahrain bridge.",
    icon: Globe
  },
  { 
    title: "Qatar Border Crossing", 
    slug: "qatar-border-crossing-transport", 
    description: "Transportation across the Saudi and Qatar borders.",
    longDescription: "Experience hassle-free travel across the Salwa border (Abu Samra). We provide luxurious point-to-point GMC SUV transfers from Saudi Arabia directly into Doha, Qatar.",
    icon: Globe
  },
  { 
    title: "Hajj & Umrah Transport", 
    slug: "hajj-umrah-transport", 
    description: "Dedicated transport for pilgrims to Makkah and Madinah.",
    longDescription: "Specialized chauffeur services for Hajj and Umrah pilgrims, offering reliable and comfortable travel to the holy cities.",
    icon: Milestone
  },
  { 
    title: "Tourist Transport", 
    slug: "saudi-tourist-transport", 
    description: "Explore Saudi Arabia's heritage with private transport.",
    longDescription: "Our private chauffeur service is the perfect companion for tourists looking to explore the rich culture and stunning landscapes of Saudi Arabia.",
    icon: Map
  },
  { 
    title: "Event Transportation", 
    slug: "event-chauffeur-service", 
    description: "Professional transport for business meetings and events.",
    longDescription: "Elevate your events and business travel with our professional chauffeur service, providing elegant and punctual transportation solutions.",
    icon: Calendar
  }
];
