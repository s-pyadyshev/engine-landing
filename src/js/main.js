import { mobileMenu } from './components/mobile-menu.js';
import { heroSlider } from './components/hero-slider.js';
import { clientsSlider } from './components/clients-slider.js';
import { permutation } from './components/permutation.js';
import { casesSlider } from './components/cases-slider.js';
import { jobSlider } from './components/job-slider.js';
import { tabs } from './components/tabs.js';
import { scrollspy } from './components/scrollspy.js';
import { backToTop } from './components/backToTop.js';
import { cardEmployeesInit } from './components/cardEmployees.js';

window.addEventListener(
  'load',
  () => {
    mobileMenu.init();
    heroSlider.init();
    clientsSlider.init();
    casesSlider.init();
    jobSlider.init();
    permutation.init();
    tabs.init();
    scrollspy.init();
    backToTop.init();
    cardEmployeesInit.init();
    document.querySelector('body').classList.add('page-loaded');
  },
  false
);
