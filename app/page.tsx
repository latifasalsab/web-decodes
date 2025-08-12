import Link from 'next/link';
import Image from 'next/image';
import SplashCursor from '@/app/components/SplashCursor/SplashCursor'

export default function Home() {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const loopLogos = [...logos, ...logos];

  return (
    <div className='overflow-hidden bg-[#100425] flex flex-col items-center justify-center h-screen'>
      <div className='flex gap-2 items-center justify-center'>
        <Link href="/login" className='text-white'>
          Login Page
        </Link>
        <Link href="/register" className='text-white'>
          Register Page
        </Link>
        <Link href="/logo" className='text-white'>
          Logo Animation
        </Link>
      </div>
      <SplashCursor />

      <br />
      <div className='flex justify-center'>
        <div className='wrapper-a max-w-4xl w-[90%] overflow-hidden relative'>
          <div className='wrapper-b'>
            {loopLogos.map((num, idx) => (
              <Image
                key={idx}
                src={`/logo/logo${num}.png`}
                alt={`Logo ${num}`}
                width={80}
                height={80}
                className="item"
                style={{ animationDelay: `calc(20s / ${logos.length} * (${logos.length} - ${idx}) * -1)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
