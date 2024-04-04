// import { useState } from 'react'
import './App.css'


function App() {

    const project=[{
        projectName:"Quote-Generator",
        projectDescription:"A random quote generator alongside its author and author's profession built with HTML, CSS and JavaScript.",
        projectLink:"https://abefe1.github.io/Quote-generator/quote-generator.html",
        projectImage:"./images/quote-generator.png"
    }, {
        projectName:"Ile Ounje",
        projectDescription:"A dummy website htmlFor a dummy company that specializes in Food  built as a className assignment in SAIL TECHTALENT.",
        projectLink:"https://abefe1.github.io/white-Webpage/white.html",
        projectImage:"./images/quote-generator.png"
    }, {
        projectName:"Age-Calculator",
        projectDescription:"An Age-Calculator built as a result of participation in frontendmentor.io. It was built with HTML, CSS and TypeScript.",
        projectLink:"https://abefe1.github.io/age-calculator/build/index.html",
        projectImage:"./images/month-with-days-error2.png"
    }, {
        projectName:"Tip-Calculator",
        projectDescription:"A random quote generator alongside its author and author's profession built with HTML, CSS and JavaScript.",
        projectLink:"https://abefe1.github.io/Tip-Calculator/tipcalculator.html",
        projectImage:"./images/calculator.png"
    }]

return (
    <>
    <header>
        <nav>
            <h1>ALO.</h1>
            <ul className="navigation">
                <li key="About"><a href="./about.html" className="navlink">About</a></li>
                <li key="Skills"><a href="#skills" className="navlink">Skills</a></li>
                <li key="Project"><a href="#projects" className="navlink">Projects</a></li>
                <li key="Contact"><a href="#contact" className="navlink">Contact</a></li>
                {/* <li><a href="#resume" className="navlink">Resume</a></li> */}
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <div className="qoute-container">
                <div className="qoute">
                    <p>Hi, I am..</p>
                </div>
                <div className="qoute">
                    <h1>Lukmon Akingbade</h1>
                    <h2>If the mind can visualize it, it can be achieved</h2>
                </div>
                <div className="qoute" id="q1">
                    <p>I am Currently expanding skills with React library, Node.js and TypeScript.
                        Eager to contribute technical prowess and creativity to drive innovative solutions in a dynamic development environment.</p>
                </div>
                
            </div>
        </section>

        <section className="abt-container" id="about">
            <div className="abt-head">
                <h2>What I do</h2>
                <hr className="color"/>
            </div>
            <div className="abt-mini-container">
                <div className="stack" id="front-end">
                    <h2>Frontend Development</h2>
                    <div  className="stackp">
                        <p>Adept at frontend development with proficiency in CSS, 
                            HTML, and JavaScript, complemented by a keen understanding of UI
                            and graphics design principles which is contributing to my holistic 
                            understanding of the software development lifecycle.</p>

                    </div>
                    
                </div>
                <div className="stack" id="backend">
                    <h2>Backend Development</h2>
                    <div className="stackp">
                        <p>I am a results-oriented developer with a good foundation in Java and the Spring Boot framework htmlFor backend development, and python programming language.
                            Proven track record of success in designing and implementing robust backend solutions,
                            exemplified by key achievements in developing Library Management System (LMS) 
                            and student registration backend projects. </p>
                    </div>

                </div>


                {/* <div id="abt-qoute">
                    <p>Hi, I am Lukmon, an entry level software developer with a Bsc(ed) in Mathematics.
                        I am currently a tech mentee at SAIL INNOVATIVE LAB where I have been able to hone my skills in HTML,
                        CSS, JavaScript, Typescript, React.js and Node.js.</p>
                    <br>
                    
                    <p><br>
                    <p>I look forward to exciting new challenges and opportunities ahead.</p>
                    <br>

                    <p>I have great interest in Reading, Technology, Learning, Teaching, and Food .</p>
                    
                </div>  */}
            </div>
        </section>
        
        <section className="skill-container" id="skills">
            <div className="skill-head">
                <h2>Skills</h2>
                <hr className="color"/>
            </div>

            <div className="skill-wrapper">
                <img className="card" width="100" height="100" src="./images/html.png" alt="html-5--v1"/>
                <img className="card" width="100" height="100" src="./images/css.png" alt="css3"/>
                <img className="card" width="100" height="100" src="./images/javascript.png" alt="javascript--v1"/>
                <img className="card" width="100" height="100" src="./images/ts.png" alt="TS"/>
                <img className="card" width="100" height="100" src="./images/git.png" alt="git"/>
                <img className="card" width="100" height="100" src="./images/react.png" alt="React"/>
                <img className="card" width="100" height="100" src="./images/figma.png" alt="FIGMA"/>
                <img className="card" width="100" height="100" src="./images/illustrator.png" alt="MySQL"/>
                <img className="card" width="100" height="100" src="./images/photoshop.png" alt="postman"/>
                <img className="card" width="100" height="100" src="./images/indesign.png" alt="postman"/>

                <img className="card" width="100" height="100" src="./images/node.png" alt="Node"/>
                <img className="card" width="100" height="100" src="./images/java.png" alt="java"/>
                <img className="card" width="100" height="100" src="./images/Springboot.png" alt="SPRING"/>
                <img className="card" width="100" height="100" src="./images/python.jpg" alt="python"/>
                <img className="card" width="100" height="100" src="./images/mysql.png" alt="MySQL"/>
                <img className="card" width="100" height="100" src="./images/postman.png" alt="postman"/>
                
            </div>

        </section>

        <section className="project-head" id="projects">
            <div className="project">
                <h2>Some of my recent projects</h2>
                <hr className="color"/>
            </div>

            <div className="projects-container">

                {project.map((card, index)=>{
                    return(
                        <div key={index} className="project-container project-card">
                    {/* <div className="project-display">  */}
                        <div className="p-image" style={{backgroundImage:`url(${card.projectImage})`, backgroundRepeat:`no-repeat`, backgroundPosition:`center`, backgroundSize:`cover`}}> 
                        {/* <img src="./images/quote-generator.png" alt="Home-Schooling" loading="lazy" className="project-pic"/>  */}
                        </div>
                    
                    {/* </div> */}
                    <div className="project-text">
                    <div className="projectText"><h3 className="project-title"> {card.projectName}</h3>
                        <p className="project-details"> {card.projectDescription}</p>
                        </div>
                        <div className="view"><a href= {card.projectLink} target="_blank" className="project-link"><button>View</button></a></div>
                        {/* <!-- <a href="https://github.com/Abefe1/Quote-generator" target="_blank" className="project-link"><img src="https://img.icons8.com/material-rounded/24/32B4FF/github.png" alt="Github Repo link" ></a> */}
                        {/* <a href="https://abefe1.github.io/Quote-generator/quote-generator.html" target="_blank" className="project-link"><img width="24" height="24" src="./images/icons8-external-link-26.png" alt="Deployment link" style="height: 20px; width: 20px;"></a> --> */}
                    </div>
                    
                </div>
                        

                    )
                })}

                
            </div>
            <a  className="project-link" style={{marginTop:`5rem`, backgroundColor:`transparent`, }} href=""><button style={{backgroundColor:`#32B4FF`,color:`white`, borderRadius:`5px`, padding:`10px`}}>View more</button></a>
        </section>




        
                {/* <!-- connect with me --> */}

        <section className="connectWithMeSection" id="connect">
            <div className="contact">
                <h2>Contact</h2>
                <hr className="color"/>
            </div>

            <div className="connectWithMeSectionContentsContainer">
                <div className="connectWithMeTopSection">
                    <div className="connectWithMeTextContainer">
                        <h2>Connect With Me</h2>
                    </div>

                    <div className="connectWithMeDescriptionTextContainer">
                        <p>Got an idea that's begging to break free? Shoot me a message, let's craft something epic together!</p>
                    </div>
                </div>

                

                <div className="connectWithMeBottomSection" id="contact">
                    <div className="connectWithMeBottomLeftContainer">
                        <form action="https://api.web3forms.com/submit" method="POST" className="form" id="form">
                            <div className="formContents">

                                <input type="hidden" name="access_key" value="154cf22a-5a0e-44b8-aa10-1f3eea8bcf99"/>
    
                                <div  className="contactcontainer" id="nameContainer">
                                    <label htmlFor="yourName"> Enter Your Name</label>
                                    <input className="nameInputField" type="text" id="yourName" name="Name" placeholder="Name"/>
                                </div>
        
                                <div className="contactcontainer" id="emailContainer">
                                    <label htmlFor="yourEmail"> Enter Your Email Address</label>
                                    <input className="emailInputField" type="email" id="yourEmail" name="email" placeholder="Email Address"/>
                                </div>
            
                                <div  id="textAreaContainer">
                                    <label htmlFor="yourMessage"> Enter Your Message</label>
                                    <textarea className="textareaInputField" name="message" placeholder="Your Message" id="yourMessage" cols="30" rows="10"></textarea>
                                </div>
                            </div>
    
                            <button type="submit" className="sendMessageButton" id="inputButton"> Send Message</button>
                        
                        </form>
                    </div>
    
                    <div className="connectWithMeBottomRightContainer">
    
                    </div>
                </div>
            </div>
            
        </section>
    

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
    </main>

    <footer>
        <div className="footer">
            Copyright &copy; Akingbade Lukmon 2024
        </div>
    </footer>
    

    </>
)
}

export default App
