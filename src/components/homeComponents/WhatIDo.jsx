import React from 'react'
import './WhatIDo.css'

const WhatIDo = () => {
  return (
    <section className="abt-container" id="service">
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

  )
}

export default WhatIDo
