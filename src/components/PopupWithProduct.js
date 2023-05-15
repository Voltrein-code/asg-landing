import Popup from './Popup';

export default class PopupWithProduct extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this.currentPopup.quarySelector('.popup__image');
    this.heading = this.currentPopup.quarySelector('.popup__header');
    // this.text =
  }
}
