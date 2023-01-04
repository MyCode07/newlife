const toTop = document.querySelector('.to-top');

toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
})


window.addEventListener('scroll', function () {
    if (window.innerWidth <= 768 && window.scrollY >= 1000) {
        toTop.classList.add('_active');
    }
    else {
        toTop.classList.remove('_active');
    }
})

