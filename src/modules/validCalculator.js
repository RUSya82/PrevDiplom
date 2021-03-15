/**
 * валидируем калькулятор, можно ввести только цифры
 */
const validCalculator = () => {
    const calcNum = document.querySelectorAll('.calc-square, .calc-count, .calc-day');
    calcNum.forEach((item) => {
        item.addEventListener('blur', (e) => {
            const target = e.target;
            target.value = target.value.replace(/\D+/g, '');
        });
    });
};
export default validCalculator;