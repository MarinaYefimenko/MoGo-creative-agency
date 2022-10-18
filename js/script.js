// use strict;
import accordion from './modules/accordion';
import rewiesSlider from './modules/rewiesSlider';
import openBurgerMenu from './modules/openBurgerMenu';
import postRequest from './modules/postRequest';
import navigation from './modules/navigation';

window.addEventListener('DOMContentLoaded', () => {

    accordion('.accord__item', '.accord__header', '.accordion');
    rewiesSlider('.reviews__btn--prev', '.reviews__btn--next', '.reviews__item');
    openBurgerMenu('.nav-toggle', '.nav', '.cross', '.nav__link');
    postRequest('.subscribe');
    navigation('.btn__intro', '#learn-more');
    navigation('.nav__link', '#about', '#service', '#team', '#work', '#blog', '#footer-contacts');
});