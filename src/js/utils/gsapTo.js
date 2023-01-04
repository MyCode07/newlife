import gsap from "gsap";


export function homeAnimated() {
    gsap.to('.header__logo', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
    });

    gsap.to('.header__contacts', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
    });

    gsap.to('.title_animate', {
        opacity: 1,
        x: 0,
        duration: 0.3,
        delay: 1,
        stagger: 0.5,
    });

    if (window.innerWidth > 768) {
        gsap.to('.menu__item', {
            opacity: 1,
            x: 0,
            duration: 0.3,
            delay: 1,
            stagger: 0.5,
        });
    }

    gsap.to('.social-horizontal li', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 3,
        stagger: 0.5,
    });
}




