"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-10">

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs">Projects</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1B2B41] font-bold">Ongoing Projects</h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">

                            <div className="relative w-2/5 min-h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-4 flex-1 flex flex-col relative">
                                <div className="flex flex-col items-start mb-2">
                                    {project.newlyAdded && (
                                        <span className="mb-2 px-3 py-0.5 rounded-full border border-[#3A5D8F] text-[#3A5D8F] text-[10px] font-bold uppercase tracking-wider">
                                            Newly Added
                                        </span>
                                    )}
                                    <h3 className="text-xl font-serif font-bold text-[#1B2B41] leading-tight">{project.title}</h3>
                                </div>

                                <div className="space-y-1.5 mb-6">
                                    {Object.entries(project.details).map(([key, value]) => (
                                        <div key={key} className="flex items-start text-xs text-gray-600 border-b border-dashed border-gray-200 pb-1 last:border-0">
                                            <span className="font-bold text-[#1B2B41] w-20 shrink-0">{key} :</span>
                                            <span className="leading-tight">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-auto w-8 h-8 bg-[#4A77B5] rounded-full flex items-center justify-center text-white hover:bg-[#3a6299] transition-colors shadow-md"
                                >
                                    <ArrowUpRight size={16} />
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
