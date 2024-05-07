import './About.css';

const About=()=> {

    return(
        <>
        <section className="headerAndHeroSection">
        
            <div className="heroSectionContainer">
                <div className="heroTextContainer">
                    <div className="nameAndProfessionContainer">
                        <div className="HelloNameContainer">
                            <h2>Hi!<span><img src="./Images/wave.svg" alt=""/></span>  I'm Lukmon!</h2>
                        </div>
                    </div>
        
                    <div className="descriptionTextContainer">
                        <p>I'm an entry-level front-end developer with a foundation in user experience design. My journey into development stems from a desire to actively participate in the product life cycle and transform design concepts into tangible, user-friendly experiences. I'm passionate about leveraging my dual skill set to create products that directly impact people's lives. In addition to my coding and pixel-perfect pursuits, you'll often find me immersed in books or lost in the world of music. My passion extends beyond pixels, I am ready to bring fresh ideas to the table and play a pivotal role in creating impactful digital experiences.</p>
                    </div>
                </div>

                <div className="buttonContainer">
                    <a href="#footer">
                        <button className="connectButton">Connect With Me</button>
                    </a>
                </div>
            </div>
    </section>


    <section className="footer" id="footer">
        <div className="footerContentsContainer">
            <div className="footerTopContentsContainer">
                <div className="footerLeftContentsContainer">
                    <div className="myNameContainer">
                        <h3>LUKMON AKINGBADE</h3>
                    </div>

                    <div className="myDescriptionContainer">
                        <p>Dedicated Frontend Web Developer specializing in crafting compelling and user-friendly interfaces for websites and web applications. Committed to enhancing overall product success through seamless and intuitive frontend experiences.</p>
                    </div>
                </div>

                <div className="footerRightContentsContainer">
                    <div className="footerSocialTextContainer">
                        <h3>SOCIALS</h3>
                    </div>

                    <div className="footerLinkImagesContainer">
                        <a href="mailto:preciousnwachukwu.c@gmail.com" className="socialLink" target="_blank">
                            <img src="./Images/basil_gmail-solid.svg" alt=""/>
                        </a>

                        <a href="https://github.com/Preshchukwu" className="socialLink" target="_blank">
                            <img className="socialIcon" src="./Images/ant-design_github-outlined.svg" alt=""/>
                        </a>

                        <a href="https://www.linkedin.com/in/preciouschukwu/" className="socialLink" target="_blank">
                            <img src="./Images/bi_linkedin.svg" alt=""/>
                        </a>

                        <a href="https://twitter.com/Presh_chukwu" className="socialLink" target="_blank">
                            <img src="./Images/pajamas_twitter.svg" alt=""/>
                        </a>

                        <a href="https://www.behance.net/preciouschukwu" className="socialLink" target="_blank">
                            <img src="./Images/mage_behance.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footerBottomContentsContainer">
                <div className="footerLineContainer">
                    <hr className="line"/>
                </div>

                <div className="copyRightContainer">
                    <p>&copy 2024. Made by Lukmon Akingbade</p>
                </div>
            </div>
        </div>
    </section>

    <section className="footerTwo" id="footerTwo">
        <div className="footerContentsContainer">
            <div className="footerTopContentsContainer">
                <div className="footerRightContentsContainer">
                    <div className="footerSocialTextContainer">
                        <h3>SOCIALS</h3>
                    </div>

                    <div className="footerLinkImagesContainer">
                        <a href="mailto:lukmonakingbade@gmail.com" className="socialLink" target="_blank">
                            <img src="./Images/basil_gmail-solid.svg" alt=""/>
                        </a>

                        <a href="https://github.com/Abefe1" className="socialLink" target="_blank">
                            <img className="socialIcon" src="./Images/ant-design_github-outlined.svg" alt=""/>
                        </a>

                        <a href="https://www.linkedin.com/in/preciouschukwu/" className="socialLink" target="_blank">
                            <img src="./Images/bi_linkedin.svg" alt=""/>
                        </a>

                        <a href="https://twitter.com/Presh_chukwu" className="socialLink" target="_blank">
                            <img src="./Images/pajamas_twitter.svg" alt=""/>
                        </a>

                        <a href="https://www.behance.net/preciouschukwu" className="socialLink" target="_blank">
                            <img src="./Images/mage_behance.svg" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="footerLeftContentsContainer">
                    <div className="myNameContainer">
                        <h3>LUKMON AKINGBADE</h3>
                    </div>

                    <div className="myDescriptionContainer">
                        <p>Dedicated Frontend Web Developer specializing in crafting compelling and user-friendly interfaces for websites and web applications. Committed to enhancing overall product success through seamless and intuitive frontend experiences.</p>
                    </div>
                </div>
            </div>

            <div className="footerBottomContentsContainer">
                <div className="footerLineContainer">
                    <hr className="line"/>
                </div>

                <div className="copyRightContainer">
                    <p>&copy 2024. Made by Lukmon Akingbade</p>
                </div>
            </div>
        </div>
    </section>
        
        </>


    )
    
}

export default About