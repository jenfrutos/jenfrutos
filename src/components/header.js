import React from "react";
import { RiAliensFill } from 'react-icons/ri';
import Resume from '../assets/Resume2022webDev.pdf';


const Header = () => {


    return (
        <><div className="bg-galaxy"></div>
            <div className="header" id="header">

                <nav id="nav">
                    <a href="#about">About</a> |
                    <a href="#showcase">Showcase</a> |
                    <a className="resume" target="_blank" href={Resume}>Resume</a>
                </nav>
                <div className="banner">
                    <h1>
                        <span className="letter-effect">H</span>
                        <span className="letter-effect">i</span>
                        <span className="letter-effect">,&nbsp;</span>
                        <span className="letter-effect"> I</span>
                        <span className="letter-effect">'</span>
                        <span className="letter-effect">m&nbsp;</span>
                        <span className="letter-effect">J</span>
                        <span className="letter-effect">e</span>
                        <span className="letter-effect">n</span>
                        <span className="letter-effect">.</span>
                    </h1>
                    <div id="intro">
                        <text className="introText">Fullstack Developer with an emphasis on FrontEnd Development. Here to help you find the right vibe for your website. <RiAliensFill style={{ fontSize: "2rem" }} /> </text>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;