import React from 'react';
import Image from 'next/image';

const CorporateOverview = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/Frame53.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                backgroundSize: 'contain',
                backgroundColor: '#ffffff',
            }}
        >
             <section className="relative z-20 pt-12 -mt-32 md:-mt-48 overflow-hidden bg-transparent">
            <div className="container mr-auto pr-6 md:pr-12 lg:pr-18">
                <div className="relative z-[999] w-full lg:w-3/4 bg-white px-8 md:px-20 py-8 md:py-12 space-y-12">
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
                        <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden">
                            <Image
                                src="/images/banner1.png"
                                alt="Corporate Overview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 bg-white px-6 md:px-8 py-4 max-w-xl">
                                <h3 className="text-xl md:text-2xl font-serif text-[#1B2B41] font-bold leading-tight mb-4">
                                    "GOOD CONSTRUCTION is a science of combining ENGINEERING, ART and ECONOMICS."
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 w-full">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold whitespace-nowrap">FOUNDER | SANDEEP FANSALKAR</span>
                                        <div className="h-[1px] flex-grow bg-gray-300" />
                                    </div>

                                    <button className="bg-[#4A6FA5] cursor-pointer hover:bg-[#3A5D8F] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 transition-all hover:shadow-lg">
                                        READ FOUNDER'S LETTER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quote Section */}

                </div>
            </div>
        </section>
        </div>
       
    );
};

export default CorporateOverview;
