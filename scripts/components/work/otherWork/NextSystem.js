const nextSysytem = () => {
    const githubLink = "https://github.com/Mu-selim/Empolyee-Management-System-Next",
          externalLink = "",
          projectTitle = "Next Mangement System",
          projectDescription = "An employee management system windows application which is built and released using (C#) .net framework and MS SQL server.";
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
            <li>C#</li>
            <li>MSSQL</li>
            <li>.NET framework</li>
        </ul>
    </div>`;
}