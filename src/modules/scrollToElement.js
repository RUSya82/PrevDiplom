/**
 * Функция плавного скролла до элемента, чистая, работает как вверх, так и вниз (писал сам)))
 * @param element - ссылка на элемент
 * @param duration - продолжительность скролла в мс
 */
const scrollToElement = (element, duration) => {
    let Id; //id анимации
    let start = performance.now();  //время старта
    let topPosition = element.getBoundingClientRect().top; //текущая позиция элемента
    let currentDocumentPosition = document.documentElement.scrollTop;//текущая прокрутка документа
    let progress = 0;           //прогресс анимации
    let animateScroll = () => {
        let now = performance.now();    //текущее время
        progress = (now - start) / duration;  //вычисляем прогресс
        if (progress <= 1) {
            document.documentElement.scrollTop = currentDocumentPosition + topPosition * progress;
            Id = requestAnimationFrame(animateScroll);
        } else {
            document.documentElement.scrollTop = currentDocumentPosition + topPosition;
            cancelAnimationFrame(Id);
        }
    };
    animateScroll();
};

export  default scrollToElement;