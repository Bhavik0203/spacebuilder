'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import clsx from 'clsx';
import dynamic from 'next/dynamic';

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse"></div>
});

// Interface for MapComponent props
interface MapComponentProps {
  center: [number, number];
  zoom: number;
}

// Project data moved outside component
const productData: ProductData[] = [
  {
    id: 1,
    heading: '37 GRANDSTAND',
    src: '/images/banner.png',
    alt: '37 GRANDSTAND',
    content: 'Premium 20-storey tower with 4 & 3 Bed Bespoke Residences. Featuring 72 exclusive units starting from 1350 Sqft. with world-class amenities and strategic location.',
    buttonText: 'view-details',
    link: 'https://37grandstand.com/',
    location: [18.5679, 73.7772] as [number, number]
  },
  {
    id: 2,
    heading: 'Grazia',
    src: '/images/banner2.png',
    alt: 'Grazia',
    content: 'Elegant 6-storey residential complex offering 3 & 2 Bed Residences. 18 exclusive units starting from 830 Sqft. with modern amenities and serene living environment.',
    buttonText: 'view-details',
    link: '/projects/grazia',
    location: [18.4831, 73.8567] as [number, number]
  },
  {
    id: 3,
    heading: '64 Meridien - Phase-II',
    src: '/images/banner1.png',
    alt: '64 Meridien - Phase-II',
    content: 'Mega township project with 5 towers of 13 storeys each. Offering 250 units of 2 & 3 Bed Residences starting from 682 Sqft. with comprehensive lifestyle amenities.',
    buttonText: 'view-details',
    link: '/projects/64-meridien',
    location: [18.6293, 73.8567] as [number, number]
  },
  {
    id: 4,
    heading: 'Codename HotSpot',
    src: '/images/codename.webp',
    alt: 'Codename HotSpot',
    content: 'Premium commercial office spaces in Baner, Pune. The Gateway to Pune Business with scalable office & retail spaces, metro connectivity and high ROI potential.',
    buttonText: 'view-details',
    link: 'https://codenamehotspot.com/',
    location: [18.5204, 73.8567] as [number, number]
  }
];

interface ProductData {
  id: number;
  heading: string;
  src: string;
  alt: string;
  content: string;
  buttonText: string;
  link: string;
  location: [number, number];
}

const ProductStyle: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(2);
  const [isClient, setIsClient] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number]>([18.5204, 73.8567]);
  const [mapZoom, setMapZoom] = useState<number>(13);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const activeProduct = productData.find(product => product.id === activeId);
    if (activeProduct) {
      setMapCenter(activeProduct.location);
      setMapZoom(16);
    }
  }, [activeId]);

  const productColors = [
    'bg-[#12394C]',
    'bg-[#12394C]/90',
    'bg-[#12394C]/80',
    'bg-[#12394C]/70',
    'bg-[#12394C]/60',
  ];

  return (
    <div className='min-h-screen px-4 relative'>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl uppercase md:text-4xl lg:text-5xl font-bold text-[#12394C] leading-tight overflow-hidden mb-6"
          >
            Our Ongoing Projects 
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm md:text-base overflow-hidden"
          >
            Explore our current developments featuring premium residential and commercial projects. 
            Each project showcases exceptional architecture, modern amenities, and strategic locations 
            for unparalleled living and working experiences.
          </motion.p>
        </motion.div>
        
        {/* Product Cards Section */}
        <div className="flex gap-0 h-[500px] overflow-hidden relative z-30">
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
        {/* Map Background - Full width below cards */}
       <div className="relative w-full h-62 z-0 -mt-[60px]">
          {isClient && (
            <MapComponent center={mapCenter} zoom={mapZoom} />
          )}
        </div>
    </div>
  );
};

export default ProductStyle;
