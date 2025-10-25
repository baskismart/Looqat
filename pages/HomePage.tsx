
import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-[#1a1a1a]/50 rounded-lg backdrop-blur-sm">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#ffbb98] text-[#0B0B0B] mx-auto">
      {icon}
    </div>
    <h3 className="mt-5 text-lg font-medium text-[#F5F5F5]">{title}</h3>
    <p className="mt-2 text-base text-[#a0a0a0]">{description}</p>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0B0B0B]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/1200x/0c/52/ae/0c52ae9947137589b5574a0a515bc451.jpg')` }}
        aria-label="Woman holding LOOQAT travel quencher on a sunny beach"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F5F5F5] tracking-tight">
              Hydration.
              <br />
              <span className="text-[#ffbb98]">Redefined.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#F5F5F5]">
              Experience the pinnacle of beverage containers. The LOOQAT Black Metal Travel Quencher is engineered for performance, designed for life.
            </p>
            <div className="mt-8">
              <a href="https://www.amazon.in/dp/B0CW2ZXDHZ" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ffbb98] text-[#0B0B0B] font-bold py-4 px-10 text-lg rounded-md shadow-lg hover:bg-[#f8a87e] transition-transform duration-300 hover:scale-105 transform">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#ffbb98] font-semibold tracking-wide uppercase">Premium Build</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl">
              Engineered for Every Journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-[#a0a0a0] lg:mx-auto">
              More than just a bottle. It's a statement of quality and commitment to a sustainable lifestyle.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Feature 
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>}
              title="1.2L Capacity"
              description="Stay hydrated longer with a generous capacity, perfect for long days and adventures."
            />
            <Feature 
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="11+ Hrs Cold"
              description="Enjoy ice-cold refreshment all day, thanks to our advanced double-wall vacuum insulation."
            />
            <Feature 
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
              title="7+ Hrs Hot"
              description="Keep your coffee, tea, or soup piping hot, from your morning start to your afternoon break."
            />
            <Feature 
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Eco-Friendly"
              description="Durable and reusable, our quencher helps reduce single-use plastic waste."
            />
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-[#1a1a1a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">Designed for Travelers.
                    <br/>Built to Last.</h2>
                    <p className="mt-6 text-lg leading-8 text-[#F5F5F5]">
                    LOOQAT was born from a passion for exploration and a demand for uncompromising quality. We believe your gear should enhance your journey, not hinder it. That’s why we meticulously designed our travel quencher to be the most reliable, stylish, and versatile hydration companion you'll ever need.
                    </p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-xl">
                    <img src="https://i.pinimg.com/1200x/f9/4c/58/f94c5898fcc5227a6b969b303bf8a1b6.jpg" alt="Traveler with LOOQAT bottle" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                </div>
            </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#F5F5F5] text-center">What Our Customers Say</h2>
          <div className="mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;