const timer = (deadline) => {
    const timerDays = document.querySelector(".count_1 span");
    const timerHours = document.querySelector(".count_2 span");
    console.log("timerHours: ", timerHours);
    const timerMinutes = document.querySelector(".count_3 span");
    const timerSeconds = document.querySelector(".count_4 span");
    const idSetInterval = setInterval(updateClock, 1000);

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timerRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timerRemaining % 60);
        const minutes = Math.floor((timerRemaining / 60) % 60);
        const hours = Math.floor((timerRemaining / 60 / 60) % 24);
        const days = Math.floor(timerRemaining / 60 / 60 / 24);
        return { timerRemaining, days, hours, minutes, seconds };
    }

    function updateClock() {
        const timer = getTimeRemaining();

        timerDays.textContent = timer.days <= 9 ? "0" + timer.days : timer.days;
        timerHours.textContent = timer.hours <= 9 ? "0" + timer.hours : timer.hours;
        timerMinutes.textContent = timer.minutes <= 9 ? "0" + timer.minutes : timer.minutes;
        timerSeconds.textContent = timer.seconds <= 9 ? "0" + timer.seconds : timer.seconds;

        if (timer.timerRemaining < 0) {
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
            clearInterval(idSetInterval);
        }
    }
};

export default timer;
