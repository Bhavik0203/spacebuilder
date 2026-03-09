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
  ];

  return (
    <div className='min-h-screen px-4 py-8 relative md:hidden'>
      <div className="max-w-lg mx-auto">
        <motion.div 
          className='text-center mb-8'
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
           className="text-3xl uppercase font-bold leading-tight text-[#12394C] mb-4">
            Our Ongoing Projects 
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-[#12394C] leading-relaxed max-w-md mx-auto text-sm"
          >
            Explore our current developments featuring premium residential and commercial projects with exceptional architecture and strategic locations.
          </motion.p>
        </motion.div>
        
        {/* Mobile Project Cards - Vertical Stack */}
        <div className="space-y-4 mb-8">
          {productData.map((product, index) => {
            const isActive = activeId === product.id;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveId(product.id)}
                className={`
                  relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300
                  ${isActive ? 'ring-2 ring-[#12394C] shadow-lg' : 'shadow-md'}
                `}
              >
                {/* Background Image */}
                <div className="relative h-48">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${isActive ? 'bg-black/70' : 'bg-black/50'} transition-opacity duration-300`}></div>
                  
                  {/* Project Number */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#12394C]">{String(product.id).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-4">
                  <h3 className="text-lg font-bold text-[#12394C] mb-2">{product.heading}</h3>
                  
                  {/* Expanded Content */}
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {product.content}
                      </p>
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#12394C] hover:gap-3 transition-all duration-300 group"
                      >
                        VIEW MORE
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </motion.div>
                  )}
                  
                  {/* Expand/Collapse Indicator */}
                  <div className="flex items-center justify-center mt-2">
                    <div className={`w-6 h-6 rounded-full border-2 border-[#12394C] flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
                      <span className="text-[#12394C] text-lg leading-none">+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mobile Map */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
          {isClient && (
            <MapComponent center={mapCenter} zoom={mapZoom} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductStyle;
