export interface Route {
  from: string;
  to: string;
  slug: string;
  distance: string;
  time: string;
}

export const routes: Route[] = [
  { from: "Jeddah", to: "Makkah", slug: "jeddah-to-makkah", distance: "95 km", time: "1.5 hours" },
  { from: "Makkah", to: "Madinah", slug: "makkah-to-madinah", distance: "450 km", time: "4.5 hours" },
  { from: "Riyadh", to: "Dammam", slug: "riyadh-to-dammam", distance: "400 km", time: "4 hours" },
  { from: "Jeddah", to: "Madinah", slug: "jeddah-to-madinah", distance: "415 km", time: "4.5 hours" },
  { from: "Dammam", to: "Khobar", slug: "dammam-to-khobar", distance: "25 km", time: "0.5 hours" },
  
  // GCC International Routes
  { from: "Dubai", to: "Makkah", slug: "dubai-to-makkah", distance: "1,600 km", time: "16 hours" },
  { from: "Dubai", to: "Madinah", slug: "dubai-to-madinah", distance: "1,580 km", time: "16 hours" },
  { from: "Makkah", to: "Dubai", slug: "makkah-to-dubai", distance: "1,600 km", time: "16 hours" },
  { from: "Madinah", to: "Dubai", slug: "madinah-to-dubai", distance: "1,580 km", time: "16 hours" },
  { from: "Riyadh", to: "Dubai", slug: "riyadh-to-dubai", distance: "1,000 km", time: "10 hours" },
  { from: "Dubai", to: "Riyadh", slug: "dubai-to-riyadh", distance: "1,000 km", time: "10 hours" },
  { from: "Kuwait City", to: "Riyadh", slug: "kuwait-to-riyadh", distance: "650 km", time: "6.5 hours" },
  { from: "Riyadh", to: "Kuwait City", slug: "riyadh-to-kuwait", distance: "650 km", time: "6.5 hours" },
  { from: "Kuwait City", to: "Jeddah", slug: "kuwait-to-jeddah", distance: "1,300 km", time: "13 hours" },
  { from: "Doha", to: "Riyadh", slug: "doha-to-riyadh", distance: "600 km", time: "6 hours" },
  { from: "Riyadh", to: "Doha", slug: "riyadh-to-doha", distance: "600 km", time: "6 hours" },
  { from: "Abu Dhabi", to: "Riyadh", slug: "abu-dhabi-to-riyadh", distance: "950 km", time: "9 hours" },
  
  // Specific Border Hubs
  { from: "Al Nuwaiseeb", to: "Kuwait Border", slug: "al-nuwaiseeb-saudi-kuwait", distance: "Border Point", time: "Fast Clearance" },
  { from: "Al Khafji", to: "Kuwait City", slug: "al-khafji-saudi-kuwait", distance: "Border Hub", time: "Direct Access" },
  { from: "Salwa", to: "Doha Border", slug: "salwa-saudi-qatar", distance: "Border Point", time: "Cross-Border" },
  { from: "Al Batha", to: "Dubai Border", slug: "al-batha-saudi-uae", distance: "Border Point", time: "GCC Link" },
  { from: "King Fahd Causeway", to: "Manama, Bahrain", slug: "king-fahd-causeway-saudi-bahrain", distance: "25 km", time: "0.5 hours" }
];
