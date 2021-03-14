//импортируем функцию скролла до нужного элемента
import scrollToElement from "./scrollToElement";

/**
 * Добавление плавных скроллов
 */
const addScrollToElements = () => {
    const serviceBlock = document.querySelector('.service');//блок услуги
    const serviceBlockAnchor = document.querySelector('a[href="#service-block"]');//ссылка на блок услуги
    //добавляем скроллы на ссылку
    serviceBlockAnchor.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToElement(serviceBlock, 200);
    });
};
export default addScrollToElements;