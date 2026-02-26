"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = React.useState({
        enquiryType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        callback: false
    });

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B2B41] mb-12">
                    Available To Assist You 24/7
                </h2>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Row 1 & 2: Grid Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Enquiry Type */}
                        <div className="relative">
                            <select
                                value={formData.enquiryType}
                                onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                                className="w-full border border-blue-200 rounded px-4 py-3 text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#3A5D8F] bg-white"
                            >
                                <option value="">Select Enquiry Type</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="General">General</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {/* First Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="First Name*"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F]"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name*"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F]"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F]"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-span-1 md:col-span-2 flex gap-4 w-full">
                            <div className="w-24 border border-blue-200 rounded flex items-center justify-between bg-white text-gray-600 px-2 cursor-pointer hover:border-[#3A5D8F] transition-colors">
                                <div className="flex items-center gap-1">
                                    <span className="text-lg leading-none mt-0.5">🇮🇳</span>
                                    <span className="font-medium text-sm">+91</span>
                                </div>
                                <ChevronDown size={14} className="opacity-70" />
                            </div>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="000 000 0000"
                                value={formData.phone}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                    setFormData({ ...formData, phone: value });
                                }}
                                className="flex-1 border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F] min-w-0"
                            />
                        </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                        <textarea
                            rows={6}
                            placeholder="Message*"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full border border-blue-200 rounded px-4 py-3 text-sm placeholder-blue-400/70 focus:outline-none focus:border-[#3A5D8F] resize-none"
                        ></textarea>
                    </div>

                    {/* Row 4: Checkbox & Button */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.callback}
                                    onChange={(e) => setFormData({ ...formData, callback: e.target.checked })}
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-blue-200 checked:border-[#3A5D8F] checked:bg-[#3A5D8F] transition-all"
                                />
                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 14" fill="none">
                                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-gray-400 text-sm">Please check the box to confirm interest in call back for your inquiry.</span>
                        </label>

                        <button className="bg-[#4A77B5] cursor-pointer text-white px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#3a6299] transition-colors rounded shadow-sm w-full md:w-auto">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
