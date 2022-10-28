onload = () => { document.querySelector('.navbarBox').classList.remove('scrollingDown'); }

const socialIcons = document.querySelectorAll('.socialIcons');
socialIcons[0].insertAdjacentHTML('afterbegin', githubIcon());
socialIcons[1].insertAdjacentHTML('afterbegin', twitterIcon());
socialIcons[2].insertAdjacentHTML('afterbegin', linkedinIcon());
socialIcons[3].insertAdjacentHTML('afterbegin', instagramIcon());

const technologiesList = document.querySelector('.technologiesList');
const technologies = [
    'JavaScript (ES6+)',
    'C#',
    'Node.js',
    'HTML',
    'CSS'
];
technologies.forEach(technology => {
    technologiesList.insertAdjacentHTML(
        'beforeend',
        `<li class="technologyItem">${technology}</li>`
        );
});