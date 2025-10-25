
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#0B0B0B] text-[#F5F5F5]">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/3a/05/ec/3a05ec2639146ac13aa5afa7c68b5948.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">The Story of LOOQAT</h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-[#a0a0a0]">Born from adventure, built for life's journeys.</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-base text-[#ffbb98] font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl font-extrabold text-[#F5F5F5] sm:text-4xl">
              To Elevate Every Sip
            </p>
            <p className="mt-4 text-xl text-[#a0a0a0]">
              LOOQAT began with a simple idea: the gear you carry should be as resilient and ready for adventure as you are. Tired of beverage containers that leaked, lost their temperature, or couldn't withstand the rigors of travel, we set out to create the ultimate travel quencher.
            </p>
            <p className="mt-4 text-xl text-[#a0a0a0]">
              Our mission is to redefine hydration by crafting products that seamlessly blend rugged durability, elegant design, and a deep commitment to sustainability. We believe that staying hydrated should be an effortless and enjoyable part of your day, wherever it may take you.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="rounded-lg shadow-xl w-full h-full object-cover" 
              src="https://i.pinimg.com/1200x/d9/f7/c6/d9f7c619378dc655fd974107c31be38b.jpg" 
              alt="LOOQAT product in a natural setting" 
            />
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="bg-[#1a1a1a] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F5F5F5]">Our Core Values</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#a0a0a0]">
            The principles that guide every product we create and every decision we make.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ffbb98] text-[#0B0B0B] mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5]">Uncompromising Quality</h3>
              <p className="mt-2 text-[#a0a0a0]">We use only the finest materials, like 304 food-grade stainless steel, and subject our products to rigorous testing to ensure they meet the highest standards of performance and durability.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ffbb98] text-[#0B0B0B] mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5]">Purposeful Design</h3>
              <p className="mt-2 text-[#a0a0a0]">Every curve, color, and component is thoughtfully considered to create a product that is not only beautiful and ergonomic but also exceptionally functional for everyday life and epic adventures.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ffbb98] text-[#0B0B0B] mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5]">Sustainability-Driven</h3>
              <p className="mt-2 text-[#a0a0a0]">We are committed to helping our planet by providing a superior, reusable alternative to single-use plastics. Choosing LOOQAT is a small step towards a more sustainable future.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="text-3xl font-extrabold text-[#F5F5F5]">Ready to Join the Journey?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-[#a0a0a0]">
          Experience the difference quality makes. Discover the quencher designed for you.
        </p>
        <div className="mt-8">
          <Link
            to="/product"
            className="inline-block bg-[#ffbb98] text-[#0B0B0B] font-bold py-4 px-10 text-lg rounded-md shadow-lg hover:bg-[#f8a87e] transition-transform duration-300 hover:scale-105 transform"
          >
            Explore The Quencher
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
