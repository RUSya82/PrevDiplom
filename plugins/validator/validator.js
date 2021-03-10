/**
 * Класс валидатор формы
 * передается id формы и массив объектов вида
 * {
            selector: 'form3-phone',
            method: 'phone',
            pattern:'//'
   },
 если pattern существует, то будет применен он, если нет, а передано имя метода (e-mail) например,
 то поле будет валидироваться встроенным методом
 */
class Validator {
    constructor(formId, elements = []) {
        this.form = document.getElementById(formId);
        this.elements = elements;
        this.errors = new Set();
    }

    init() {
        this.elements.forEach((item) => {
            this.checkIt(item);
        });
        if (!this.getErrorsCount()) {
            return false;
        } else {
            this.showErrors();
            return this.getErrors();
        }

    }
    getErrors(){
        return this.errors;
    }
    cleanErrors(){
        this.errors.clear();
    }
    getErrorsCount(){
        return this.errors.size;
    }
    showErrors(){
        this.errors.forEach(item => {
            let element = document.getElementById(item.selector);
            element.style.border = '2px solid red';
            setTimeout(() => {
                element.style.border = '';
            }, 2000);
        });
    }

    checkIt({selector, pattern, method}) {
        let element = this.form.querySelector('#' + selector).value;
        if(pattern){
            if(!pattern.test(element)){
                this.errors.add({
                    selector: selector,
                    pattern: pattern,
                    method: method
                });
            }
        }else if(method){
            if(this.getPattern(method) && !this.getPattern(method).test(element)){
                this.errors.add({
                    selector: selector,
                    pattern: pattern,
                    method: method
                });
            }
        }
    }

    getPattern(pattern) {
        let patterns = {
            email: new RegExp('^[a-z0-9\-_.]{2,30}@[a-z]{2,10}.[a-z]{2,5}$','gi'),
            phone: new RegExp('[0-9]{7,11}', 'ig'),
            name: new RegExp('[а-яё]{2,20}', 'ig'),
            message: new RegExp('[а-яё0-9.,:!?; \-]', 'ig'),
        };
        return patterns[pattern];
    }
}