import React from "react";

const SkillCard = ({ name, category }) => (
    <article
        className="relative w-32 h-40 border-[3px] border-black rounded-xl bg-white shadow-[4px_4px_0_0_#800000] hover:shadow-[6px_6px_0_0_#FFB22C] transition group overflow-hidden font-sans flex flex-col justify-between"
        aria-label={`${name} skill in category ${category}`}
    >
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-[0.05] grayscale pointer-events-none" />
        <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
            <div className="text-xl font-bold text-gold tracking-tight group-hover:scale-105 transition">
                {name}
            </div>
            <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-medium rounded-b-lg shadow-md font-Japanenglish">
            {category}
        </div>
    </article>
);

const SkillsSection = () => {
    const frontendSkills = ["React", "JavaScript", "Tailwind CSS", "Redux", "SASS"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "PHP"];
    const tools = ["Git", "GitHub", "Vercel", "Framer Motion", "Figma"];

    return (
        <section aria-labelledby="skills-heading" className="sm:ms-10">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-7 md:mb-10 ms-5 sm:ms-0">
                <h2 id="skills-heading" className="text-5xl text-gold font-Japanenglish">
                    Skills
                </h2>
                <div
                    className="lg:w-1/4 md:w-1/5 sm:w-1/6 h-0.5 bg-maroon"
                    aria-hidden="true"
                    role="presentation"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div
                    className="gap-2 hidden sm:flex"
                    aria-hidden="true"
                    role="presentation"
                >
                    <div className="[writing-mode:vertical-rl] text-5xl font-bold leading-loose text-maroon">
                        私の技術で世界を変える
                    </div>
                    <div className="[writing-mode:vertical-rl] text-4xl font-bold leading-loose text-maroon">
                        情熱と努力の証
                    </div>
                </div>

                <div className="grid md:col-span-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <section aria-labelledby="frontend-skills-heading">
                        <h3
                            id="frontend-skills-heading"
                            className="text-4xl font-bold text-maroon mb-3 font-Japanenglish text-center"
                        >
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {frontendSkills.map((skill) => (
                                <SkillCard key={skill} name={skill} category="Frontend" />
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="backend-skills-heading">
                        <h3
                            id="backend-skills-heading"
                            className="text-4xl font-bold text-maroon mb-3 font-Japanenglish text-center"
                        >
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {backendSkills.map((skill) => (
                                <SkillCard key={skill} name={skill} category="Backend" />
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="tools-skills-heading">
                        <h3
                            id="tools-skills-heading"
                            className="text-4xl font-bold text-maroon mb-3 font-Japanenglish text-center"
                        >
                            Tools
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {tools.map((tool) => (
                                <SkillCard key={tool} name={tool} category="Tools" />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
