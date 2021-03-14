const serviceTabs = () => {
    const serviceHeader = document.querySelector('.service-header');
    const serviceHeaderTabs = document.querySelectorAll('.service-header-tab');
    const serviceTab = document.querySelectorAll('.service-tab');

    serviceHeader.addEventListener('click', (e) => {
        let target = e.target.closest('.service-header-tab');
        if (target) {
            serviceHeaderTabs.forEach((item, i) => {
                if (item === target) {
                    console.log(serviceTab[i]);
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