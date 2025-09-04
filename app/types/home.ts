export interface ProductItem {
  id: string;
  img: string;
  alt: string;
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
}

export interface FeaturedProductProps {
  className?: string;
}