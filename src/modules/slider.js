const slider = (main, wrap, slides, arrowPrev, arrowNext, amountSlides) => {
    const mainWrapper = document.querySelector(main);
    const wrapper = document.querySelector(wrap);
    const wrapperItems = document.querySelectorAll(slides);
    const prev = document.querySelector(arrowPrev);
    const next = document.querySelector(arrowNext);
    let slidesOnPage = amountSlides;
    const defSlidesOnPage = slidesOnPage;

    let position = 0;
    const infinity = true;

    const addStyles = () => {
        mainWrapper.style.cssText = `overflow: hidden !important;`;
        wrapper.style.cssText = `display: flex !important; transition: transform 0.5s ease !important; will-change: transform !important`;
        wrapperItems.forEach((item) => {
            item.style.cssText = `flex: 0 0 ${Math.floor(
                100 / slidesOnPage
            )}% !important; margin: 0 auto !important;`;
        });
    };

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 576) {
            slidesOnPage = 1;
            addStyles();
        } else {
            slidesOnPage = defSlidesOnPage;
            addStyles();
        }
    };

    const prevSlide = () => {
        if (infinity || position > 0) {
            --position;
            if (position < 0) {
                position = wrapperItems.length - slidesOnPage;
            }
            wrapper.style.transform = `translateX(-${position * Math.floor(100 / slidesOnPage)}%)`;
        }
    };

    const nextSlide = () => {
        if (infinity || position < wrapperItems.length - slidesOnPage) {
            ++position;
            if (position > wrapperItems.length - slidesOnPage) {
                position = 0;
            }
            wrapper.style.transform = `translateX(-${position * Math.floor(100 / slidesOnPage)}%)`;
        }
    };

    addStyles();
    checkResponse();

    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);
    window.addEventListener("resize", checkResponse);
};

export default slider;
