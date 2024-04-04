import './About.css';

function About() {

    return(
        <>
            <section className="headerAndHeroSection">
        <div className="headerContainer">
            <div className="imageAndNameContainer">
                <div className="imgContainer">
                    <a href="./index.html" className="imageContainer">
                        <img src="./Images/Myimg.svg" alt=""/>
                    </a>
                </div>

                <div className="nameContainer">
                    <a href="./index.html" className="nameContainer">
                        <h3 className="preciousText">Precious</h3>
                    </a>
                </div>
            </div>

            <div className="menuContainer" id="menu" >
                <img className="menu" src="./Images/menu.svg" alt=""/>
            </div>

            <div className="navigationLinksContainer" id="navigationLinksContainer">
                <a href="#projectSection" className="projectLink" id="projectLink">
                    <h3>My Projects</h3>
                </a>
                
                <a href="./about.html" className="AboutMeLink">
                    <h3>About Me</h3>
                </a>

                <a href="https://docs.google.com/document/d/1OpAwYGPbY8fpR_0Kz1lWVcY2Jhhxv4LR/edit?usp=drivesdk&ouid=111677626397766657124&rtpof=true&sd=true" className="ResumeLink" target="_blank">
                    <h3>Resume</h3>
                </a>
            </div>

            <div className="navigationLinksContainerTwo" id="navigationLinksContainerTwo">
                <div className="iconContainer" id="closeIcon">
                    <img src="./Images/close.svg" alt=""/>
                </div>

                <div className="navTwoContainer">
                    <a href="./index.html#projectSection" className="projectLink" id="projectLink">
                        <h3>My Projects</h3>
                    </a>
                    
                    <a href="./about.html" className="AboutMeLink">
                        <h3>About Me</h3>
                    </a>
    
                    <a href="https://drive.google.com/file/d/1udY_4QsoIFceXRAvXUTf9UU8ijFdbMK0/view?usp=drivesdk" className="ResumeLink" target="_blank">
                        <h3>Resume</h3>
                    </a>
                </div>
            </div>
        </div>


        <div className="heroSectionContainer">
            <div className="heroTextContainer">
                <div className="nameAndProfessionContainer">
                    <div className="HelloNameContainer">
                        <h2>Hi!<span><img src="./Images/wave.svg" alt=""/></span>  I'm Precious!</h2>
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
                        <h3>PRECIOUS NWACHUKWU</h3>
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
                    <p>&copy 2024. Made by Precious Nwachukwu</p>
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

                <div className="footerLeftContentsContainer">
                    <div className="myNameContainer">
                        <h3>PRECIOUS NWACHUKWU</h3>
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
                    <p>&copy 2024. Made by Precious Nwachukwu</p>
                </div>
            </div>
        </div>
    </section>
        
        </>


    )
    
}

export default About