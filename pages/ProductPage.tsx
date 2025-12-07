
import React, { useState, useRef } from 'react';

const productImages = [
    "https://i.pinimg.com/736x/3d/94/45/3d94458313d8054d09b494701556119b.jpg",
    "https://m.media-amazon.com/images/I/71haP0VsZDL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71jp58kMwYL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71auSmGPByL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81UWYWEVEKL._SL1500_.jpg"
];

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-800">
            <button
                className="flex w-full items-center justify-between py-5 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-gray-300 transition-colors">{title}</span>
                <span className={`transform transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <div className="text-gray-400 font-body text-sm leading-relaxed pr-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ProductPage: React.FC = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleThumbnailClick = (index: number) => {
        setActiveImageIndex(index);
        // Scroll mobile view if needed
        if (scrollRef.current) {
            const width = scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const width = scrollRef.current.clientWidth;
            const scrollPos = scrollRef.current.scrollLeft;
            const index = Math.round(scrollPos / width);
            setActiveImageIndex(index);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <nav className="flex text-xs font-bold uppercase tracking-widest text-gray-500">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span className="mx-2">/</span>
                    <a href="/product" className="hover:text-white transition-colors">Shop</a>
                    <span className="mx-2">/</span>
                    <span className="text-white">Stealth Series</span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                    
                    {/* Left Column - Images (Sticky on Desktop) */}
                    <div className="lg:col-span-7 lg:sticky lg:top-24">
                        {/* Mobile Swipeable Carousel */}
                        <div 
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:hidden aspect-[4/5] mb-4 bg-gray-900"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {productImages.map((img, idx) => (
                                <div key={idx} className="w-full flex-shrink-0 snap-center h-full">
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Desktop Main Image */}
                        <div className="hidden lg:block w-full aspect-[4/5] bg-gray-900 border border-gray-800 overflow-hidden relative group">
                            <img 
                                src={productImages[activeImageIndex]} 
                                alt="Main Product" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="flex space-x-3 mt-4 overflow-x-auto pb-2 lg:pb-0">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleThumbnailClick(idx)}
                                    className={`relative flex-shrink-0 h-20 w-20 lg:h-24 lg:w-24 border-2 transition-all duration-200 overflow-hidden ${
                                        activeImageIndex === idx ? 'border-white opacity-100' : 'border-transparent border-gray-800 opacity-60 hover:opacity-100'
                                    }`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="lg:col-span-5 mt-10 lg:mt-0">
                        <div className="mb-8 border-b border-gray-800 pb-8">
                            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-2">LOOQAT Stealth 1.2L</h1>
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="text-2xl font-bold">₹2,499</span>
                                <span className="px-2 py-1 bg-white text-black text-xs font-black uppercase tracking-widest">Best Seller</span>
                            </div>
                            <p className="text-gray-400 font-body leading-relaxed text-base">
                                The ultimate gym companion. Double-wall vacuum insulated stainless steel keeps your water ice-cold for 11+ hours. 
                                Leak-proof, sweat-proof, and built like a tank.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="mb-10">
                            <a 
                                href="https://www.amazon.in/dp/B0CW2ZXDHZ" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-white text-black font-black uppercase tracking-[0.2em] py-5 hover:bg-gray-200 transition-colors text-sm"
                            >
                                Buy on Amazon
                            </a>
                            <div className="mt-4 flex items-center justify-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Free Shipping via Prime</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 mb-10 border-b border-gray-800 pb-10">
                            <div className="text-center">
                                <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white mb-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">11H Cold</span>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white mb-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">BPA Free</span>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white mb-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">Leak Proof</span>
                            </div>
                        </div>

                        {/* Info Accordions */}
                        <div className="space-y-1">
                            <Accordion title="Features" defaultOpen={true}>
                                <ul className="list-disc pl-5 space-y-2 marker:text-white">
                                    <li>Double-wall vacuum insulation technology.</li>
                                    <li>Keeps beverages cold for up to 11 hours and hot for 7 hours.</li>
                                    <li>Sweat-free powder coat finish for a dry grip.</li>
                                    <li>Fits in standard car cup holders.</li>
                                    <li>Ergonomic handle for easy carrying.</li>
                                </ul>
                            </Accordion>
                            <Accordion title="Specifications">
                                <div className="grid grid-cols-2 gap-y-2">
                                    <span className="font-bold text-gray-300">Capacity:</span> <span>1.2 Liters (40 oz)</span>
                                    <span className="font-bold text-gray-300">Material:</span> <span>18/8 Pro-Grade Stainless Steel</span>
                                    <span className="font-bold text-gray-300">Weight:</span> <span>550g (approx)</span>
                                    <span className="font-bold text-gray-300">Height:</span> <span>27 cm</span>
                                    <span className="font-bold text-gray-300">Base Diameter:</span> <span>7.5 cm</span>
                                </div>
                            </Accordion>
                            <Accordion title="What's in the Box">
                                <ul className="list-disc pl-5 space-y-2 marker:text-white">
                                    <li>1x LOOQAT Stealth 1.2L Tumbler</li>
                                    <li>1x Leak-Proof Lid</li>
                                    <li>2x Stainless Steel Straws</li>
                                    <li>1x Silicone Tip Straw</li>
                                    <li>1x Straw Cleaning Brush</li>
                                </ul>
                            </Accordion>
                            <Accordion title="Care Instructions">
                                We recommend hand washing the bottle to preserve the powder coat finish. The lid and straws are dishwasher safe (top rack only). Do not use bleach or chlorine-based cleaners.
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* Immersive Feature Section */}
                <div className="mt-24 mb-24 relative overflow-hidden h-[500px] flex items-center">
                     <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                            alt="Gym Background" 
                            className="w-full h-full object-cover filter brightness-50 grayscale"
                        />
                     </div>
                     <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">Engineered for the Grind</h2>
                            <p className="text-xl text-gray-300 font-body mb-8 leading-relaxed">
                                No condensation. No lukewarm water. No slips. 
                                Just pure, ice-cold hydration when you need it most. 
                                Whether you're mid-set or mid-commute, LOOQAT performs.
                            </p>
                            <a href="https://www.amazon.in/dp/B0CW2ZXDHZ" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Get Yours Now
                            </a>
                        </div>
                     </div>
                </div>

                {/* Spec Comparison */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black uppercase text-center mb-12 tracking-tight">The Advantage</h2>
                    <div className="overflow-hidden border border-gray-800">
                        <table className="min-w-full divide-y divide-gray-800">
                            <thead className="bg-gray-900">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Feature</th>
                                    <th scope="col" className="px-6 py-4 text-center text-xs font-black text-white uppercase tracking-widest">LOOQAT</th>
                                    <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-widest">Others</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-black">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-300 uppercase">Insulation</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-white">11+ Hours Cold</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">2-4 Hours</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-300 uppercase">Material</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-white">304 Grade Steel</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">201 Grade / Plastic</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-300 uppercase">Finish</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-white">Sweat-Proof Powder</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">Slippery Paint</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-300 uppercase">Lid Type</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-white">Leak-Proof Screw On</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">Pop-off (Leaky)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black uppercase text-center mb-10 tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <Accordion title="Does it fit in my car cup holder?">
                            Yes! The tapered base design (7.5cm diameter) is engineered specifically to fit standard car cup holders, treadmill holders, and gym equipment slots.
                        </Accordion>
                        <Accordion title="Is the plastic BPA free?">
                            Absolutely. Every part of the LOOQAT bottle that comes into contact with your drink is 100% BPA-free and non-toxic.
                        </Accordion>
                        <Accordion title="Can I put hot liquids in it?">
                            Yes. The vacuum insulation keeps liquids hot for up to 7 hours. However, be careful when drinking hot liquids through the straw.
                        </Accordion>
                        <Accordion title="What is the warranty?">
                            We stand by our quality. If you experience any manufacturing defects involving the insulation or structure, please contact our support team.
                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductPage;
