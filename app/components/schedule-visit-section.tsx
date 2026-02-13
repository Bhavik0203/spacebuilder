import React from 'react';

const ScheduleVisitSection = () => {
    return (
        <section className="bg-[#3A5D8F] py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                    {/* Text Content */}
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-wide">
                            Schedule A Visit
                        </h2>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed">
                            Discover thoughtfully designed spaces built for modern living.
                            <br className="hidden md:block" />
                            Experience quality construction, smart layouts, and trusted craftsmanship.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="shrink-0">
                        <button className="px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#3A5D8F] transition-colors duration-300">
                            Request a Viewing
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScheduleVisitSection;
