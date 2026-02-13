"use client";

import Image from "next/image";
import OurDifference from "../components/our-difference";
import TeamSection from "../components/team-section";
import SpaceCommitment from "../components/space-commitment";
import TestimonialsSection from "../components/testimonials-section";

export default function AboutPage() {
    return (
        <main>
            {/* Banner Section */}
            <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner.png"
                        alt="About Banner"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                        sizes="100vw"
                    />
                    {/* Simple dark overlay to ensure text readability without obscuring the image */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center">
                    <div className="flex flex-col h-full justify-between py-20">

                        {/* Top Left: Title & Breadcrumb */}
                        <div className="mt-12">
                            <h1 className="text-5xl md:text-7xl text-white font-serif font-bold mb-4 tracking-tight">About Us</h1>
                            <p className="text-white/80 text-sm uppercase tracking-widest font-medium pl-1 flex items-center gap-2">
                                <span className="opacity-70">HOME</span>
                                <span className="w-4 h-[1px] bg-white/50 inline-block"></span>
                                <span>About</span>
                            </p>
                        </div>

                        {/* Bottom Right: Quote & Description */}
                        <div className="self-end max-w-3xl text-left mt-12 md:mt-0">
                            <h2 className="text-2xl md:text-4xl text-white font-serif font-bold leading-tight mb-6">
                                GOOD CONSTRUCTION IS A SCIENCE OF COMBINING ENGINEERING, ART & ECONOMICS.
                            </h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed text-justify md:text-left">
                                Space Builders Group is a renowned real estate developer established around 20 years back.
                                The vision and dynamism of our founders has seen the company making remarkable strides.
                                In last few years only, we have successfully completed many projects in various locations of Pune
                                like Hinjewadi, Aundh, Baner, Ravet, and many more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Difference Section */}
            <OurDifference />

            {/* Team Section */}
            <TeamSection />

            {/* Space Commitment Section */}
            <SpaceCommitment />
            <TestimonialsSection/>
        </main>
    );
}
