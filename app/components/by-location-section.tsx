'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Building2 } from 'lucide-react';

const LOCATIONS = [
    {
        id: 1,
        city: 'Baner',
        project: '37 Grandstand',
        image: '/images/banner.png',
        details: {
            title: '37 GRANDSTAND',
            address: 'Pancard Club Road, Baner, Pune, Maharashtra 411045'
        }
    },
    {
        id: 2,
        city: 'Ravet',
        project: '64 Meridien',
        image: '/images/banner2.png',
        details: {
            title: '64 MERIDIEN',
            address: '64 MERIDIEN Besides Sentosa Resort, Mumbai Bangalore HW, Ravet, PUNE, Maharashtra 412101'
        }
    },
    {
        id: 3,
        city: 'Hinjewadi Phase - 1',
        project: 'Aviva',
        image: '/images/banner.png', // Placeholder
        details: {
            title: 'Aviva',
            address: 'Hinjewadi Phase 1, Pune, Maharashtra'
        }
    },
    {
        id: 4,
        city: 'Kothrud',
        project: 'Grazia',
        image: '/images/banner1.png',
        details: {
            title: 'GRAZIA',
            address: 'Paud Road, Bhusari Colony, Kothrud, Pune, Maharashtra 411038'
        }
    },
    {
        id: 5,
        city: 'Baner',
        project: 'ahivom Regency',
        image: '/images/banner.png', // Placeholder
        details: {
            title: 'ahivom Regency',
            address: 'Baner, Pune, Maharashtra'
        }
    }
];

interface Location {
    id: number;
    city: string;
    project: string;
    image: string;
    details: {
        title: string;
        address: string;
    };
}

const ByLocationSection = () => {
    const [activeLocation, setActiveLocation] = useState<Location>(LOCATIONS[1]); // Default to second item to match image
    const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-24">

                {/* Header */}
                <div className="space-y-4 mb-8 md:mb-16">
                    <div className="flex items-center gap-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs md:text-sm">Find Your Paradise</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                    </div>
                       <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-bold leading-tight text-[#12394C]">
                  By Location
                    </h2>
                </div>

                {/* Mobile: Vertical Stack | Desktop: Side-by-Side */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full shadow-2xl overflow-hidden rounded-lg">

                    {/* Left Side - List */}
                    <div className={`w-full lg:w-1/3 transition-all duration-500 ease-out overflow-y-auto lg:overflow-y-auto hide-scrollbar ${hoveredLocation ? 'bg-white' : 'bg-[#F0F5FA]'}`}>
                        <div className="flex flex-col">
                            {LOCATIONS.map((loc) => (
                                <div
                                    key={loc.id}
                                    onClick={() => setActiveLocation(loc)}
                                    onMouseEnter={() => setHoveredLocation(loc)}
                                    onMouseLeave={() => setHoveredLocation(null)}
                                    className={`group flex items-center gap-4 md:gap-6 p-4 md:p-8 cursor-pointer transition-all duration-300 ease-out border-b border-gray-200 relative overflow-hidden ${activeLocation.id === loc.id ? 'bg-[#3A5D8F] text-white hover:bg-[#2A4D7F]' : 'text-[#1B2B41] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1'}`}
                                >
                                    {/* Hover gradient overlay */}
                                    {activeLocation.id !== loc.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#3A5D8F]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    )}
                                    
                                    {/* Icon Box */}
                                    <div className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border rounded-lg md:rounded-xl transition-all duration-300 ${activeLocation.id === loc.id ? 'border-white/30 text-white bg-white/10' : 'border-[#3A5D8F] text-[#3A5D8F] hover:bg-[#3A5D8F] hover:text-white hover:border-transparent hover:scale-110'} shrink-0 z-10`}>
                                        {activeLocation.id === loc.id ? <Building2 className="w-4 h-4 md:w-6 md:h-6 stroke-1" /> : <MapPin className="w-4 h-4 md:w-6 md:h-6 stroke-1" />}
                                    </div>

                                    <div className="z-10 flex-1">
                                        <h3 className={`text-base md:text-xl font-bold transition-all duration-300 ${activeLocation.id === loc.id ? 'text-white' : 'text-[#1B2B41] group-hover:text-[#3A5D8F]'}`}>
                                            {loc.city}
                                        </h3>
                                        <p className={`text-xs md:text-sm tracking-wide transition-all duration-300 ${activeLocation.id === loc.id ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                            {loc.project}
                                        </p>
                                    </div>

                                    {/* Mobile: Active indicator */}
                                    {activeLocation.id === loc.id && (
                                        <div className="w-2 h-2 bg-white rounded-full shrink-0 md:hidden"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image & Overlay */}
                    <div className="w-full lg:w-2/3 relative h-64 md:h-80 lg:h-full">
                        {/* Background Image */}
                        <Image
                            src={hoveredLocation ? hoveredLocation.image : activeLocation.image}
                            alt={hoveredLocation ? hoveredLocation.project : activeLocation.project}
                            fill
                            className="object-cover transition-all duration-500 ease-out"
                        />

                        {/* Mobile: Simple Overlay | Desktop: Pill Shape */}
                        <div className="absolute inset-0 lg:hidden bg-black/50 flex items-center justify-center p-6 text-white">
                            <div className="text-center">
                                <h3 className="text-xl md:text-2xl uppercase tracking-widest mb-2">
                                    {activeLocation.details.title}
                                </h3>
                                <p className="text-xs md:text-sm opacity-80 mb-4">
                                    {activeLocation.city}
                                </p>
                                <p className="text-xs md:text-sm leading-relaxed max-w-md mx-auto">
                                    {activeLocation.details.address}
                                </p>
                            </div>
                        </div>

                        {/* Desktop: Pill Shape Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[320px] h-[320px] md:h-[450px] bg-[#3A5D8F]/95 rounded-[120px] md:rounded-[160px] hidden lg:flex flex-col items-center justify-center text-center p-6 md:p-8 text-white transition-all duration-500 ease-out">
                            <div className="mb-6 md:mb-8">
                                <h3 className="text-2xl md:text-3xl uppercase tracking-widest mb-1 transition-all duration-300">
                                    {hoveredLocation ? hoveredLocation.details.title : activeLocation.details.title}
                                </h3>
                                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] opacity-80 transition-all duration-300">
                                    {hoveredLocation ? 'Preview Mode' : 'Patterned to Perfection'}
                                </p>
                            </div>

                            <p className="text-xs md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px] transition-all duration-300">
                                {hoveredLocation ? hoveredLocation.details.address : activeLocation.details.address}
                            </p>
                            
                            {/* Hover indicator */}
                            {hoveredLocation && (
                                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            )}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ByLocationSection;
