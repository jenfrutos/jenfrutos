import React from "react";
import { RiAliensFill } from 'react-icons/ri';
import Resume from '../assets/Resume2022-forWeb.pdf';


const Header = () => {


    return (
        <><div className="bg-galaxy"></div>
            <div className="header" id="header">

                <nav id="nav">
                    <a href="/#about">About</a> |
                    <a href="/#showcase">Showcase</a> |
                    <a className="resume" target="_blank" rel="noreferrer" href={Resume}>Resume</a>
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
                        <p className="introText">I'm a Fullstack Developer with an emphasis on FrontEnd Development. Here to help create responsive sites with the right vibe for your brand. <RiAliensFill style={{ fontSize: "2rem" }} /> </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;