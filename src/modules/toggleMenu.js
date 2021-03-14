import scrollToElement from "./scrollToElement";
const toggleMenu = () => {
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li');
    //соберем Nodelist в массив, чтобы пользоваться функциями
    let menuItemsArr = [...menuItems];

    const menuHandler = () => {
        menu.classList.toggle('active-menu');
    };
    //клики по документу
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        //если меню активно и кликнули не по нему
        if (!target.closest('menu') && menu.classList.contains('active-menu')) {
            menuHandler();
        }
        //если нажали по кнопке меню
        if (target.closest('.menu')) {
            menuHandler();
        }
        if (target.classList.contains('close-btn')) {
            menuHandler();
        }
        let li = target.closest('li');
        //если li есть в машем массиве
        if (menuItemsArr.indexOf(li) !== -1) {
            e.preventDefault();
            //берем название целевого элемента
            let targetElementName = li.querySelector('a').getAttribute('href').slice(1);
            let targetElement = document.getElementById(targetElementName);
            scrollToElement(targetElement, 200);//плавный скролл до него
            menuHandler();//закрываем меню
        }
    });
};
export default toggleMenu;