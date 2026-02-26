"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import EnquireModal from './enquire-modal';

const PROJECTS = [
    {
        title: "37 GRANDSTAND",
        image: "/images/banner2.png",
        newlyAdded: true,
        details: {
            "Towers": "1",
            "Storey": "20",
            "Apartment": "4 & 3 Bed Bespoke Residences",
            "Flat area": "1350 Sqft. Onwards",
            "Project size": "72 units",
            "Status": "Ongoing"
        }
    },
    {
        title: "Grazia",
        image: "/images/banner.png",
        newlyAdded: true,
        details: {
            "Towers": "1",
            "Storey": "6",
            "Apartment": "3 & 2 Bed Residences",
            "Flat area": "830 Sqft. Onwards",
            "Project size": "18 units",
            "Status": "Ongoing"
        }
    },
    {
        title: "64 Meridien - Phase-II",
        image: "/images/banner1.png",
        newlyAdded: true,
        details: {
            "Towers": "5",
            "Storey": "13",
            "Apartment": "2 & 3 Bed Residences",
            "Flat area": "682 Sqft. Onwards",
            "Project size": "250 units",
            "Status": "Ongoing"
        }
    }
];

export default function OngoingProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-[#121212]">
            <div className="container mx-auto px-6 md:px-12 lg:px-10">

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#C5A265] font-bold uppercase tracking-widest text-xs">Projects</span>
                        <div className="h-[2px] w-12 bg-[#C5A265]"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white font-bold">Ongoing Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">

                            {/* Image Section */}
                            <div className="relative w-full h-[280px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Floating Badge - positioned to overlap image and content */}
                                {project.newlyAdded && (
                                    <div className="absolute -bottom-6 left-6 z-10 bg-[#C5A265] text-white rounded-lg px-4 py-3 shadow-lg flex flex-col items-center justify-center min-w-[70px]">
                                        <span className="text-2xl font-bold leading-none">NEW</span>
                                        <span className="text-[10px] uppercase font-medium tracking-wider mt-1">Arrival</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="pt-10 pb-6 px-6 flex flex-col flex-grow relative">
                                {/* Top Meta */}
                                <div className="flex items-center gap-3 mb-3 pl-[80px] min-h-[40px]">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium">By Space Builder</span>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mt-0.5">
                                            <span>★ Residential</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-3 mt-2">{project.title}</h3>

                                <div className="text-sm text-gray-600 mb-4 line-clamp-2">
                                    <span className="font-semibold text-gray-700">Config:</span> {project.details.Apartment} <span className="mx-1">•</span> <span className="font-semibold text-gray-700">Size:</span> {project.details["Flat area"]}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                        {project.details.Status}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                        {project.details["Project size"]}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-auto  flex items-center gap-2 text-[#C5A265] font-bold text-sm hover:translate-x-1 transition-transform cursor-pointer w-fit"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
    );
}
