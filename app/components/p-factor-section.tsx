'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PFactorSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const pFactors = [
    {
      title: 'Premium Construction',
      description: 'Experience luxury living at 37 Grandstand, Grazia, and 64 Meridien with superior materials, innovative architecture, and uncompromising quality standards that define Space Builder excellence.',
      image: '/images/constrution.jpeg'
    },
    {
      title: 'Prime Pune Locations',
      description: 'Strategic developments in Baner, Kothrud, Hinjewadi, and Ravet offering unmatched connectivity to IT hubs, educational institutions, and lifestyle amenities with excellent investment potential.',
      image: '/images/location.png'
    },
    {
      title: 'Perfect Planning',
      description: 'Thoughtfully designed 2, 3, and 4 BHK residences optimizing space utilization, natural lighting, and ventilation. Every Space Builder home crafted for modern family living.',
      image: '/images/planing.png'
    },
    {
      title: 'People Partnership',
      description: 'Building lasting relationships through transparent dealings, timely possession of 37 Grandstand and ongoing projects, and exceptional post-handover support. Your trust is our foundation.',
      image: '/images/partnership.png'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
             
                 <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">The P-Factor</span>
                                <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                            </div>
                            <h2 className="text-4xl uppercase md:text-5xl font-bold leading-tight text-[#12394C]">
                 Going beyond spaces to integrate 
                            </h2>
                        </div>
              <p className="text-gray-600 font-bold text-lg">
                The Space Builder Promise
              </p>
            </div>
            
            {/* Accordion */}
            <div className="space-y-3">
              {pFactors.map((factor, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-300 ${activeIndex !== null && activeIndex !== index ? 'opacity-40' : 'opacity-100'}`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 ${activeIndex === index ? 'text-gray-800' : 'text-gray-500'}`}
                  >
                    <h3 className="text-xl font-semibold">
                    • {factor.title}
                  </h3>
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <p className="px-6 pb-4 text-gray-700 leading-relaxed text-justify">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Image */}
          <div className="md:w-1/2 flex items-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full h-full min-h-[500px]">
              <Image
                src={activeIndex !== null ? pFactors[activeIndex].image : '/images/constrution.jpeg'} 
                alt={activeIndex !== null ? pFactors[activeIndex].title : "P-Factor Innovation"}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PFactorSection;
