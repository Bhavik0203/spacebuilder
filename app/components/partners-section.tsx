'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const PARTNERS = [
    { id: 1, name: 'Partner 1', logo: '/images/clints/clint (1).jpeg' },
    { id: 2, name: 'Partner 2', logo: '/images/clints/clint (2).jpeg' },
    { id: 3, name: 'Partner 3', logo: '/images/clints/clint (3).jpeg' },
    { id: 4, name: 'Partner 4', logo: '/images/clints/clint (4).jpeg' },
    { id: 5, name: 'Partner 5', logo: '/images/clints/clint (5).jpeg' },
    { id: 6, name: 'Partner 6', logo: '/images/clints/clint (6).jpeg' },
    { id: 7, name: 'Partner 7', logo: '/images/clints/clint (7).jpeg' },
];

const PartnersSection = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [pausedTransform, setPausedTransform] = useState('0px');
    const containerRef = useRef<HTMLDivElement>(null);

    // Duplicate the partners array for seamless looping
    const duplicatedPartners = [...PARTNERS, ...PARTNERS];

    const handleLogoHover = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const scrollContainer = containerRef.current.querySelector('.flex');
            if (scrollContainer) {
                const computedStyle = window.getComputedStyle(scrollContainer);
                const matrix = computedStyle.transform;
                
                if (matrix && matrix !== 'none') {
                    const values = matrix.match(/matrix.*\((.+)\)/);
                    if (values) {
                        const matrixValues = values[1].split(', ');
                        const currentTransform = parseFloat(matrixValues[4]) || 0;
                        setPausedTransform(`translateX(${currentTransform}px)`);
                    }
                } else {
                    setPausedTransform('translateX(0px)');
                }
            }
        }
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

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

                {/* Sliding Logos Container */}
                <div 
                    ref={containerRef}
                    className="relative"
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-8 lg:gap-12"
                            style={{
                                animation: isPaused ? 'none' : 'slide 20s linear infinite',
                                transform: isPaused ? pausedTransform : undefined,
                            }}
                        >
                            {duplicatedPartners.map((partner, index) => (
                                <div 
                                    key={`${partner.id}-${index}`} 
                                    className="relative h-16 md:h-20 w-28 md:w-32 lg:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 flex-shrink-0"
                                    onMouseEnter={handleLogoHover}
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Custom CSS for animation */}
            <style jsx>{`
                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default PartnersSection;
