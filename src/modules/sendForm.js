const sendForm = () => {
    const forms = document.querySelectorAll(".form-horizontal");
    const statusMessage = document.createElement("dir");
    const loadMessage = "Отправка данных...";
    const successMessage = "Спасибо! Ваша заявка принята.";
    const errorMessage = "Что-то пошло не так...";

    statusMessage.style.cssText = "text-align: center; color: rgb(0, 144, 42);";

    const clearData = () => {
        const forms = document.querySelectorAll(".form-horizontal");

        forms.forEach((form) => {
            [...form.elements].forEach((element) => {
                if (element.tagName === "INPUT") {
                    element.value = "";
                    element.style.border = "";
                }
            });
            setTimeout(() => {
                statusMessage.innerHTML = "";
            }, 4000);
        });
    };

    const postData = (body) => {
        return fetch("./server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    };

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error("status network is not 200");
                    }
                    statusMessage.textContent = successMessage;
                    clearData();
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    clearData();
                });
        });
    });
};

export default sendForm;
