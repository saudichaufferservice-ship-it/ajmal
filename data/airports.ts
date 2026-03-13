export interface Airport {
  name: string;
  slug: string;
  city: string;
  code: string;
}

export const airports: Airport[] = [
  { name: "Riyadh King Khalid International Airport", slug: "riyadh-airport", city: "Riyadh", code: "RUH" },
  { name: "Jeddah King Abdulaziz International Airport", slug: "jeddah-airport", city: "Jeddah", code: "JED" },
  { name: "Madinah Prince Mohammad bin Abdulaziz Airport", slug: "madinah-airport", city: "Madinah", code: "MED" },
  { name: "Dammam King Fahd International Airport", slug: "dammam-airport", city: "Dammam", code: "DMM" },
  { name: "Makkah Transfer (Via Jeddah JED)", slug: "makkah-airport", city: "Makkah", code: "JED/MED" },
  { name: "Dubai International Airport", slug: "dubai-airport", city: "Dubai", code: "DXB" },
  { name: "Kuwait International Airport", slug: "kuwait-airport", city: "Kuwait", code: "KWI" },
  { name: "Hamad International Airport Doha", slug: "doha-airport", city: "Doha", code: "DOH" }
];
