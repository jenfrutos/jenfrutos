import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoOpenOutline } from 'react-icons/io5';


const Showcase = () => {
    const appsArray = [
        {
            title: "Misc-Apps",
            details: "React | CSS | Bootstrap",
            description: "Collection of apps made for fun: Retro Calculator, Random Activiy Generator, To-Do list",
            website: "https://miscapps.netlify.app"
        },
        {
            title: "The Glass Shop",
            details: "React | JavaScript | CSS | Bootstrap",
            description: "Mock site for a small business to showcase products and potentially increase customer base.",
            website: "https://genericshop.netlify.app"
        }
    ]

    return (
        <section>
            <Container className="showcase px-5" data-aos="fade-up" >
                <h2 id="showcase">Some Creations </h2>
                <Row className="justify-content-center">
                    {appsArray.map(app => {return(
                        <Col xs="12" md="4">
                        <a href={app.website} target="_blank" rel="noreferrer">
                            <Card className="showcase-card" >
                                <Card.Body>
                                    <Card.Title>
                                        {app.title} <IoOpenOutline />
                                    </Card.Title>
                                    <Card.Subtitle>
                                       {app.details}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {app.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    )})}
                </Row>
            </Container>
        </section>
    )
}

export default Showcase;

/* <a href="https://floramocksite.netlify.app" target="_blank" rel="noreferrer">
                    <Card className="showcase-card" >
                        <Card.Body>
                            <Card.Title>Flora <IoOpenOutline /></Card.Title>
                            <Card.Subtitle>React | Bootstrap</Card.Subtitle>
                            <Card.Text>Mock e-commerce site for a plants. Used simple design and relevant color scheme</Card.Text>
                        </Card.Body>
                    </Card>
                </a> */