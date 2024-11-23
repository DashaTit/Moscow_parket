const burgerBtn = document.querySelector('.burger__btn');
const burgerList = document.querySelector('.burger__list');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    burgerList.classList.toggle('active')
})