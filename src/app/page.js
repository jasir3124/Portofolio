import Image from "next/image";
import HeroSection from "@/components/Home/HeroSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import SkillsSection from "@/components/Home/SkillsSection";
import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";

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
