import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector) 
        
        this._handleFormSubmit = handleFormSubmit;
        this._formElement.addEventListener('submit', (event) => {
            this._handleFormSubmit(event, this._getInputValues())
            this.close()
        })
    }

    close = () => {
        super.close()
        this._formElement.reset()
    }
}