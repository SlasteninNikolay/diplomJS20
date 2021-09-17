const showSertificate = () => {
    const documents = document.querySelector("#documents");
    const overlay = document.querySelector(".overlay");
    const documentModal = document.querySelector(".document-modal");
    const img = document.querySelector(".document-modal img");
    const documentClose = document.querySelector(".document-close");

    documents.addEventListener("click", (event) => {
        const target = event.target;
        if (target.matches(".document-overlay")) {
            event.preventDefault();
            overlay.style.display = "block";
            const link = target.closest("a").getAttribute("href");
            img.setAttribute("src", link);
            documentModal.classList.toggle("document-modal__active");
        }
    });
    documentClose.addEventListener("click", () => {
        overlay.style.display = "none";
        documentModal.classList.toggle("document-modal__active");
    });
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        documentModal.classList.toggle("document-modal__active");
    });
};

export default showSertificate;
