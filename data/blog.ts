export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Best way to travel from Jeddah Airport to Makkah",
    slug: "jeddah-airport-to-makkah-guide",
    excerpt: "Discover the most comfortable and reliable way to travel for Umrah pilgrims from Jeddah Airport.",
    date: "March 5, 2026",
    image: "/gmc-fleet/gmc-yukon-airport-transfer-jeddah.webp",
    content: "Traveling from Jeddah King Abdulaziz Airport to the Holy City of Makkah is a significant journey for every pilgrim. While there are several options available, a private GMC SUV chauffeur service offers the highest level of comfort, especially after a long flight..."
  },
  {
    title: "Transport between Makkah and Madinah: A Complete Guide",
    slug: "makkah-to-madinah-transport-tips",
    excerpt: "Everything you need to know about commuting between the two holy cities in Saudi Arabia.",
    date: "March 1, 2026",
    image: "/gmc-fleet/luxury-gmc-yukon-xl-saudi-arabia.webp",
    content: "The route between Makkah and Madinah is one of the most traveled paths in Saudi Arabia. Whether you choose the Haramain High-Speed Railway or a private chauffeur, planning ahead is key..."
  },
  {
    title: "Airport transfer guide in Riyadh for Business Travelers",
    slug: "riyadh-airport-transfer-business-guide",
    excerpt: "How to navigate RUH airport and get to your business meeting on time and in style.",
    date: "February 25, 2026",
    image: "/gmc-fleet/gmc-yukon-xl-luxury-chauffeur-saudi.webp",
    content: "Riyadh is a bustling business hub. For corporate travelers, time is of the essence. Booking a professional chauffeur transfer ensures punctuality and allows you to work even while on the move..."
  }
];
