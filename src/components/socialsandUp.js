import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillArrowUpCircleFill, BsGithub } from 'react-icons/bs';



const Overlay = () => {
    return (
        <div className="overlay">

            <div className="socials">
                <a target="_blank" rel="noreferrer" href="https://github.com/jenfrutos?tab=repositories"><BsGithub /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jennifer-frutos/"><AiFillLinkedin /></a>
            </div>
            <a href="/#nav" className="uparrow"><BsFillArrowUpCircleFill /></a>

        </div>
    )
}

export default Overlay;