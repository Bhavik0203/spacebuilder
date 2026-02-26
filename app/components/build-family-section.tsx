'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = [
    {
        id: 1,
        title: 'COMMERCIAL',
        description: 'Residential, villas, apartments, & commercial spaces everything you need, all in one place.',
        icon: '/images/buildings-4.png'
    },
    {
        id: 2,
        title: 'APARTMENTS',
        description: 'Residential, villas, apartments, & commercial spaces everything you need, all in one place.',
        icon: '/images/residential.png'
    },
    {
        id: 3,
        title: 'RESIDENTIAL',
        description: 'Residential, villas, apartments, & commercial spaces everything you need, all in one place.',
        icon: '/images/residential-home-1.png'
    },
    {
        id: 4,
        title: 'VILLAS',
        description: 'Residential, villas, apartments, & commercial spaces everything you need, all in one place.',
        icon: '/images/villa-1.png'
    }
];

const BuildFamilySection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default to second item active

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Find a Home</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                        Build Your Family
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat, index) => (
                        <div
                            key={cat.id}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative p-8 h-[250px] flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${hoveredIndex === index
                                ? 'bg-[#3A5D8F] text-white shadow-xl translate-y-[-4px]'
                                : 'bg-[#F0F5FA] text-[#1B2B41] hover:bg-gray-100'
                                }`}
                        >
                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-xl font-bold tracking-wide">{cat.title}</h3>
                                <p className={`text-xs leading-relaxed ${hoveredIndex === index ? 'text-white/80' : 'text-gray-500'}`}>
                                    {cat.description}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="relative z-10 flex items-center gap-3 mt-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${hoveredIndex === index ? 'border-white text-white' : 'border-[#3A5D8F] text-[#3A5D8F]'
                                    }`}>
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-widest ${hoveredIndex === index ? 'text-white' : 'text-[#3A5D8F]'
                                    }`}>
                                    View More
                                </span>
                            </div>

                            {/* Background Icon Decoration */}
                            <div className={`absolute bottom-2 right-2 transition-all duration-300 w-32 h-32 ${hoveredIndex === index ? 'opacity-30 scale-110' : 'opacity-50 scale-100'
                                }`}>
                                <Image
                                    src={cat.icon}
                                    alt={cat.title}
                                    fill
                                    className={`object-contain ${hoveredIndex === index ? 'brightness-0 invert' : ''}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuildFamilySection;
