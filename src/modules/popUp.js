const popUp = () => {
    const headerModal = document.querySelector(".header-modal");
    const overlay = document.querySelector(".overlay");
    const servicesModal = document.querySelector(".services-modal");

    const handlerPopUp = (e) => {
        const target = e.target;
        if (target.closest(".btn-callback")) {
            e.preventDefault();
            headerModal.style.display = "block";
            overlay.style.display = "block";
            document.body.style.overflow = "hidden";
        }
        if (target.matches(".header-modal__close")) {
            e.preventDefault();
            headerModal.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "";
        }
        if (target.closest(".service-button")) {
            e.preventDefault();
            console.log(target);
            servicesModal.style.display = "block";
            overlay.style.display = "block";
            document.body.style.overflow = "hidden";
        }
        if (target.matches(".services-modal__close")) {
            e.preventDefault();
            servicesModal.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "";
        }
    };

    document.body.addEventListener("click", handlerPopUp);
};

export default popUp;
