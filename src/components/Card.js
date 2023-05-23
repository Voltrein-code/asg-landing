export default class Card {
  constructor(template, buttonSelector, handlerButtonClick) {
    this.template = template;
    this.handlerButtonClick = handlerButtonClick;
    this.buttonSelector = buttonSelector;
  }

  getTemplate() {
    this.cardCloned = this.template.cloneNode(true);

    return this.cardCloned;
  }

  setEventListeners() {
    this.button = this.cardCloned.querySelector(this.buttonSelector);
    this.button.addEventListener('click', this.handlerButtonClick);
  }
}
