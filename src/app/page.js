import Image from "next/image";
import HeroSection from "@/Components/Home/HeroSection.jsx";
import ProjectsSection from "@/Components/Home/ProjectsSection.jsx";
import SkillsSection from "@/Components/Home/SkillsSection.jsx";
import AboutSection from "@/Components/Home/AboutSection.jsx";
import ContactSection from "@/Components/Home/ContactSection.jsx";

export const metadata = {
    title: "Home",
    description: "Welcome to Jasir Limani's portfolio. A 18-year-old self-taught full-stack developer from Macedonia specializing in MERN stack, React, Next.js, and modern web technologies. Explore my projects and get in touch for collaboration opportunities.",
    keywords: [
        "Jasir Limani Portfolio",
        "Full-Stack Developer",
        "MERN Stack Developer",
        "React Developer",
        "Next.js Developer",
        "Web Developer Macedonia",
        "Young Developer Portfolio",
        "Software Engineer Portfolio"
    ],
    openGraph: {
        title: "Jasir Limani | Full-Stack Developer Portfolio",
        description: "Welcome to Jasir Limani's portfolio. A 18-year-old self-taught full-stack developer from Macedonia specializing in MERN stack, React, Next.js, and modern web technologies.",
        url: '/',
        images: [
            {
                url: '/images/portrait.png',
                width: 1200,
                height: 630,
                alt: 'Jasir Limani - Full-Stack Developer Portfolio',
            },
        ],
    },
    twitter: {
        title: "Jasir Limani | Full-Stack Developer Portfolio",
        description: "Welcome to Jasir Limani's portfolio. A 18-year-old self-taught full-stack developer from Macedonia.",
    },
};

export default function Home() {
    return (
        <main aria-labelledby={"home-title"} className='space-y-20 sm:space-y-20 lg:space-y-28'>
            <HeroSection mainLable={"home-title"}/>
            <ProjectsSection/>
            <SkillsSection/>
            <AboutSection />
            <ContactSection />
        </main>
    );
}
