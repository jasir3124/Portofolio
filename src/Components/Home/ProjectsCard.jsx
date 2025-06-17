import React from 'react';

const ProjectsCard = (props) => {
    return (
        <div className="border-4 border-black rounded-lg shadow-[8px_8px_0_0_#800000] p-4 bg-white hover:shadow-[12px_12px_0_0_#FFB22C] transition">
            {/* Image */}
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-40 object-cover border-b-2 border-black mb-2"
            />

            {/* Title */}
            <h3 className="text-3xl font-black uppercase mb-1 tracking-wide font-Japanenglish">
                {props.title}
            </h3>

            {/* Description */}
            <p className="text-md font-sans line-clamp-2 mb-2">{props.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
                {props.stack?.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-[#FFB22C] text-black text-xs font-bold px-2 py-1 rounded-full border border-black"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Link */}
            <a
                href={props.link}
                className="inline-block text-sm font-bold bg-black text-white px-3 py-1 rounded-full shadow hover:bg-[#FFB22C] hover:text-black transition"
            >
                View Project!
            </a>
        </div>
    );
};

export default ProjectsCard;
