"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectsCard = (props) => {
    const { index = 0 } = props;

    return (
        <motion.div
            className="border-4 border-black rounded-lg shadow-[8px_8px_0_0_#800000] p-4 bg-white hover:shadow-[12px_12px_0_0_#FFB22C] transition"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.15 }}
        >
            <div className="relative w-full h-40 mb-2 border-b-2 border-black">
                <Image
                    src={props.image}
                    alt={props.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <h3 className="text-3xl font-black uppercase mb-1 tracking-wide font-Japanenglish">
                {props.title}
            </h3>
            <p className="text-md font-sans line-clamp-2 mb-2">{props.description}</p>

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

            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold bg-black text-white px-3 py-1 rounded-full shadow hover:bg-[#FFB22C] hover:text-black transition"
            >
                View Project!
            </a>
        </motion.div>
    );
};

export default ProjectsCard;
