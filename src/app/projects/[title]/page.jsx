'use client';

import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import {CgArrowLongLeft} from 'react-icons/cg';
import ProjectGallery from '@/Components/projects/ProjectGallery.jsx';

export default function ProjectPage(props) {
    const router = useRouter();
    const params = React.use(props.params);
    const title = decodeURIComponent(params.title);

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProject() {
            const {createClient} = await import('@/../lib/supabase/client');
            const supabase = createClient();

            const {data, error} = await supabase
                .from('projects')
                .select('*')
                .ilike('title', title)
                .single();

            if (!error) setProject(data);
            setLoading(false);
        }

        fetchProject();
    }, [title]);

    if (loading) {
        return (
            <main className="min-h-[60vh] flex items-center justify-center px-6">
                <p className="text-2xl font-Japanenglish text-maroon tracking-wide">Loading…</p>
            </main>
        );
    }

    if (!project) {
        return (
            <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
                <h2 className="text-4xl font-Japanenglish text-maroon">Project Not Found</h2>
                <p className="text-lg font-sans text-black/70">No project matches “{title}”.</p>
                <button
                    onClick={() => router.back()}
                    className="mt-2 flex items-center gap-2 font-Japanenglish text-maroon hover:text-gold transition-colors"
                >
                    <CgArrowLongLeft className="text-xl"/> Back
                </button>
            </main>
        );
    }

    return (
        <main className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-16 font-sans text-black">
            <button
                onClick={() => router.back()}
                className="mb-10 flex items-center gap-2 font-Japanenglish text-maroon hover:text-gold transition-colors"
            >
                <CgArrowLongLeft className="text-xl"/> Back
            </button>

            <h1 className="text-5xl md:text-6xl font-Japanenglish text-maroon mb-3">
                {project.title}
            </h1>
            <div className="h-1 w-24 bg-gold mb-10"/>

            <div className="relative mb-14">
                <div className="relative w-full h-[280px] md:h-[420px]">
                    <Image
                        src={project.image}
                        alt={`${project.title} hero`}
                        fill
                        style={{objectFit: 'cover'}}
                        className="rounded-xl"
                        priority
                    />
                </div>
                <div
                    className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-3/4 h-16 bg-white blur-xl rounded-full z-10"
                    aria-hidden="true"
                    role="presentation"
                />
            </div>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-Japanenglish text-maroon">Description</h2>
                    <div className="flex-1 h-0.5 bg-gold max-w-[100px]" aria-hidden="true" role="presentation"/>
                </div>
                <p className="text-lg leading-relaxed">{project.description}</p>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-5">
                    <h2 className="text-3xl font-Japanenglish text-maroon">Tech Stack</h2>
                    <div className="flex-1 h-0.5 bg-gold max-w-[100px]" aria-hidden="true" role="presentation"/>
                </div>
                <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="bg-maroon text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-4 mb-5">
                    <h2 className="text-3xl font-Japanenglish text-maroon">Gallery</h2>
                    <div className="flex-1 h-0.5 bg-gold max-w-[100px]" aria-hidden="true" role="presentation"/>
                </div>
                <div className="flex gap-6 overflow-x-auto">
                    <ProjectGallery images={project.project_images}/>
                </div>
            </section>

            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-Japanenglish bg-gold text-white px-6 py-3 tracking-widest hover:bg-gold/90 transition-colors"
                >
                    View on GitHub
                </a>
            )}
        </main>
    );
}