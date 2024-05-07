import React from 'react'
import Links from '../links/Links'
import './NavBar.css'

const NavBar = () => {
    // const path=[
    //     {to:"/", label:"Home"},
    //     {to:"/about", label:"About Me"},
    //     // {to:"/login", label:"Login", icon:<AiOutlineSetting/>},
    //     {to:"/projects", label:"Projects"},]
  return (
    <nav>
         
        <h1>ALO.</h1>
        <div className="linkswrapper">
            
            {/* <Links to={"/skills"} label={"Skills"} /> */}
            {/* <Links to={"/service"} label={"Services"} /> */}
            {/* <Links to={"/projectDiv"} label={"Projects"} /> */}
            <Links to={"/about"} label={"About Me"}  />
            <ul>
                
                <li key="Service"><a href="#service" className="navlink">Services</a></li>
                <li key="Skills"><a href="#skills" className="navlink">Skills</a></li>
                <li key="Project"><a href="#projects" className="navlink">Projects</a></li>
                <li key="Contact"><a href="#contact" className="navlink">Contact</a></li>
            </ul>
             
            {/* <Links to={"/contact"} label={"Contact"} /> */}
        </div>
        
        
        
    </nav>
  )
}

export default NavBar


 
 