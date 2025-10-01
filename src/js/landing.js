import { mobileMenu } from './components/mobile-menu.js';
import { scrollspy } from './components/scrollspy.js';
import { accordion } from './components/accordion.js';

window.addEventListener(
  'load',
  () => {
    accordion.init();
    mobileMenu.init();
    scrollspy.init();
    document.querySelector('body').classList.add('page-loaded');
  },
  false
);
