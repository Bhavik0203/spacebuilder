"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B2B41] mb-12">
                    Available To Assist You 24/7
                </h2>

                <form className="space-y-8">
                    {/* Row 1 & 2: Grid Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Enquiry Type */}
                        <div className="relative">
                            <select className="w-full border border-blue-200 rounded px-4 py-3 text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#3A5D8F] bg-white">
                                <option>Select Enquiry Type</option>
                                <option>Sales</option>
                                <option>Support</option>
                                <option>General</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {/* First Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="First Name*"
                                className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F]"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name*"
                                className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F]"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F]"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-4 w-full">
                            <div className="w-24 relative border border-blue-200 rounded px-2 py-3 flex items-center gap-1 bg-white shrink-0">
                                {/* Placeholder for Flag/Code */}
                                <div className="w-6 h-4 bg-orange-500/20 flex flex-col">
                                    <div className="h-1/3 bg-[#FF9933]"></div>
                                    <div className="h-1/3 bg-white"></div>
                                    <div className="h-1/3 bg-[#138808]"></div>
                                </div>
                                <span className="text-sm text-gray-600">+91</span>
                                <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
                            </div>
                            <input
                                type="tel"
                                placeholder="000 000 0000"
                                className="flex-1 border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F] min-w-0"
                            />
                        </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                        <textarea
                            rows={6}
                            placeholder="Message*"
                            className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F] resize-none"
                        ></textarea>
                    </div>

                    {/* Row 4: Checkbox & Button */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center group-hover:border-[#3A5D8F]">
                                <input type="checkbox" className="hidden peer" />
                                <div className="w-3 h-3 bg-[#3A5D8F] hidden peer-checked:block rounded-sm"></div>
                            </div>
                            <span className="text-gray-400 text-sm">Please check the box to confirm interest in call back for your inquiry.</span>
                        </label>

                        <button className="bg-[#4A77B5] text-white px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#3a6299] transition-colors rounded shadow-sm w-full md:w-auto">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
