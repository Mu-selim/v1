const QRapp = () => {
    const githubLink = "https://github.com/Mu-selim/QR-attendance",
          externalLink = "https://mu-selim.github.io/Calculator/",
          projectTitle = "QR attendance app",
          projectDescription = "A QR application can be used to scan, generate, and record QR codes.";
    return `
    <div class="grid">
        <header class="folderLinkIcon">
            ${folderIcon()}
            <div class="gitExternalIcons">
                <a href="${githubLink}" target="_blank">
                    ${githubIcon()}
                </a>
            </div>
        </header>
        <h3 class="gridProjectTitle">${projectTitle}</h3>
        <p class="gridProjectDescription">${projectDescription}</p>
        <ul class="gridProjectTechList">
            <li>JavaScript</li>
            <li>Stack</li>
            <li>CSS</li>
        </ul>
    </div>`;
}