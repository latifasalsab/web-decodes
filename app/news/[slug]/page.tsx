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
      description: post.description || "Read the full details of this news article from Decodes.",
    }
    
  } catch (error) {
    return {
      title: 'News Not Found',
      description: "The news article you are looking for could not be found.",
    }
  }
}

export default function NewsDetailPage() {
  return <NewsDetail />;
}