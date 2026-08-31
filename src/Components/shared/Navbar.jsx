'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        if (!isMenuOpen) return;

        document.body.style.overflow = 'hidden';

        function handleKeyDown(e) {
            if (e.key === 'Escape') setIsMenuOpen(false);
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    const mobileMenu = (
        <>
            {isMenuOpen && (
                <div
                    className="fixed inset-0 h-screen w-screen bg-black/50 z-40 transition-opacity duration-300"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-hidden={!isMenuOpen}
                className={`fixed right-0 top-0 h-screen w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
                }`}
            >
                <div className="flex flex-col items-end h-full text-2xl pt-10 pe-6 gap-8 font-Japanenglish">
                    {navItems.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={toggleMenu}
                                className={`pb-1 transition-colors ${
                                    active ? 'text-maroon border-b-2 border-gold' : 'text-black hover:text-maroon'
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );

    return (
        <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gold/30 shadow-sm">
            <div className="flex justify-between items-center px-4 sm:px-8 py-4">
                <Link href="/" className="text-gold text-2xl font-Japanenglish tracking-widest hover:text-gold/80 transition-colors">
                    Jasir
                </Link>

                <div className="hidden sm:flex items-center gap-10 text-xl font-Japanenglish">
                    {navItems.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`group relative py-1 transition-colors ${
                                    active ? 'text-maroon' : 'text-black hover:text-maroon'
                                }`}
                            >
                                {label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-300 ease-out ${
                                        active ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                >
                    <span className={`block w-6 h-0.5 bg-maroon transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-maroon transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block w-6 h-0.5 bg-maroon transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {mounted && createPortal(mobileMenu, document.body)}
        </nav>
    );
}

export default Navbar;