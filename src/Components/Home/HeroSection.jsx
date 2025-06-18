import React from 'react';
import Link from "next/link";
import Image from "next/image";

function HeroSection(props) {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 md:px-8 lg:px-16 gap-8 lg:gap-0">
                <div className="flex flex-col items-center lg:items-start justify-self-center lg:justify-self-end w-full lg:w-3/4 space-y-3 text-center lg:text-left lg:mb-20 md:mt-10 sm:mt-10">
                    <h1 className="text-maroon text-6xl md:text-5xl lg:text-6xl font-Japanenglish"
                        >Jasir Limani a <br /> Software Engineer</h1>
                    <p className="text-xl md:text-3xl font-sans">I'm a software engineer specializing in web and mobile app
                        development, building scalable and efficient solutions.</p>
                    <Link href="/contact" className="text-lg md:text-xl font-Japanenglish bg-gold text-white px-4 py-2 mt-4 tracking-widest hover:bg-gold/90 transition-colors"
                       >Contact</Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative -z-10 h-[400px] md:h-[500px] lg:h-[700px] w-full">
                        <Image
                            src={"/images/portrait.png"}
                            alt="Profile"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center relative md:mt-10 sm:mt-10'>
                <div className='w-11/12 md:w-4/5 lg:w-2/3'>
                    <div className='border-2 border-gold w-full p-4 md:p-5 px-8 md:px-12 lg:px-16'>
                        <div className='text-[100px] md:text-[150px] lg:text-[200px] h-fit w-fit text-gold font-Japanenglish absolute left-[50px] md:left-[150px] lg:left-[300px] top-[-40px] md:top-[-60px] lg:top-[-75px]'>"</div>
                        <div className='text-[100px] md:text-[150px] lg:text-[200px] text-gold font-Japanenglish absolute right-[5%] md:right-[10%] lg:right-[18%] bottom-[-35px] md:bottom-[-85px] lg:bottom-[-115px] z-10'>"</div>
                        <p className='text-2xl md:text-3xl lg:text-5xl text-maroon font-Japanenglish'>Javascript is the world's most misunderstood programming language.</p>
                    </div>
                    <div className='border-2 border-gold w-2/3 md:w-1/2 lg:w-1/3 p-3 md:p-4 ml-auto mt-5 md:mt-5 lg:mt-10'>
                        <p className='text-lg md:text-xl lg:text-2xl text-maroon font-Japanenglish'>- Douglas Crockford</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;