"use strict";

import calculator from "./modules/calculator";
import popUp from "./modules/popUp";
import sedForm from "./modules/sendForm";
import showSertificate from "./modules/showSertificate";
import slider from "./modules/slider";
import smoothScroll from "./modules/smoothScroll";
import timer from "./modules/timer";

calculator();
popUp();
sedForm();
showSertificate();
slider(
    ".benefits-inner",
    ".benefits-wrap",
    ".benefits__item",
    ".benefits__arrow--left",
    ".benefits__arrow--right",
    3
);
smoothScroll();
timer();
