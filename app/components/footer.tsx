"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#4a77b5] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">

                    {/* Column 1: Logo, Description, Socials */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-8">
                        <Link href="/" className="relative block w-48 h-16 bg-white p-2 rounded mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="Space Builder Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-sm">
                            Since its inception in 1995, Space Builders has aimed at Redefining Luxury across mid - segment housing by inventing, discovering & delivering contemporary lifestyle solutions.
                        </p>

                        <div className="flex space-x-4">
                            <Link 
                                href="https://www.instagram.com/space_builderspune/?hl=en" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="border border-white p-2 hover:bg-white hover:text-[#4a77b5] transition-colors"
                            >
                                <Instagram size={18} />
                            </Link>
                            <Link 
                                href="https://www.facebook.com/search/top?q=space%20builders%20%26%20developers" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="border border-white p-2 hover:bg-white hover:text-[#4a77b5] transition-colors"
                            >
                                <Facebook size={18} />
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/search/results/all/?keywords=space%20builders&origin=GLOBAL_SEARCH_HEADER&sid=HqA" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="border border-white p-2 hover:bg-white hover:text-[#4a77b5] transition-colors"
                            >
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Divider 1 */}
                    <div className="hidden md:block w-px bg-blue-300 mx-4 self-stretch"></div>

                    {/* Column 2: Links */}
                    <div className="w-full md:w-1/6 mb-8 md:mb-0 pl-0 md:pl-8">
                        <ul className="space-y-4">
                            <li><Link href="/" className="hover:text-blue-200 block">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-200 block">About</Link></li>
                            <li><Link href="/projects" className="hover:text-blue-200 block">Project</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-200 block">Contact</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-blue-200 block">Privacy policy</Link></li>
                        </ul>
                    </div>

                    {/* Divider 2 */}
                    <div className="hidden md:block w-px bg-blue-300 mx-4 self-stretch"></div>

                    {/* Column 3: Contact */}
                    <div className="w-full md:w-1/3 pl-0 md:pl-8">
                        <ul className="space-y-6">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0" />
                                <a 
                                  href="tel:+919876543210"
                                  className="text-white hover:text-blue-200 transition-colors"
                                >
                                  +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0" />
                                <span>space@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 mt-1" />
                                <a 
                                  href="https://maps.google.com/?q=1,+Matai+chambers,+63+Erandwane,+Near+Mhatre+Bridge,+Pune,+Maharashtra,+India+411004"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="leading-relaxed text-white hover:text-blue-200 transition-colors"
                                >
                                  1, Matai chambers, 63 Erandwane, Near Mhatre Bridge, Pune, Maharashtra, India 411004
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 border-t border-blue-300/50 text-center text-sm">
                    <p>@2025 Space builder .All Rights Reserved.Designed by <Link href="https://www.digitalizetheglobe.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">Digitallize the Globe</Link></p>
                </div>
            </div>
        </footer>
    );
}
