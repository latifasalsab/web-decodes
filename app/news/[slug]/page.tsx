"use client";
import { useParams } from "next/navigation";
import NavbarProps from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import React from "react";
import Link from "next/link";


const newsData = [
  {
    slug: "decodes-collaborates",
    title: "Decodes Collaborates with Local Startups to Drive Digital Transformation",
    date: "August 22, 2025",
    author: "By Decodes Media",
    image: "/news/news_8.png",
    content: [
      "Amidst rapid technological developments, Decodes is taking a major step by collaborating with several local startups. This collaboration is not just a business partnership, but a concrete effort to accelerate digital transformation in Indonesia.",
      "Through this initiative, Decodes aims to deliver innovations that address the challenges of modern industry. Working with startups, Decodes develops relevant digital solutions, from data-driven systems to services that support business efficiency. This initiative is expected to open up new opportunities for both small businesses and large corporations, helping them better prepare for the digital era.",
      "The Decodes CEO stated that collaboration with local startups holds strategic value. 'We believe that the best innovations are born from collaboration. By synergizing, we not only strengthen the domestic digital ecosystem but also increase Indonesia's competitiveness globally.'",
      "More than just technological innovation, this collaboration demonstrates Decodes' commitment to building a sustainable digital ecosystem. By combining Decodes' experience with the innovative spirit of local startups, it is hoped that Indonesia's digital transformation will be more inclusive and positively impact the wider community.",
      "Digital transformation is increasingly becoming a primary need across various sectors. Recognizing this opportunity, Decodes has taken the initiative to collaborate with local startups with significant potential in developing technology-based solutions.",
    ],
    program: [
      "Development of digital solutions that support business efficiency",
      "Resource support and network access for startups",
      "Implementation of sustainable digital strategies across various industries",
    ],
    objectives: [
      "This collaboration is expected to strengthen the competitiveness of Indonesian startups at the national and global levels, while providing tangible benefits to business actors across various sectors."
    ],
    quotes: [
      {
        from: "From Decodes",
        text: "We believe the best innovations come from collaboration. By synergizing with local startups, we are optimistic that we can accelerate digital transformation and strengthen the technology ecosystem in Indonesia,\" said Team Decodes."
      },
      {
        from: "From Startup Partner",
        text: "Joining this collaboration gives us the opportunity to grow faster with the support of Decodes' resources and network. We are confident that together we can make a real impact, said Arif Santoso, Founder of TechNova Indonesia."
      }
    ]
  },

  {
    slug: "decodes-officially-reaches",
    title: "Decodes Officially Reaches 100+ Clients by 2025",
    date: "January 27, 2025",
    author: "By Decodes Media",
    image: "/news/news_1.png",
    content: [
      "Amidst rapid technological developments, Decodes is taking a major step by collaborating with several local startups. This collaboration is not just a business partnership, but a concrete effort to accelerate digital transformation in Indonesia.",
      "Through this initiative, Decodes aims to deliver innovations that address the challenges of modern industry. Working with startups, Decodes develops relevant digital solutions, from data-driven systems to services that support business efficiency. This initiative is expected to open up new opportunities for both small businesses and large corporations, helping them better prepare for the digital era.",
      "The Decodes CEO stated that collaboration with local startups holds strategic value. 'We believe that the best innovations are born from collaboration. By synergizing, we not only strengthen the domestic digital ecosystem but also increase Indonesia's competitiveness globally.'",
      "More than just technological innovation, this collaboration demonstrates Decodes' commitment to building a sustainable digital ecosystem. By combining Decodes' experience with the innovative spirit of local startups, it is hoped that Indonesia's digital transformation will be more inclusive and positively impact the wider community.",
      "Digital transformation is increasingly becoming a primary need across various sectors. Recognizing this opportunity, Decodes has taken the initiative to collaborate with local startups with significant potential in developing technology-based solutions.",
    ],
    program: [
      "Development of digital solutions that support business efficiency",
      "Resource support and network access for startups",
      "Implementation of sustainable digital strategies across various industries",
    ],
    objectives: [
      "This collaboration is expected to strengthen the competitiveness of Indonesian startups at the national and global levels, while providing tangible benefits to business actors across various sectors."
    ],
    quotes: [
      {
        from: "From Decodes",
        text: "We believe the best innovations come from collaboration. By synergizing with local startups, we are optimistic that we can accelerate digital transformation and strengthen the technology ecosystem in Indonesia,\" said Team Decodes."
      },
      {
        from: "From Startup Partner",
        text: "Joining this collaboration gives us the opportunity to grow faster with the support of Decodes' resources and network. We are confident that together we can make a real impact, said Arif Santoso, Founder of TechNova Indonesia."
      }
    ]
  },

  {
    slug: "creative-branding-strategies",
    title: "Creative Branding Strategies to Elevate Business Identity",
    date: "August 19, 2025",
    author: "By Decodes Media",
    image: "/news/news_2.png",
    content: [
      "Amidst rapid technological developments, Decodes is taking a major step by collaborating with several local startups. This collaboration is not just a business partnership, but a concrete effort to accelerate digital transformation in Indonesia.",
      "Through this initiative, Decodes aims to deliver innovations that address the challenges of modern industry. Working with startups, Decodes develops relevant digital solutions, from data-driven systems to services that support business efficiency. This initiative is expected to open up new opportunities for both small businesses and large corporations, helping them better prepare for the digital era.",
      "The Decodes CEO stated that collaboration with local startups holds strategic value. 'We believe that the best innovations are born from collaboration. By synergizing, we not only strengthen the domestic digital ecosystem but also increase Indonesia's competitiveness globally.'",
      "More than just technological innovation, this collaboration demonstrates Decodes' commitment to building a sustainable digital ecosystem. By combining Decodes' experience with the innovative spirit of local startups, it is hoped that Indonesia's digital transformation will be more inclusive and positively impact the wider community.",
      "Digital transformation is increasingly becoming a primary need across various sectors. Recognizing this opportunity, Decodes has taken the initiative to collaborate with local startups with significant potential in developing technology-based solutions.",
    ],
    program: [
      "Development of digital solutions that support business efficiency",
      "Resource support and network access for startups",
      "Implementation of sustainable digital strategies across various industries",
    ],
    objectives: [
      "This collaboration is expected to strengthen the competitiveness of Indonesian startups at the national and global levels, while providing tangible benefits to business actors across various sectors."
    ],
    quotes: [
      {
        from: "From Decodes",
        text: "We believe the best innovations come from collaboration. By synergizing with local startups, we are optimistic that we can accelerate digital transformation and strengthen the technology ecosystem in Indonesia,\" said Team Decodes."
      },
      {
        from: "From Startup Partner",
        text: "Joining this collaboration gives us the opportunity to grow faster with the support of Decodes' resources and network. We are confident that together we can make a real impact, said Arif Santoso, Founder of TechNova Indonesia."
      }
    ]
  },

  {
    slug: "AI-powered-chatbots",
    title: "AI-Powered Chatbots Transforming Customer Engagement",
    date: "August 21, 2025",
    author: "By Decodes Media",
    image: "/news/news_2.png",
    content: [
      "Amidst rapid technological developments, Decodes is taking a major step by collaborating with several local startups. This collaboration is not just a business partnership, but a concrete effort to accelerate digital transformation in Indonesia.",
      "Through this initiative, Decodes aims to deliver innovations that address the challenges of modern industry. Working with startups, Decodes develops relevant digital solutions, from data-driven systems to services that support business efficiency. This initiative is expected to open up new opportunities for both small businesses and large corporations, helping them better prepare for the digital era.",
      "The Decodes CEO stated that collaboration with local startups holds strategic value. 'We believe that the best innovations are born from collaboration. By synergizing, we not only strengthen the domestic digital ecosystem but also increase Indonesia's competitiveness globally.'",
      "More than just technological innovation, this collaboration demonstrates Decodes' commitment to building a sustainable digital ecosystem. By combining Decodes' experience with the innovative spirit of local startups, it is hoped that Indonesia's digital transformation will be more inclusive and positively impact the wider community.",
      "Digital transformation is increasingly becoming a primary need across various sectors. Recognizing this opportunity, Decodes has taken the initiative to collaborate with local startups with significant potential in developing technology-based solutions.",
    ],
    program: [
      "Development of digital solutions that support business efficiency",
      "Resource support and network access for startups",
      "Implementation of sustainable digital strategies across various industries",
    ],
    objectives: [
      "This collaboration is expected to strengthen the competitiveness of Indonesian startups at the national and global levels, while providing tangible benefits to business actors across various sectors."
    ],
    quotes: [
      {
        from: "From Decodes",
        text: "We believe the best innovations come from collaboration. By synergizing with local startups, we are optimistic that we can accelerate digital transformation and strengthen the technology ecosystem in Indonesia,\" said Team Decodes."
      },
      {
        from: "From Startup Partner",
        text: "Joining this collaboration gives us the opportunity to grow faster with the support of Decodes' resources and network. We are confident that together we can make a real impact, said Arif Santoso, Founder of TechNova Indonesia."
      }
    ]
  },


 
];

