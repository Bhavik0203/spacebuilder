"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import EnquireModal from './enquire-modal';

const PROJECTS = [
    {
        title: "AVIVA - Hinjewadi Phase I",
        image: "/images/banner2.png",
        details: {
            "Towers": "1",
            "Storey": "11",
            "Apartment": "1 & 2 Bed Residences",
            "Project size": "105 units",
            "Status": "Ongoing"
        }
    },
    {
        title: "Shivom Regency - Baner",
        image: "/images/banner.png",
        details: {
            "Towers": "1",
            "Storey": "10",
            "Apartment": "Showrooms & Commercial Office Spaces",
            "Project size": "50 units",
            "Status": "Completed 2020"
        }
    },
    {
        title: "Kulshree - Balewadi",
        image: "/images/banner1.png",
        details: {
            "Towers": "1",
            "Storey": "4",
            "Apartment": "2 Bed Residences",
            "Project size": "16 units",
            "Status": "Completed 2015"
        }
    },
    {
        title: "Myra - Wadgaonsheri",
        image: "/images/banner2.png",
        details: {
            "Towers": "1",
            "Storey": "5",
            "Apartment": "2 & 3 Bed Residences",
            "Project size": "30 units",
            "Status": "Completed 2019"
        }
    },
    {
        title: "West Wind Park - Hinjewadi Phase I",
        image: "/images/banner.png",
        details: {
            "Towers": "1",
            "Storey": "10",
            "Apartment": "1 & 2 Bed Residences",
            "Project size": "75 units",
            "Status": "Completed 2017"
        }
    },
    {
        title: "Mystique - Wadgaonsheri",
        image: "/images/banner1.png",
        details: {
            "Towers": "1",
            "Storey": "4",
            "Apartment": "2 & 3 Bed Residences",
            "Project size": "24 units",
            "Status": "Completed 2016"
        }
    },
    {
        title: "Madhav Baugh - Hadapsar",
        image: "/images/banner2.png",
        details: {
            "Towers": "7",
            "Storey": "5",
            "Apartment": "2 Bed Residences",
            "Project size": "105 units",
            "Status": "Completed 2014"
        }
    },
    {
        title: "Marigold - Sinhagad Road",
        image: "/images/banner.png",
        details: {
            "Towers": "1",
            "Storey": "8",
            "Apartment": "2 Bed Residences",
            "Project size": "45 units",
            "Status": "Completed 2012"
        }
    },
    {
        title: "Alankar - Dhankawdi",
        image: "/images/banner1.png",
        details: {
            "Towers": "1",
            "Storey": "7",
            "Apartment": "2 & 2.5 BHK",
            "Project size": "25 units",
            "Status": "Completed 2011"
        }
    },
    {
        title: "Madhav Classic - Aundh",
        image: "/images/banner2.png",
        details: {
            "Towers": "1",
            "Storey": "5",
            "Apartment": "3 BHK",
            "Project size": "10 units",
            "Status": "Completed 2002"
        }
    },
    {
        title: "Mahalasa - Bhusari colony",
        image: "/images/banner.png",
        details: {
            "Towers": "1",
            "Storey": "5",
            "Apartment": "2 & 3 BHK",
            "Project size": "20 units",
            "Status": "Completed 2010"
        }
    }
];

export default function CompletedProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-10">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs">Projects</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1B2B41] font-bold">Completed Projects</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                            {/* Image Section */}
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

                                {/* <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-auto w-8 h-8 bg-[#4A77B5] rounded-full flex items-center justify-center text-white hover:bg-[#3a6299] transition-colors shadow-md"
                                >
                                    <ArrowUpRight size={16} />
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>

                <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
    );
}
