'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
    '/images/banner.png',
    '/images/banner1.png',
    '/images/banner2.png',
    '/images/banner.png',
    '/images/banner1.png',
];

const GallerySection = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };

    const getVisibleImages = () => {
        const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
        return [
            { index: prevIndex, image: GALLERY_IMAGES[prevIndex], type: 'prev' },
            { index: currentIndex, image: GALLERY_IMAGES[currentIndex], type: 'current' },
            { index: nextIndex, image: GALLERY_IMAGES[nextIndex], type: 'next' }
        ];
    };

    const visibleItems = getVisibleImages();

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="space-y-4 mb-12 text-center md:text-left">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Our Gallery</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                        Gallery
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative flex items-center justify-center gap-4 md:gap-8 h-[300px] md:h-[500px]">

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:left-4 z-20 w-12 h-12 bg-[#3A5D8F] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2c476e] transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Slides */}
                    <div className="flex items-center justify-center w-full h-full gap-4 md:gap-8">
                        {visibleItems.map((item) => (
                            <div
                                key={`${item.index}-${item.type}`}
                                className={`relative transition-all duration-500 ease-in-out
                                    ${item.type === 'current'
                                        ? 'w-[60%] md:w-[60%] h-full z-10 shadow-2xl scale-100'
                                        : 'w-[20%] md:w-[20%] h-[80%] z-0 opacity-80 scale-95 grayscale-[30%] hidden md:block'}
                                `}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={`Gallery Image ${item.index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:right-4 z-20 w-12 h-12 bg-[#3A5D8F] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2c476e] transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile indicators or extra controls could go here if needed */}
            </div>
        </section>
    );
};

export default GallerySection;
