const otherWorkProjects = () => {
    let projects = [];
    for(let i = 0; i < 11; i++) {
        projects.push(personalWebsiteV1());
    }
    const workGridBox = document.querySelector('.workGridBox');

    for(let i = 0; i < 5; i++) {
        workGridBox.insertAdjacentHTML('beforeend', projects[i]);
    }

    // for(let i = 5; i < projects.length; i++) {
    //     projects.push(personalWebsiteV1());
    // }
}

otherWorkProjects();

const otherWork = document.querySelector('.otherWork');
otherWork.addEventListener('click', ()=> {
    
})
document.querySelector('.LoadingBox div').classList.add('buttonLoading');