import { homeAnimated } from "./gsapTo.js";
import { observeContacts } from "./contacts-animation.js";
import { enter } from "./enter.js";
import { observeFooter } from "./footer.js";
import { observePortfolio } from "./portfolio.js";
import { observePriceItems } from "./price-item.js";
import { observeAbout } from "./splitText.js";
import { observeSteps } from "./steps.js";
import { observeTitles } from "./titles.js";

document.querySelector('.enter__button').addEventListener('click', function () {
    enter()
    homeAnimated();
    observeTitles();
    observePriceItems();
    observeContacts();
    observeFooter();
    observePortfolio();
    observeAbout();
    observeSteps();
})

document.addEventListener('keydown', function (e) {
    if (e.which == 13) {
        enter();
        homeAnimated();
        observeTitles();
        observePriceItems();
        observeContacts();
        observeFooter();
        observePortfolio();
        observeAbout();
        observeSteps();
    }
})