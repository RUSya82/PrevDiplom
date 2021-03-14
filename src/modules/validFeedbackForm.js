/**
 * Валидация формы для каждого поля после потери фокуса
 */
const validFeedbackForm = () => {
    const formName = document.querySelectorAll('#form2-name, .form-name');
    const form2Message = document.getElementById('form2-message');
    const formEmail = document.querySelectorAll('.form-email');
    const formPhone = document.querySelectorAll('.form-phone');
    const form2 = document.getElementById('form2');
    form2.addEventListener('blur', (e) => console.log(e.target), true);
    /**
     * преобразует строку: много пробелов и дефисов в один,
     * пробелы и дефисы в начале и в конце обрезаются
     * @param val
     * @returns {*}
     */
    const customTrim = (val) => {
        val = val.replace(/\s+/g, ' ');//много пробелов в один
        val = val.replace(/-+/g, '-');//много дефисов в один
        val = val.replace(/^[ |\-+]/g, '');//удаляем пробелы в начале
        val = val.replace(/[ |\-+]$/g, '');//удаляем пробелы в конце
        return val;
    };
    formName.forEach((item) => {
        item.addEventListener('input', (e) => {
            let val = e.target.value;
            val = val.replace(/[^а-яё^ ]/ig, '');//только кириллица, дефис и пробел
            e.target.value = val;
        });
    });

    form2Message.addEventListener('input', (e) => {
        let target = e.target;
        let val = target.value;
        val = val.replace(/[^а-яё0-9.,:!?;^ \-]/ig, '');//только кириллица, дефис и пробел
        target.value = val;
    });
    // formEmail.forEach((item) => {
    //     item.addEventListener('blur', (e) => {
    //         let target = e.target;
    //         let val = target.value;
    //         val = val.replace(/[^a-z@\-!*~'_.]/ig, '');
    //         val = customTrim(val);
    //         target.value = val;
    //     });
    // });
    formPhone.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^+\d]/ig, '');//только цифры, +
        });
    });
};
export default validFeedbackForm;