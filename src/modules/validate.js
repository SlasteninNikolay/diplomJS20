const validate = () => {
    const pattern = {
        phone: /^\+?[78]\d{10}$/,
        name: /^[а-яёa-z\s?]+$/i,
        message: /^[а-яё\s\-]+$/i,
        email: /^[\w\-\.!~\*`]+@[\w\-\.!~\*`]+\.\w{2,}$/,
    };

    const errors = new Set();

    const isValid = (value, rule) => rule.test(value);

    const showSuccess = (input) => {
        input.style.cssText =
            "border: 2px solid green; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 144, 42, 0.6); -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 144, 42, 0.6);";
    };

    const showError = (input) => {
        input.style.cssText =
            "border: 2px solid #f00; box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(220, 0, 0, 0.6); -webkit-box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(220, 0, 0, 0.6);";
    };

    const blockSubmit = (input) => {
        const form = input.closest("form");
        const btn = form.querySelector("button");
        btn.disabled = true;
    };

    const unblockSubmit = (input) => {
        const form = input.closest("form");
        const btn = form.querySelector("button");
        btn.disabled = false;
    };

    const checkIt = (number, pattern, input) => {
        if (isValid(number, pattern)) {
            showSuccess(input);
            errors.delete(input);
        } else {
            showError(input);
            errors.add(input);
            blockSubmit(input);
        }

        if (errors.size === 0) {
            unblockSubmit(input);
        }
    };

    const forms = document.querySelectorAll("form");
    document.body.addEventListener("mouseover", (event) => {
        const target = event.target;
        if (target.matches("form button")) {
            const form = target.closest("form");
            [...form.elements].forEach((elem) => {
                if (elem.matches(".form-control") && elem.value === "") {
                    blockSubmit(elem);
                }
            });
        }
    });

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            [...form.elements].forEach((elem) => {
                if (elem.tagName === "INPUT") {
                    elem.style.cssText = "border: inherit; box-shadow: none;";
                }
            });
        });
    });

    document.body.addEventListener("input", (event) => {
        const target = event.target;
        const value = target.value;

        if (target.matches(".form-phone")) {
            checkIt(value, pattern.phone, target);
        }
        if (target.matches(".form-name, #form2-name")) {
            checkIt(value, pattern.name, target);
        }
        if (target.matches(".form-email")) {
            checkIt(value, pattern.email, target);
        }
        if (target.matches(".mess")) {
            checkIt(value, pattern.message, target);
        }
    });
};

export default validate;
