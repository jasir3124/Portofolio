// import React from 'react'
//
// const SkillsSection = () => {
//
//     const frontendSkills = ["React", "JavaScript", "Tailwind CSS", "Redux", "SASS"];
//     const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "PHP"];
//     const tools = ["Git", "GitHub", "Vercel", "Framer Motion", "Figma"];
//
//     return (
//         <div className='ms-10'>
//             <div className='flex items-center gap-2 sm:gap-3 md:gap-4 mb-7 md:mb-10'>
//                 <h1 className='text-4xl text-gold font-Japanenglish'>Skills</h1>
//                 <div className='lg:w-1/4 md:w-1/5 sm:w-1/6 h-0.5 bg-maroon' />
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
//                 {/* side decoration */}
//                 <div className='gap-2 hidden sm:flex'>
//                     <div className="[writing-mode:vertical-rl] text-5xl font-bold leading-loose text-maroon">
//                         私の技術で世界を変える
//                     </div>
//                     <div className="[writing-mode:vertical-rl] text-4xl font-bold leading-loose text-maroon">
//                         情熱と努力の証
//                     </div>
//                 </div>
//
//                 {/* skills */}
//                 <div className="grid md:col-span-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {/* Frontend Skills */}
//                     <div className="h-fit">
//                         <h2 className="text-xl font-bold text-maroon mb-3 font-Japanenglish text-center">Frontend</h2>
//                         <div className="flex flex-wrap gap-4 justify-center">
//                             {frontendSkills.map((skill, idx) => (
//                                 <div key={skill} className="relative w-32 h-40 border-4 border-black rounded-xl bg-white shadow-[6px_6px_0_0_#800000] hover:shadow-[8px_8px_0_0_#FFB22C] transition group overflow-hidden font-Japanenglish flex flex-col justify-between">
//                                     {/* Decorative Pattern Background */}
//                                     <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-10 pointer-events-none" />
//                                     {/* Skill Name */}
//                                     <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
//                                         <div className="text-2xl font-extrabold text-gold tracking-tight group-hover:scale-105 transition">
//                                             {skill}
//                                         </div>
//                                         <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
//                                     </div>
//                                     {/* Bottom Ribbon */}
//                                     <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-semibold rounded-b-lg shadow-md">
//                                         フロント
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* Backend Skills */}
//                     <div className="h-fit">
//                         <h2 className="text-xl font-bold text-maroon mb-3 font-Japanenglish text-center">Backend</h2>
//                         <div className="flex flex-wrap gap-4 justify-center">
//                             {backendSkills.map((skill, idx) => (
//                                 <div key={skill} className="relative w-32 h-40 border-4 border-black rounded-xl bg-white shadow-[6px_6px_0_0_#800000] hover:shadow-[8px_8px_0_0_#FFB22C] transition group overflow-hidden font-Japanenglish flex flex-col justify-between">
//                                     {/* Decorative Pattern Background */}
//                                     <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-10 pointer-events-none" />
//                                     {/* Skill Name */}
//                                     <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
//                                         <div className="text-2xl font-extrabold text-gold tracking-tight group-hover:scale-105 transition">
//                                             {skill}
//                                         </div>
//                                         <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
//                                     </div>
//                                     {/* Bottom Ribbon */}
//                                     <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-semibold rounded-b-lg shadow-md">
//                                         バックエンド
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* Tools */}
//                     <div className="h-fit">
//                         <h2 className="text-xl font-bold text-maroon mb-3 font-Japanenglish text-center">Tools</h2>
//                         <div className="flex flex-wrap gap-4 justify-center">
//                             {tools.map((tool, idx) => (
//                                 <div key={tool} className="relative w-32 h-40 border-4 border-black rounded-xl bg-white shadow-[6px_6px_0_0_#800000] hover:shadow-[8px_8px_0_0_#FFB22C] transition group overflow-hidden font-Japanenglish flex flex-col justify-between">
//                                     {/* Decorative Pattern Background */}
//                                     <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-10 pointer-events-none" />
//                                     {/* Skill Name */}
//                                     <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
//                                         <div className="text-2xl font-extrabold text-gold tracking-tight group-hover:scale-105 transition">
//                                             {tool}
//                                         </div>
//                                         <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
//                                     </div>
//                                     {/* Bottom Ribbon */}
//                                     <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-semibold rounded-b-lg shadow-md">
//                                         ツール
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default SkillsSection\


