import React from 'react';
import { FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#F8F0E3] text-[#B22222] font-Japanenglish px-6 sm:px-10 lg:px-20 py-10">
            {/* Content */}
            <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-4xl text-gold">Jasir</h1>
                        <p className='text-xl'>jasirlimani12@gmail.com</p>
                    </div>

                <div className="flex gap-6">
                    <Link
                        href="https://instagram.com/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-[#B22222] hover:text-[#7B1212] transition-colors"
                    >
                        <FaInstagram size={24} />
                    </Link>
                    <Link
                        href="https://twitter.com/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="text-[#B22222] hover:text-[#7B1212] transition-colors"
                    >
                        <FaXTwitter size={24} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-[#B22222] hover:text-[#7B1212] transition-colors"
                    >
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
