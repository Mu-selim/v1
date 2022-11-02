let theme;
const isLight = () => {
    let logo = document.querySelector('.topLogo');
    if(document.querySelector('body').classList.contains('bodyLight')) {
        theme = 'bodyLight';
        logo.src = "images/Square-Icon-light.svg";
    } else {
        theme = 'bodyDark';
        logo.src = "images/Square-Icon.svg";
    }
}
isLight();

document.querySelector('.mode').addEventListener('click', ()=> {
    const body = document.querySelector('body');
    body.classList.toggle('bodyLight');
    isLight();
    localStorage.setItem('pageTheme', theme);
}, false);