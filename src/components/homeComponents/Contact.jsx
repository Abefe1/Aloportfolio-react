import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
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
                    <form action="https://formspree.io/f/mzzpqldq" method="POST" className="form" id="form">
                        <div className="formContents">

                            <input type="hidden" name="access_key" value="154cf22a-5a0e-44b8-aa10-1f3eea8bcf99"/>

                            <div  className="contactcontainers" id="nameContainer">
                                <label htmlFor="yourName"> Enter Your Name</label>
                                <input className="nameInputField" type="text" id="yourName" name="Name" placeholder="Name"/>
                            </div>

                            <div className="contactcontainers" id="emailContainer">
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

                 
            </div>
        </div>
        
    </section>


  )
}

export default Contact
