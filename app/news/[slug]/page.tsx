import { newsData } from "@/app/data/newsData";
import NewsDetail from "./components/NewsDetail";
import type { Metadata } from 'next';

export async function getNewsPost(slug: string) {
  const post = newsData.find((item) => item.slug === slug)
  
  if (!post) {
    throw new Error('News not found')
  }
  
  return post
}

export async function getAllNewsSlug() {
  return newsData.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  try {
    const post = await getNewsPost(params.slug)
    
    return {
      title: post.title, 
    }
    
  } catch (error) {
    console.log(`Exception while doing something: ${error}`);
    return {
      title: 'News Not Found',
    }
  }
}

export default function NewsDetailPage() {
  return <NewsDetail />;
}