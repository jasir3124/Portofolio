import React from 'react';
import Me from '../../assets/images/20250613_2051_Anime Style Portrait_remix_01jxna1k54fk28z9tn75gn8kyc.png';
import {Link} from "react-router-dom";

function HeroSection(props) {
    return (
        <div className={"grid grid-cols-2 items-center ms-30"}>
            <div className={"flex flex-col items-start justify-self-end w-3/4 space-y-3"}>
                <h1 className={"text-maroon text-6xl font-extralight text-left"}
                    style={{fontFamily: 'Japanenglish'}}>Jasir Limani a <br/> Sotware Engineer</h1>
                <p className={"text-2xl font-sans"}>I’m a software engineer specializing in web and mobile app
                    development, building scalable and efficient solutions.</p>
                <Link to="/contact" className={"text-xl font-sans bg-gold text-white px-4 py-2 mt-4 tracking-widest"}
                      style={{fontFamily: 'Japanenglish'}}>Contact</Link>
            </div>
            <div className={"flex justify-center"}>
                <img className={"h-[700px] -mb-20"} src={Me} alt=""/>
            </div>
        </div>
    );
}

export default HeroSection;