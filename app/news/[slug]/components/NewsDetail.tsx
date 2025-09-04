
"use client";
import { newsData, otherNews } from "@/app/data/newsData";
import { useParams } from "next/navigation";
import React from "react";
import NewsDetailContent from "./NewsDetailContent";
import OtherNewsSection from "./OtherNewsSection";
import JoinUs from "@/app/components/JoinUs/JoinUs";

export default function NewsDetail() {
  const params = useParams();
  const { slug } = params;
  
  const selectedNews = newsData.find((n) => n.slug === slug) || newsData[0];
  const currentIndex = newsData.findIndex((n) => n.slug === slug);
  const nextIndex = (currentIndex + 1) % newsData.length;
  const nextSlug = newsData[nextIndex].slug;

  return (
    <div className="min-h-screen text-white">
      <NewsDetailContent 
        news={selectedNews} 
        nextSlug={nextSlug} 
      />
      
      <OtherNewsSection 
        otherNews={otherNews} 
        currentSlug={selectedNews.slug} 
      />
      
      <JoinUs />
    </div>
  );
}