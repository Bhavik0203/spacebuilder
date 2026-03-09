'use client';

import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        id: 1,
        text: "I would like to grasp this opportunity and talk about the exciting features at 64 Meridien right from its Location, elevation to its spacious room sizes and amenities. Eagerly waiting for the living experience.",
        name: "MR. SACHIN CHAUDHARI",
        role: "Assistant G.M - J M Mhatre Infra Pvt Ltd"
    },
    {
        id: 2,
        text: "The team at SpaceBuilder truly understands how to deliver excellence. From the initial consultation to the final handover, every step was handled with professionalism and care. Highly recommended!",
        name: "MS. PRIYA SHARMA",
        role: "Software Architect - TechSpace Solutions"
    },
    {
        id: 3,
        text: "Finding a home that balances luxury and comfort is rare, but SpaceBuilder made it possible. Their attention to detail and commitment to quality are unmatched in the industry.",
        name: "MR. RAHUL VERMA",
        role: "Director - BlueSky Ventures"
    },
    {
        id: 4,
        text: "An absolute pleasure to work with. The transparency in their process built a lot of trust, and the final result exceeded our expectations. A fantastic experience overall.",
        name: "MRS. ANITA DESAI",
        role: "Creative Head - Design Studio"
    },
    {
        id: 5,
        text: "Their projects stand out for their innovative designs and sturdy construction. Investing with SpaceBuilder has been one of my best decisions. Truly world-class standards.",
        name: "MR. VIKRAM SINGH",
        role: "Senior Consultant - Global Realty"
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative px-4 py-10 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/images/banner1.png')" }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 text-center">

                {/* Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center gap-4 mb-4">
                         <div className="h-[2px] w-20 bg-white" />
                        <span className="text-white font-bold uppercase tracking-widest text-sm">Our Clients</span>
                        <div className="h-[2px] w-20 bg-white" />
                    </div>
                    <h2 className="text-4xl uppercase md:text-5xl font-bold leading-tight text-white">
                  Testimonials
                    </h2>
                </div>

                {/* Testimonial Content */}
                <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
                                }`}
                        >
                            {/* Quote Icon */}
                            <div className="text-white/20 mb-6">
                                <Quote size={80} fill="currentColor" />
                            </div>

                            {/* Text */}
                            <p className="text-white text-lg md:text-xl leading-relaxed font-medium mb-8 max-w-3xl">
                                {testimonial.text}
                            </p>

                            {/* Author */}
                            <div className="text-center">
                                <h4 className="text-white font-bold uppercase tracking-wide text-lg">
                                    {testimonial.name}
                                </h4>
                                <p className="text-white/80 text-sm mt-1 font-medium">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
