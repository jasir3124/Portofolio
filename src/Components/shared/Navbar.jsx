import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <div className={"flex justify-between p-3 items-center backdrop-blur-3xl border-b-1 border-gray-200 "}>
            <h1 style={{fontFamily: 'Japanenglish'}} className={"text-yellow-500 text-2xl font-extralight tracking-widest"}>Jasir</h1>
            <div className={"flex gap-7 text-2xl"} style={{fontFamily: 'Japanenglish'}}>
                <NavLink to="/" end className={ ({isActive}) => isActive && "animate-bounce [animation-duration:2s]"} style={({isActive}) => ({
                    marginRight: 10,
                    color: isActive ? 'orange' : 'black',
                    textDecoration: 'none',
                })}>Home</NavLink>

                <NavLink to="/projects" className={ ({isActive}) => isActive && "animate-bounce [animation-duration:2s]"} style={({isActive}) => ({
                    marginRight: 10,
                    color: isActive ? 'orange' : 'black',
                    textDecoration: 'none',
                })}>Projects</NavLink>

                <NavLink to="/about" className={ ({isActive}) => isActive && "animate-bounce [animation-duration:2s]"} style={({isActive}) => ({
                    marginRight: 10,
                    color: isActive ? 'orange' : 'black',
                    textDecoration: 'none',
                })}>About</NavLink>

                <NavLink to="/contact" className={ ({isActive}) => isActive && "animate-bounce [animation-duration:2s]"} style={({isActive}) => ({
                    marginRight: 10,
                    color: isActive ? 'orange' : 'black',
                    textDecoration: 'none',
                })}>Contact</NavLink>
            </div>
        </div>
    );
}

export default Navbar;