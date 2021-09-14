const slider = () => {
    const benefitsInner = document.querySelector(".benefits-inner");
    const benefitsWrap = document.querySelector(".benefits-wrap");
    const benefitsItems = document.querySelectorAll(".benefits__item");
    const benefitsArrowLeft = document.querySelector(".benefits__arrow--left");
    const benefitsArrowRight = document.querySelector(".benefits__arrow--right");

    let position = 0;
    let amountSlides = 3;
    const infinity = true;

    const addStyles = () => {
        benefitsInner.style.cssText = `overflow: hidden; `;
        benefitsWrap.style.cssText = `transition: transform 0.5s ease; will-change: transform !important`;
        benefitsItems.forEach((item) => {
            item.style.cssText = `flex: 0 0 ${Math.floor(
                100 / amountSlides
            )}% !important; margin: 0 auto !important`;
        });
    };

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 576) {
            amountSlides = 1;
            console.log("amountSlides: ", amountSlides);
            addStyles();
        } else {
            amountSlides = 3;
            console.log("amountSlides: ", amountSlides);
            addStyles();
        }
    };

    const prevSlide = () => {
        if (infinity || position > 0) {
            --position;
            if (position < 0) {
                position = benefitsItems.length - amountSlides;
            }
            benefitsWrap.style.transform = `translateX(-${
                position * Math.floor(100 / amountSlides)
            }%)`;
        }
    };

    const nextSlide = () => {
        if (infinity || position < benefitsItems.length - amountSlides) {
            ++position;
            if (position > benefitsItems.length - amountSlides) {
                position = 0;
            }
            benefitsWrap.style.transform = `translateX(-${
                position * Math.floor(100 / amountSlides)
            }%)`;
        }
    };

    addStyles();
    checkResponse();

    benefitsArrowLeft.addEventListener("click", prevSlide);
    benefitsArrowRight.addEventListener("click", nextSlide);
    window.addEventListener("resize", checkResponse);
};

export default slider;
