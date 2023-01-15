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
        item.style.transform = `translate3d(${type * 10}%, 0, 0)`;
        item.style.transition = `all 1s ease ${1 * 0.1}s`;
        i++;
    })
}

function showItems(item) {
    item.style.opacity = 1;
    item.style.transform = `translate3d(0, 0, 0)`;
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