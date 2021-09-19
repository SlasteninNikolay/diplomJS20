"use strict";

import calculator from "./modules/calculator";
import popUp from "./modules/popUp";
import sendForm from "./modules/sendForm";
import validate from "./modules/validate";
import showSertificate from "./modules/showSertificate";
import slider from "./modules/slider";
import smoothScroll from "./modules/smoothScroll";
import timer from "./modules/timer";

calculator();
popUp();
sendForm();
validate();
showSertificate();
slider(
    ".benefits-inner",
    ".benefits-wrap",
    ".benefits__item",
    ".benefits__arrow--left",
    ".benefits__arrow--right",
    3
);
slider(
    ".slider",
    ".slider-wrapper",
    ".slider-slide",
    ".services__arrow--left",
    ".services__arrow--right",
    2
);
smoothScroll();
timer("26 september 2021");
