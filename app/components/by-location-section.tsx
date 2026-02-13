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

const ByLocationSection = () => {
    const [activeLocation, setActiveLocation] = useState(LOCATIONS[1]); // Default to second item to match image

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
                    <div className="w-full lg:w-1/3 bg-[#F0F5FA] overflow-y-auto hide-scrollbar">
                        <div className="flex flex-col">
                            {LOCATIONS.map((loc) => (
                                <div
                                    key={loc.id}
                                    onClick={() => setActiveLocation(loc)}
                                    className={`flex items-center gap-6 p-8 cursor-pointer transition-all border-b border-gray-200 ${activeLocation.id === loc.id ? 'bg-[#3A5D8F] text-white hover:bg-[#3A5D8F]' : 'text-[#1B2B41] hover:bg-white/50'}`}
                                >
                                    {/* Icon Box */}
                                    <div className={`w-14 h-14 flex items-center justify-center border ${activeLocation.id === loc.id ? 'border-white/30 text-white' : 'border-[#3A5D8F] text-[#3A5D8F]'} shrink-0`}>
                                        {activeLocation.id === loc.id ? <Building2 className="w-6 h-6 stroke-1" /> : <MapPin className="w-6 h-6 stroke-1" />}
                                    </div>

                                    <div>
                                        <h3 className={`text-xl font-bold ${activeLocation.id === loc.id ? 'text-white' : 'text-[#1B2B41]'}`}>
                                            {loc.city}
                                        </h3>
                                        <p className={`text-sm tracking-wide ${activeLocation.id === loc.id ? 'text-white/80' : 'text-gray-500'}`}>
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
                            src={activeLocation.image}
                            alt={activeLocation.project}
                            fill
                            className="object-cover"
                        />

                        {/* Pill Shape Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[450px] bg-[#3A5D8F]/95 rounded-[160px] flex flex-col items-center justify-center text-center p-8 text-white">
                            <div className="mb-8">
                                <h3 className="text-3xl font-serif uppercase tracking-widest mb-1">{activeLocation.details.title}</h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] opacity-80">Patterned to Perfection</p>
                            </div>

                            <p className="text-sm font-light leading-relaxed max-w-[200px]">
                                {activeLocation.details.address}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ByLocationSection;
