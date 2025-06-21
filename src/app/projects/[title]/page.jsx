'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import projects from '@/data/projects.json';

import ProjectGallery from '@/Components/projects/ProjectGallery.jsx';


export default function ProjectPage(props) {
    const router = useRouter();

    const params = React.use(props.params);
    const title = params.title;
  
    const project = projects.find(
      (p) => p.title.toLowerCase().trim() === decodeURIComponent(title).toLowerCase().trim()
    );

    if (!project) {
        return (
            <div className="p-8 font-sans text-maroon">
                <h1 className="text-3xl font-japanenglish mb-4">Project Not Found</h1>
                <p>No project matches the title: {title}</p>
            </div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto p-8 font-sans text-maroon">
            <button
                onClick={() => router.back()}
                className="mb-6 px-4 py-2 bg-maroon text-gold rounded font-japanenglish hover:bg-gold hover:text-maroon transition"
            >
                ← Back
            </button>

            <h1 className="text-5xl font-japanenglish mb-6 text-gold">{project.title}</h1>

            <Image
                src={project.image}
                alt={`${project.title} hero`}
                width={800}
                height={450}
                className="rounded-lg shadow-lg mb-6"
            />

            <section className="mb-8">
                <h2 className="text-2xl font-japanenglish mb-2 text-gold">Description</h2>
                <p className="text-lg leading-relaxed">{project.description}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-japanenglish mb-4 text-gold">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="bg-maroon text-gold px-4 py-1 rounded-full font-japanenglish text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-japanenglish mb-4 text-gold">Gallery</h2>
                <div className="flex gap-6 overflow-x-auto">
                    <ProjectGallery images={project.projectImages} />
                </div>
            </section>

            {project.github && (
                <section>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 bg-gold text-maroon font-japanenglish rounded hover:bg-yellow-400 transition"
                    >
                        View on GitHub
                    </a>
                </section>
            )}
        </main>
    );
}
