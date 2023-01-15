const homeTitleSpans = document.querySelectorAll('.home h1 span');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = `translate3d(0, 0, 0)`;
            entry.target.style.opacity = 1
            showImages();
        }
    })
})

const menuImage = document.querySelector('.menu-bgc');

const images = document.querySelectorAll('.home img');
const title = document.querySelector('.home h1');
function showImages() {
    title.classList.add("_visible");
    images.forEach(img => {
        img.classList.add("_visible");
    })

    if (window.innerWidth > 768) {
        menuImage.classList.add("_visible");
    }
}


export function homeTitleAnimation() {
    if (homeTitleSpans.length) {
        setTimeout(() => {
            homeTitleSpans.forEach(item => {
                observer.observe(item)
            })
        }, 300);
    }
}

