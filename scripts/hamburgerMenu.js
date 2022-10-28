const hamburgerMenu = document.querySelector('.hamburgerMenu');
const listItem = document.querySelectorAll('.listItem');
hamburgerMenu.addEventListener('click', ()=> {
    hamburgerMenu.classList.toggle('active');
    document.querySelector('.listBox').classList.toggle('active');
    document.querySelector('.container').classList.toggle('active-blur');
});

listItem.forEach((item, index) => {
    item.addEventListener('click', ()=> {
        document.querySelector('.listBox').classList.remove('active');
        hamburgerMenu.classList.remove('active');
        document.querySelector('.container').classList.remove('active-blur');
    });
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('active-blur')) {
        hamburgerMenu.classList.remove('active');
        document.querySelector('.listBox').classList.remove('active');
        document.querySelector('.container').classList.remove('active-blur');
    }
});