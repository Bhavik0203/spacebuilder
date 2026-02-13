"use client";

import Image from "next/image";

const COMMITMENTS = [
    "On Time Delivery",
    "Top Class Partners",
    "Well Qualified Support Team",
    "Transparency",
    "1000+ Satisfied Customer",
    "Top Notch Construction Quality"
];

export default function SpaceCommitment() {
    return (
        <section className="relative py-20 bg-white">
            {/* Background City Wireframe (Optional/Placeholder based on image) */}
            <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 opacity-20 pointer-events-none z-0 overflow-hidden">
                <Image
                    src="/images/buildings-4.png"
                    alt="City Skyline"
                    fill
                    className="object-contain object-bottom"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row">

                    {/* Left Column - Sticky Content */}
                    <div className="w-full lg:w-1/3 lg:border-r-2 lg:border-[#3A5D8F] lg:pr-12 relative">
                        <div className="sticky top-32 space-y-8">
                            {/* Header */}
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs">Space</span>
                                    <div className="h-[2px] w-12 bg-[#3A5D8F]"></div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold leading-tight">
                                    The Space Commitment
                                </h2>
                            </div>

                            <p className="text-gray-500 leading-relaxed text-sm md:text-base text-justify">
                                We deliver every stage of the project, Right from research and acquisition, Marketing & Sales, to Construction and maintenance. We build Long lasting Landmarks.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Scrolling List */}
                    <div className="w-full lg:w-2/3 space-y-6 lg:pl-12 mt-12 lg:mt-0">
                        {COMMITMENTS.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-8 bg-[#EFF4FA] p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
                            >
                                <span className="text-4xl md:text-5xl font-bold text-[#b4c3da]">
                                    {String(index + 1).padStart(2, '0')}.
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-[#3A5D8F]">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
