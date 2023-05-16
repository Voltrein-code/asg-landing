/* eslint-env browser */

import './index.css';
import Popup from '../components/Popup';
import { anchorScroll, trackScroll } from '../utils/utils';

import { popupProduct } from '../utils/consts';

anchorScroll('.header__about-link', '.about');
anchorScroll('.button_type_order', '.order__form');
anchorScroll('.button_type_scroll', '.header');
anchorScroll('.button_type_examples', '.products');
anchorScroll('.lead__more', '.about');

window.addEventListener('scroll', trackScroll);

const productPopup = new Popup(popupProduct);
productPopup.setEventListeners();

const aboutPopup = new Popup(popupProduct);
aboutPopup.setEventListeners();

Array.from(document.querySelectorAll('.button_type_product')).forEach((el) => {
  el.addEventListener('click', (e) => {
    productPopup.open(e);
    popupProduct.querySelector('.popup__header').textContent = 'Hello world';
  });
});

Array.from(document.querySelectorAll('.card__button')).forEach((el) => {
  el.addEventListener('click', (e) => {
    aboutPopup.open(e);
  });
});
