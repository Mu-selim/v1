const microsoftPortfolio  = () => {
    const githubLink = "https://github.com/Mu-selim/microsoft-portfolio",
          externalLink = "https://mu-selim.github.io/microsoft-portfolio",
          projectTitle = "Microsoft Portfolio",
          projectDescription = "A digital resume with a Microsoft windows theme.";
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
            <li>CSS</li>
            <li>HTML</li>
        </ul>
    </div>`;
}