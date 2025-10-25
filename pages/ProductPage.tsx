
import React, { useState } from 'react';

const productImages = [
    "https://i.pinimg.com/736x/3d/94/45/3d94458313d8054d09b494701556119b.jpg",
    "https://m.media-amazon.com/images/I/71haP0VsZDL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71jp58kMwYL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71auSmGPByL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81UWYWEVEKL._SL1500_.jpg"
];

const ProductPage: React.FC = () => {
    const [mainImage, setMainImage] = useState(productImages[0]);

    return (
        <div className="bg-[#0B0B0B] py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <div className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                            <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setMainImage(image)} className={`relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-[#ffbb98] ${mainImage === image ? 'ring-2 ring-offset-2 ring-[#ffbb98]' : ''}`} role="tab">
                                        <span className="sr-only">Image {index + 1}</span>
                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                            <img src={image} alt="" className="w-full h-full object-center object-cover" />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full aspect-w-1 aspect-h-1">
                             <div className="rounded-lg bg-[#1a1a1a] overflow-hidden">
                                <img src={mainImage} alt="Main product" className="w-full h-full object-center object-cover transition-transform duration-300 hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-[#F5F5F5]">LOOQAT Premium Black Travel Quencher</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-[#F5F5F5]">₹1,248</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <div className="text-base text-[#a0a0a0] space-y-6">
                                <p>The ultimate hydration solution for the modern traveler. With its robust stainless steel construction, sleek matte black finish, and superior insulation, the LOOQAT Quencher is built to perform and impress.</p>
                            </div>
                        </div>

                        <div className="mt-10">
                             <a href="https://www.amazon.in/dp/B0CW2ZXDHZ" target="_blank" rel="noopener noreferrer" className="w-full bg-[#ffbb98] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-[#0B0B0B] hover:bg-[#f8a87e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0B0B] focus:ring-[#ffbb98] transition-transform duration-300 hover:scale-105">
                                Buy Now on Amazon
                            </a>
                        </div>
                        
                        <section className="mt-12">
                            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Key Features:</h3>
                            <ul className="list-disc list-inside text-[#a0a0a0] space-y-2">
                                <li><strong>100% Leak-Proof:</strong> Secure lid design ensures no spills in your bag.</li>
                                <li><strong>BPA-Free Materials:</strong> Your health is our priority. Drink with confidence.</li>
                                <li><strong>Complete Set:</strong> Includes 3 reusable straws (2 steel, 1 silicone) and a cleaning brush.</li>
                                <li><strong>Gift-Ready Packaging:</strong> Comes in a premium box, perfect for gifting.</li>
                                <li><strong>Contest Entry:</strong> Chance to win a ₹2000 Amazon voucher! Share your best selfie story with #LOOQAT.</li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mt-16 pt-16 border-t border-[#333333]">
                    <h2 className="text-3xl font-extrabold text-[#F5F5F5] text-center">How LOOQAT Stands Out</h2>
                    <div className="mt-8 flow-root">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-[#333333]">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#F5F5F5] sm:pl-0">Feature</th>
                                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#F5F5F5] bg-[#ffbb98]/10 rounded-t-lg">LOOQAT Quencher</th>
                                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#F5F5F5]">Standard Plastic Bottle</th>
                                            <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-[#F5F5F5]">Generic Steel Bottle</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#222222]">
                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#F5F5F5] sm:pl-0">Insulation (Cold)</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#ffbb98] font-bold">11+ Hours</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">&lt; 1 Hour</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">~4 Hours</td>
                                        </tr>
                                         <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#F5F5F5] sm:pl-0">Insulation (Hot)</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#ffbb98] font-bold">7+ Hours</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">N/A</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">~3 Hours</td>
                                        </tr>
                                         <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#F5F5F5] sm:pl-0">Material</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#ffbb98] font-bold">304 Stainless Steel</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">Plastic (BPA risk)</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">Lower-grade Steel</td>
                                        </tr>
                                         <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#F5F5F5] sm:pl-0">Accessories Included</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#ffbb98] font-bold">3 Straws + Brush</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">None</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">None</td>
                                        </tr>
                                         <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#F5F5F5] sm:pl-0">Eco-Friendly</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#ffbb98] font-bold">✔ Highly Reusable</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">✖ Single-use</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-[#a0a0a0]">✔ Reusable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;