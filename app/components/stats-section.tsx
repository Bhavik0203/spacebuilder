import React from 'react';

const STATS = [
    {
        id: 1,
        value: "25+",
        label: "YEARS"
    },
    {
        id: 2,
        value: "22+",
        label: "PROJECTS"
    },
    {
        id: 3,
        value: "7 L",
        label: "SQ.FT.ONGOING"
    },
    {
        id: 4,
        value: "15 L",
        label: "SQ.FT.COMING SOON"
    }
];

const StatsSection = () => {
    return (
        <section className="relative z-30 px-6 md:px-12 lg:px-24 mb-20 pointer-events-none">
            <div className="container mx-auto">
                <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg py-4 px-8 md:px-16 pointer-events-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                        {STATS.map((stat) => (
                            <div key={stat.id} className="relative flex items-center justify-center h-32 md:h-40">
                                {/* Background Large Text */}
                                <span className="absolute text-7xl md:text-8xl font-bold text-[#E6EBF5] font-sans tracking-tight z-0 select-none">
                                    {stat.value}
                                </span>

                                {/* Foreground Label */}
                                <span className="relative z-10 text-[#1B2B41] font-bold text-sm md:text-base uppercase tracking-widest">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
