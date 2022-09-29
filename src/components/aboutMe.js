import { IoSparklesSharp } from 'react-icons/io5';
import { TbZodiacAquarius } from 'react-icons/tb';

const About = () => {
    return (
        <>
            <h2 id="about">Who Am I?</h2>
            <div className="container about" >
                <div className="about-item">
                    <p ><span>F</span>ueled by <IoSparklesSharp /> COFFEE <IoSparklesSharp />, I recently completed a Full Stack bootcamp with Nucamp.I left my management position to pursue a career in Web Development. Here to make pretty things for the web, but my spare time includes short-lived hobbies and video games. Always tinkering and eager to learn something new. For those asking, I am an Aquarius <TbZodiacAquarius /></p>
                </div>
                <div className="about-item">
                    <img src={require('../assets/selfie.jpg')} alt="rainbow" className="about-img" />
                </div>
            </div>
        </>
    )
}

export default About;