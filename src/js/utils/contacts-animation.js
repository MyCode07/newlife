let svg = document.querySelector('.contacts__image svg');
let paths = document.querySelectorAll('.contacts__image svg path');

function fillSvgPaths() {
    paths.forEach(path => {
        path.style.strokeDashoffset = 0;
    })
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fillSvgPaths();
        }
    })
})


export function observeContacts() {
    observer.observe(svg)
}