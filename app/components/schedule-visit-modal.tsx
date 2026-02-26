"use client";

import React, { useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

interface ScheduleVisitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ScheduleVisitModal({ isOpen, onClose }: ScheduleVisitModalProps) {
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        mobile: "",
        project: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: hook into backend / API for scheduling visit
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
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
                    <h2 className="text-2xl font-serif font-bold text-[#4A77B5]">
                        Schedule a Site Visit
                    </h2>
                    <p className="text-sm text-gray-500">
                        Share your details and preferred time. Our team will get in touch to confirm your visit.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name*"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email ID*"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                            required
                        />

                        <div className="flex gap-3">
                            <div className="w-24 border border-blue-300 rounded flex items-center justify-between bg-white text-[#4A77B5] px-2 cursor-pointer hover:border-[#2c4e7a] transition-colors">
                                <div className="flex items-center gap-1">
                                    <span className="text-lg leading-none mt-0.5">🇮🇳</span>
                                    <span className="font-medium text-sm">+91</span>
                                </div>
                                <ChevronDown size={14} className="opacity-70" />
                            </div>
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="Mobile No*"
                                value={formData.mobile}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                                    setFormData({ ...formData, mobile: value });
                                }}
                                className="flex-1 border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Project / Property Interested In"
                            value={formData.project}
                            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                        />

                        <div className="flex gap-3">
                            <input
                                type="date"
                                placeholder="Preferred Date"
                                value={formData.preferredDate}
                                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                className="w-1/2 border border-blue-300 rounded px-4 py-3 text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                            />
                            <input
                                type="time"
                                placeholder="Preferred Time"
                                value={formData.preferredTime}
                                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                className="w-1/2 border border-blue-300 rounded px-4 py-3 text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a]"
                            />
                        </div>

                        <textarea
                            rows={3}
                            placeholder="Any specific requirements or questions?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full border border-blue-300 rounded px-4 py-3 placeholder-[#4A77B5] text-[#4A77B5] focus:outline-none focus:border-[#2c4e7a] resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#4A77B5] text-white w-full py-3 font-bold uppercase tracking-widest hover:bg-[#3a6299] transition-colors rounded shadow-sm mt-4"
                        >
                            Confirm Visit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

