import { isMobile } from "./isMobile.js";


const audioMain = new Audio("../../files/audio/1.mp3");
window.audioMain = audioMain;

const circles = document.querySelectorAll('.circle');
const text = document.querySelector('.text');
document.addEventListener('DOMContentLoaded', function () {
    circles.forEach(item => {
        let lenght = item.getTotalLength();
        item.style.strokeDasharray = lenght / 2;
        item.style.strokeDashoffset = lenght / 2;
    });

    text.style.strokeDasharray = 450;
    text.style.strokeDashoffset = 0;
    text.style["animation"] = `fill 1s 1s ease-out forwards`;
})


document.body.style.setProperty('--width', `${circles[0].getBoundingClientRect().width / 2}px`);
window.addEventListener('resize', function () {
    document.body.style.setProperty('--width', `${circles[0].getBoundingClientRect().width / 2}px`);
    if (isMobile.any()) {
        open.classList.add('_mobile')
    }
})


const open = document.querySelector('.enter__button');
if (isMobile.any()) {
    open.classList.add('_mobile')
}

document.addEventListener("mousemove", function (e) {
    if (!isMobile.any()) {
        open.style.top = open.style.top = e.clientY + "px";
        open.style.left = open.style.left = e.clientX + "px";
    }
});

const enterElem = document.querySelector('.enter');

export function enter() {
    enterElem.style.transform = 'translate3d(100vw,0,0)';
    document.body.classList.remove('_noscroll')
    audioMain.play();
    audioMain.loop = true
    setTimeout(() => {
        enterElem.remove();
    }, 3000);
}