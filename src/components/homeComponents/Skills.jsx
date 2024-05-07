import React from 'react'
import './Skills.css'

const Skills = () => {

    const skill=["./images/html.png","./images/css.png", "./images/javascript.png", "./images/ts.png",
            "./images/git.png", "./images/react.png", "./images/figma.png", "./images/illustrator.png",
            "./images/photoshop.png", "./images/indesign.png", "./images/node.png", "./images/java.png", 
            "./images/Springboot.png", "./images/python.jpg", "./images/mysql.png", "./images/postman.png"]

  return (
    <section className="skill-container" id="skills">
            <div className="skillHead">
                <h2>Skills</h2>
                <hr className="color"/>
            </div>

            
            <div className="skills-wrapper">
                {skill.map((link, index)=>{
                    return(<img key={index} style={{width:`100px`, height:`100px`}} className="card" src={link} alt="skilss"/>
                )})}
            </div>

        </section>


        
     
  )
}

export default Skills
