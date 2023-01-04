import gsap from "gsap";


const popupForm = document.querySelector('.popup__form');

let i = 0;
document.querySelectorAll('.item-price').forEach(item => {
    const left = item.getBoundingClientRect().left;
    item.style.transform = `translate(-${left}px,0)`;
    item.style.opacity = 0;
    i++;

    const button = item.querySelector('button')
    const title = item.querySelector('h3').textContent;

    button.addEventListener('click', function () {
        popupForm.classList.add('_open');
        document.querySelector('.order-type').textContent = title;
        document.querySelector('input[name="order-type"]').value = title;
    })
});

popupForm.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('popup__form')) {
        popupForm.classList.remove('_open');
    }

    if (targetEl.classList.contains('popup__form-close')) {
        popupForm.classList.remove('_open');
    }
})


function moveItem(item) {
    const i = Array.from(item.parentNode.children).indexOf(item)

    gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: i * 0.2,
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            moveItem(entry.target)
            observer.unobserve(entry.target)
        }
    })
})

export function observePriceItems() {
    document.querySelectorAll('.item-price').forEach(item => {
        observer.observe(item)
    });
}
