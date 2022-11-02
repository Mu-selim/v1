onload = ()=> {
    document.querySelector('body').classList.add(localStorage.getItem('pageTheme'));
}

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

const placesListItem = document.querySelector('.placesListItems');
placesListItem.classList.add('active');
document.querySelector('.placesInner').insertAdjacentHTML('afterbegin', gmind());

const featuredList = document.querySelector('.featuredList');
featuredList.insertAdjacentHTML('beforeend', LoopStudiosProject());
featuredList.insertAdjacentHTML('beforeend', AdviceGeneratorProject());
featuredList.insertAdjacentHTML('beforeend', SunnysideProject());
featuredList.insertAdjacentHTML('beforeend', IntroSectionProject());


const githubStarFork = () => {
    const githubStars = document.querySelector('.githubStars');
    let component = `
    <span class="starIcon">
        ${starIcon()}
        <span class="starCount"></span>
    </span>`;
    githubStars.insertAdjacentHTML('beforeend', component);

    component = `
    <span class="forkIcon">
        ${forkIcon()}
        <span class="forkCount"></span>
    </span>`;
    githubStars.insertAdjacentHTML('beforeend', component);
}

githubStarFork();