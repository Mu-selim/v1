const weatherApp = () => {
    const githubLink = "https://github.com/Mu-selim/Weather-Journal-App",
          externalLink = "https://weather-journal-app-js.herokuapp.com/",
          projectTitle = "Weather App",
          projectDescription = "An asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.";
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
            <li>OpenWeather API</li>
            <li>CSS</li>
        </ul>
    </div>`;
}