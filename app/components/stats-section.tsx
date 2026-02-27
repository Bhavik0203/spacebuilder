"use client";

import React, { useState, useEffect, useRef } from 'react';

const STATS = [
    {
        id: 1,
        value: 25,
        displayValue: "25+",
        label: "YEARS"
    },
    {
        id: 2,
        value: 22,
        displayValue: "22+",
        label: "PROJECTS"
    },
    {
        id: 3,
        value: 7,
        displayValue: "7 L",
        label: "SQ.FT.ONGOING"
    },
    {
        id: 4,
        value: 15,
        displayValue: "15 L",
        label: "SQ.FT.COMING SOON"
    }
];

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState<{ [key: number]: number }>({});
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000; // 2 seconds animation
            const steps = 60;
            const stepDuration = duration / steps;

            const initialCounters: { [key: number]: number } = {};
            STATS.forEach(stat => {
                initialCounters[stat.id] = 0;
            });
            setCounters(initialCounters);

            STATS.forEach(stat => {
                let currentStep = 0;
                const increment = stat.value / steps;

                const timer = setInterval(() => {
                    currentStep++;
                    const newValue = Math.min(Math.floor(increment * currentStep), stat.value);
                    
                    setCounters(prev => ({
                        ...prev,
                        [stat.id]: newValue
                    }));

                    if (currentStep >= steps) {
                        clearInterval(timer);
                    }
                }, stepDuration);
            });
        }
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="relative z-30 px-6 md:px-12 lg:px-24 pointer-events-none bg-white">
            <div className="container mx-auto">
                <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg py-4 px-8 md:px-16 pointer-events-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                        {STATS.map((stat) => (
                            <div key={stat.id} className="relative flex items-center justify-center h-32 md:h-40">
                                {/* Background Large Text */}
                                <span className="absolute text-7xl md:text-8xl font-bold text-[#E6EBF5] font-sans tracking-tight z-0 select-none">
                                    {isVisible ? counters[stat.id] || 0 : 0}{stat.displayValue.includes('+') ? '+' : stat.displayValue.includes('L') ? ' L' : ''}
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
