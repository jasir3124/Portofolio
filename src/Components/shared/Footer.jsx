import React from 'react';
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#F8F0E3] text-[#B22222] font-Japanenglish px-6 sm:px-10 lg:px-20 py-10 overflow-x-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                    <h1 className="text-3xl text-gold">Jasir</h1>
                    <p className="text-sm sm:text-lg break-words">jasirlimani12@gmail.com</p>
                </div>

                <div className="flex gap-6">
                    <Link href="https://github.com/jasir3124" target="_blank" rel="noopener noreferrer" aria-label="github" className="text-[#B22222] hover:text-[#7B1212] transition-colors">
                        <FaGithub size={24} />
                    </Link>
                    <Link href="https://x.com/Jasir28616447" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#B22222] hover:text-[#7B1212] transition-colors">
                        <FaXTwitter size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jasir-limani-702663178" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#B22222] hover:text-[#7B1212] transition-colors">
                        <FaLinkedinIn size={24} />
                    </Link>
                </div>
            </div>

            <p className="text-sm md:text-xl text-center">
                © {new Date().getFullYear()} Jasir Limani. All rights reserved.
            </p>
        </footer>

    );
};

export default Footer;
