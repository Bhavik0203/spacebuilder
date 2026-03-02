'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

interface ProductData {
  id: number;
  heading: string;
  src: string;
  alt: string;
  content: string;
  buttonText: string;
  link: string;
}

const ProductStyle: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(2);

  const productData: ProductData[] = [
    {
      id: 1,
      heading: '37 GRANDSTAND',
      src: '/images/banner.png',
      alt: '37 GRANDSTAND',
      content: 'Premium 20-storey tower with 4 & 3 Bed Bespoke Residences. Featuring 72 exclusive units starting from 1350 Sqft. with world-class amenities and strategic location.',
      buttonText: 'view-details',
      link: 'https://37grandstand.com/'
    },
    {
      id: 2,
      heading: 'Grazia',
      src: '/images/banner2.png',
      alt: 'Grazia',
      content: 'Elegant 6-storey residential complex offering 3 & 2 Bed Residences. 18 exclusive units starting from 830 Sqft. with modern amenities and serene living environment.',
      buttonText: 'view-details',
      link: '/projects/grazia'
    },
    {
      id: 3,
      heading: '64 Meridien - Phase-II',
      src: '/images/banner1.png',
      alt: '64 Meridien - Phase-II',
      content: 'Mega township project with 5 towers of 13 storeys each. Offering 250 units of 2 & 3 Bed Residences starting from 682 Sqft. with comprehensive lifestyle amenities.',
      buttonText: 'view-details',
      link: '/projects/64-meridien'
    },
    {
      id: 4,
      heading: 'Codename HotSpot',
      src: '/images/codename.webp',
      alt: 'Codename HotSpot',
      content: 'Premium commercial office spaces in Baner, Pune. The Gateway to Pune Business with scalable office & retail spaces, metro connectivity and high ROI potential.',
      buttonText: 'view-details',
      link: 'https://codenamehotspot.com/'
    }
  ];

  const productColors = [
    'bg-[#12394C]',
    'bg-[#12394C]/90',
    'bg-[#12394C]/80',
    'bg-[#12394C]/70',
    'bg-[#12394C]/60',
  ];

  return (
    <div className=' min-h-screen px-4'>
      <div className="max-w-6xl mx-auto">
      <motion.div 
        className='flex flex-col max-w-6xl mx-auto md:justify-center md:items-center gap-4  p-4 md:p-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 md:mb-0"
        >
        <h2 className="text-center text-2xl uppercase md:text-4xl lg:text-5xl font-bold text-[#12394C] leading-tight overflow-hidden">
              
            Our Ongoing Projects 
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-center text-gray-600 leading-relaxed max-w-2xl text-sm md:text-base overflow-hidden ">
            Explore our current developments featuring premium residential and commercial projects. 
            Each project showcases exceptional architecture, modern amenities, and strategic locations 
            for unparalleled living and working experiences.
          </p>
        </motion.div>
      </motion.div>
        <div className="flex gap-0 h-[500px] overflow-hidden">
          {productData.map((product) => {
            const isActive = activeId === product.id;
            return (
              <div
                key={product.id}
                onMouseEnter={() => setActiveId(product.id)}
                className={`
                  relative flex-shrink-0 transition-all duration-700 ease-in-out cursor-pointer
                  ${isActive ? 'flex-[3]' : 'w-60'}
                `}
              >
                {/* Background Image - Only show on hover/active */}
                {isActive && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={product.src}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                    {/* Black Overlay with 50% opacity */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                  </div>
                )}
                
                {/* Background for collapsed state */}
                {!isActive && (
                  <div className={`absolute inset-0 z-0 gap-2 border-4 border-white ${productColors[product.id - 1]}`}></div>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-6 text-white">
                  {/* Number */}
                  <div className="text-2xl font-bold mb-4">{String(product.id).padStart(2, '0')}</div>

                  {/* Collapsed State */}
                  {!isActive && (
                    <div className="flex-1 flex flex-col items-center justify-between pb-4 pt-8">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-lg font-medium uppercase tracking-wider whitespace-nowrap -rotate-90 origin-center text-center">
                          {product.heading}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold text-gray-800">+</span>
                      </div>
                    </div>
                  )}

                  {/* Expanded State */}
                  {isActive && (
                    <div className="flex-1 flex flex-col justify-center space-y-6">
                      <h2 className="text-5xl font-bold uppercase tracking-wide">
                        {product.heading}
                      </h2>
                      <p className="text-sm leading-relaxed max-w-2xl opacity-90 text-justify">
                        {product.content}
                      </p>
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all duration-300 group"
                      >
                        VIEW MORE
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductStyle;
