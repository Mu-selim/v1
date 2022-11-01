const personalWebsiteV1 = () => {
    const folderLink = "",
          githubLink = "",
          externalLink = "",
          projectTitle = "Personal Website V1",
          projectDescription = "Second iteration of my personal website. Designed and developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.";
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
            <li>Js</li>
            <li>GitHub API</li>
            <li>CSS</li>
            <li>HTML</li>
        </ul>
    </div>`;
}