import React from 'react';

const SkillsSection = () => {
    const frontendSkills = ["React", "JavaScript", "Tailwind CSS", "Redux", "SASS"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "PHP"];
    const tools = ["Git", "GitHub", "Vercel", "Framer Motion", "Figma"];

    return (
        <div className="ms-10">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-7 md:mb-10">
                <h1 className="text-4xl text-gold font-Japanenglish">Skills</h1>
                <div className="lg:w-1/4 md:w-1/5 sm:w-1/6 h-0.5 bg-maroon" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Side vertical Japanese decoration */}
                <div className="gap-2 hidden sm:flex">
                    <div className="[writing-mode:vertical-rl] text-5xl font-bold leading-loose text-maroon">
                        私の技術で世界を変える
                    </div>
                    <div className="[writing-mode:vertical-rl] text-4xl font-bold leading-loose text-maroon">
                        情熱と努力の証
                    </div>
                </div>

                {/* Skills cards */}
                <div className="grid md:col-span-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend */}
                    <div className="h-fit">
                        <h2 className="text-4xl font-bold text-maroon mb-3 font-Japanenglish text-center">Frontend</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {frontendSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className="relative w-32 h-40 border-[3px] border-black rounded-xl bg-white shadow-[4px_4px_0_0_#800000] hover:shadow-[6px_6px_0_0_#FFB22C] transition group overflow-hidden font-sans flex flex-col justify-between"
                                >
                                    <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-[0.05] grayscale pointer-events-none" />
                                    <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
                                        <div className="text-xl font-bold text-gold tracking-tight group-hover:scale-105 transition">
                                            {skill}
                                        </div>
                                        <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-medium rounded-b-lg shadow-md font-Japanenglish">
                                        Frontend
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="h-fit">
                        <h2 className="text-4xl font-bold text-maroon mb-3 font-Japanenglish text-center">Backend</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {backendSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className="relative w-32 h-40 border-[3px] border-black rounded-xl bg-white shadow-[4px_4px_0_0_#800000] hover:shadow-[6px_6px_0_0_#FFB22C] transition group overflow-hidden font-sans flex flex-col justify-between"
                                >
                                    <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-[0.05] grayscale pointer-events-none" />
                                    <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
                                        <div className="text-xl font-bold text-gold tracking-tight group-hover:scale-105 transition">
                                            {skill}
                                        </div>
                                        <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-medium rounded-b-lg shadow-md font-Japanenglish">
                                        Backend
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="h-fit">
                        <h2 className="text-4xl font-bold text-maroon mb-3 font-Japanenglish text-center">Tools</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {tools.map((tool) => (
                                <div
                                    key={tool}
                                    className="relative w-32 h-40 border-[3px] border-black rounded-xl bg-white shadow-[4px_4px_0_0_#800000] hover:shadow-[6px_6px_0_0_#FFB22C] transition group overflow-hidden font-sans flex flex-col justify-between"
                                >
                                    <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-[0.05] grayscale pointer-events-none" />
                                    <div className="flex flex-col justify-center items-center h-full px-2 text-center z-10 relative">
                                        <div className="text-xl font-bold text-gold tracking-tight group-hover:scale-105 transition">
                                            {tool}
                                        </div>
                                        <div className="mt-1 w-6 h-1 bg-gold rounded-full" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full text-center bg-maroon text-white text-xs py-1 tracking-wider font-medium rounded-b-lg shadow-md font-Japanenglish">
                                        Tools
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
