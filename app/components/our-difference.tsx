"use client";

import Image from 'next/image';

const DIFFERENCES = [
    {
        image: "/images/moto1.png",
        title: "Enduring value",
        description: "We deliver every stage of the project, Right from research and acquisition, Marketing & Sales, to Construction and maintenance. We build Long lasting Landmarks."
    },
    {
        image: "/images/moto2.png",
        title: "Track Record",
        description: "We deliver every stage of the project, Right from research and acquisition, Marketing & Sales, to Construction and maintenance. We build Long lasting Landmarks."
    },
    {
        image: "/images/moto3.png",
        title: "Quality",
        description: "We deliver every stage of the project, Right from research and acquisition, Marketing & Sales, to Construction and maintenance. We build Long lasting Landmarks."
    }
];

export default function OurDifference() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs">OUR MOTO</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">Our Difference</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
                    {DIFFERENCES.map((item, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            <div className="relative w-16 h-16 bg-[#3A5D8F] mb-6 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1B2B41] mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base text-justify">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
