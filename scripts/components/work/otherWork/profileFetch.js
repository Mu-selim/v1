const profileFetch = () => {
    const githubLink = "https://github.com/Mu-selim/GitHub-API-fetch",
          externalLink = "https://mu-selim.github.io/GitHub-API-fetch",
          projectTitle = "GitHub profile",
          projectDescription = "A simple look at your GitHub profile and repos. Includes data visualizations of your profile and starred repositories.";
    return `
    <div class="grid">
        <header class="folderLinkIcon">
            ${folderIcon()}
            <div class="gitExternalIcons">
                <a href="${githubLink}" target="_blank">
                    ${githubIcon()}
                </a>
                <a href="${externalLink}" target="_blank">
                    ${externalIcon()}
                </a>
            </div>
        </header>
        <h3 class="gridProjectTitle">${projectTitle}</h3>
        <p class="gridProjectDescription">${projectDescription}</p>
        <ul class="gridProjectTechList">
            <li>JavaScript</li>
            <li>API</li>
            <li>responsive</li>
        </ul>
    </div>`;
}