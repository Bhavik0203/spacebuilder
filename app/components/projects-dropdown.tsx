
"use client";

import Link from 'next/link';
import { Building2, Home, MapPin, Warehouse } from 'lucide-react';
import { getProjectLink } from '../lib/project-links';

const ongoingProjects = [
    {
        title: "37 GRANDSTAND",
        description: "4 & 3 Bed Bespoke Residences with trusted luxury",
        icon: Building2,
        href: getProjectLink("37 GRANDSTAND") ?? "/project/37-grandstand",
        color: "text-amber-400"
    },
    {
        title: "Codename Hotspot",
        description: "Signature Office Spaces @ Baner",
        icon: Warehouse,
        href: getProjectLink("Codename Hotspot") ?? "/project/codename-hotspot",
        color: "text-yellow-400"
    },
    {
        title: "Grazia",
        description: "3 & 2 Bed Residences for modern living",
        icon: Home,
        href: "/project/grazia",
        color: "text-blue-400"
    },
    {
        title: "64 Meridien - Phase-II",
        description: "Premium 2 & 3 Bed Residences",
        icon: MapPin,
        href: "/project/64-meridien",
        color: "text-emerald-400"
    }
];

export default function ProjectsDropdown() {
    return (
        <div className="relative w-[600px] bg-[#0f172a] rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f172a] rotate-45 border-t border-l border-white/10" />

            <div className="p-6 relative z-10">
                <div className="mb-4 pb-4 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                        ONGOING PROJECTS
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                        Discover our latest premium developments
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {ongoingProjects.map((project, idx) => (
                        project.href.startsWith('http') ? (
                            <a
                                key={idx}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <div className={`p-2.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors mr-4 ${project.color}`}>
                                    <project.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium group-hover:text-yellow-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        ) : (
                            <Link
                                key={idx}
                                href={project.href}
                                className="group flex items-start p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <div className={`p-2.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors mr-4 ${project.color}`}>
                                    <project.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium group-hover:text-yellow-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        )
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <Link href="/projects" className="text-xs font-semibold text-yellow-400 hover:text-white transition-colors uppercase tracking-widest flex items-center justify-center gap-2 group">
                        View All Projects
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
