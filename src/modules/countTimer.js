const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds');
    function addZero(number) {
        return +number < 10 ? ('0' + number) : number;
    }

    const getTimeRemaining = () => {
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const dateDiff = (dateStop - dateNow) / 1000;
        if (dateDiff > 0) {
            seconds = (dateDiff % 60) ^ 0;
            minutes = ((dateDiff / 60) % 60) ^ 0;
            hours = (dateDiff / 60 / 60) ^ 0;
        }


        return {dateDiff, hours, minutes, seconds};
    };

    const updateClock = () => {
        const timer = getTimeRemaining();
        timerSeconds.textContent = addZero(timer.seconds);
        timerMinutes.textContent = addZero(timer.minutes);
        timerHours.textContent = addZero(timer.hours);
    };
    updateClock();
    setInterval(updateClock, 1000);
};

export default countTimer;