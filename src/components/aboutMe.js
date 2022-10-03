import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoSparklesSharp } from 'react-icons/io5';
import { TbZodiacAquarius } from 'react-icons/tb';

const About = () => {
    return (
        <Container className="about px-5" >
            <h2 id="about">Who Am I?</h2>
            <Row className="justify-content-center">
                <Col xs lg="4" className="text-center">
                    <img src={require('../assets/selfie.jpg')} alt="rainbow" className="about-img" />
                </Col>
                <Col xs lg="5">
                    <p><span>F</span>ueled by <IoSparklesSharp /> COFFEE <IoSparklesSharp />, I recently completed a Full Stack bootcamp with Nucamp.I left my management position to pursue a career in Web Development. Here to make pretty things for the web, but my spare time includes short-lived hobbies and video games. Always tinkering and eager to learn something new. For those asking, I am an Aquarius <TbZodiacAquarius /></p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;