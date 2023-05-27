/* eslint-env browser */

import './index.css';
import Popup from '../components/Popup';
import CardProduct from '../components/CardProduct';
import { anchorScroll, trackScroll } from '../utils/utils';
import { productData, aboutData } from '../utils/data';

import {
  popupProduct,
  cardProductTemplate,
  productButtonSelector,
  productCardsContainer,
  cardAboutTemplate,
  aboutButtonSelector,
  aboutCardsContainer,
} from '../utils/consts';
import CardAbout from '../components/CardAbout';

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

function handlerButtonClick(event) {
  productPopup.open(event);
}

productData.forEach((element) => {
  // eslint-disable-next-line max-len
  const card = new CardProduct(cardProductTemplate, productButtonSelector, handlerButtonClick, element);

  productCardsContainer.prepend(card.getCard());
});

aboutData.forEach((element) => {
  const card = new CardAbout(cardAboutTemplate, aboutButtonSelector, handlerButtonClick, element);

  aboutCardsContainer.prepend(card.getCard());
});
