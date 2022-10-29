const aboutBox = document.querySelector('.aboutBox');
const experienceBox = document.querySelector('.experienceBox');

let aboutObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const {isIntersecting} = entry;
    if (isIntersecting) {
        // console.log('yes');
        aboutBox.classList.add('animation');
        aboutObserver.unobserve(aboutBox);
    }
});

let experienceObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const {isIntersecting} = entry;
    if (isIntersecting) {
        // console.log('yes');
        experienceBox.classList.add('animation');
        experienceObserver.unobserve(aboutBox);
    }
});

aboutObserver.observe(aboutBox);
experienceObserver.observe(experienceBox);