export default class FormValidator {
  constructor(selectorsObject, validateItem) {
    this.selectorsObject = selectorsObject;
    this.validateItem = validateItem;
  }

  static showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this.selectorsObject.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  static hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this.selectorsObject.inputErrorClass);
    errorElement.textContent = '';
  }

  static checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(formElement, inputElement);
    }
  }

  static hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  deactivateButton(button) {
    button.classList.remove(this.selectorsObject.activateButtonClass);
    button.setAttribute('disabled', 'disabled');
  }

  static activateButton(button) {
    button.classList.add(this.selectorsObject.activateButtonClass);
    button.removeAttribute('disabled');
  }

  static toggleButtonState(inputList, buttonElement) {
    if (this.hasInvalidInput(inputList)) {
      this.deactivateButton(buttonElement);
    } else {
      this.activateButton(buttonElement);
    }
  }

  static setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this.selectorsObject.inputSelector));
    const buttonElement = formElement.querySelector(this.selectorsObject.submitButtonSelector);

    this.toggleButtonState(inputList, buttonElement);

    this.validateItem.addEventListener('reset', () => {
      inputList.forEach((item) => {
        this.hideInputError(formElement, item);
        this.toggleButtonState(inputList, buttonElement);
      });
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(formElement, inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }
}
