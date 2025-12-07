import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop" 
            alt="Gym Atmosphere" 
            className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">The Mission</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-body font-light">We build gear for those who push limits.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase text-white mb-8 tracking-wide">Fueling Ambition</h2>
            <div className="space-y-6 text-lg text-gray-400 font-body leading-relaxed">
                <p>
                LOOQAT wasn't created in a boardroom. It was forged from the need for hydration that keeps up. We saw athletes, gym-goers, and creators settling for subpar bottles—lukewarm water, leaking caps, and fragile plastic that cracks when dropped.
                </p>
                <p>
                We changed the game. Our mission is simple: <strong>Equip you with the best.</strong> We provide the hydration tools you need to stay focused, recover faster, and perform better.
                </p>
                <p>
                Whether you are deadlifting twice your bodyweight or running your first 5K, LOOQAT is your partner in the grind.
                </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-white translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              className="relative z-10 w-full h-auto grayscale shadow-2xl" 
              src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym workout environment" 
            />
          </div>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="bg-[#0a0a0a] py-24 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-black uppercase text-white mb-16 tracking-tight">Our Standards</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="p-10 border border-gray-800 bg-black hover:border-gray-600 transition-colors">
                    <h3 className="text-xl font-bold uppercase text-white mb-4 tracking-wider">Uncompromising Quality</h3>
                    <p className="text-gray-400 font-body leading-relaxed">304 Food-grade stainless steel. No shortcuts. Built to handle the wear and tear of a dedicated lifestyle.</p>
                </div>
                <div className="p-10 border border-gray-800 bg-black hover:border-gray-600 transition-colors">
                    <h3 className="text-xl font-bold uppercase text-white mb-4 tracking-wider">Performance Design</h3>
                    <p className="text-gray-400 font-body leading-relaxed">Every curve and seal is engineered. Fits in gym equipment, cars, and your hand perfectly.</p>
                </div>
                <div className="p-10 border border-gray-800 bg-black hover:border-gray-600 transition-colors">
                    <h3 className="text-xl font-bold uppercase text-white mb-4 tracking-wider">Bold Aesthetics</h3>
                    <p className="text-gray-400 font-body leading-relaxed">We don't do loud colors. We do bold statements. Black on black. Clean, minimal, and aggressive.</p>
                </div>
            </div>
        </div>
      </div>

      <div className="py-24 text-center bg-black">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8 tracking-tighter">Ready to Upgrade?</h2>
        <Link
            to="/product"
            className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-transform hover:scale-105"
        >
            Shop The Collection
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;