import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Resume from '../assets/Resume2022-forWeb.pdf';
import EmailMe from "./emailForm";
import {BsSunFill, BsMoonFill} from 'react-icons/bs';
import {RiPlantFill} from 'react-icons/ri';
//import { motion } from "framer-motion"


const Header = () => {
    const [show, setShow] = useState(false);
    const [theme, setTheme] = useState(accessLocalStorage());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function accessLocalStorage(){
        let storedItems = localStorage.getItem("myTheme");
    
        if (storedItems) {
            return (storedItems);
        } else { return "neutral" }
    }

    const handleThemeSwitch = (e) =>{
        setTheme(e.currentTarget.value);
    }

    useEffect(() => {
        localStorage.setItem("myTheme", theme);
        document.body.className = theme;
    }, );

    return (
        <>
            <div className="bg-galaxy"></div>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                <Modal.Header closeButton>
                    <Modal.Title>How Can I Help You?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmailMe handleClose={handleClose} />
                </Modal.Body>
            </Modal>

            <Navbar id="nav" bg="transparent" expand="md" >
                <Container >
                    <Navbar.Toggle aria-controls="nav" />
                    <Navbar.Collapse id="nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#showcase">Showcase</Nav.Link>
                            <Nav.Link href={Resume} target="_blank" rel="noreferrer">Resume</Nav.Link>
                            <Nav.Link onClick={handleShow}>Contact Me</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="header" id="header">
                <Row className="justify-content-center">
                    <Col xs>
                        <h1 className="fs-sm-3">
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
                        <p className="introText">I'm a Fullstack Developer with an emphasis on FrontEnd Development. Here to help create responsive sites with the right vibe for your brand. </p>
                        <ButtonGroup aria-label="change theme">
                            <Button 
                                value="light"
                                onClick={handleThemeSwitch}>
                                    <BsSunFill/>
                            </Button>
                            <Button 
                                value="neutral"
                                onClick={handleThemeSwitch}>
                                    <RiPlantFill/>
                            </Button>
                            <Button 
                                value="dark"
                                onClick={handleThemeSwitch}>
                                    <BsMoonFill/>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Header;