const podcastApp  = () => {
    const githubLink = "https://github.com/Mu-selim/Simple-Podcast-Website",
          externalLink = "https://mu-selim.github.io/Simple-Podcast-Website",
          projectTitle = "Podcast App",
          projectDescription = "simple podcast website displays a test of the podcast with an active class using JavaScript.";
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