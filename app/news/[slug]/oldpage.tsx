"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

// Data dummy, sebaiknya nanti diambil dari API atau file terpisah
const newsData = [
  {
    slug: "ai-project-management-tool",
    title: "Decodes Launches Next-Gen AI-Powered Project Management Tool",
    date: "August 10, 2025",
    image: "/news/news1.jpg",
    content: (
      <>
        <p>
          Decodes Software House has taken a bold step into the future of productivity with the launch of its AI-powered project management tool. Designed for teams of all sizes, this innovative platform combines task automation, predictive analytics, and smart collaboration features into one seamless experience.
        </p>
        <p>
          The tool leverages machine learning to analyze historical project data, enabling accurate deadline forecasting and resource allocation. Instead of simply tracking progress, it actively helps teams optimize their workflow by suggesting task priorities and sending automated reminders to stakeholders.
        </p>
      </>
    ),
  },
  {
    slug: "fintech-security-partnership",
    title: "Partnership with Global Fintech Leader to Enhance Security Systems",
    date: "July 28, 2025",
    image: "/news/news2.jpg",
    content: (
      <>
        <p>
          Decodes has announced a strategic alliance with one of the world’s top fintech enterprises. The collaboration focuses on building next-generation security infrastructure for digital transactions, integrating AI-driven fraud detection, biometric verification, and blockchain-powered audit trails.
        </p>
        <p>
          By pooling their expertise, the two companies aim to stay ahead of cybercriminals with proactive security measures that can detect and neutralize threats in real time.
        </p>
      </>
    ),
  },
  {
    slug: "singapore-development-hub",
    title: "Decodes Expands Operations with New Development Hub in Singapore",
    date: "July 12, 2025",
    image: "/news/news3.jpg",
    content: (
      <>
        <p>
          Decodes has opened a brand-new development hub in Singapore. This expansion enables the company to provide faster response times, localized support, and closer collaboration with regional clients.
        </p>
        <p>
          The Singapore hub will focus on emerging technologies, including AI, IoT, and cloud-native solutions, while also serving as a center for innovation and talent development.
        </p>
      </>
    ),
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const { slug } = params as { slug: string };
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">News Not Found</h1>
        <Link href="/news" className="text-blue-500 underline">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100425] flex flex-col items-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white/10 rounded-lg shadow-lg p-6">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-[#F7DDEE]">{news.title}</h1>
        <div className="text-sm text-neutral-400 mb-4">{news.date}</div>
        <div className="prose prose-invert text-neutral-200">{news.content}</div>
        <Link href="/news" className="inline-block mt-8 px-4 py-2 rounded-full bg-[#7A6AFF] text-white font-semibold hover:bg-[#5a4fdc] transition">
          Back to News
        </Link>
      </div>
    </div>
  );
}