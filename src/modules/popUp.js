const popUp = () => {
    const headerModal = document.querySelector(".header-modal");
    const overlay = document.querySelector(".overlay");
    const servicesModal = document.querySelector(".services-modal");

    const handlerPopUp = (e) => {
        const target = e.target;
        e.preventDefault();
        if (target.closest(".btn-callback")) {
            headerModal.style.display = "block";
            overlay.style.display = "block";
            document.body.style.overflow = "hidden";
        }
        if (target.matches(".header-modal__close")) {
            headerModal.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "";
        }
        if (target.closest(".service-button")) {
            console.log(target);
            servicesModal.style.display = "block";
            overlay.style.display = "block";
            document.body.style.overflow = "hidden";
        }
        if (target.matches(".services-modal__close")) {
            servicesModal.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "";
        }
    };

    document.body.addEventListener("click", handlerPopUp);
};

export default popUp;
