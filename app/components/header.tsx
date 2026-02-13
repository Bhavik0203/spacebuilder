"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import EnquireModal from './enquire-modal';

const Header = () => {
    const [showSecondHeader, setShowSecondHeader] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setShowSecondHeader(true);
            } else {
                setShowSecondHeader(false);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // First Header State (Original Design)
    if (!showSecondHeader) {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 py-6 relative z-10 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex flex-col items-center">
                        <span className="font-serif text-2xl text-white tracking-widest font-bold group-hover:text-yellow-400 transition-colors">
                            SPACE BUILDER
                        </span>
                        <div className="h-0.5 w-0 group-hover:w-full bg-yellow-400 transition-all duration-300" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-12">
                        {['Home', 'Project', 'Amenities', 'Gallery', 'Location'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white/90 hover:text-yellow-400 text-sm uppercase tracking-widest transition-colors font-medium relative group"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <button className="hidden md:flex items-center gap-2 text-white hover:text-yellow-400 transition-colors group">
                            <div className="p-2 border border-white/30 rounded-full group-hover:border-yellow-400 transition-colors">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="text-sm tracking-wide font-medium">+91 98765 43210</span>
                        </button>

                        <button className="md:hidden text-white hover:text-yellow-400 transition-colors">
                            <Menu className="w-8 h-8" />
                        </button>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hidden md:block bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>


                <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </header >
        );
    }

    // Second Header State (New Design)
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md">
            <div className="container mx-auto px-6 py-2 relative z-10 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-48 h-16">
                    <Image
                        src="/images/logo.png"
                        alt="Space Builder Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-12">
                    {['Home', 'About', 'Project', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className={`text-base font-bold transition-colors ${item === 'Home' ? 'text-[#4a77b5]' : 'text-black hover:text-[#4a77b5]'
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    {/* WhatsApp Icon */}
                    <button className="hidden md:flex items-center justify-center w-10 h-10 bg-[#4a77b5] rounded-full text-white hover:opacity-90 transition-opacity">
                        <Phone className="w-5 h-5 fill-current" />
                    </button>

                    <button className="md:hidden text-black transition-colors">
                        <Menu className="w-8 h-8" />
                    </button>

                    {/* Enquire Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden md:block bg-[#4a77b5] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#3a6299] transition-all duration-300"
                    >
                        ENQUIRE NOW
                    </button>
                </div>
            </div>


            <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header >
    );
};

export default Header;
