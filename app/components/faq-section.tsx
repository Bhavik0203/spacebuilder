"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
    {
        question: "Who is Space Builders Group?",
        answer: "Space Builders Group is a well-established real estate developer in Pune with over 20 years of experience in residential and commercial construction."
    },
    {
        question: "What kind of properties do you develop?",
        answer: "We develop a wide range of properties including residential apartments, luxury villas, and commercial spaces tailored to meet diverse business and lifestyle needs."
    },
    {
        question: "Where are your projects located?",
        answer: "Our projects are strategically located in prime areas of Pune and surrounding regions, ensuring excellent connectivity and appreciation potential."
    },
    {
        question: "What makes Space Builders Group different from other developers?",
        answer: "We pride ourselves on our commitment to quality, timely delivery, and transparency. Our focus on customer satisfaction and sustainable construction practices sets us apart."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs">FAQ</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1B2B41] font-bold">General Enquiries</h2>
                </div>

                <div className="flex flex-col space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="overflow-hidden">
                            {/* Question Header */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex cursor-pointer items-center justify-between px-6 py-4 transition-colors ${openIndex === index
                                    ? 'bg-[#3A5D8F] text-white border border-[#3A5D8F]'
                                    : 'bg-[#3A5D8F] text-white hover:bg-[#32517d] border border-[#3A5D8F]'
                                    }`}
                            >
                                <span className="text-left font-medium text-lg pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6 shrink-0" strokeWidth={1.5} />
                                ) : (
                                    <Plus className="w-6 h-6 shrink-0" strokeWidth={1.5} />
                                )}
                            </button>

                            {/* Answer Content - Only shown if open */}
                            <div
                                className={`transition-all duration-300 ease-in-out border-x border-b border-[#3A5D8F]/30 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-none'
                                    }`}
                            >
                                <div className="p-6 bg-white text-gray-700 leading-relaxed text-sm md:text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
