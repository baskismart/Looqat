import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-8 border border-gray-800 bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 group">
    <div className="flex items-center justify-center h-12 w-12 mb-6 text-white group-hover:text-gray-300 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-black text-white uppercase tracking-widest mb-3">{title}</h3>
    <p className="text-sm text-gray-400 font-body leading-relaxed max-w-xs">{description}</p>
  </div>
);

const BlogPreview: React.FC<{ title: string; category: string; image: string; id: number }> = ({ title, category, image, id }) => (
    <Link to={`/blog/${id}`} className="group cursor-pointer block">
        <div className="relative overflow-hidden h-72 w-full bg-gray-900">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{category}</span>
            </div>
        </div>
        <div className="mt-5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-gray-300 transition-colors">{title}</h3>
        </div>
    </Link>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym workout setting" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 animate-fade-in-up leading-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">Performance.</span><br/>
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">You.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light font-body tracking-wide">
            Premium hydration engineered for your toughest workouts and your everyday grind.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.amazon.in/dp/B0CW2ZXDHZ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-12 py-4 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature 
              icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="11+ Hrs Cold"
              description="Keep your water ice-cold through your entire session. Double-wall vacuum insulation does the heavy lifting."
            />
             <Feature 
              icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
              title="100% Leak-Proof"
              description="Throw it in your gym bag with confidence. Engineered seals prevent any spills or accidents."
            />
            <Feature 
              icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>}
              title="Sweat-Proof Grip"
              description="Matte finish powder coating ensures a solid grip even during the most intense HIIT sessions."
            />
            <Feature 
              icon={<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Built to Last"
              description="High-grade 304 Stainless Steel. BPA-free. Durable enough to survive the drop."
            />
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative group overflow-hidden h-[500px] cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" alt="Workout" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100 grayscale"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
                        <h3 className="text-3xl font-black uppercase text-white italic">Hydrate Strong</h3>
                        <p className="text-white mt-2 font-bold uppercase tracking-widest text-xs">For Your Workout</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="relative group overflow-hidden h-[500px] cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1652363723034-e0deb0b48b15?w=600&auto=format&fit=crop" alt="Recovery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100 grayscale"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
                        <h3 className="text-3xl font-black uppercase text-white italic">Carry Style</h3>
                        <p className="text-white mt-2 font-bold uppercase tracking-widest text-xs">Wherever You Train</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="relative group overflow-hidden h-[500px] cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1695774364146-f283ce2cca27?w=600&auto=format&fit=crop" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100 grayscale"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-transparent to-transparent">
                        <h3 className="text-3xl font-black uppercase text-white italic">Stay Refreshed</h3>
                        <p className="text-white mt-2 font-bold uppercase tracking-widest text-xs">For Your Recovery</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Testimonials */}
       <section className="py-24 bg-[#0a0a0a]">
         <div className="max-w-full mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Community Tested</h2>
                 <p className="mt-4 text-gray-400 font-body">Real athletes. Real results.</p>
            </div>
            
            <TestimonialSlider />
         </div>
       </section>

       {/* CTA Banner */}
       <section className="relative py-28 bg-white overflow-hidden">
           <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Gym Texture" className="w-full h-full object-cover opacity-50 grayscale"/>
           </div>
           <div className="relative max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8 leading-none">
                    Your Gym.<br/> Your Style.<br/>Your LOOQAT.
                </h2>
                <div className="mt-10">
                    <a href="https://www.amazon.in/dp/B0CW2ZXDHZ" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 border-2 border-black bg-black text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-black transition-all">
                        Shop Now
                    </a>
                </div>
           </div>
       </section>

       {/* Blog Section */}
       <section className="py-24 bg-black">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
                   <h2 className="text-3xl font-black uppercase text-white tracking-wide">The Journal</h2>
                   <Link to="/blog" className="hidden md:block text-gray-500 hover:text-white uppercase font-bold text-xs tracking-widest transition-colors">View All Articles &rarr;</Link>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <BlogPreview 
                        id={1}
                        title="Hydration Hacks for Gym Rats"
                        category="Performance"
                        image="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
                   />
                   <BlogPreview 
                        id={2}
                        title="Why Staying Cool Boosts Workout Performance"
                        category="Science"
                        image="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                   />
                   <BlogPreview 
                        id={3}
                        title="The Perfect Gym Accessory You Didn’t Know You Needed"
                        category="Lifestyle"
                        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                   />
               </div>
               <div className="mt-8 md:hidden text-center">
                    <Link to="/blog" className="text-gray-500 hover:text-white uppercase font-bold text-xs tracking-widest">View All Articles &rarr;</Link>
               </div>
           </div>
       </section>

    </div>
  );
};

export default HomePage;