import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import SkillsSection from "@/components/Home/SkillsSection";
import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";

export const metadata = {
    title: "Home",
    description: "Welcome to Jasir Limani's portfolio. A 17-year-old self-taught full-stack developer from Macedonia specializing in MERN stack, React, Next.js, and modern web technologies. Explore my projects and get in touch for collaboration opportunities.",
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
        description: "Welcome to Jasir Limani's portfolio. A 17-year-old self-taught full-stack developer from Macedonia specializing in MERN stack, React, Next.js, and modern web technologies.",
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
        description: "Welcome to Jasir Limani's portfolio. A 17-year-old self-taught full-stack developer from Macedonia.",
    },
};

export default function Home() {
    return (
        <div className='space-y-20 sm:space-y-20 lg:space-y-28'>
            <HeroSection/>
            <ProjectsSection/>
            <SkillsSection/>
            <AboutSection />
            <ContactSection />
        </div>
    );
}
