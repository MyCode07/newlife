
const body = document.body;
const lockPadding = document.querySelectorAll('._fixed');


function bodyLock() {
    const lockPaddingValue = 10;
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const elem = lockPadding[i];
            elem.style.paddingRight = lockPaddingValue + 'px';
        }
    }
    body.style.paddingRight = lockPaddingValue + 'px';
    body.classList.add('_noscroll');
}

function bodyUnLock() {
    for (let i = 0; i < lockPadding.length; i++) {
        const elem = lockPadding[i];
        elem.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('_noscroll');
}