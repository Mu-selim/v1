const mode = document.querySelector('.mode');
mode.addEventListener('click', ()=> {
    mode.classList.toggle('light');
    document.querySelector('body').classList.toggle('light-scroll');
    document.querySelector('.navbarBox').classList.toggle('light');
    document.querySelector('.listBox').classList.toggle('light');
    document.querySelector('.container').classList.toggle('light');
    document.querySelectorAll('.anchorNav').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.socialIcons').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.verticalLine').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelector('.emailText').classList.toggle('light');
    document.querySelector('.name').classList.toggle('light');
    document.querySelector('.description').classList.toggle('light');
    document.querySelector('.introBox p').classList.toggle('light');
    document.querySelector('.upwork').classList.toggle('light');
    document.querySelector('.checkGithub').classList.toggle('light');
    document.querySelector('.sectionHeading').classList.toggle('light');
    document.querySelector('.sectionLine').classList.toggle('light');
    document.querySelectorAll('.aboutText p').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.workPlaces').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.nanodegree').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.technologyItem').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelector('.personalImage').classList.toggle('light');
    document.querySelector('.experienceHeader').classList.toggle('light');
    document.querySelectorAll('.placesListItems').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelector('.placesInner').classList.toggle('light');
    document.querySelector('.workHeader').classList.toggle('light');
    document.querySelectorAll('.featuredProjectTitle').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.featuredCard').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.toolsList').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.linkIcons').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelector('.otherWorkHeader').classList.toggle('light');
    document.querySelectorAll('.grid').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.folderLinkIcon').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.gridProjectTitle').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.gridProjectDescription').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelectorAll('.gridProjectTechList').forEach(item => {
        item.classList.toggle('light');
    });
    document.querySelector('.showMore').classList.toggle('light');
    document.querySelector('.contactBox').classList.toggle('light');

    document.querySelector('.footer').classList.toggle('light');
    document.querySelector('.footerLink').classList.toggle('light');
});