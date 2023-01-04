import gsap from "gsap";

const contactsDescription = document.querySelector('.contacts__flex-left');
const contactsFormBlock = document.querySelector('.contacts__flex-right');
const array = [contactsDescription, contactsFormBlock]

if (contactsDescription) {
    contactsDescription.style.transform = 'translate(-100%, 0,0)';
    contactsDescription.style.opacity = 0;
}
if (contactsFormBlock) {
    contactsFormBlock.style.transform = 'translate(100%, 0)';
    contactsFormBlock.style.opacity = 0;
}

function animateBlock(elem) {
    gsap.to(elem, {
        opacity: 1,
        x: 0,
        duration: 0.5,
    });
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateBlock(entry.target)
            observer.unobserve(entry.target)
        }
    })
})

if (array.length) {
    array.forEach(item => {
        observer.observe(item)
    })
}