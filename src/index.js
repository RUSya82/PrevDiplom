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