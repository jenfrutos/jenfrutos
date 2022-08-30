import React from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsFillArrowUpCircleFill, BsGithub, BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { RiAliensFill } from 'react-icons/ri';
const Header = () => {
    return (
        <>
            <div className="header" id="header">
                <nav id="nav">
                    <a href="#about">About</a> |
                    <a href="#showcase">Showcase</a> |
                    <a className="resume" target="_blank" href="../assets/Resume2022webDev.pdf">Resume</a>
                </nav>
                <div className="banner">
                    <h1>
                        <span className="letter-effect">H</span>
                        <span className="letter-effect">i, </span>
                        <span className="letter-effect">I'</span>
                        <span className="letter-effect">m </span>
                        <span className="letter-effect">J</span>
                        <span className="letter-effect">e</span>
                        <span className="letter-effect">n.</span>
                    </h1>
                    <div id="intro">
                        <text className="introText">Fullstack Developer with an emphasis on the FrontEnd Development. Here to help you find the right vibe for your website. <RiAliensFill style={{ fontSize: "2rem" }} /> </text>
                    </div>
                </div>
            </div>
            <div className="socials">
                <a target="_blank" href="https://github.com/jenfrutos?tab=repositories"><BsGithub /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jennifer-frutos/"><AiFillLinkedin /></a>
                <a target="_blank" href="discordapp.com/users/rainbowweapon#9241"><FaDiscord /></a>
                <a target="_blank" href="https://www.instagram.com/rainbow_destruction/"><BsInstagram /></a>
                <a target="_blank" href="https://www.facebook.com/RainbowWeaponOfMassDestruction/"><BsFacebook /></a>
            </div>
            <a href="#nav" className="uparrow"><BsFillArrowUpCircleFill /></a>
        </>
    )
}

export default Header;