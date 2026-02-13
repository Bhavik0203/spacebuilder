"use client";

import Image from "next/image";
import OngoingProjects from "../components/ongoing-projects";
import CompletedProjects from "../components/completed-projects";

export default function Projects() {
    return (
        <main>
            {/* Banner Section */}
            <section className="relative w-full h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner2.png" // Using a banner image as placeholder
                        alt="Contact Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center">
                    <div className="flex flex-col h-full justify-between py-20">
                        <div className="text-white text-center md:text-left self-start mt-12 md:mt-0">
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Projects</h1>
                            <p className="text-white/80 text-sm uppercase tracking-widest font-medium pl-1">
                                HOME <span className="mx-2">-</span> Projects
                            </p>
                        </div>

                        <div className="text-white text-center md:text-right self-end max-w-xl mb-12 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Building Landmarks</h2>
                            <p className="text-white/90 text-lg font-light">
                                Explore our diverse portfolio of premium residential and commercial developments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ongoing Projects Section */}
            <OngoingProjects />

            {/* Completed Projects Section */}
            <CompletedProjects />
        </main>





    );
}
