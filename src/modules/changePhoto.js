/**
 * Замена фотографии в разделе "Наша команда" при наведении мыши
 */
const changePhoto = () => {
    let photos = document.querySelectorAll('.command__photo');
    const togglePhoto = (event) => {
        let elem = event.target;
        let oldPhoto = elem.src;
        elem.src = elem.dataset.img;
        elem.dataset.img = oldPhoto;
    };
    photos.forEach((item) => {
        item.addEventListener('mouseenter', togglePhoto);
    });
    photos.forEach((item) => {
        item.addEventListener('mouseleave', togglePhoto);
    });
};
export default changePhoto;