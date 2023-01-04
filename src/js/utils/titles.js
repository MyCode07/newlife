import gsap from "gsap";

const allTitles = document.querySelectorAll('._title');
if (allTitles.length) {
    allTitles.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translate(0, 100%)';
    })
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_visible');
        }
    })
})
const titles = document.querySelectorAll('[data-text]');
if (titles.length) {
    titles.forEach(item => {
        observer.observe(item)
    })
}

export function observeTitles() {
    function animateWord(word) {

        gsap.to(word.closest('._title'), {
            opacity: 1,
            y: 0,
            duration: 1
        })

        let text = [...word.innerHTML];
        let newText = '';
        let timeout = 200;

        text.forEach((letter, index) => {
            setTimeout(() => {
                newText += letter;
                word.innerHTML = newText;
            }, index * timeout);
        })
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateWord(entry.target)
                observer.unobserve(entry.target)
            }
        })
    })

    const printText = document.querySelectorAll('[data-print]');

    if (printText.length) {
        printText.forEach(text => {
            observer.observe(text)
        })
    }
}

