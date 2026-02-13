"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface EnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content - Slide in from right */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 flex flex-col justify-center animate-slide-in-right transform transition-transform duration-300">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-[#4A77B5] text-white rounded hover:bg-[#3a6299] transition-colors shadow-md"
                >
                    <X size={24} />
                </button>

                {/* Form */}
                <div className="mt-8 space-y-6">
                    {/* Header (optional, image doesn't show one explicitly but usually needed) */}

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="First Name*"
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                        />

                        <input
                            type="email"
                            placeholder="Mail Id*"
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                        />

                        <input
                            type="tel"
                            placeholder="Mobile No*"
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                        />

                        <textarea
                            rows={4}
                            placeholder="Message Here*"
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a] resize-none"
                        ></textarea>

                        <label className="flex items-start gap-2 cursor-pointer mt-4">
                            <input type="checkbox" className="mt-1 accent-[#4A77B5]" />
                            <span className="text-xs text-gray-400">Please check the box to confirm interest in call back for your inquiry.</span>
                        </label>

                        <button type="submit" className="bg-[#4A77B5] text-white w-full py-3 font-bold uppercase tracking-widest hover:bg-[#3a6299] transition-colors rounded shadow-sm mt-4">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
