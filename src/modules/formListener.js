import Validator from "./validator";
const formListener = () => {
    /**
     * загоняем наши формы в валидатор
     * @type {Validator}
     */
    let validForm1 = new Validator('form1', [
        {
            selector: 'form1-name',
            method: 'name'
        },
        {
            selector: 'form1-email',
            method: 'email'
        },
        {
            selector: 'form1-phone',
            method: 'phone'
        }
    ]);
    let validForm2 = new Validator('form2', [
        {
            selector: 'form2-name',
            method: 'name'
        },
        {
            selector: 'form2-email',
            method: 'email'
        },
        {
            selector: 'form2-phone',
            method: 'phone'
        },
        {
            selector: 'form2-message',
            method: 'message'
        }
    ]);
    let validForm3 = new Validator('form3', [
        {
            selector: 'form3-name',
            method: 'name'
        },
        {
            selector: 'form3-email',
            method: 'email'
        },
        {
            selector: 'form3-phone',
            method: 'phone'
        },
    ]);


    const sendForm = (formSelector, validObject) => {
        const errorMessage = "Что то пошло не так!";
        const loadMessage = "Загрузка!";
        const successMessage = "Спасибо! Мы скоро с Вами свяжемся!";
        const noValidMessage = "Исправьте данные в полях выделенных красным";
        const form = document.getElementById(formSelector);
        const statusMessage = document.createElement('div');
        const loaderImg = document.createElement('img');
        loaderImg.setAttribute('src', '../images/preloader.gif');
        //statusMessage.style.cssText = 'font-size: 2rem; color:#fff;';

        const postData = (body) => {
            return fetch('./server.php', {
                body: body,
                method: 'POST',
            });
        };

        const cleanMessage = () => {
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 1000);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            const formData = new FormData(form);
            let body = {formData};
            formData.forEach((item, index) => body[index] = item);
            if (!validObject.init()) {
                //statusMessage.textContent = loadMessage;
                statusMessage.append(loaderImg);
                postData(JSON.stringify(body))
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status not 200');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .then(() => {
                        setTimeout(() => {
                            cleanMessage();
                            event.target.reset();
                            const popup = document.querySelector('.popup');
                            popup.style.display = 'none';
                        }, 2000);
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        cleanMessage();
                        console.error(error);
                    });
            } else {
                statusMessage.textContent = noValidMessage;
                validObject.cleanErrors();
            }
        });

    };
    sendForm('form1', validForm1);
    sendForm('form2', validForm2);
    sendForm('form3', validForm3);
};
export default formListener;