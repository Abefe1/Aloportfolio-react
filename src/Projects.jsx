
const Projects=()=>{
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
    
    
    return(
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
    )
}

export default Projects