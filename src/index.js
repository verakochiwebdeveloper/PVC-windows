import popup from './modules/popup';
import popupServices from './modules/popupServices';
import slider from './modules/slider';
import sliderServices from './modules/sliderServices';
import discountsTime from './modules/discountsTime'; 
import form from './modules/form'; 
import sertifecations from './modules/sertifecations'; 
import calculate from './modules/calculate'; 


popup();
popupServices();
slider();
sliderServices();
discountsTime()
form()
sertifecations()


const body = document.querySelector(".balkony");


if (body !== null) {
  calculate();
}