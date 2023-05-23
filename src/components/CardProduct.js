/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import Card from './Card';

export default class CardProduct extends Card {
  constructor(template, buttonSelector, handlerButtonClick, cardData) {
    super(template, buttonSelector, handlerButtonClick);
    this.cardData = cardData;
  }

  getCard() {
    this.cardElement = this.getTemplate();

    this.cardIcon = this.cardElement.querySelector('.card__image');
    this.cardHeading = this.cardElement.querySelector('.card__heading');
    this.cardSubtitle = this.cardElement.querySelector('.card__text');
    this.cardCheckList = this.cardElement.querySelectorAll('.card__feature');

    this.cardIcon.src = this.cardData.cardIcon;
    this.cardHeading.textContent = this.cardData.cardHeading;
    this.cardSubtitle.textContent = this.cardData.cardSubtitle;

    this.checkIcon = document.querySelector('.card__feature-check');

    Array.from(this.cardCheckList).forEach((check, index) => {
      check.append(this.cardData.cardCheckList[index]);
    });

    this.setEventListeners();

    return this.cardElement;
  }
}
