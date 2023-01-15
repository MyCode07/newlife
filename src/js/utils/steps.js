const steps = document.querySelectorAll('.steps__grid li');

if (steps.length) {
    let i = 0;
    steps.forEach(item => {
        item.style.transition = `all 0.75s ${i * 0.05}s`;
        item.style.opacity = 0;
        item.style.transform = 'translate3d(10%, 0, 0)';
        i++;
    })
}


function showItems(item) {
    const i = Array.from(item.parentNode.children).indexOf(item)
    item.style.opacity = 1;
    item.style.transform = 'translate3d(0, 0, 0)';
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