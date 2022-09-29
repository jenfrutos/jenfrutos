import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillArrowUpCircleFill, BsGithub } from 'react-icons/bs';

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
                    <EmailMe handleClose={handleClose} />
                </Modal.Body>
            </Modal>

            <div className="socials">
                <a target="_blank" rel="noreferrer" href="https://github.com/jenfrutos?tab=repositories"><BsGithub /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jennifer-frutos/"><AiFillLinkedin /></a>
            </div>
            <a href="/#nav" className="uparrow"><BsFillArrowUpCircleFill /></a>
            <button className="emailForm" onClick={handleShow}>Contact Me!</button>

        </>
    )
}

export default Overlay;