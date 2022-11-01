const udacityLandingPage  = () => {
    const githubLink = "https://github.com/Mu-selim/landing-page-udacity",
          externalLink = "https://mu-selim.github.io/landing-page-udacity",
          projectTitle = "Udacity Landing Page",
          projectDescription = "The first project in FWD professional web program to apply the knowledge of JavaScript and the Document Object Model (DOM) by buliding a multi-section page with a dynamically navigation menu.";
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
            <li>DOM</li>
            <li>dynamic navigation</li>
            <li>responsive</li>
        </ul>
    </div>`;
}