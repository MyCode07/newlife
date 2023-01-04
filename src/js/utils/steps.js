import gsap from "gsap";

const steps = document.querySelectorAll('.steps__grid li');

if (steps.length) {
    let i = 0;
    steps.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translate(100%,0)';
        i++;
    })
}


function showItems(item) {
    const i = Array.from(item.parentNode.children).indexOf(item)

    gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.75,
        delay: i * 0.05,
    });
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showItems(entry.target);
        }
    })
})



export function observeSteps() {
    const steps = document.querySelectorAll('.steps__grid li');
    if (steps.length) {
        steps.forEach(item => {
            observer.observe(item)
        })
    }
}