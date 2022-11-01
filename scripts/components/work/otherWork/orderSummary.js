const orderSummary  = () => {
    const githubLink = "https://github.com/Mu-selim/Order-summary-component",
          externalLink = "https://mu-selim.github.io/Order-summary-component/",
          projectTitle = "Order Summary",
          projectDescription = "An order summary component shows the deployment of a payment web page.";
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