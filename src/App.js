import Aos from "aos";
import 'aos/dist/aos.css';
import React, {useEffect, useRef, useState} from "react";
import About from "./components/aboutMe";
import Header from "./components/header";
import Showcase from "./components/showcase";
import Overlay from "./components/socialsandUp";
import './vibes.css';

function App() {
  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

    return (
        <>
            <Overlay />
            <Header />
            <About />
            <Showcase />
        </>
    );
}

export default App;
