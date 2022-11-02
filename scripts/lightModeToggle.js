document.querySelector('.mode').addEventListener('click', ()=> {
    const body = document.querySelector('body');
    body.classList.toggle('bodyLight');
    let theme = body.classList.contains('bodyLight')? 'bodyLight': 'bodyDark';
    localStorage.setItem('pageTheme', theme);
}, false);