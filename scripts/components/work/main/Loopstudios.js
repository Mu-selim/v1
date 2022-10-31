const LoopStudiosProject = () => {

    const imageLink = "https://user-images.githubusercontent.com/89293751/198900434-091889e4-3c1d-46ac-93e2-5cf69ad57f8f.jpg";
    const repoLink = "https://github.com/Mu-selim/Loopstudios-landing-page";
    const deploymentLink = "https://mu-selim.github.io/Loopstudios-landing-page";

    return `
    <li class="featuredItems">
        <div class="projectContent">
            <div class="porjectImageBox">
                <img src="${imageLink}" alt="">
            </div>
            <div class="innerFeatured">
                <span class="featuredProjects">Featured Projects</span>
                <a class="featuredProjectTitle" href="${deploymentLink}" target="_blank"><h3>${"Loopstudios"}</h3></a>
                <div class="featuredCard">
                    <p>
                        
                        <a class="toolsPackages" href="" target="_blank" ></a>
                        A static landing page covers mostly all screen sizes, built using HTML, CSS and Vanilla javascript.
                    </p>
                </div>
                <ul class="toolsList">
                    <li class="toolsItems">${"JavaScript"}</li>
                    <li class="toolsItems">${"CSS"}</li>
                    <li class="toolsItems">${"HTML"}</li>
                    <li class="toolsItems">${"Responsive"}</li>
                    <li class="toolsItems">${"flexbox & grid"}</li>
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