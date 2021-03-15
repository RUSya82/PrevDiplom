/**
 * Функция плавного скролла до элемента, чистая, работает как вверх, так и вниз (писал сам)))
 * @param element - ссылка на элемент
 * @param duration - продолжительность скролла в мс
 */
const scrollToElement = (element, duration) => {
    let Id; //id анимации
    const start = performance.now();  //время старта
    const topPosition = element.getBoundingClientRect().top; //текущая позиция элемента
    const currentDocumentPosition = document.documentElement.scrollTop;//текущая прокрутка документа
    let progress = 0;           //прогресс анимации
    const animateScroll = () => {
        const now = performance.now();    //текущее время
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