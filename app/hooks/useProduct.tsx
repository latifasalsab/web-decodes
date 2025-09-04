import { useState, useCallback } from 'react';

export const useFeaturedProduct = (initialIndex: number = 1) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(initialIndex);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback((): void => {

  }, []);

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave
  };
};