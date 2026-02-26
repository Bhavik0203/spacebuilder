'use client';

import React from 'react';
import Image from 'next/image';

const PARTNERS = [
    { id: 1, name: 'Partner 1', logo: '/images/clints/Frame-42.png' },
    { id: 2, name: 'Partner 2', logo: '/images/clints/Frame-43.png' },
    { id: 3, name: 'Partner 3', logo: '/images/clints/Frame-48.png' },
    { id: 4, name: 'Partner 4', logo: '/images/clints/Frame-45.png' },
    { id: 5, name: 'Partner 5', logo: '/images/clints/Frame-46.png' },
    { id: 6, name: 'Partner 6', logo: '/images/clints/Frame-48.png' },
];

const PartnersSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Our Partners</span>
                        <div className="h-[2px] w-20 bg-[#3A5D8F]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                        Trusted by the world’s best
                    </h2>
                </div>

                {/* Logos Grid */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-8 lg:gap-12">
                    {PARTNERS.map((partner) => (
                        <div key={partner.id} className="relative h-16 md:h-20 w-28 md:w-32 lg:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
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
        </section>
    );
};

export default PartnersSection;
