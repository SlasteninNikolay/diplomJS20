const smoothScroll = () => {
    const scrollBtn = document.querySelector(".smooth-scroll");
    const secondSection = document.getElementById("benefits");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > secondSection.offsetTop) {
            scrollBtn.classList.add("smooth-scroll__active");
        } else {
            scrollBtn.classList.remove("smooth-scroll__active");
        }
    });

    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
};

export default smoothScroll;
