const profileCard = () => {
    const githubLink = "https://github.com/Mu-selim/profile-card-component",
          externalLink = "https://mu-selim.github.io/profile-card-component",
          projectTitle = "Card Component",
          projectDescription = "A personal card component shows the deployment of the information of a person.";
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
            <li>CSS</li>
            <li>HTML</li>
        </ul>
    </div>`;
}