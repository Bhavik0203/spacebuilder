'use client';

import React from 'react';

const HandoverSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Home Handover, <br />
                            <span className="text-blue-600">Done with Heart</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We believe the home handover process should be as warm and personal as the home itself. Our team takes a caring, empathetic approach to guide you through every step, ensuring you feel comfortable, informed, and confident as you receive the keys to your new home.
                        </p>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            From explaining every feature to addressing your questions, we're here to make your transition smooth and memorable. Your peace of mind is our priority, and we take pride in delivering not just homes, but happiness.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden ">
                            <img 
                                src="/images/cta.png" 
                                alt="Home Handover Process"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HandoverSection;
