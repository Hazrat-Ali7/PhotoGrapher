import React from 'react';
import './About.css';
import myself from '../../images/Myself.jpg'

const About = () => {
    return (
        <div className='about'>
            <h2 className='text-center text-danger my-3'>About Me</h2>

            <div className='d-flex justify-content-center '>
                <img className='img-fluid rounded my-5' src={myself} alt="" />
            </div>

            <p className='container bg-light '>Hello, I am <span className='text-primary fs-4'><a href="https://www.linkedin.com/in/hazratali9/" target="blank">Hazrat Ali</a></span>.<br />I am currently pursuing BSC in CSE. I want to be a Software Engineer in near future.
Now I am currently a Mern Stack Seveloper and I have passion in web technologies. I am a fast learner and I am confident about myself.
I believe I can face chanllenges of this always changing tech industry.I am looking forward to face the upcoming challenges.Talking about my hobby I love to read
books related to programming and I love to develop things  with programming languages.Thanks for visiting my profile. </p>
        </div>
    );
};

export default About;