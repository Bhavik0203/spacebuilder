'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProjectLink } from '../lib/project-links';

const PROJECTS = [
    {
        id: 1,
        title: '37 GRANDSTAND',
        location: 'PANCARD CLUB ROAD, BANER',
        image: '/images/banner.png',
        towers: '1',
        storey: '20',
        apartment: '2 & 3 Bed Residences',
        area: '682 Sq.ft. Onwards',
        size: '250 units',
        status: 'Ongoing',
        logo: '37 GRANDSTAND',
        link: getProjectLink('37 GRANDSTAND') ?? 'https://37grandstand.com/'
    },
    {
        id: 1.5,
        title: 'Codename Hotspot',
        location: 'Baner, Pune',
        image: '/images/banner.png',
        towers: 'N/A',
        storey: 'N/A',
        apartment: 'Signature Office Spaces',
        area: 'N/A',
        size: 'N/A',
        status: 'Ongoing',
        logo: 'CODENAME HOTSPOT',
        link: getProjectLink('Codename Hotspot')
    },
    {
        id: 2,
        title: '64 Meridien-Phase-II',
        location: 'Ravet',
        image: '/images/banner2.png',
        towers: '1',
        storey: '20',
        apartment: '2 & 3 Bed Residences',
        area: '682 Sq.ft. Onwards',
        size: '250 units',
        status: 'Ongoing',
        logo: '64 MERIDIEN'
    },
    {
        id: 3,
        title: 'Grazia',
        location: 'Kothrud',
        image: '/images/banner1.png',
        towers: '2',
        storey: '15',
        apartment: '2 & 3 Bed Residences',
        area: '750 Sq.ft. Onwards',
        size: '150 units',
        status: 'Ongoing',
        logo: 'GRAZIA'
    },
    {
        id: 4,
        title: "AVIVA",
        location: "Hinjewadi Phase I",
        image: "/images/banner2.png",
        towers: "1",
        storey: "11",
        apartment: "1 & 2 Bed Residences",
        area: "N/A",
        size: "105 units",
        status: "Ongoing",
        logo: "AVIVA"
    },
    {
        id: 5,
        title: "Shivom Regency",
        location: "Baner",
        image: "/images/banner.png",
        towers: "1",
        storey: "10",
        apartment: "Showrooms & Commercial Office Spaces",
        area: "N/A",
        size: "50 units",
        status: "Completed",
        logo: "Shivom Regency"
    },
    {
        id: 6,
        title: "Kulshree",
        location: "Balewadi",
        image: "/images/banner1.png",
        towers: "1",
        storey: "4",
        apartment: "2 Bed Residences",
        area: "N/A",
        size: "16 units",
        status: "Completed",
        logo: "Kulshree"
    },
    {
        id: 7,
        title: "Myra",
        location: "Wadgaonsheri",
        image: "/images/banner2.png",
        towers: "1",
        storey: "5",
        apartment: "2 & 3 Bed Residences",
        area: "N/A",
        size: "30 units",
        status: "Completed",
        logo: "Myra"
    },
    {
        id: 8,
        title: "West Wind Park",
        location: "Hinjewadi Phase I",
        image: "/images/banner.png",
        towers: "1",
        storey: "10",
        apartment: "1 & 2 Bed Residences",
        area: "N/A",
        size: "75 units",
        status: "Completed",
        logo: "West Wind Park"
    },
    {
        id: 9,
        title: "Mystique",
        location: "Wadgaonsheri",
        image: "/images/banner1.png",
        towers: "1",
        storey: "4",
        apartment: "2 & 3 Bed Residences",
        area: "N/A",
        size: "24 units",
        status: "Completed",
        logo: "Mystique"
    },
    {
        id: 10,
        title: "Madhav Baugh",
        location: "Hadapsar",
        image: "/images/banner2.png",
        towers: "7",
        storey: "5",
        apartment: "2 Bed Residences",
        area: "N/A",
        size: "105 units",
        status: "Completed",
        logo: "Madhav Baugh"
    },
    {
        id: 11,
        title: "Marigold",
        location: "Sinhagad Road",
        image: "/images/banner.png",
        towers: "1",
        storey: "8",
        apartment: "2 Bed Residences",
        area: "N/A",
        size: "45 units",
        status: "Completed",
        logo: "Marigold"
    },
    {
        id: 12,
        title: "Alankar",
        location: "Dhankawdi",
        image: "/images/banner1.png",
        towers: "1",
        storey: "7",
        apartment: "2 & 2.5 BHK",
        area: "N/A",
        size: "25 units",
        status: "Completed",
        logo: "Alankar"
    },
    {
        id: 13,
        title: "Madhav Classic",
        location: "Aundh",
        image: "/images/banner2.png",
        towers: "1",
        storey: "5",
        apartment: "3 BHK",
        area: "N/A",
        size: "10 units",
        status: "Completed",
        logo: "Madhav Classic"
    },
    {
        id: 14,
        title: "Mahalasa",
        location: "Bhusari colony",
        image: "/images/banner.png",
        towers: "1",
        storey: "5",
        apartment: "2 & 3 BHK",
        area: "N/A",
        size: "20 units",
        status: "Completed",
        logo: "Mahalasa"
    }
];

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState('Ongoing');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const filteredProjects = PROJECTS.filter(project => project.status === activeTab);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 pr-6 md:pr-12 lg:pr-24">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Our Projects</span>
                            <div className="h-[2px] w-12 bg-[#3A5D8F]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">
                            All Projects
                        </h2>
                    </div>

                    <div className="flex gap-8 mt-6 md:mt-0 text-lg font-serif">
                        <button
                            onClick={() => setActiveTab('Ongoing')}
                            className={`pb-2 transition-colors ${activeTab === 'Ongoing' ? 'text-[#1B2B41] cursor-pointer font-bold border-b-2 border-[#1B2B41]' : 'text-gray-400'}`}
                        >
                            Ongoing
                        </button>
                        <button
                            onClick={() => setActiveTab('Completed')}
                            className={`pb-2 transition-colors ${activeTab === 'Completed' ? 'text-[#1B2B41] cursor-pointer font-bold border-b-2 border-[#1B2B41]' : 'text-gray-400'}`}
                        >
                            Completed
                        </button>
                    </div>
                </div>

                {/* Carousel Content */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-4 top-1/2 -translate-y-1/2  z-20 p-3 bg-white/20 cursor-pointer backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all hidden md:block"
                    >
                        <ChevronLeft className="w-8 h-8 stroke-[1.5]" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 cursor-pointer bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all hidden md:block"
                    >
                        <ChevronRight className="w-8 h-8 stroke-[1.5]" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto pb-4 pr-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={`${project.id}-${index}`}
                                className="relative w-full md:w-[calc(33.333%-11px)] shrink-0 h-[500px] group transition-all duration-500 ease-in-out cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                {/* Default Title (Visible when NOT hovered/active) */}
                                <div className={`absolute bottom-8 left-0 right-0 text-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                                    <h3 className="text-white font-serif text-2xl uppercase tracking-widest">{project.logo}</h3>
                                    <p className="text-white/60 text-xs uppercase tracking-widest mt-2">{project.location}</p>
                                </div>

                                {/* Blue Overlay Content (Visible on Hover/Active) */}
                                <div className={`absolute inset-0 bg-[#3A5D8F] p-8 flex flex-col justify-center items-center text-center text-white transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>

                                    <div className="mb-8">
                                        <h3 className="text-3xl font-serif uppercase tracking-widest">{project.logo}</h3>
                                        <p className="text-[10px] uppercase tracking-[0.2em] mt-1">Patterned to Perfection</p>
                                    </div>

                                    <h4 className="text-2xl font-serif font-bold mb-6">{project.title}</h4>

                                    <div className="space-y-3 text-sm font-light opacity-90 mb-8">
                                        <div className="flex justify-between w-64 border-b border-white/20 pb-1">
                                            <span>Towers :</span>
                                            <span>{project.towers}</span>
                                        </div>
                                        <div className="flex justify-between w-64 border-b border-white/20 pb-1">
                                            <span>Storey :</span>
                                            <span>{project.storey}</span>
                                        </div>
                                        <div className="flex justify-between w-64 border-b border-white/20 pb-1">
                                            <span>Apartment :</span>
                                            <span>{project.apartment}</span>
                                        </div>
                                        <div className="flex justify-between w-64 border-b border-white/20 pb-1">
                                            <span>Flat area :</span>
                                            <span>{project.area}</span>
                                        </div>
                                        <div className="flex justify-between w-64 border-b border-white/20 pb-1">
                                            <span>Project Size :</span>
                                            <span>{project.size}</span>
                                        </div>
                                        <div className="flex justify-between w-64 border-b border-white/20 pb-1">
                                            <span>Status :</span>
                                            <span>{project.status}</span>
                                        </div>
                                    </div>

                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#3A5D8F] transition-colors inline-block"
                                        >
                                            Discover More
                                        </a>
                                    ) : (
                                        <button className="border cursor-pointer border-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#3A5D8F] transition-colors">
                                            Discover More
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
