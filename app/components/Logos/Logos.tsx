import Image from 'next/image';

export default function Logos() {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const loopLogos = [...logos, ...logos];
  return (
    <div className="flex max-w-7xl px-6 md:px-10 lg:px-0 w-full justify-between items-center my-8">
        <div className='flex justify-center w-[80%] md:w-[90%]'>
            <div className='wrapper-a overflow-hidden relative'>
            <div className='wrapper-b'>
                {loopLogos.map((num, idx) => {
                const uniqueKey = `logo-${num}-${idx}`;
                return (
                    <Image
                    key={uniqueKey}
                    src={`/logo/logo${num}.png`}
                    alt={`Logo ${num}`}
                    width={60}
                    height={60}
                    className="item"
                    style={{
                        animationDelay: `calc(20s / ${logos.length} * (${logos.length} - ${idx}) * -1)`,
                    }}
                    />
                );
                })}
            </div>
            </div>
        </div>
        <div className="w-[20%] md:w-[10%]">
            <div className="w-full text-lg text-[#9933EF] text-right">Clients We’ve {' '} 
                <p className='text-white'>Worked With</p> 
            </div>

        </div>
    </div>
  );
}