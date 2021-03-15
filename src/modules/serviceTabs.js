const serviceTabs = () => {
    const serviceHeader = document.querySelector('.service-header');
    const serviceHeaderTabs = document.querySelectorAll('.service-header-tab');
    const serviceTab = document.querySelectorAll('.service-tab');

    serviceHeader.addEventListener('click', (e) => {
        const target = e.target.closest('.service-header-tab');
        if (target) {
            serviceHeaderTabs.forEach((item, i) => {
                if (item === target) {
                    serviceTab[i].classList.remove('d-none');
                    item.classList.add('active');
                } else {
                    serviceTab[i].classList.add('d-none');
                    item.classList.remove('active');
                }
            });
        }
    });
};
export default serviceTabs;