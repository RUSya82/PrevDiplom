import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import serviceTabs from "./modules/serviceTabs";
import addScrollToElements from "./modules/addScrollToElements";
import slider from "./modules/slider";
import changePhoto from "./modules/changePhoto";
import togglePopup from "./modules/togglePopup";
import validCalculator from "./modules/validCalculator";
import validFeedbackForm from "./modules/validFeedbackForm";
import calc from "./modules/calc";
import formListener from "./modules/formListener";
import SliderCompany from "./modules/sliderCompany";


countTimer('30 Mar 2021');
toggleMenu();
togglePopup();
addScrollToElements();
serviceTabs();
slider(3000);
changePhoto();
validCalculator();
validFeedbackForm();
calc(100);
formListener();
const sliderCompany = new SliderCompany({
    main: '.companies-wrapper',
    wrapper: '.companies-hor',
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1024,
            slidesToShow: 4,
        },
        {
            breakpoint: 767,
            slidesToShow: 2,
        },
        {
            breakpoint: 375,
            slidesToShow: 1,
        }
    ]
});
sliderCompany.init();
