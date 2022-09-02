import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsFillArrowUpCircleFill, BsGithub, BsInstagram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

import EmailMe from "./emailForm";


const Overlay = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                <Modal.Header closeButton>
                    <Modal.Title>How Can I Help You?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmailMe />
                </Modal.Body>
            </Modal>
            <div className="socials">
                <a target="_blank" href="https://github.com/jenfrutos?tab=repositories"><BsGithub /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jennifer-frutos/"><AiFillLinkedin /></a>
                <a target="_blank" href="discordapp.com/users/rainbowweapon#9241"><FaDiscord /></a>
                <a target="_blank" href="https://www.instagram.com/rainbow_destruction/"><BsInstagram /></a>
                <a target="_blank" href="https://www.facebook.com/RainbowWeaponOfMassDestruction/"><BsFacebook /></a>
            </div>
            <a href="#nav" className="uparrow"><BsFillArrowUpCircleFill /></a>
            <a className="emailForm" type="button" onClick={handleShow}>jennifer.frutos92@gmail.com</a>

        </>
    )
}

export default Overlay;