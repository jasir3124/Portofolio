// import React from 'react';
// import Image from "next/image";

// function AboutSection(props) {
//     return (
//         <div className={"ms-10 mt-10 py-12"}>
//             <div className={"flex items-center gap-4 mb-8"}>
//                 <h1 className={"text-4xl font-Japanenglish text-gold"}>About Me</h1>
//                 <div className='w-1/6 h-0.5 bg-maroon' />
//             </div>
//             <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 items-start"}>
//                 <div className={"max-w-2xl w-full"}>
//                     <p className={"lg:text-2xl md:text-xl text-lg font-sans leading-relaxed text-left"}>
//                         Hi, I'm Jasir Limani — a 17-year-old self-taught full-stack developer from Zhelinë, Macedonia. I specialize in building clean, efficient web apps with React, Next.js, and the MERN stack. I'm currently working on OrderEase, a restaurant management platform inspired by my 4 years working in the industry. My goal? Build software that truly helps people.
//                     </p>
//                 </div>
//                 <div className="flex justify-center self-start">
//                     <div className="relative h-[300px] w-[300px] md:h-[600px] md:w-[600px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden">
//                         <Image
//                             src="/images/portrait-headphones.png"
//                             alt="portrait"
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default AboutSection;

import React from 'react';
import Image from 'next/image';

function AboutSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16">
      {/* Heading */}
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-Japanenglish text-gold">About Me</h1>
        <div className="flex-1 h-0.5 bg-maroon max-w-[120px]" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center">
        {/* Text */}
        <div className="w-3/4">
          <p className="text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-left">
            Hi, I'm <strong>Jasir Limani</strong> — a 17-year-old self-taught full-stack developer from Zhelinë, Macedonia.
            I specialize in building clean, efficient web apps with React, Next.js, and the MERN stack.
            I'm currently working on <strong>OrderEase</strong>, a restaurant management platform inspired by my 4 years in the industry.
            My goal? Build software that truly helps people.
          </p>
        </div>

        {/* Portrait */}
        <div className="flex justify-center">
          <div className="relative h-[400px] md:h-[400px] lg:h-[500px] w-[310px] md:w-[310px] lg:w-[400px] aspect-square rounded-full overflow-hidden shadow-md shadow-gray-950 transition-transform hover:scale-105">
            <Image
              src="/images/portrait-headphones.png"
              alt="Portrait of Jasir Limani"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
