import { isMobile } from './isMobile.js'



let mouse = document.querySelector('.mouse');
let mouse2 = document.querySelector('.mouse2');

if (isMobile.any()) {
    mouse.style.display = 'none';
    mouse2.style.display = 'none';
}

document.addEventListener("mousemove", function (e) {
    if (!isMobile.any()) {
        mouse.style.left = mouse2.style.left = e.clientX + "px"
        mouse.style.top = mouse2.style.top = e.clientY + "px";
    }
});

const steps = document.querySelectorAll('.steps li');

steps.forEach(step => {

    step.addEventListener('mouseenter', function () {
        if (!isMobile.any()) {
            mouse.style.borderColor = '#000';
            mouse2.style.borderColor = '#000';
        }
    })

    step.addEventListener('mouseleave', function () {
        if (!isMobile.any()) {
            mouse.style.borderColor = '#fff';
            mouse2.style.borderColor = '#fff';
        }
    })
})

const about = document.querySelector('.about');


about.addEventListener('mouseenter', function () {
    if (!isMobile.any()) {
        mouse.style.borderColor = '#000';
        mouse2.style.borderColor = '#000';
    }
})

about.addEventListener('mouseleave', function () {
    if (!isMobile.any()) {
        mouse.style.borderColor = '#fff';
        mouse2.style.borderColor = '#fff';
    }
})

const pricing = document.querySelector('.pricing');


pricing.addEventListener('mouseenter', function () {
    if (!isMobile.any()) {
        mouse.style.borderColor = '#000';
        mouse2.style.borderColor = '#000';
    }
})

pricing.addEventListener('mouseleave', function () {
    if (!isMobile.any()) {
        mouse.style.borderColor = '#fff';
        mouse2.style.borderColor = '#fff';
    }
})