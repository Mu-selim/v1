const calculator = () => {
    const githubLink = "https://github.com/Mu-selim/Calculator",
          externalLink = "https://mu-selim.github.io/Calculator/",
          projectTitle = "Mathematical calculator",
          projectDescription = "A mathematical calculator built using stack data structure and Postfix expression \"Reverse Polish notation\"";
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
            <li>Stack</li>
            <li>CSS</li>
        </ul>
    </div>`;
}