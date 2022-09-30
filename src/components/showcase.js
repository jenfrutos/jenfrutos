import React from "react";
import Card from 'react-bootstrap/Card';
import { IoOpenOutline } from 'react-icons/io5';
const Showcase = () => {

    return (
        <>
            <h2 id="showcase">Some Creations </h2>
            <div className="container showcase" >
                {/* <a href="https://floramocksite.netlify.app" target="_blank" rel="noreferrer">
                    <Card className="showcase-card" >
                        <Card.Body>
                            <Card.Title>Flora <IoOpenOutline /></Card.Title>
                            <Card.Subtitle>React | Bootstrap</Card.Subtitle>
                            <Card.Text>Mock e-commerce site for a plants. Used simple design and relevant color scheme</Card.Text>
                        </Card.Body>
                    </Card>
                </a> */}
                <a href="https://genericshop.netlify.app" target="_blank" rel="noreferrer">
                    <Card className="showcase-card" >
                        <Card.Body>
                            <Card.Title>The Glass Shop <IoOpenOutline /></Card.Title>
                            <Card.Subtitle>React | Bootstrap | CSS</Card.Subtitle>
                            <Card.Text>Mock site for a small business to showcase products and potentially increase customer base.</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href="https://miscapps.netlify.app" target="_blank" rel="noreferrer">
                    <Card className="showcase-card" >
                        <Card.Body>
                            <Card.Title>Misc-Apps <IoOpenOutline /></Card.Title>
                            <Card.Subtitle>React | JavaScript | CSS | Bootstrap</Card.Subtitle>
                            <Card.Text>Collection of apps made for fun: Retro Calculator, Random Activiy Generator, To-Do list</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>

        </>

    )
}

export default Showcase;