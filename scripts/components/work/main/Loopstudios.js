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
                        A minimal, dark blue theme for VS Code, 
                        Sublime Text, Atom, iTerm, and more. 
                        Available on Visual Studio Marketplace, 
                        Package Control, Atom Package Manager, 
                        and 
                        <a class="toolsPackages" href="" target="_blank" >npm</a>
                        .
                    </p>
                </div>
                <ul class="toolsList">
                    <li class="toolsItems">${"JavaScript"}</li>
                    <li class="toolsItems">${"CSS"}</li>
                    <li class="toolsItems">${"HTML"}</li>
                    <li class="toolsItems">${"Responsive"}</li>
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