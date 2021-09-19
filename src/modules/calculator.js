const calculator = () => {
    const calcSection = document.getElementById("calc");
    const calcTotal = document.getElementById("calc-total");

    if (calcSection) {
        let calcTypeValue;
        let calcMaterialValue;
        let calcInput;

        const countTotal = () => {
            if (calcTypeValue && calcMaterialValue && calcInput) {
                let result = (calcTypeValue * calcMaterialValue * calcInput).toFixed(2);
                localStorage.setItem("Итого", result);
                calcTotal.value = result;
            }
        };

        calcSection.addEventListener("input", (event) => {
            const target = event.target;
            if (target.matches("#calc-type")) {
                calcTypeValue = +target.value;
            }
            if (target.matches("#calc-type-material")) {
                calcMaterialValue = +target.value;
            }
            if (target.matches("#calc-input")) {
                calcInput = +target.value;
            }
            countTotal();
        });
    }
};

export default calculator;
