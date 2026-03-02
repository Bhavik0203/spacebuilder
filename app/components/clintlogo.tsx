"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ClientLogoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);

  // Logo data with actual client image paths
  interface LogoItem {
    id: number;
    name: string;
    logo: string;
  }

  const logos: LogoItem[] = [
    { id: 1, name: 'Partner 1', logo: '/images/clints/clint 1.jpeg' },
    { id: 2, name: 'Partner 2', logo: '/images/clints/clint 2.jpeg' },
    { id: 3, name: 'Partner 3', logo: '/images/clints/clint 3.jpeg' },
    { id: 4, name: 'Partner 4', logo: '/images/clints/clint 4.jpeg' },
    { id: 5, name: 'Partner 5', logo: '/images/clints/clint 5.jpeg' },
    { id: 6, name: 'Partner 6', logo: '/images/clints/clint 6.jpeg' },
    { id: 7, name: 'Partner 7', logo: '/images/clints/clint 7.jpeg' },
  ]; 

  // Triple the logos for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos];

  const handleLogoHover = (index: number) => {
    setHoveredLogoIndex(index);
    setIsHovered(true);
  };

  const handleLogoLeave = () => {
    setHoveredLogoIndex(null);
    setIsHovered(false);
  };

  return (
    <section 
      className="w-full bg-white py-10 overflow-hidden relative border-t border-b border-gray-200"
      role="region"
      aria-label="Client logos"
    >
        {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Our Partners</span>
                        <div className="h-[2px] w-20 bg-[#3A5D8F]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                        Trusted by the world's best
                    </h2>
                </div>
      <div className="relative">
        {/* Infinite scrolling logos container */}
        <div 
          className={`flex w-max ${isHovered ? 'animation-paused' : ''}`}
          style={{
            animation: 'infiniteScroll 120s linear infinite',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {infiniteLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${Math.floor(index / logos.length)}-${index}`}
              className={`flex-shrink-0 mx-8 flex items-center justify-center transition-all duration-300 ease-in-out ${
                hoveredLogoIndex === index 
                  ? 'scale-110 opacity-100' 
                  : 'scale-100 opacity-70 hover:opacity-100'
              }`}
              style={{ width: '250px', height: '120px' }}
              onMouseEnter={() => handleLogoHover(index)}
              onMouseLeave={handleLogoLeave}
              role="img"
              aria-label={`${logo.name} logo`}
            >
              <Image
                src={logo.logo}
                alt={`${logo.name} client logo`}
                width={200}
                height={100}
                className="object-contain transition-all duration-300"
                priority={index < logos.length} // Prioritize first set of logos
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          ))}
        </div>
        <div 
          className={`flex w-max ${isHovered ? 'animation-paused' : ''}`}
          style={{
            animation: 'infiniteScrollReverse 120s linear infinite',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {infiniteLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${Math.floor(index / logos.length)}-${index}`}
              className={`flex-shrink-0 mx-8 flex items-center justify-center transition-all duration-300 ease-in-out ${
                hoveredLogoIndex === index 
                  ? 'scale-110 opacity-100' 
                  : 'scale-100 opacity-70 hover:opacity-100'
              }`}
              style={{ width: '250px', height: '120px' }}
              onMouseEnter={() => handleLogoHover(index)}
              onMouseLeave={handleLogoLeave}
              role="img"
              aria-label={`${logo.name} logo`}
            >
              <Image
                src={logo.logo}
                alt={`${logo.name} client logo`}
                width={200}
                height={100}
                className="object-contain transition-all duration-300"
                priority={index < logos.length} // Prioritize first set of logos
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animation-paused {
          animation-play-state: paused;
        }
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 3}%);
          }
        }
        @keyframes infiniteScrollReverse {
          0% {
            transform: translateX(-${100 / 3}%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSection;