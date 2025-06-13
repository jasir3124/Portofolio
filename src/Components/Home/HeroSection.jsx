import React from 'react';
import Me from '../../assets/images/20250613_2051_Anime Style Portrait_remix_01jxna1k54fk28z9tn75gn8kyc.png';
import {Link} from "react-router-dom";

function HeroSection(props) {
    return (
        <div className={"grid grid-cols-2 items-center ms-30"}>
            <div className={"flex flex-col items-start justify-self-center"}>
                <h1 className={"text-orange-900 text-5xl font-extralight text-left"} style={{fontFamily: 'Japanenglish'}}>Jasir Limani a Sotware Engineer</h1>
                <p className={"text-xl font-sans"}>I’m a software engineer specializing in web and mobile app development, building scalable and efficient solutions.</p>
                <Link to="/contact" className={"text-xl font-sans bg-yellow-500 text-white px-4 py-2 mt-4 tracking-widest"} style={{fontFamily: 'Japanenglish'}}>Contact</Link>
            </div>
            <img className={"h-[600px]"} src={Me} alt=""/>
            <h1></h1>
        </div>
    );
}

export default HeroSection;