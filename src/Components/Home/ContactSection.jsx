import React from 'react';
import { FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-20 grid">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-Japanenglish text-gold">Contact</h1>
        <div className="flex-1 h-0.5 bg-maroon max-w-[120px]" />
      </div>


      {/* Content */}
      <div className="max-w-full space-y-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-base text-gray-500 mb-10">
            Let's connect and create something meaningful.
          </p>
          <p className="text-lg md:text-xl font-sans leading-relaxed">
            Feel free to reach out — whether it's a project collaboration, a question, or just a friendly hello. I'm always happy to connect with fellow developers, creatives, and potential collaborators.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
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
                className="group p-3 rounded-full border border-maroon text-maroon hover:text-gold hover:border-gold transition-all duration-200"
                aria-label={label}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex justify-center'>
          <Image src="/images/dragon-no-background.png" alt="Contact" width={400} height={500} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
