let popupPrivacy = document.querySelector('.popup__privacy');
let openPrivacy = document.querySelector('.footer__bottom a');
openPrivacy.addEventListener('click', function (e) {
    e.preventDefault();
    popupPrivacy.classList.add('_open');
    document.body.classList.add('_noscroll')
})

popupPrivacy.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('popup__privacy-close')) {
        document.body.classList.remove('_noscroll')
        popupPrivacy.classList.remove('_open');
    }
})

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('open-privacy')) {
        e.preventDefault();
        popupPrivacy.classList.add('_open');
        document.body.classList.add('_noscroll')
    }
})