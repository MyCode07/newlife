import { Swiper, Grid, Navigation, Autoplay } from "swiper";

const formAdaptiv = document.querySelector('.mailinglists__form');
const mobileHistoryElem = document.querySelector('.mobile-history');

if (formAdaptiv && window.innerWidth <= 1300) {
    mobileHistoryElem.before(formAdaptiv);
    console.log('aa');
}

const newsItems = document.querySelectorAll('.mailinglists__news-item');


if (newsItems.length && window.innerWidth <= 768) {
    const newsElement = document.querySelector('.mailinglists__news');
    const newsElementBody = document.querySelector('.mailinglists__news-body');

    newsElement.classList.add('swiper');
    newsElementBody.classList.add('swiper-wrapper');

    const prevButton = document.querySelector('.mailinglists__news-prev');
    const nextButton = document.querySelector('.mailinglists__news-next');

    prevButton.style.visibility = 'hidden';

    let i = 0;
    newsItems.forEach(item => {
        item.classList.add('swiper-slide')

        let mid = Math.floor((newsItems.length - 1) / 2)
        if (i <= mid) {
            item.style.borderBottom = '1px solid #00000020';
            i++
        }
    })

    new Swiper('.mailinglists__news', {
        modules: [
            Grid,
            Navigation
        ],

        grid: {
            rows: 2
        },

        navigation: {
            prevEl: '.mailinglists__news-prev',
            nextEl: '.mailinglists__news-next'
        },

        on: {
            slideChange: function (swiper) {

                if (swiper.activeIndex >= 1) {
                    prevButton.style.visibility = 'visible';
                }
                else {
                    prevButton.style.visibility = 'hidden';
                }

                if (swiper.activeIndex == Math.floor((swiper.slides.length / 2) - 1)) {
                    nextButton.style.visibility = 'hidden';
                }
                else {
                    nextButton.style.visibility = 'visible';
                }
            }
        },
    })
}


const linksRowLinks = document.querySelectorAll('.links__row');

if (linksRowLinks.length) {
    new Swiper('.links__row .swiper', {

        modules: [
            Autoplay
        ],

        loop: true,
        slidesPerView: 'auto',

        autoplay: {
            delay: 1200,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
    })
}

const books = document.querySelectorAll('.book');

if (books.length && window.innerWidth <= 600) {
    books.forEach(book => {
        book.querySelector('img').after(book.querySelector('h3'))
    })
}

const testTitle = document.querySelector('.test__title');

if (testTitle && window.innerWidth <= 992) {
    testTitle.after(document.querySelector('.test__image'));
}

const burger = document.querySelector('.burger');

if (burger) {
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', function () {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
    })
}