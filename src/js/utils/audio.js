
let audioLink = new Audio("../../files/audio/4.mp3");
let audioButton = new Audio("../../files/audio/3.mp3");

const alllinks = [...document.querySelectorAll('a')];
const allButtons = [...document.querySelectorAll('button')];
const allhoverElems = allButtons.concat(alllinks);

alllinks.forEach(elem => {
    elem.addEventListener('mouseenter', function () {
        audioLink = new Audio("../../files/audio/4.mp3");
        audioLink.play();
    })
    elem.addEventListener('mouseleave', function () {
        audioLink.remove();
    })
})

allButtons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        audioButton = new Audio("../../files/audio/3.mp3");
        audioButton.play();
    })

    button.addEventListener('mouseleave', function () {
        audioButton.remove();
    })

    button.addEventListener('click', function () {
        let clickAudio = new Audio("../../files/audio/6.mp3");
        clickAudio.play();
    })
})


const soundsControl = document.querySelector('.sound-control');
soundsControl.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.toggle('_nosound');

    if (!this.hasAttribute('data-volume')) {
        this.setAttribute('data-volume', 1);
    }

    if (+this.dataset.volume == 1) {
        this.dataset.volume = 0;
    }
    else {
        this.dataset.volume = 1;
    }
    audioMain.volume = +this.dataset.volume;
})