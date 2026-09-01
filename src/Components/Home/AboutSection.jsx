import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
      <section
          aria-labelledby="about-heading"
          className="px-6 sm:px-10 lg:px-20 py-16"
      >
        {/* Heading */}
        <div className="flex items-center gap-4 lg:mb-0 mb-10">
          <h2 id="about-heading" className="text-5xl font-Japanenglish text-maroon">
            About Me
          </h2>
          <div
              className="flex-1 h-0.5 bg-gold max-w-[120px]"
              aria-hidden="true"
              role="presentation"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Text */}
          <div className="w-full max-w-prose">
            <p className="text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-left">
              Hi, I'm <strong>Jasir Limani</strong> — a 18-year-old self-taught
              full-stack developer from Zhelinë, Macedonia. I specialize in
              building clean, efficient web apps with React, Next.js, and the MERN
              stack. I'm currently working on <strong>OrderEase</strong>, a
              restaurant management platform inspired by my 4 years in the
              industry. My goal? Build software that truly helps people.
            </p>
          </div>

          {/* Portrait */}
          <div className="flex justify-center">
            <div className="relative h-[450px] md:h-[450px] lg:h-[550px] w-[260px] md:w-[360px] lg:w-[450px]">
              <Image
                  src="/images/portrait-headphones.png"
                  alt="Portrait of Jasir Limani"
                  fill
                  className="object-cover"
                  priority
              />
              <div
                  className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 w-full h-24 bg-white blur-xl rounded-full z-10"
                  aria-hidden="true"
                  role="presentation"
              />
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutSection;
