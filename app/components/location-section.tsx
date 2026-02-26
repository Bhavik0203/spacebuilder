"use client";

import { Plane, Building2 } from 'lucide-react';

const LOCATIONS = [
    {
        icon: Plane,
        text: "26 minutes from Pune Airport"
    },
    {
        icon: Building2,
        text: "34 minutes from Pune Financial Centre"
    },
    {
        icon: Plane,
        text: "22 minutes from The Dubai Frame"
    },
    {
        icon: Building2,
        text: "26 minutes from Pune Airport"
    },
    {
        icon: Plane,
        text: "26 minutes from Pune Airport"
    },
    {
        icon: Building2,
        text: "26 minutes from Pune Airport"
    }
];

export default function LocationSection() {
    return (
        <section>
            {/* Subscribe Bar */}
            <div className="bg-[#3A5D8F] py-10 px-6">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h3 className="text-white text-lg md:text-xl font-medium text-center md:text-left">
                        Are You interested in staying informed about this property?
                    </h3>
                    <button className="border cursor-pointer border-white text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#3A5D8F] transition-colors rounded-sm">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            {/* Map and Details Section */}
            <div className="flex flex-col lg:flex-row">
                {/* Map - Left Half */}
                <div className="w-full lg:w-1/2 min-h-[500px] relative bg-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2166946927346!2d73.8550266148927!3d18.51918348740925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06fd73d52b5%3A0x6fced1d5d36e7887!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677654321098!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    ></iframe>
                </div>

                {/* List - Right Half */}
                <div className="w-full lg:w-1/2 bg-[#EFF4FA] p-10 lg:p-20 flex flex-col justify-center">
                    <h2 className="text-4xl font-serif font-bold text-[#1B2B41] mb-10">Our Location</h2>

                    <div className="space-y-4">
                        {LOCATIONS.map((item, index) => (
                            <div key={index} className="flex items-center bg-white p-4 rounded shadow-sm">
                                <div className="w-12 flex justify-center text-[#3A5D8F]">
                                    <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="flex-1 text-gray-700 font-medium pl-4 border-l border-gray-100">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
