/* eslint-disable no-undef */
import Card from './Card';

export default class CardAbout extends Card {
  constructor(template, buttonSelector, handlerButtonClick, cardData) {
    super(template, buttonSelector, handlerButtonClick);
    this.cardData = cardData;
  }

  getCard() {
    this.cardElement = this.getTemplate();

    this.cardIcon = this.cardElement.querySelector('.card__image');
    this.cardHeading = this.cardElement.querySelector('.card__heading');
    this.cardSubtitle = this.cardElement.querySelector('.card__text');

    this.cardIcon.src = this.cardData.cardIcon;
    this.cardHeading.textContent = this.cardData.cardHeading;
    this.cardSubtitle.textContent = this.cardData.cardSubtitle;

    this.setEventListeners();

    return this.cardElement;
  }
}
