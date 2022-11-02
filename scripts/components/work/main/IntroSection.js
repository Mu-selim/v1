const IntroSectionProject = () => {
    const imageLink = "images/projects/IntroSection.jpg";
    const repoLink = "https://github.com/Mu-selim/Intro-section-with-dropdown-navigation";
    const deploymentLink = "https://mu-selim.github.io/Intro-section-with-dropdown-navigation/";
    
    return `
    <li class="featuredItems">
        <div class="projectContent">
            <div class="porjectImageBox">
                <img src="${imageLink}" alt="">
            </div>
            <div class="innerFeatured">
                <span class="featuredProjects">Featured Projects</span>
                <a class="featuredProjectTitle" href="${deploymentLink}" target="_blank"><h3>${"Intro Section"}</h3></a>
                <div class="featuredCard">
                    <p>
                        A single-page web page for the introduction section 
                        with dropdown navigation and a responsive navigation bar too. 
                        <a class="toolsPackages" href="" target="_blank" ></a>
                    </p>
                </div>
                <ul class="toolsList">
                    <li class="toolsItems">${"HTML"}</li>
                    <li class="toolsItems">${"CSS"}</li>
                    <li class="toolsItems">${"JavaScript"}</li>
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