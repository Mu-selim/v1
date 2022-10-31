const AdviceGeneratorProject = () => {
    const imageLink = "https://user-images.githubusercontent.com/89293751/199070472-d2d5bdb3-d25d-44fe-8a34-0162202def2b.jpg";
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