const SunnysideProject = () => {
    const imageLink = "images/projects/SunnysideLandingPage.jpg";
    const repoLink = "https://github.com/Mu-selim/Sunnyside-landing-page";
    const deploymentLink = "https://mu-selim.github.io/Sunnyside-landing-page/";
    
    return `
    <li class="featuredItems">
        <div class="projectContent">
            <div class="porjectImageBox">
                <img src="${imageLink}" alt="">
            </div>
            <div class="innerFeatured">
                <span class="featuredProjects">Featured Projects</span>
                <a class="featuredProjectTitle" href="${deploymentLink}" target="_blank"><h3>${"Sunnyside agency"}</h3></a>
                <div class="featuredCard">
                    <p>
                        A frontend mentor challenge, the Landing page helps 
                        marketers achieve various objectives as a result 
                        of numerous marketing goals.
                        <a class="toolsPackages" href="" target="_blank"></a>
                    </p>
                </div>
                <ul class="toolsList">
                    <li class="toolsItems">${"JavaScript"}</li>
                    <li class="toolsItems">${"CSS"}</li>
                    <li class="toolsItems">${"HTML"}</li>
                    <li class="toolsItems">${"Styled Components"}</li>
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