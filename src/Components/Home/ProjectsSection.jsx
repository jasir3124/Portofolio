import React from 'react'
import Link from "next/link";

import { CgArrowLongRight } from "react-icons/cg";

import projects from '@/data/projects.json'
import ProjectsCard from './ProjectsCard'


const ProjectsSection = () => {

    const featuredProjects = projects.slice(0, 3);
    
    return (
        <div>
            <div className='flex items-center gap-2 sm:gap-3 md:gap-4 mb-7 md:mb-10 ms-10'>
                <h1 className='text-4xl font-bold font-Japanenglish text-gold'>Projects</h1>
                <div className='lg:w-3/4 md:w-1/2 sm:w-1/2 h-0.5 bg-maroon' />
                <Link href="/projects" className='ms-2 sm:ms-4 md:ms-7 text-lg sm:text-xl md:text-2xl font-bold font-Japanenglish text-maroon flex items-center gap-2 sm:gap-3 md:gap-4 whitespace-nowrap'>View All <CgArrowLongRight /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-16 p-6 text-black">
                {featuredProjects.map((project, index) => (
                    <ProjectsCard key={index} {...project} index={index} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection
