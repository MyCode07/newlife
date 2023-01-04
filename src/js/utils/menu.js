const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    document.body.classList.toggle('_noscroll');
    document.querySelector('.menu').classList.toggle('_open');

    setTimeout(() => {
        burger.classList.toggle('_active');

        if (burger.classList.contains('_active')) {
            burger.textContent = 'закрыть';
        }
        else {
            burger.textContent = 'меню';
        }

    }, 250);
})