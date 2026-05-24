import React from 'react'
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { getProjects } from '@/../lib/supabase/queries';
import ProjectsCard from '../shared/ProjectsCard';

const ProjectsSection = async () => {
    const projects = await getProjects();
    const featuredProjects = projects.slice(0, 3);

    return (
        <section>
            <div className='flex items-center justify-between sm:justify-normal gap-2 sm:gap-3 md:gap-4 mb-7 md:mb-10 ms-10'>
                <h2 className='text-5xl font-bold font-Japanenglish text-maroon'>Projects</h2>
                <div role="presentation" className='lg:w-3/4 md:w-1/2 sm:w-1/2 h-0.5 bg-gold' />
                <Link href="/projects" className='ms-2 me-10 sm:me-0 sm:ms-4 md:ms-7 text-xl sm:text-2xl md:text-2xl font-bold font-Japanenglish text-maroon flex items-center gap-2 sm:gap-3 md:gap-4 whitespace-nowrap'>View All <CgArrowLongRight /></Link>
            </div>
            <article className="grid md:grid-cols-3 gap-16 p-6 text-black">
                {featuredProjects.map((project, index) => (
                    <ProjectsCard key={index} {...project} index={index} />
                ))}
            </article>
        </section>
    )
}

export default ProjectsSection