'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Home, MapPin, Clock, ChevronLeft, ChevronRight, IndianRupee } from 'lucide-react';

const SLIDES = [
    {
        id: 1,
        image: '/images/banner.png',
        title: '37 GRANDSTAND',
        location: 'Pancard Club Road, Baner',
        price: '2 Cr+',
        config: '2/3 BHK',
        city: 'Baner',
        possession: '2026'
    },
    {
        id: 2,
        image: '/images/banner1.png',
        title: 'Grazia',
        location: 'Paud Road, Bhusari Colony, Kothrud',
        price: '2 Cr+',
        config: '2/3 BHK',
        city: 'Kothrud',
        possession: '2026'
    },
    {
        id: 3,
        image: '/images/banner2.png',
        title: '64 Meridien',
        location: 'Ravet, Pune, Maharashtra',
        price: '2 Cr+',
        config: '2/3 BHK',
        city: 'Ravet',
        possession: '2026'
    }
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 10000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const slide = SLIDES[currentSlide];

    return (
        <div className="relative w-full h-[100vh] overflow-hidden bg-black z-0">
            {/* Background Images with Fade Transition */}
            {SLIDES.map((s, index) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Dark overlay with gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>
            ))}

            {/* Main Content Area */}
            <div className="relative z-10 h-full flex flex-col justify-start px-6 md:px-12 lg:px-24 pt-20">
                <div className="max-w-4xl space-y-4 animate-fade-in">
                    <h1 className="text-white font-serif leading-tight transition-all duration-500 transform translate-y-0 opacity-100">
                        <span className="text-5xl md:text-7xl font-bold tracking-wide block mb-2">{slide.title}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 font-sans font-light tracking-wide pl-1 max-w-2xl">
                        {slide.location}
                    </p>

                    <div className="pt-2 pl-1">
                        <button className="group flex items-center gap-3 px-8 py-2 border border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300">
                            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="uppercase tracking-widest text-sm font-semibold">Download Brochure</span>
                        </button>
                    </div>

                    <div className="pt-8 transition-all duration-500 delay-100">
                        <div className="bg-[#2C2F36]/95 backdrop-blur-md text-white py-6 px-8 md:px-12 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 border-t border-white/10 w-full md:w-auto inline-flex">

                            {/* Price */}
                            <div className="flex items-center gap-4 min-w-[140px]">
                                <div className="shrink-0">
                                    <IndianRupee className="w-8 h-8 text-[#4A6FA5]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{slide.price}</h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">Starting Price</p>
                                </div>
                            </div>

                            <div className="w-px h-12 bg-gray-600 hidden md:block" />

                            {/* Configurations */}
                            <div className="flex items-center gap-4 min-w-[140px]">
                                <div className="shrink-0">
                                    <Home className="w-8 h-8 text-[#4A6FA5]" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">{slide.config}</h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">Configurations</p>
                                </div>
                            </div>

                            <div className="w-px h-12 bg-gray-600 hidden md:block" />

                            {/* Location */}
                            <div className="flex items-center gap-4 min-w-[140px]">
                                <div className="shrink-0">
                                    <MapPin className="w-8 h-8 text-[#4A6FA5]" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">{slide.city}</h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">Prime location</p>
                                </div>
                            </div>

                            <div className="w-px h-12 bg-gray-600 hidden md:block" />

                            {/* Possession */}
                            <div className="flex items-center gap-4 min-w-[140px]">
                                <div className="shrink-0">
                                    <Clock className="w-8 h-8 text-[#4A6FA5]" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold">{slide.possession}</h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">Possession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white transition-all hidden md:block"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white transition-all hidden md:block"
            >
                <ChevronRight className="w-8 h-8" />
            </button>
        </div>
    );
};

export default Banner;
