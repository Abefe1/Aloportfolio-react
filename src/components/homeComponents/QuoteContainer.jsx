import React from 'react'

import './QuoteContainer.css'

const QuoteContainer = () => {
  return (
    <section className='quoteSec'>
        <div className="qoute-container">
            <div className="qoute">
                <h1>Hi, I am..</h1>
            </div>
            <div className="qoute">
                <h1>Lukmon Akingbade</h1>
                <h2>An entry level Springboot developer and React developer</h2>
            </div>
            <div className="qoute" id="q1">
                <p>I am Currently expanding skills with React library, Node.js and TypeScript.
                    Eager to contribute technical prowess and creativity to drive innovative solutions in a dynamic development environment.</p>
            </div>
            <div className="contact-detail">
                {/* <h3>Get In Touch With Me</h3>
                <p>With a tenacious work ethic and wholehearted commitment, I eagerly look forward to channeling my dedication and interpersonal skills into a collaborative role.. Please feel free to contact me with any questions you may have or just to say hello!</p> */}
                <a href="mailto:lukmonakingbade@gmail.com"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/filled-message.png" alt="filled-message"/></a>
                <a href="https://github.com/Abefe1"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/github.png" alt="github"/></a>
                <a href="https://www.linkedin.com/in/lukmon-akingbade-b03795207/"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/linkedin--v1.png" alt="linkedin--v1"/></a>
                <a href="https://www.facebook.com/lukmon.a.olanrewaju"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/32B4FF/facebook.png" alt="twitter"/></a>

            </div>
            
            
        </div>
        
    </section>

  )
}

export default QuoteContainer
