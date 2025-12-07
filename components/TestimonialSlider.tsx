import React, { useRef } from 'react';

interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote: "I carry this to the gym daily. It stays ice-cold even after 2 hours of workout. The black finish matches everything I own.",
    author: "Alex M.",
    role: "Crossfit Athlete"
  },
  {
    id: 2,
    quote: "Finally, a bottle that matches my gym aesthetic. It's rugged, doesn't leak in my bag, and just works. 10/10 recommendation.",
    author: "Sarah K.",
    role: "Personal Trainer"
  },
  {
    id: 3,
    quote: "The handle is a game changer when your hands are full. Fits perfectly in the treadmill holder too. Essential gear.",
    author: "David R.",
    role: "Bodybuilder"
  },
  {
    id: 4,
    quote: "Dropped it straight onto the concrete floor at the gym. Loud noise, but the bottle? Barely a scratch. Built like a tank.",
    author: "Mike P.",
    role: "Powerlifter"
  },
  {
    id: 5,
    quote: "I used to buy plastic bottles every week. This is an investment. Keeps my BCAAs cold through my whole HIIT session.",
    author: "Jessica T.",
    role: "HIIT Instructor"
  },
  {
    id: 6,
    quote: "Sleek, stealthy, and functional. I take it from the boardroom to the weight room. It looks professional everywhere.",
    author: "Ryan G.",
    role: "Entrepreneur"
  }
];

const TestimonialSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll 80% of view width
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:flex items-center justify-center w-12 h-full">
        <button 
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-black/50 border border-gray-700 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm focus:outline-none"
          aria-label="Previous testimonials"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:flex items-center justify-center w-12 h-full">
        <button 
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-black/50 border border-gray-700 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm focus:outline-none"
          aria-label="Next testimonials"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
          >
            <div className="h-full p-8 border border-gray-800 bg-[#0e0e0e] hover:border-gray-600 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="mb-6 text-4xl text-gray-700 font-serif leading-none group-hover:text-white transition-colors duration-300">"</div>
                <p className="text-lg text-gray-300 font-body italic mb-6 leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="h-0.5 w-6 bg-gray-600 mr-4 group-hover:w-10 group-hover:bg-white transition-all duration-300"></div>
                <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-white">{item.author}</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
         <div className="text-xs text-gray-500 uppercase tracking-widest animate-pulse">Swipe for more</div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
