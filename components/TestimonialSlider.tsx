
import React, { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The best travel quencher I've ever owned. Keeps my coffee hot for hours on my morning commute. The black metal finish is so sleek!",
    author: "Aarav Sharma",
    location: "Mumbai",
  },
  {
    quote: "I took my LOOQAT on a hiking trip and it was a lifesaver. Ice cold water all day long. Plus, it's incredibly durable.",
    author: "Priya Singh",
    location: "Bangalore",
  },
  {
    quote: "Absolutely love the design and functionality. It feels premium and the gift packaging was a nice touch. Highly recommended!",
    author: "Rohan Mehta",
    location: "Delhi",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <p className="text-xl md:text-2xl italic text-[#F5F5F5]">"{testimonial.quote}"</p>
            <p className="mt-4 text-lg font-semibold text-[#ffbb98]">{testimonial.author}</p>
            <p className="text-sm text-[#a0a0a0]">{testimonial.location}</p>
          </div>
        </div>
      ))}
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-[#ffbb98]' : 'bg-[#333333] hover:bg-[#444444]'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;