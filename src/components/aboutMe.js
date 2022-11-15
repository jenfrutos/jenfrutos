import React, {useRef} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoSparklesSharp } from 'react-icons/io5';
import { motion, useScroll } from "framer-motion"

const About = () => {
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null);

    return (
        <Container className="about px-5" >
            
            <h2 id="about">About Me</h2>
            <Row className="justify-content-center" ref={scrollRef} >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <Col xs lg="4">
                    <img src={require('../assets/selfie.jpg')} alt="rainbow" className="about-img" />
                </Col>
                <Col xs lg="5">
                    <p><IoSparklesSharp /><span>F</span>ueled by  COFFEE , I recently completed a Full Stack bootcamp with Nucamp.I left my management position to pursue a career in Web Development. Here to make pretty things for the web, but my spare time includes short-lived hobbies and video games. Always tinkering and eager to learn something new. For those asking, I am an Aquarius <IoSparklesSharp /></p>
                </Col>
                </motion.div>
            </Row>
            
        </Container>
    )
}

export default About;