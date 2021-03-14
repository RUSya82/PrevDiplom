const togglePopup = () => {
    let popupBtn = document.querySelectorAll('.popup-btn');
    let popup = document.querySelector('.popup');
    let popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popupShow();
        });
    });

    popup.addEventListener('click', (e) => {
        let target = e.target;
        //клик по кнопке закрыть
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        }
        //при клике вне модалки - закрываем
        if (!target.closest('.popup-content')) {
            popup.style.display = 'none';
        }
    });

    let popupShow = () => {
        let ID;
        if (document.documentElement.clientWidth > 768) {
            popup.style.display = 'block';
            popupContent.style.transform = `scale(0,0) translateX(-50px) rotate(-90deg)`;
            let start = performance.now();
            let duration = 120;
            let progress = 0;
            let popupAnimate = () => {
                let now = performance.now();
                progress = (now - start) / duration;
                let deg = 90 - 90 * progress;
                if (progress <= 1) {
                    if (progress > 1) {
                        progress = 1;
                    }
                    popupContent.style.transform = `scale(${progress}) translateX(-50px) rotate(-${deg}deg)`;
                    ID = requestAnimationFrame(popupAnimate);
                } else {
                    popupContent.style.transform = `scale(1, 1) translateX(-50px) rotate(0deg)`;
                    cancelAnimationFrame(ID);
                }
            };
            popupAnimate();
        } else {
            popup.style.display = 'block';
        }


    };
};
export default togglePopup;