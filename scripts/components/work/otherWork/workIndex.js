let projects = [];
for(let i = 0; i < 11; i++) {
    projects.push(personalWebsiteV1());
}

const initialProjects = () => {
    const workGridBox = document.querySelector('.workGridBox');
    workGridBox.innerHTML = "";

    for(let i = 0; i < Math.min(4, projects.length); i++) {
        workGridBox.insertAdjacentHTML('beforeend', projects[i]);
    }
}

const allProjects = () => {
    const workGridBox = document.querySelector('.workGridBox');
    workGridBox.innerHTML = "";

    for(let i = 0; i < projects.length; i++) {
        workGridBox.insertAdjacentHTML('beforeend', projects[i]);
    }
}

initialProjects();

const otherWork = document.querySelector('.otherWork');
otherWork.addEventListener('click', ()=> {
    const loader = document.querySelector('.LoadingBox div');
          loadText = document.querySelector('.showMore h3');
    loader.classList.add('buttonLoading');
    loadText.style.opacity = "0";
    setTimeout(() => {
        if (loadText.textContent == "Show More") {
            loadText.textContent = "Show Less";
            allProjects();
        } else {
            loadText.textContent = "Show More";
            initialProjects(); 
        }
        loader.classList.remove('buttonLoading');
        loadText.style.opacity = "1";
    }, 500);
});