import React from "react";
import About from "./aboutMe";
import Header from "./header";
import Showcase from "./showcase";
import Overlay from "./socialsandUp";

const Main = () => {
    return (
        <div>
            <Overlay />
            <Header />
            <About />
            <Showcase />

        </div>
    )
}

export default Main;