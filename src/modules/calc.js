const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalBlock = document.getElementById('total');


    const calcSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;
        const oldTotal = +totalBlock.textContent;
        let delta = 0;
        let id = 0;
        let currentTotal = oldTotal;
        /**
         * Плавное изменение суммы на калькуляторе
         */
        const changeSum = () => {
            id = requestAnimationFrame(changeSum);
            if (oldTotal === total) {
                cancelAnimationFrame(id);
                currentTotal = 0;
                return;
            }
            if (oldTotal < total) {
                currentTotal += delta;
                if (currentTotal > total) {
                    currentTotal = total;
                    cancelAnimationFrame(id);
                    totalBlock.textContent = Math.floor(currentTotal);
                    currentTotal = 0;
                    return;
                }
            } else if (oldTotal > total) {
                currentTotal -= delta;
                if (currentTotal < total) {
                    currentTotal = total;
                    cancelAnimationFrame(id);
                    totalBlock.textContent = Math.floor(currentTotal);
                    currentTotal = 0;
                    return;
                }
            }
            totalBlock.textContent = Math.floor(currentTotal);
        };


        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue = 1.5;
        }
        if (typeValue && squareValue) {
            total = price * countValue * dayValue * typeValue * squareValue;
            delta = Math.abs(total - oldTotal) / 20;
            changeSum();
        }


    };

    calcBlock.addEventListener('change', (e) => {
        const target = e.target;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        if (target.matches('select') && !typeValue) {
            calcDay.value = '';
            calcSquare.value = '';
            calcCount.value = '';
            totalBlock.textContent = '0';
        }
        if (target.matches('input, select')) {
            calcSum();
        }
    });
};
export default calc;