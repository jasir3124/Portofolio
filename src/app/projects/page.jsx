import React from 'react';
import projects from '@/data/projects.json';
import ProjectsCard from '@/Components/shared/ProjectsCard';

export const metadata = {
    title: "Projects",
    description: "Explore Jasir Limani's portfolio of web development projects including OrderEase (restaurant management SaaS), WheelseAway (car rental system), Food App, and Adze Movies. Built with MERN stack, React, PHP, and modern technologies.",
    keywords: [
        "Jasir Limani Projects",
        "OrderEase Restaurant Management",
        "WheelseAway Car Rental",
        "Food App Recipe Discovery",
        "Adze Movies Browser",
        "MERN Stack Projects",
        "React Projects",
        "Web Development Portfolio",
        "Full-Stack Projects"
    ],
    openGraph: {
        title: "Projects | Jasir Limani Portfolio",
        description: "Explore Jasir Limani's portfolio of web development projects including OrderEase, WheelseAway, Food App, and Adze Movies.",
        url: '/projects',
        images: [
            {
                url: '/project-images/OrderEase/Hero-Section.png',
                width: 1200,
                height: 630,
                alt: 'Jasir Limani Projects Portfolio',
            },
        ],
    },
    twitter: {
        title: "Projects | Jasir Limani Portfolio",
        description: "Explore Jasir Limani's portfolio of web development projects including OrderEase, WheelseAway, Food App, and Adze Movies.",
    },
};

function Projects(props) {

    const workingProjects = projects.filter(project => project.status === 'working');
    const finishedProjects = projects.filter(project => project.status === 'finished');

    return (
        <main aria-labelledby="projects-heading" className='m-10 mb-20'>
            <h1 id="projects-heading" className='text-5xl font-Japanenglish text-gold'>Projects</h1>

            <section className='mt-7'>
                    <h2 className='text-3xl font-Japanenglish text-maroon mb-5'>Currently Working On</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {workingProjects.map((project, index) => (
                        <ProjectsCard key={index} {...project} index={index} inView={true} />
                    ))}
                </div>
            </section>

            <section className='mt-16'>
                <h2 className='text-3xl font-Japanenglish text-maroon mb-5'>Finished Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {finishedProjects.map((project, index) => (
                        <ProjectsCard key={index} {...project} index={index} inView={true} />
                    ))}
                </div>
            </section>



        </main>
    );
}

export default Projects;