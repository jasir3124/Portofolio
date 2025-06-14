import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center p-3 backdrop-blur-3xl border-b-2 border-gray-200">
                <h1 style={{ fontFamily: 'Japanenglish' }} className={"text-gold text-2xl font-extralight tracking-widest"}>Jasir</h1>

                <div className={"sm:flex hidden justify-between items-center backdrop-blur-3xl border-b-1 border-gray-200 "}>
                    <div className={"flex gap-7 text-2xl"} style={{ fontFamily: 'Japanenglish' }}>
                        <NavLink to="/" end className={({ isActive }) => isActive ? "animate-bounce [animation-duration:2s] text-gold" : "text-black"} style={({ isActive }) => ({
                            marginRight: 10,
                            textDecoration: 'none',
                        })}>Home</NavLink>

                        <NavLink to="/projects" className={({ isActive }) => isActive ? "animate-bounce [animation-duration:2s] text-gold" : "text-black"} style={({ isActive }) => ({
                            marginRight: 10,
                            textDecoration: 'none',
                        })}>Projects</NavLink>

                        <NavLink to="/about" className={({ isActive }) => isActive ? "animate-bounce [animation-duration:2s] text-gold" : "text-black"} style={({ isActive }) => ({
                            marginRight: 10,
                            textDecoration: 'none',
                        })}>About</NavLink>

                        <NavLink to="/contact" className={({ isActive }) => isActive ? "animate-bounce [animation-duration:2s] text-gold" : "text-black"} style={({ isActive }) => ({
                            marginRight: 10,
                            textDecoration: 'none',
                        })}>Contact</NavLink>
                    </div>
                </div>

                <div className="sm:hidden flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="text-2xl">
                        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 h-screen w-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={toggleMenu}
                />
            )}

            <div className={`fixed right-0 top-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-end h-full text-2xl pt-10 pe-5 space-y-10 font-Japanenglish">
                    <NavLink onClick={toggleMenu} to="/" end className={({ isActive }) => isActive ? "text-gold border-b-2 border-gold pb-2" : "text-black"} style={({ isActive }) => ({
                        marginRight: 10,
                        textDecoration: 'none',
                    })}>Home</NavLink>
                    <NavLink onClick={toggleMenu} to="/projects" className={({ isActive }) => isActive ? "text-gold border-b-2 border-gold pb-2" : "text-black"} style={({ isActive }) => ({
                        marginRight: 10,
                        textDecoration: 'none',
                    })}>Projects</NavLink>
                    <NavLink onClick={toggleMenu} to="/about" className={({ isActive }) => isActive ? "text-gold border-b-2 border-gold pb-2" : "text-black"} style={({ isActive }) => ({
                        marginRight: 10,
                        textDecoration: 'none',
                    })}>About</NavLink>
                    <NavLink onClick={toggleMenu} to="/contact" className={({ isActive }) => isActive ? "text-gold border-b-2 border-gold pb-2" : "text-black"} style={({ isActive }) => ({
                        marginRight: 10,
                        textDecoration: 'none',
                    })}>Contact</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;