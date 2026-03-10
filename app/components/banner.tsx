'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Home } from 'lucide-react';

const ONGOING_PROJECTS = [
    {
        title: "37 GRANDSTAND",
        location: "Pancard Club Road, Baner",
        status: "Ongoing",
        units: "72 units"
    },
    {
        title: "Grazia", 
        location: "Paud Road, Bhusari Colony, Kothrud",
        status: "Ongoing",
        units: "18 units"
    },
    {
        title: "64 Meridien - Phase-II",
        location: "Ravet, Pune, Maharashtra", 
        status: "Ongoing",
        units: "Multiple units"
    },
    {
        title: "Codename HotSpot",
        location: "Baner, Pune",
        status: "Ongoing",
        units: "Commercial Spaces"
    }
];

const Banner = () => {
    const [expandedProject, setExpandedProject] = useState<number>(0);
    const { scrollY } = useScroll();
    
    // Banner stays fixed until curtains mostly disappear (0-150px scroll), then scrolls normally
    const bannerY = useTransform(scrollY, [0, 150], [0, 0]);
    const bannerPosition = useTransform(scrollY, [0, 150], ['fixed', 'relative']);

    const toggleProject = (index: number) => {
        setExpandedProject(expandedProject === index ? index : index);
    };

    // Auto-cycle through projects every 5 seconds
    React.useEffect(() => {
        const timer = setInterval(() => {
            setExpandedProject((prev) => (prev + 1) % ONGOING_PROJECTS.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div 
            className="w-full h-[100vh] overflow-hidden bg-black z-0"
            style={{
                position: bannerPosition,
                y: bannerY,
                top: bannerPosition.get() === 'fixed' ? 0 : 'auto'
            }}
        >
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/images/bannervideo.mp4" type="video/mp4" />
            </video>
            
            {/* Dark overlay for better visibility if needed */}
            <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row justify-between items-start">
                <div className="w-full max-w-4xl pt-20 lg:w-1/2">
                    <h1 className="text-white font-serif leading-tight">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide block mb-3 sm:mb-4">Crafting Landmarks.</span>
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide block">Creating Lifestyles.</span>
                    </h1>

                    <p className="text-gray-200 font-sans font-light tracking-wide pl-1 max-w-2xl mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed">
                        At Space Builders Group, we shape the future of real estate by designing homes that blend quality construction, modern architecture, and prime locations creating exceptional living spaces and long-lasting value for every homeowner.
                    </p>
                </div>
                
                {/* Right Side - Ongoing Projects */}
                <div className="absolute left-1/2 top-[38%] -translate-x-1/2 w-full px-4 flex justify-center lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:w-1/2 lg:px-0 lg:mt-0 lg:pt-20 lg:pl-12 lg:flex lg:justify-end">
                    <div className="rounded-lg p-4 sm:p-6 lg:w-full w-full max-w-[300px] sm:max-w-[320px] md:max-w-md backdrop-blur-sm">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
                            Ongoing Projects
                        </h3>
                        <div className="space-y-3">
                            {ONGOING_PROJECTS.map((project, index) => (
                                <div key={index} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                                    <button
                                        onClick={() => toggleProject(index)}
                                        className="w-full px-4 py-3 flex items-center justify-center text-white/90 hover:text-white transition-colors"
                                    >
                                        <h4 className="font-semibold text-sm md:text-base">{project.title}</h4>
                                    </button>
                                    
                                    {expandedProject === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-4 pb-3"
                                        >
                                            <div className="space-y-2 text-center">
                                                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/70">
                                                    <MapPin className="w-3 h-3" />
                                                    <span>{project.location}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-4 text-xs text-white/60">
                                                    <span className="flex items-center gap-1">
                                                        <Home className="w-3 h-3" />
                                                        {project.units}
                                                    </span>
                                                    <span className="px-2 py-1 bg-green-500/30 rounded-full text-green-300">
                                                        {project.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;
