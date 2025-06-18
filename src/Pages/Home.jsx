import React from 'react';
import HeroSection from "../Components/Home/HeroSection.jsx";
import ProjectsSection from '../Components/Home/ProjectsSection.jsx';
import SkillsSection from '../Components/Home/SkillsSection.jsx';

function Home(props) {
    return (
        <div className='space-y-20 sm:space-y-20 lg:space-y-28'>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
        </div>
    );
}

export default Home;