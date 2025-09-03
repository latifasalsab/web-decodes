import HeroSection from './components/AboutHeroSection';
import ContentSection from './components/AboutContentSection';

export default function AboutPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full mx-auto'>
      <HeroSection />
      <ContentSection />
    </div>
  );
}