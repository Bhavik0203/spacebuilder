"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, X } from 'lucide-react';
import EnquireModal from './enquire-modal';

const PROJECTS = [
    {
        title: "37 GRANDSTAND",
        image: "/images/banner2.png",
        newlyAdded: true,
        href: "https://37grandstand.com/",
        codename: "Project Phoenix",
        hotspots: [
            { id: 1, x: 30, y: 40, label: "Tower A" },
            { id: 2, x: 70, y: 60, label: "Garden Area" }
        ],
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
        href: "/projects/grazia",
        codename: "Project Elegance",
        hotspots: [
            { id: 1, x: 50, y: 30, label: "Main Entrance" },
            { id: 2, x: 25, y: 70, label: "Recreation Center" }
        ],
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
        href: "/projects/64-meridien",
        codename: "Project Meridian",
        hotspots: [
            { id: 1, x: 40, y: 50, label: "Club House" },
            { id: 2, x: 60, y: 25, label: "Swimming Pool" }
        ],
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

const SCROLLER_PROJECTS = [
    {
        title: "Codename HotSpot",
        image: "/images/codename.webp",
        newlyAdded: true,
        href: "https://codenamehotspot.com/",
        codename: "The Gateway to Pune Business",
        hotspots: [
            { id: 1, x: 30, y: 40, label: "Signature Office Spaces" },
            { id: 2, x: 70, y: 60, label: "Metro Connectivity" },
            { id: 3, x: 50, y: 25, label: "High ROI Zone" }
        ],
        details: {
            "Type": "Commercial Office Spaces",
            "Location": "Baner, Pune",
            "Configuration": "Office & Retail Spaces",
            "Size": "Scalable Units",
            "Status": "Ongoing",
            "RERA": "A52100058010"
        }
    }
];

export default function OngoingProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeHotspot, setActiveHotspot] = useState<{ projectId: number; hotspotId: number; section: 'main' | 'scroller' } | null>(null);

    return (
        <>
        <section className="py-20 bg-[#121212]">
            <div className="container mx-auto px-6 md:px-12 lg:px-10">

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#C5A265] font-bold uppercase tracking-widest text-xs">Projects</span>
                        <div className="h-[2px] w-12 bg-[#C5A265]"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white font-bold">Ongoing Projects</h2>
                </div>

                {/* Main Grid - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

                                {/* Codename Badge */}
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-semibold">
                                    {project.codename}
                                </div>

                                {/* Hotspots */}
                                {project.hotspots.map((hotspot) => (
                                    <div
                                        key={hotspot.id}
                                        className="absolute w-6 h-6 bg-[#C5A265] rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center group"
                                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
                                        onClick={() => setActiveHotspot({ projectId: index, hotspotId: hotspot.id, section: 'main' })}
                                    >
                                        <MapPin size={12} className="text-white" />
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                            {hotspot.label}
                                        </div>
                                    </div>
                                ))}

                                {/* Hotspot Detail Modal */}
                                {activeHotspot?.projectId === index && activeHotspot?.section === 'main' && (
                                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                                        <div className="bg-white rounded-lg p-4 max-w-xs mx-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-gray-900">
                                                    {project.hotspots.find(h => h.id === activeHotspot.hotspotId)?.label}
                                                </h4>
                                                <button
                                                    onClick={() => setActiveHotspot(null)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Explore this amazing feature in {project.title}
                                            </p>
                                        </div>
                                    </div>
                                )}

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
                                <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-4">{project.title}</h3>

                                {/* Project Details Grid */}
                                <div className="space-y-3 mb-6">
                                    {Object.entries(project.details).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-sm font-semibold text-gray-700 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                                            </span>
                                            <span className="text-sm text-gray-600 text-right">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={project.href}
                                    className="mt-auto flex items-center gap-2 text-[#C5A265] font-bold text-sm hover:translate-x-1 transition-transform cursor-pointer w-fit"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroller Section - 1 Card */}
                <div className="mb-8">
                    <h3 className="text-2xl font-serif text-white font-bold mb-6">Featured Commercial Project</h3>
                    <div className="overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-8 min-w-max px-1">
                            {SCROLLER_PROJECTS.map((project, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-[400px] flex-shrink-0">

                                    {/* Image Section */}
                                    <div className="relative w-full h-[280px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Codename Badge */}
                                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-semibold">
                                            {project.codename}
                                        </div>

                                        {/* Hotspots */}
                                        {project.hotspots.map((hotspot) => (
                                            <div
                                                key={hotspot.id}
                                                className="absolute w-6 h-6 bg-[#C5A265] rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center group"
                                                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: 'translate(-50%, -50%)' }}
                                                onClick={() => setActiveHotspot({ projectId: index, hotspotId: hotspot.id, section: 'scroller' })}
                                            >
                                                <MapPin size={12} className="text-white" />
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                                    {hotspot.label}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Hotspot Detail Modal */}
                                        {activeHotspot?.projectId === index && activeHotspot?.section === 'scroller' && (
                                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                                                <div className="bg-white rounded-lg p-4 max-w-xs mx-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-semibold text-gray-900">
                                                            {project.hotspots.find(h => h.id === activeHotspot.hotspotId)?.label}
                                                        </h4>
                                                        <button
                                                            onClick={() => setActiveHotspot(null)}
                                                            className="text-gray-500 hover:text-gray-700"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                    <p className="text-sm text-gray-600">
                                                        Explore this amazing feature in {project.title}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

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
                                        <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-4">{project.title}</h3>

                                        {/* Project Details Grid */}
                                        <div className="space-y-3 mb-6">
                                            {Object.entries(project.details).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                                    <span className="text-sm font-semibold text-gray-700 capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                    </span>
                                                    <span className="text-sm text-gray-600 text-right">
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={project.href}
                                            className="mt-auto flex items-center gap-2 text-[#C5A265] font-bold text-sm hover:translate-x-1 transition-transform cursor-pointer w-fit"
                                        >
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </section>
        <style jsx>{`
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
        `}</style>
        </>
    );
}
