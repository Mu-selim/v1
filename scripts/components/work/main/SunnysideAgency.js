const SunnysideProject = () => {
    const imageLink = "https://user-images.githubusercontent.com/89293751/199070486-6a31394d-f871-4a7c-9c3e-8dc8c0e667d9.jpg";
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