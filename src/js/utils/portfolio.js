import gsap from "gsap";

const iamges = document.querySelectorAll('.portfolio__grid a');

if (iamges.length) {
    let i = 0;
    let type = -1;

    iamges.forEach(item => {
        if (i % 2 == 0) {
            type = -1;
        }
        else {
            type = 1;
        }

        item.style.opacity = 0;
        item.style.transformOrigin = 'center';
        item.style.transform = `translate(${type * 100}%, 0)`;
        i++;
    })
}

function showItems(item) {
    const i = Array.from(item.parentNode.children).indexOf(item)

    gsap.to(item, {
        opacity: 1,
        duration: 1,
        x: 0,
        delay: i * 0.1,
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showItems(entry.target);
        }
    })
})


export function observePortfolio() {
    const iamges = document.querySelectorAll('.portfolio__grid a');
    if (iamges.length) {
        iamges.forEach(item => {
            observer.observe(item)
        })
    }
}