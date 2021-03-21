class SliderCompany {
    constructor(
        {
            main = '.glo-slider',
            wrapper = 'glo-slider__wrapper',
            position = 0,
            slidesToShow = 3,
            responsive = []
        }) {
        try{
            this.main = document.querySelector(main);
            this.wrapper = document.querySelector(wrapper);
            if(!this.main || !this.wrapper){
                throw 'Not any sliders!';
            }
            this.slides = [...document.querySelector(wrapper).children];
            this.position = position;
            this.slidesToShow = slidesToShow;
            this.slidesToShowDefault = slidesToShow;
            this.responsive = responsive;
            this.slideWidth = Math.floor(100 / this.slidesToShow);
        } catch (e) {
            console.error(e);
        }

    }

    init() {
        this.addGloClass();
        this.addStyle();
        this.addArrows();
        this.addControls();
        if(this.responsive){
            this.responsiveInit();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrapper.classList.add('glo-slider__wrapper');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }
    responsiveInit(){
        const allResponse = new Map();
        this.responsive.forEach(item => {
            allResponse.set(item.breakpoint, item.slidesToShow);
        });
        const maxResponse = Math.max(...allResponse.keys());
        const checkResponse = () => {
            const windowWidth = document.documentElement.clientWidth;
            console.log("checkResponse");
            if(windowWidth < maxResponse){
                for (let resp of allResponse.keys()){
                    if(windowWidth < resp){
                        this.slidesToShow = allResponse.get(resp);
                        this.slideWidth = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = this.slidesToShowDefault;
                this.slideWidth = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
    addStyle() {
        let style = document.getElementById('gloSliderStyle');
        if(!style){
            style = document.createElement('style');
            style.id = 'gloSliderStyle';
        }
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }
            .glo-slider__wrapper{
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
                
            }
            .glo-slider__item{
                flex: 0 0 ${this.slideWidth}% !important;
                display: flex !important;;
                align-items: center !important;;
                justify-content: center !important;;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);
    }

    nextSlide() {
        if (this.position + this.slidesToShow < this.slides.length) {
            this.wrapper.style.transform = `translateX(${-(++this.position * this.slideWidth)}%)`;
        }
    }

    prevSlide() {
        if (this.position > 0) {
            //--this.position;
            this.wrapper.style.transform = `translateX(-${--this.position * this.slideWidth}%)`;
        }
    }

    addArrows() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.classList.add('glo-button__prev');
        this.next.classList.add('glo-button__next');
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
        const style = document.createElement('style');
        style.textContent = `
            .glo-button__prev,
            .glo-button__next{
                width: 40px;
                height: 40px;
                margin: 5px 20px;
                padding: 0;
                border-top: 5px solid #19b5fe;
                border-bottom: none;
                background: transparent;
            }
            .glo-button__prev{
                transform: rotate(-45deg);
                border-left: 5px solid #19b5fe;
                border-right: none;
            }
            .glo-button__next{
                transform: rotate(45deg);
                border-right: 5px solid #19b5fe;
                border-left: none;
                
            }
            .glo-button__prev:hover,
            .glo-button__next:hover,
            .glo-button__prev:focus,
            .glo-button__next:focus{
                background: transparent;
                outline: none;
            }
        `;
        document.head.appendChild(style);
    }

    addControls() {
        this.prev.addEventListener('click', this.prevSlide.bind(this));
        this.next.addEventListener('click', this.nextSlide.bind(this));
    }

}

export default SliderCompany;