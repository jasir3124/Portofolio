import React from 'react';
import projects from '@/data/projects.json';
import ProjectsCard from '@/components/shared/ProjectsCard';

function Projects(props) {

    const workingProjects = projects.filter(project => project.status === 'working');
    const finishedProjects = projects.filter(project => project.status === 'finished');

    return (
        <div className='m-10 mb-20'>
            <h1 className='text-5xl font-Japanenglish text-gold'>Projects</h1>

            <div className='mt-7'>
                    <h2 className='text-3xl font-Japanenglish text-maroon mb-5'>Currently Working On</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {workingProjects.map((project, index) => (
                        <ProjectsCard key={index} {...project} index={index} inView={true} />
                    ))}
                </div>
            </div>

            <div className='mt-16'>
                <h2 className='text-3xl font-Japanenglish text-maroon mb-5'>Finished Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {finishedProjects.map((project, index) => (
                        <ProjectsCard key={index} {...project} index={index} inView={true} />
                    ))}
                </div>
            </div>



        </div>
    );
}

export default Projects;