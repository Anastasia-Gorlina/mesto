import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImageBig = this._popup.querySelector('.popup__image');//BIG PIC
        this._popupHeadingBig = this._popup.querySelector('.popup-image-status');//NAME BIG PIC
        this._popupCloseButtonElement = this._popup.querySelector('.popup__close-button'); //BUTTON CLOSE POPUP
    }

    open = (link, name) => {
        this._popupImageBig.src = link;
        this._popupImageBig.alt = name;
        this._popupHeadingBig.textContent = name;
        this._popup.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEcsClose)
    }
}