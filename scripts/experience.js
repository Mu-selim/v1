const placesList = document.querySelectorAll('.placesListItems');
const clearPlacesList = () => {
    document.querySelector('.placesInner').innerHTML = '';
    placesList.forEach(component => {
        component.classList.remove('active');
    });
}

placesList[0].addEventListener('click', ()=> {
    if(!placesList[0].classList.contains('active')) {
        clearPlacesList();
        document.querySelector('.placesInner').insertAdjacentHTML('afterbegin', gmind());
        placesList[0].classList.add('active');
    }
});

placesList[1].addEventListener('click', ()=> {
    if(!placesList[1].classList.contains('active')) {
        clearPlacesList();
        document.querySelector('.placesInner').insertAdjacentHTML('afterbegin', iti());
        placesList[1].classList.add('active');
    }
});

placesList[2].addEventListener('click', ()=> {
    if(!placesList[2].classList.contains('active')) {
        clearPlacesList();
        document.querySelector('.placesInner').insertAdjacentHTML('afterbegin', ibm());
        placesList[2].classList.add('active');
    }
});

placesList[3].addEventListener('click', ()=> {
    if(!placesList[3].classList.contains('active')) {
        clearPlacesList();
        document.querySelector('.placesInner').insertAdjacentHTML('afterbegin', acm());
        placesList[3].classList.add('active');
    }
});