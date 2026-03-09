
'use client';

import React, { useState } from 'react';
import ScheduleVisitModal from './schedule-visit-modal';

const ScheduleVisitSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section 
            className="relative py-16 px-6 md:px-12 lg:px-24 rounded-3xl mx-6 md:mx-12 lg:mx-24 my-12 overflow-hidden"
            style={{
                backgroundImage: 'url("/images/Frame 47.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#E6F3FF'
            }}
        >
            {/* Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-blue-100/80"></div> */}
            
            <div className="relative z-10 container mx-auto">
                <div className="flex flex-col items-center justify-center text-center space-y-6">

                    {/* Text Content */}
                    <div className="space-y-4 max-w-3xl">
                         <h2 className="text-4xl uppercase md:text-5xl font-bold leading-tight text-[#12394C]">
                  Schedule A Visit
                        </h2>
                       <p className="  text-gray-700 leading-relaxed text-center">
                           Discover thoughtfully designed spaces built for modern living.
                             Experience quality construction, smart layouts, and trusted craftsmanship.
                          </p>
                      
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center cursor-pointer gap-3 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {/* House Icon */}
                         
                            <span>Schedule A Visit</span>
                        
                        </button>
                    </div>

                </div>
            </div>

            <ScheduleVisitModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default ScheduleVisitSection;

