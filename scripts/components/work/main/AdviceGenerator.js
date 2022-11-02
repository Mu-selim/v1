const AdviceGeneratorProject = () => {
    const imageLink = "images/projects/adviceGenerator.jpg";
    const repoLink = "https://github.com/Mu-selim/Advice-generator-app";
    const deploymentLink = "https://mu-selim.github.io/Advice-generator-app";
    
    return `
    <li class="featuredItems">
        <div class="projectContent">
            <div class="porjectImageBox">
                <img src="${imageLink}" alt="">
            </div>
            <div class="innerFeatured">
                <span class="featuredProjects">Featured Projects</span>
                <a class="featuredProjectTitle" href="${deploymentLink}" target="_blank"><h3>${"Advice Generator App"}</h3></a>
                <div class="featuredCard">
                    <p>
                        An advice generator app fetches 
                        <a class="toolsPackages" href="https://api.adviceslip.com" target="_blank" >Advice Slip API</a> 
                        and updates the UI with the new 
                        advice generated. It will help 
                        if you want to know a random quote.
                    </p>
                </div>
                <ul class="toolsList">
                    <li class="toolsItems">${"JavaScript"}</li>
                    <li class="toolsItems">${"API"}</li>
                    <li class="toolsItems">${"CSS"}</li>
                    <li class="toolsItems">${"HTML"}</li>
                </ul>
                <div class="linkIcons">
                    <a href="${repoLink}" target="_blank">
                        ${githubIcon()}
                    </a>
                    <a href="${deploymentLink}" target="_blank">
                        ${externalIcon()}
                    </a>
                </div>
            </div>
        </div>
    </li>`;
}