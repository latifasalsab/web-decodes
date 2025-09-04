import { useState, useMemo } from 'react';
import { NewsItem } from '@/app/types/news';

export const useNewsFilter = (newsData: NewsItem[]) => {
  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    return newsData.filter((news) =>
      (news.title || "").toLowerCase().includes(search.toLowerCase()) ||
      news.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [newsData, search]);

  return {
    search,
    setSearch,
    filteredNews
  };
};

export const useNewsPagination = (totalItems: number, initialVisibleCount: number = 3) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [loading, setLoading] = useState(false);

  const hasMore = visibleCount < totalItems;
  const showLess = !hasMore && totalItems > initialVisibleCount;

  const handleLoadMore = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleCount(prev => Math.min(prev + 3, totalItems));
    setLoading(false);
  };

  const handleLoadLess = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleCount(initialVisibleCount);
    setLoading(false);
  };

  const resetVisibleCount = () => {
    setVisibleCount(initialVisibleCount);
  };

  return {
    visibleCount,
    loading,
    hasMore,
    showLess,
    handleLoadMore,
    handleLoadLess,
    resetVisibleCount
  };
};