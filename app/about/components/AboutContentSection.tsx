import Logos from '@/app/components/Logos/Logos';

export default function ContentSection() {
  return (
    <>
      <div className="px-8 md:px-10 mt-8 md:mt-10">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
          
          <div className="mb-8 lg:mb-12">
            <p className="text-sm md:text-base lg:text-xl text-white/90 text-center md:text-left leading-relaxed max-w-7xl mx-auto">
              We are a creative digital agency committed to transforming ideas into impactful solutions. With a blend of innovation, strategy, and technology, we help businesses face digital challenges and unlock new opportunities for growth.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 mb-4 lg:mb-12 lg:items-stretch">
            
            <div className="order-2 lg:order-1 mb-8 lg:mb-0 lg:flex lg:flex-col lg:justify-between">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Our Proven<br />Track Record
                </h2>
                <div className="w-full h-px bg-white/50 mb-6"></div>
              </div>

              <div className="space-y-6 lg:flex lg:flex-col lg:justify-center">
                <div className="text-center backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-white/20">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">100+</p>
                  <p className="text-sm lg:text-base text-white/80">Project Completed</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center rounded-lg p-4 lg:p-6 border border-white/20">
                    <p className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1">5+</p>
                    <p className="text-xs text-white/80 leading-tight">Years Of<br />Experience</p>
                  </div>
                  <div className="text-center rounded-lg p-4 lg:p-6 border border-white/20">
                    <p className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1">7+</p>
                    <p className="text-xs lg:text-base text-white/80 leading-tight">Company<br />Partners</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:h-full">
                
                <div className="flex flex-col gap-4 order-2 md:order-1">
                  <div className="flex-1 max-h-70 md:max-h-full min-h-[150px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]">
                    <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
                      <img 
                        className="w-full h-full object-cover" 
                        src="/about/about1.png" 
                        alt="Digital workspace setup"
                      />
                    </div>
                  </div>
                  <div className="flex-1 max-h-70 md:max-h-full min-h-[150px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]">
                    <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
                      <img 
                        className="w-full h-full object-cover" 
                        src="/about/about2.png" 
                        alt="Team collaboration meeting"
                      />
                    </div>
                  </div>
                </div>

                <div className="h-70 md:h-full min-h-[150px] md:min-h-[300px] lg:min-h-[340px] xl:min-h-[380px] order-1 md:order-2">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
                    <img 
                      className="w-full h-full object-cover" 
                      src="/about/about3.png" 
                      alt="Modern office environment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm md:text-base lg:text-xl text-white/90 leading-relaxed max-w-7xl mx-auto">
              For us, our clients' success is our success. Let's collaborate to create a digital strategy that is not only effective but also takes your business to the next level.
            </p>
          </div>
        </div>
      </div>

      <Logos />
    </>
  );
}