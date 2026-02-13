import React from 'react';
import Image from 'next/image';

const CorporateOverview = () => {
    return (
        <section className="relative z-20 bg-white pt-12 pb-20 -mt-20 md:-mt-32 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content Column (Left) */}
                    <div className="w-full lg:w-3/4 space-y-12 pt-10">
                        {/* Header Text Section */}
                        <div className="space-y-6 max-w-3xl">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">About Us</span>
                                    <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                                    Corporate Overview
                                </h2>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                Space Builders Group is a renowned real estate developer established around 20 years back.
                                Vision dynamism of our founders has seen the company making remarkable strides.
                                In last few years only, we have successfully completed many projects in various locations of Pune
                                like Hinjewadi, Aundh, Baner, Ravet, and many more.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="relative w-full">
                            <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/images/banner1.png"
                                    alt="Corporate Overview"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="bg-white p-0 max-w-2xl">
                            <h3 className="text-xl md:text-2xl font-serif text-[#1B2B41] font-bold leading-tight mb-6">
                                "GOOD CONSTRUCTION is a science of combining ENGINEERING, ART and ECONOMICS."
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">FOUNDER | SANDEEP FANSALKAR</span>
                                    <div className="h-[1px] w-16 bg-gray-300" />
                                </div>

                                <button className="bg-[#4A6FA5] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3A5D8F] transition-all hover:shadow-lg">
                                    READ FOUNDER'S LETTER
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Column (Wireframe) */}
                    <div className="hidden lg:block w-1/4 relative min-h-full">
                        {/* Wireframe Decoration */}
                        <div className="sticky top-20 w-full h-full opacity-20 pointer-events-none">
                            <svg viewBox="0 0 100 200" className="w-full h-auto text-[#3A5D8F]" fill="none" stroke="currentColor" strokeWidth="0.5">
                                <path d="M10 200 V 50 H 30 V 200 M 35 200 V 30 H 60 V 200 M 65 200 V 60 H 90 V 200" />
                                <path d="M15 55 H 25 M 15 60 H 25 M 15 65 H 25 M 15 70 H 25" />
                                <path d="M40 35 H 55 M 40 40 H 55 M 40 45 H 55 M 40 50 H 55" />
                                <path d="M70 65 H 85 M 70 70 H 85 M 70 75 H 85 M 70 80 H 85" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateOverview;
