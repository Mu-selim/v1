const IntroSectionProject = () => {
    const imageLink = "https://user-images.githubusercontent.com/89293751/199070481-001bcb3f-38a4-48ea-a472-db4d1837cc57.jpg";
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