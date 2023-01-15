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

   
  

    gsap.to('.social-horizontal li', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 2,
        stagger: 0.5,
    });
}




