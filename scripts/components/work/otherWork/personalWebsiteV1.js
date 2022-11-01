const personalWebsiteV1 = () => {
    const githubLink = "",
          externalLink = "",
          projectTitle = "Personal Website V1",
          projectDescription = "The first iteration of my personal website. Developed with pure javascript, CSS, and HTML.";
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
            <li>GitHub API</li>
            <li>CSS</li>
            <li>HTML</li>
        </ul>
    </div>`;
}