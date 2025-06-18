'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <>
            {/* Top Navbar */}
            <div className="flex justify-between items-center p-3 backdrop-blur-3xl border-b-2 border-gray-200">
                <h1
                    className="text-gold text-2xl font-Japanenglish tracking-widest"
                >
                    Jasir
                </h1>

                {/* Desktop Nav */}
                <div className="sm:flex hidden justify-between items-center">
                    <div className="flex gap-7 text-2xl font-Japanenglish" >
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`transition-all ${
                                    pathname === href
                                        ? 'animate-bounce [animation-duration:2s] text-gold'
                                        : 'text-black'
                                }`}
                                style={{ marginRight: 10, textDecoration: 'none' }}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="sm:hidden flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="text-2xl">
                        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 h-screen w-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={toggleMenu}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed right-0 top-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col items-end h-full text-2xl pt-10 pe-5 space-y-10 font-Japanenglish">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={toggleMenu}
                            className={`${
                                pathname === href ? 'text-gold border-b-2 border-gold pb-2' : 'text-black'
                            }`}
                            style={{ marginRight: 10, textDecoration: 'none' }}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;
