/* eslint-disable max-len */
/* eslint-env browser */

export default class Popup {
  constructor(popupSelector) {
    this.currentPopup = popupSelector;
    this.container = popupSelector.querySelector('.popup__container');
    this.closeButton = popupSelector.querySelector('.popup__close');
    this.elCenterX = 0;
    this.elCenterY = 0;
    this.animationTime = 400;
    this.containerWidth = this.container.offsetWidth;
    this.containerHeight = this.container.offsetHeight;
    this.handleEscClose = Popup.handleEscClose.bind(this);
    this.handleOverlayClose = Popup.handleOverlayClose.bind(this);
    this.resizePopup = this.resizePopup.bind(this);
  }

  static returnCenter(e, axis) {
    if (axis === 'x') {
      return e.target.getBoundingClientRect().left + e.target.offsetWidth / 2;
    }
    return e.target.getBoundingClientRect().top + e.target.offsetHeight / 2;
  }

  marginHandler(x, y, reverse) {
    if (reverse) {
      return [
        { margin: `${(window.innerHeight - this.container.offsetHeight) / 2}px 0 0 ${(window.innerWidth - this.container.offsetWidth) / 2}px` },
        { margin: `${y - this.container.offsetHeight / 2}px 0 0 ${x - this.container.offsetWidth / 2}px` },
      ];
    }
    return [
      { margin: `${y - this.container.offsetHeight / 2}px 0 0 ${x - this.container.offsetWidth / 2}px` },
      { margin: `${(window.innerHeight - this.container.offsetHeight) / 2}px 0 0 ${(window.innerWidth - this.container.offsetWidth) / 2}px` },
    ];
  }

  static scaleHandler(reverse) {
    if (reverse) {
      return [
        { transform: 'scale(100%)' },
        { transform: 'scale(0)' },
      ];
    }
    return [
      { transform: 'scale(0)' },
      { transform: 'scale(100%)' },
    ];
  }

  setPopupPositionDelay(delay, reverse) {
    setTimeout(() => {
      if (reverse) {
        this.currentPopup.removeAttribute('style');
        this.currentPopup.classList.remove('popup_visible');
      } else {
        this.currentPopup.setAttribute('style', `margin: ${(window.innerHeight - this.containerHeight) / 2}px 0 0 ${(window.innerWidth - this.containerWidth) / 2}px`);
        this.currentPopup.classList.remove('popup_showing');
        this.currentPopup.classList.add('popup_visible');
      }
    }, delay);
  }

  static runAnimation(el, handler, duration) {
    el.animate(handler, duration);
  }

  resizePopup() {
    this.currentPopup.setAttribute('style', `margin: ${(window.innerHeight - height) / 2}px 0 0 ${(window.innerWidth - width) / 2}px`);
  }

  open(e) {
    this.elCenterX = Popup.returnCenter(e, 'x');
    this.elCenterY = Popup.returnCenter(e, 'y');

    this.currentPopup.classList.add('popup_showing');
    document.querySelector('.root').setAttribute('style', 'overflow-y: hidden');

    Popup.runAnimation(this.currentPopup, this.marginHandler(this.elCenterX, this.elCenterY, false), this.animationTime);
    Popup.runAnimation(this.container, Popup.scaleHandler(false), this.animationTime);
    this.setPopupPositionDelay(this.animationTime, false);

    window.addEventListener('resize', this.resizePopup);
    document.addEventListener('keydown', this.handleEscClose);
    this.currentPopup.addEventListener('click', this.handleOverlayClose);
  }

  close() {
    this.setPopupPositionDelay(this.animationTime / 1.5, true);

    document.querySelector('.root').removeAttribute('style');

    Popup.runAnimation(this.currentPopup, this.marginHandler(this.elCenterX, this.elCenterY, true), this.animationTime / 1.5);
    Popup.runAnimation(this.container, Popup.scaleHandler(true), this.animationTime / 1.5);

    window.removeEventListener('resize', this.resizePopup);
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
