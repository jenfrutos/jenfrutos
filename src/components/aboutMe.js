import { IoSparklesSharp } from 'react-icons/io5';
import { TbZodiacAquarius } from 'react-icons/tb';

const About = () => {
    return (
        <div className="container about" id="about">
            <div className="about-item">
                <text ><span>F</span>ueled by <IoSparklesSharp /> COFFEE <IoSparklesSharp />, I recently completed a Full Stack bootcamp course with Nucamp. Here to make pretty things for the web. I left my management position in order to pursue a career in Web Development.  Spare time includes short-lived hobbies and video games. My spirit animal is a probably a sloth, but I get things done a lot faster. For those Gen Z's asking, I am an Aquarius <TbZodiacAquarius /></text>
            </div>
            <div className="about-item">
                <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="rainbow" className="about-img" />
            </div>
        </div>
    )
}

export default About;