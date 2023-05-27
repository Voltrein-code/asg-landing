/* eslint-env browser */

const popupProduct = document.querySelector('.popup_type_product');
const popupAbout = document.querySelector('.popup_type_about');
const cardProductTemplate = document.querySelector('.card-container_type_product').content;
const cardAboutTemplate = document.querySelector('.card-container_type_about').content;
const productButtonSelector = '.button_type_product';
const aboutButtonSelector = '.card__button';
const aboutCardsContainer = document.querySelector('.about__cards');
const productCardsContainer = document.querySelector('.products__cards');

export {
  popupProduct,
  popupAbout,
  cardProductTemplate,
  productButtonSelector,
  productCardsContainer,
  cardAboutTemplate,
  aboutButtonSelector,
  aboutCardsContainer,
};
