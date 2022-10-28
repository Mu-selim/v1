// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', ()=> {
    let topY = document.documentElement.scrollTop || document.body.scrollTop;
    if(!document.querySelector('.hamburgerMenu').classList.contains('active')) {
        // detects new state and compares it with the new one
        const navbarBox = document.querySelector('.navbarBox');
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            navbarBox.classList.remove('scrollingDown');
        } else {
            navbarBox.classList.add('scrollingDown');
        }
        // saves the new position for iteration.
	    scrollPos = (document.body.getBoundingClientRect()).top;
    }
});