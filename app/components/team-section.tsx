"use client";

import Image from "next/image";

const TEAM = [
    {
        name: "Emma Davis",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=800"
    },
    {
        name: "David Wilson",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=800"
    },
    {
        name: "Sarah Johnson",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800"
    },
    {
        name: "Michael Brown",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=800"
    }
];

export default function TeamSection() {
    return (
        <section className="py-20 bg-[#F0F4F8]">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-xs">TEAM MEMBERS</span>
                        <div className="h-[2px] w-12 bg-[#3A5D8F]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1B2B41] font-bold">Our Team</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {TEAM.map((member, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className="flex flex-col h-full rounded-lg overflow-hidden group">
                                {/* For even items: Image Top, Text Bottom */}
                                {isEven ? (
                                    <>
                                        <div className="relative aspect-[4/5] w-full bg-[#E1E8F0] overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                        <div className="pt-6 text-center">
                                            <h3 className="text-xl font-bold text-[#1B2B41]">{member.name}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{member.role}</p>
                                        </div>
                                    </>
                                ) : (
                                    /* For odd items: Text Top, Image Bottom */
                                    <>
                                        <div className="pb-6 text-center">
                                            <h3 className="text-xl font-bold text-[#1B2B41]">{member.name}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{member.role}</p>
                                        </div>
                                        <div className="relative aspect-[4/5] w-full bg-[#E1E8F0] overflow-hidden mt-auto">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
