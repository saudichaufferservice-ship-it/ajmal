export interface City {
  name: string;
  slug: string;
  description: string;
}

export const cities: City[] = [
  { name: "Riyadh", slug: "riyadh", description: "Saudi Arabia's capital and main business hub." },
  { name: "Jeddah", slug: "jeddah", description: "The gateway to Makkah and a major coastal city." },
  { name: "Makkah", slug: "makkah", description: "The holiest city for Hajj and Umrah pilgrims." },
  { name: "Madinah", slug: "madinah", description: "Home to the Prophet's Mosque." },
  { name: "Dammam", slug: "dammam", description: "A key port city in the Eastern Province." },
  { name: "Khobar", slug: "khobar", description: "A bustling coastal city near Dammam." },
  { name: "Taif", slug: "taif", description: "A scenic highland city in the mountains." },
  { name: "Tabuk", slug: "tabuk", description: "A major city in northwestern Saudi Arabia." },
  { name: "Abha", slug: "abha", description: "A beautiful highland destination in the south." }
];
