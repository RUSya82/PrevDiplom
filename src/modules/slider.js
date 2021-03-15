/**
 * Запуск и инициализация слайдера
 * @param interval
 */
const slider = (interval) => {
    const slider = document.querySelector('.portfolio-content');//сам слайдер
    const slides = document.querySelectorAll('.portfolio-item');//слайды
    const dotsContainer = document.querySelector('.portfolio-dots');//контейнер для точек
    const dots = [];              //массив с будущими точками
    let currentSlide = 0;       //текущий слайд
    let intervalID;     //id для setInterval
    /**
     * Добавление точек
     */
    const addDots = () => {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement('li');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('dot-active');
            }
            dots.push(dot);
            dotsContainer.append(dot);
        }

    };
    addDots();
    /**
     * проверка номера текущего слайда, если что не так, корректирует
     */
    const checkSlideNumber = () => {
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
    };
    /**
     * Переход на следующий слайд
     * @param next - если true, то следующий, false - предыдущий
     */
    const clickNextSlide = (next = true) => {
        slides[currentSlide].classList.remove('portfolio-item-active');
        dots[currentSlide].classList.remove('dot-active');
        if (next) {
            currentSlide++;
        } else {
            currentSlide--;
        }
        checkSlideNumber();
        slides[currentSlide].classList.add('portfolio-item-active');
        dots[currentSlide].classList.add('dot-active');
    };
    /**
     * Запуск слайдера в автоплей
     */
    const playSlider = () => {
        intervalID = setInterval(clickNextSlide, interval, true);
    };
    /**
     * Остановка слайдера
     */
    const stopSlider = () => {
        clearInterval(intervalID);
    };
    playSlider();
    /**
     * клики через делегирование
     */
    slider.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }
        //клики по кнопкам
        if (target.matches('#arrow-right')) {
            clickNextSlide(true);
        } else if (target.matches('#arrow-left')) {
            clickNextSlide(false);
        } else if (target.matches('.dot')) {          //клики по точкам
            slides[currentSlide].classList.remove('portfolio-item-active');
            dots[currentSlide].classList.remove('dot-active');
            currentSlide = dots.indexOf(target);
            slides[currentSlide].classList.add('portfolio-item-active');
            dots[currentSlide].classList.add('dot-active');
        }
    });
    //остановка слайдера при наведении на точки и стрелки
    slider.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target.matches('.portfolio-btn') || target.matches('.dot')) {
            stopSlider();
        }
    });
    //запуск слайдера после того, как мышку убрали с точек и стрелок
    slider.addEventListener('mouseout', (e) => {
        const target = e.target;
        if (target.matches('.portfolio-btn') || target.matches('.dot')) {
            playSlider();
        }
    });

};
export default slider;