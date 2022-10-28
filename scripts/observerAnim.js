const aboutBox = document.querySelector('.aboutBox');

let aboutobserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const {isIntersecting} = entry;
    if (isIntersecting) {
        console.log('yes');
        aboutBox.classList.add('animation');
        aboutobserver.unobserve(aboutBox);
    }
});
aboutobserver.observe(aboutBox);