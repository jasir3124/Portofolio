import React from 'react';
import Link from 'next/link';

import { FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section aria-labelledby="contact-heading" className="p-20 pt-0">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 id="contact-heading" className="text-5xl font-Japanenglish text-gold tracking-widest">Contact</h2>
        <div className="flex-1 h-[2px] bg-maroon max-w-[150px]" />
      </div>

      {/* Content Grid */}
      <div className="grid items-start">
        {/* Left Column - Text */}
        <div className="space-y-8">
          <div className='space-y-4'>
            <p className="text-lg text-gray-500 font-light italic">
              Let's connect and create something meaningful.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Feel free to reach out — whether it's a project collaboration, a question, or just a friendly hello.
              I'm always happy to connect with fellow developers, creatives, and potential collaborators.
            </p>
            <Link
              href="/contact"
              className="w-fit group relative flex items-center gap-2 font-semibold text-[20px] font-Japanenglish text-black cursor-pointer border-none bg-none p-0 m-0"
            >
              <span className="relative text-3xl transition-colors duration-300 group-hover:text-maroon">
                Contact
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15px] h-[15px] text-black transition-transform duration-200 delay-200 group-hover:translate-x-1 group-hover:text-maroon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-[7px] h-[2px] w-0 bg-maroon transition-all duration-300 ease-out group-hover:w-full" />
            </Link>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-2">
            {[
              {
                href: 'https://instagram.com/jasirlimani7',
                icon: <FaInstagram />,
                label: 'Instagram',
              },
              {
                href: 'https://twitter.com/Jasir28616447',
                icon: <FaXTwitter />,
                label: 'Twitter / X',
              },
              {
                href: 'https://linkedin.com/in/jasir-limani-702663178',
                icon: <FaLinkedinIn />,
                label: 'LinkedIn',
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-maroon text-maroon hover:text-gold hover:border-gold transition-all duration-300 shadow-sm"
                aria-label={label}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
