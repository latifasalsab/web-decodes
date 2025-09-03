export type CategoryType = "Design" | "Technology" | "Business Strategy";

export interface NewsItem {
  id: number;
  category: CategoryType;
  tittle: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

export const trendingNews: NewsItem = {
  id: 4,
  slug: "decodes-officially-reaches",
  category: "Technology",
  tittle: "Decodes Officially Reaches 100+ Clients by 2025",
  description:
    "Decodes has officially surpassed 100+ clients, marking a major achievement in its journey as a trusted digital partner. This milestone reflects the company's commitment to innovation, quality, and building lasting collaborations across industries.",
  date: "28 Januari, 2025",
  image: "/news/news_1.png",
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: "creative-branding-strategies",
    category: "Design",
    tittle: "Creative Branding Strategies to Elevate Business Identity",
    description:
      "Decodes introduces a revolutionary approach that blends modern design principles with data-driven insights. This strategy allows businesses to create impactful brand stories, improve market reach.",
    date: "22 January, 2025",
    image: "/news/news_2.png",
  },
  {
    id: 2,
    slug: "AI-Powered-Chatbots",
    category: "Technology",
    tittle: "AI-Powered Chatbots Transforming Customer Engagement",
    description:
      "To meet the growing demand for performance and security, Decodes has launched its next-generation web development services. These solutions are tailored to ensure faster load times, seamless integrations, and adaptive designs that provide an excellent user experience on any device.",
    date: "25 January, 2025",
    image: "/news/news_3.png",
  },
  {
    id: 3,
    slug: "Decodes-Collaborates",
    category: "Business Strategy",
    tittle: "Decodes Collaborates with Local Startups to Drive Digital Transformation",
    description:
      "Through strategic partnerships with local startups, Decodes accelerates digital transformation by fostering innovation, empowering businesses, and creating scalable solutions for the future.",
    date: "28 January, 2025",
    image: "/news/news_4.png",
  },
  {
    id: 5,
    slug: "Decodes-Strengthens",
    category: "Business Strategy",
    tittle: "Decodes Strengthens Cybersecurity for Local Businesses",
    description:
      "Through strategic partnerships with local startups, Decodes accelerates digital transformation by fostering innovation, empowering businesses, and creating scalable solutions for the future.",
    date: "27 January, 2025",
    image: "/news/news_5.png",
  },
  {
    id: 6,
    slug: "Decodes-Hosts",
    category: "Technology",
    tittle: "Decodes Hosts Tech Forum 2025 to Accelerate Indonesia's Digital Future",
    description:
      "Through strategic partnerships with local startups, Decodes accelerates digital transformation by fostering innovation, empowering businesses, and creating scalable solutions for the future.",
    date: "30 December, 2025",
    image: "/news/news_6.png",
  },
  {
    id: 7,
    slug: "Decodes-Introduces",
    category: "Design",
    tittle: "Decodes Introduces Cloud Solutions for Agile Digital Transformation",
    description:
      "Through strategic partnerships with local startups, Decodes accelerates digital transformation by fostering innovation, empowering businesses, and creating scalable solutions for the future.",
    date: "10 December, 2025",
    image: "/news/news_7.png",
  },
];