const otherNews = [
  {
    date: "27 Februari 2024",
    title: "Decodes Strengthens Cybersecurity for Local Businesses",
    image: "/news/news_5.png",
    slug: "decodes-strengthens-cybersecurity",
  },
  {
    date: "30 Desember 2023",
    title: "Decodes Hosts Tech Forum 2025 to Accelerate Indonesia's Digital Future",
    image: "/news/news_6.png",
    slug: "decodes-hosts-tech-forum-2025",
  },
  {
    date: "10 September 2025",
    title: "Decodes Introduces Cloud Solutions for Agile Digital Transformation",
    image: "/news/news_7.png",
    slug: "decodes-introduces-cloud-solutions",
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const { slug } = params;
  const selectedNews = newsData.find((n) => n.slug === slug) || newsData[0];
  const currentIndex = newsData.findIndex((n) => n.slug === slug);
  const nextIndex = (currentIndex + 1) % newsData.length;
  const nextSlug = newsData[nextIndex].slug;

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarProps />
      <div className="bg-black max-w-7xl mx-auto py-32 px-8 sm:px-6 lg:px-0">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
          {selectedNews.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-white text-sm mb-6">
          <span>{selectedNews.date}</span>
          <span className="hidden md:inline">|</span>
          <span>{selectedNews.author}</span>
        </div>

        {/* gambar */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={selectedNews.image}
            alt={selectedNews.title}
            className="w-full h-full  object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-8">
          {selectedNews.content.map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        {/* Program Details */}
        <div className="mb-8">
          <h3 className="font-bold mb-2">Program Details</h3>
          <ul className="list-disc pl-6 text-gray-300">
            {selectedNews.program.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Objectives */}
        <div className="mb-8">
          <h3 className="font-bold mb-2">Objectives & Impact</h3>
          <ul className="list-disc pl-6 text-gray-300">
            {selectedNews.objectives.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Quotes */}
        <div className="mb-8">
          <h3 className="font-bold mb-2">Quote from a source</h3>
          {selectedNews.quotes.map((q, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold mb-1">{q.from}</div>
              <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-300">{q.text}</blockquote>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href={`/news/${nextSlug}`}
            className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-transparent border border-white text-white font-semibold hover:bg-[#5a4fdc] transition"
          >
            NEXT
            <img src="/icons/panah.png" alt="Arrow Right" className="w-4 h-4" />
          </Link>
        </div>


        {/* Other News */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Other News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherNews.map((news, i) => (
              <Link href={`/news/${nextSlug}`} key={i} className="block group">
                <div className="bg-[#1F1F1F] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gray-800 relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                  </div>
                  <div className="text-xs text-white p-3">{news.date}</div>
                  <div className="p-3 font-semibold text-white group-hover:text-purple-400 transition-colors text-sm md:text-base line-clamp-2">
                    {news.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
