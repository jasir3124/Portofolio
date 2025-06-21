import React from 'react'
import Image from 'next/image'

const skills = [
    "MERN Stack",
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "PHP",
    "SCSS",
    "SQL",
    "Git",
    "GitHub",
]

export const metadata = {
    title: "About Me",
    description: "Learn more about Jasir Limani, a 17-year-old self-taught full-stack developer from Zhelinë, Macedonia. Discover my journey from programming at 14 to building OrderEase and other innovative projects.",
    keywords: [
        "About Jasir Limani",
        "Full-Stack Developer Macedonia",
        "Self-taught Programmer",
        "OrderEase Developer",
        "MERN Stack Developer",
        "Young Developer Portfolio"
    ],
    openGraph: {
        title: "About Jasir Limani | Full-Stack Developer",
        description: "Learn more about Jasir Limani, a 17-year-old self-taught full-stack developer from Zhelinë, Macedonia. Discover my journey from programming at 14 to building OrderEase and other innovative projects.",
        url: '/about',
        images: [
            {
                url: '/images/portrait.png',
                width: 1200,
                height: 630,
                alt: 'Jasir Limani - About Me',
            },
        ],
    },
    twitter: {
        title: "About Jasir Limani | Full-Stack Developer",
        description: "Learn more about Jasir Limani, a 17-year-old self-taught full-stack developer from Zhelinë, Macedonia.",
    },
};

export default function AboutMe() {
    return (
        <main className="relative overflow-hidden w-full font-sans py-16">
            {/* Full-width background */}
            <div className="absolute inset-0 w-full h-full bg-white z-0" aria-hidden="true" />
            {/* Content container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                {/* Subtle background dragon */}
                <div className="absolute -right-10 top-20 opacity-10 z-0 max-w-[600px] hidden md:block pointer-events-none">
                    <Image
                        src={"/images/dragon-no-background.png"}
                        alt="Japanese dragon"
                        width={600}
                        height={600}
                        priority
                    />
                </div>

                {/* Heading */}
                <section className="relative z-10 space-y-4 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-Japanenglish text-maroon tracking-wide">
                        About Me
                    </h1>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                </section>

                {/* Bio and Skills Grid */}
                <section className="relative z-10 mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Bio */}
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>
                            Hi, I'm <span className="text-maroon font-bold">Jasir Limani</span>, a 17-year-old self-taught full-stack developer from Zhelinë, Macedonia.
                        </p>
                        <p>
                            I started programming at 14 because I love building tools and solving problems. What began as a hobby turned into a passion for clean, practical, and elegant software.
                        </p>
                        <p>
                            I'm currently focused on <span className="text-gold font-bold">OrderEase</span>, a SaaS platform to simplify restaurant order management, inspired by my own experience in the restaurant industry.
                        </p>
                        <p>
                            My mission: create software that makes life easier, smarter, and more meaningful.
                        </p>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-3xl font-Japanenglish text-maroon mb-6 text-center md:text-left">Skills</h2>
                        <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="bg-maroon text-white rounded-full px-5 py-2 text-sm md:text-base font-semibold shadow-md hover:bg-gold hover:text-maroon transition-colors cursor-default select-none"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Signature Quote */}
                <section className=" text-center mt-24 py-12 border-y-2 border-gold max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl font-Japanenglish text-maroon">
                        "Code should be as simple as possible — and not simpler."
                    </p>
                    <p className="text-lg text-black mt-4 font-Japanenglish">– Jasir Limani</p>
                </section>
            </div>
        </main>
    )
}
