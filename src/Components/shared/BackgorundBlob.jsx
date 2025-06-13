import React from "react";

const generateRandomBlob = (i) => {
    const size = Math.floor(Math.random() * 200) + 300; // 300–500px
    const top = Math.floor(Math.random() * 90);         // up to 90% to avoid edges
    const left = Math.floor(Math.random() * 90);
    const blur = Math.floor(Math.random() * 50) + 60;   // 60–110px blur
    const opacity = (Math.random() * 0.1 + 0.03).toFixed(2); // 0.03–0.13

    return (
        <div
            key={i}
            className="absolute rounded-full bg-yellow-300 pointer-events-none mix-blend-multiply"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity,
                filter: `blur(${blur}px)`,
                zIndex: -1,
            }}
        />
    );
};

const BackgroundBlob = ({ count = 5 }) => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(count)].map((_, i) => generateRandomBlob(i))}
        </div>
    );
};

export default BackgroundBlob;
