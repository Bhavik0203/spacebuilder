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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="space-y-4 mb-16">
                    <div className="flex items-center gap-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Find Your Paradise</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                        By Location
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row h-[600px] w-full shadow-2xl overflow-hidden rounded-lg">

                    {/* Left Side - List */}
                    <div className={`w-full lg:w-1/3 transition-all duration-500 ease-out overflow-y-auto hide-scrollbar ${hoveredLocation ? 'bg-white' : 'bg-[#F0F5FA]'}`}>
                        <div className="flex flex-col">
                            {LOCATIONS.map((loc) => (
                                <div
                                    key={loc.id}
                                    onClick={() => setActiveLocation(loc)}
                                    onMouseEnter={() => setHoveredLocation(loc)}
                                    onMouseLeave={() => setHoveredLocation(null)}
                                    className={`group flex items-center gap-6 p-8 cursor-pointer transition-all duration-300 ease-out border-b border-gray-200 relative overflow-hidden ${activeLocation.id === loc.id ? 'bg-[#3A5D8F] text-white hover:bg-[#2A4D7F]' : 'text-[#1B2B41] hover:bg-gray-50 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1'}`}
                                >
                                    {/* Hover gradient overlay */}
                                    {activeLocation.id !== loc.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#3A5D8F]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    )}
                                    
                                    {/* Icon Box */}
                                    <div className={`w-14 h-14 flex items-center justify-center border rounded-xl transition-all duration-300 ${activeLocation.id === loc.id ? 'border-white/30 text-white bg-white/10' : 'border-[#3A5D8F] text-[#3A5D8F] hover:bg-[#3A5D8F] hover:text-white hover:border-transparent hover:scale-110'} shrink-0 z-10`}>
                                        {activeLocation.id === loc.id ? <Building2 className="w-6 h-6 stroke-1" /> : <MapPin className="w-6 h-6 stroke-1" />}
                                    </div>

                                    <div className="z-10">
                                        <h3 className={`text-xl font-bold transition-all duration-300 ${activeLocation.id === loc.id ? 'text-white' : 'text-[#1B2B41] group-hover:text-[#3A5D8F]'}`}>
                                            {loc.city}
                                        </h3>
                                        <p className={`text-sm tracking-wide transition-all duration-300 ${activeLocation.id === loc.id ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                            {loc.project}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image & Overlay */}
                    <div className="w-full lg:w-2/3 relative h-full">
                        {/* Background Image */}
                        <Image
                            src={hoveredLocation ? hoveredLocation.image : activeLocation.image}
                            alt={hoveredLocation ? hoveredLocation.project : activeLocation.project}
                            fill
                            className="object-cover transition-all duration-500 ease-out"
                        />

                        {/* Pill Shape Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[450px] bg-[#3A5D8F]/95 rounded-[160px] flex flex-col items-center justify-center text-center p-8 text-white transition-all duration-500 ease-out">
                            <div className="mb-8">
                                <h3 className="text-3xl font-serif uppercase tracking-widest mb-1 transition-all duration-300">
                                    {hoveredLocation ? hoveredLocation.details.title : activeLocation.details.title}
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 transition-all duration-300">
                                    {hoveredLocation ? 'Preview Mode' : 'Patterned to Perfection'}
                                </p>
                            </div>

                            <p className="text-sm font-light leading-relaxed max-w-[200px] transition-all duration-300">
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
