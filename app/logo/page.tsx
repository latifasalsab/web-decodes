import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import Image from 'next/image';

export default function LogoPage() {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const loopLogos = [...logos, ...logos];
  return (
    <div className='overflow-hidden bg-[#100425] flex flex-col items-center justify-center h-screen'>
        <h1>Logo Scroll</h1>
        <br />
        <InfiniteSlider speedOnHover={20} gap={12}>
            {/* {Array.from({ length: 12 }, (_, idx) => (
                <img
                    key={idx}
                    src={`/logo/logo${idx + 1}.png`}
                    alt={`Logo ${idx + 1}`}
                    className="w-20 h-20 object-contain"
                />
            ))} */}
            {loopLogos.map((num, idx) => (
                <Image
                key={idx}
                src={`/logo/logo${num}.png`}
                alt={`Logo ${num}`}
                width={80}
                height={80}
                />
            ))}
        </InfiniteSlider>
    </div>
  );
}