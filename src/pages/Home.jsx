// import { useState } from 'react'
import './Home.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuoteContainer from '../components/homeComponents/QuoteContainer'
import WhatIDo from '../components/homeComponents/WhatIDo'
import Skills from '../components/homeComponents/Skills'
import ProjectsDiv from '../components/homeComponents/ProjectsDiv'
import Contact from '../components/homeComponents/Contact'



function Home() {

    
    
return (
    <>
        {/* <header> */}
            {/* <nav> */}
                {/* <h1>ALO.</h1> */}
                {/* <ul className="navigation"> */}
                    {/* <li key="About"><a href="./about.html" className="navlink">About</a></li>
                    <li key="Skills"><a href="#skills" className="navlink">Skills</a></li>
                    <li key="Project"><a href="#projects" className="navlink">Projects</a></li>
                    <li key="Contact"><a href="#contact" className="navlink">Contact</a></li> */}
                    {/* <li><a href="#resume" className="navlink">Resume</a></li> */}
                {/* </ul> */}
            {/* </nav> */}
            {/* </header> */}

        <main>
            
            
            
            



            
                    {/* <!-- connect with me --> */}

            
            {/* <section className="contact-container" id="contact">
                <div className="contact">
                    <h2>Contact</h2>
                    <hr className="color">
                </div>

                <div className="contact-details">
                    <h3>Get In Touch With Me</h3>
                    <p>With a tenacious work ethic and wholehearted commitment, I eagerly look forward to channeling my dedication and interpersonal skills into a collaborative role.. Please feel free to contact me with any questions you may have or just to say hello!</p>
                    <a href="mailto:lukmonakingbade@gmail.com"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/filled-message.png" alt="filled-message"/></a>
                    <a href="https://github.com/Abefe1"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/github.png" alt="github"/></a>
                    <a href="https://www.linkedin.com/in/lukmon-akingbade-b03795207/"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/linkedin--v1.png" alt="linkedin--v1"/></a>
                    <a href="https://www.facebook.com/lukmon.a.olanrewaju"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/facebook.png" alt="twitter"/></a>

                </div>
            </section> */}
            <QuoteContainer></QuoteContainer>
            <WhatIDo></WhatIDo>
            <Skills></Skills>
            <ProjectsDiv></ProjectsDiv>
            <Contact></Contact>
        </main>

        <footer>
            <div className="foot">
                Copyright &copy; Akingbade Lukmon 2024
            </div>
        </footer>
    

    </>
)
}

export default Home
