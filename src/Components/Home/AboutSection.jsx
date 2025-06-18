import React from 'react';
import Image from "next/image";

function AboutSection(props) {
    return (
        <div className={"ms-10 h-96"}>
            <h1 className={"text-4xl font-Japanenglish text-gold"}>About Me</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 mt-7 h-full"}>
                <div className={"w-3/4"}>
                    <p className={"text-xl font-sans "}>Hi, I’m Jasir Limani — a 17-year-old self-taught full-stack
                        developer from Zhelinë, Macedonia. I specialize in building clean, efficient web apps with
                        React, Next.js, and the MERN stack. I’m currently working on OrderEase, a restaurant management
                        platform inspired by my 4 years working in the industry. My goal? Build software that truly
                        helps people.</p>
                </div>
                <div className={"h-full"}>
                    <div className={"relative h-full w-1/2"}>
                        <Image src={"/images/portrait-arms-crossed-removebg-preview.png"} alt={"portrait"} fill/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;