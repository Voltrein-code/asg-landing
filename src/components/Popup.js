/* eslint-env browser */

export default class Popup {
  constructor(popupSelector) {
    this.currentPopup = popupSelector;
    this.closeButton = popupSelector.querySelector('.popup__close');
    this.handleEscClose = Popup.handleEscClose.bind(this);
    this.handleOverlayClose = Popup.handleOverlayClose.bind(this);
  }

  open() {
    this.currentPopup.classList.add('popup_visible');

    document.addEventListener('keydown', this.handleEscClose);
    this.currentPopup.addEventListener('click', this.handleOverlayClose);
  }

  close() {
    this.currentPopup.classList.remove('popup_visible');

    document.removeEventListener('keydown', Popup.handleEscClose);
    this.currentPopup.removeEventListener('click', Popup.handleOverlayClose);
  }

  static handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  static handleOverlayClose(e) {
    if (e.target === this.currentPopup) {
      this.close();
    }
  }

  setEventListeners() {
    this.closeButton.addEventListener('click', () => this.close());
  }
}
