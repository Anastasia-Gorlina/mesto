import '../pages/index.css';
import { initialCards, enableValidation} from '../utils/data.js';
import { Card }  from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { validatorConfig } from '../utils/constants.js';

// POPUP PROFILE

const popupOpenButtonElement = document.querySelector('.profile__edit-button');//BUTTON PEN
const popupProfileForm = document.querySelector('.popup-edit-form');//форма попапа редактирования профиля
/*const popupName = popupProfileForm.querySelector('.popup__profile_type_name');
const popupInformation = popupProfileForm.querySelector('.popup__profile_type_information');*/
const profileName = document.querySelector('.profile__name');//NAME
const profileStatus = document.querySelector('.profile__status');//STATUS
/*const popupSubmitButton = popupProfile.querySelector('.popup__submit-button');//BUTTON SAVE*/

//POPUP CARD
//const popupAddCard = document.querySelector('.popup_type_card');//POPUP ADD CARD
const popupOpenCard = document.querySelector('.profile__button');//PLUS BUTTON
/*const popupImageName = popupAddCard.querySelector('.popup__profile_img-name');
const popupImageLink = popupAddCard.querySelector('.popup__profile_img-link');
const popupCreateButton = popupAddCard.querySelector('.popup__create-button');//SAVE BUTTON NEW CARD
const popupCloseCard = popupAddCard.querySelector('.popup__close-button');//BUTTON CLOSE POPUP*/
const popupAddCardForm = document.querySelector('.popup-add-form');//FORM NEW POPUP

const popupWithImage = new PopupWithImage('#popup-big-image');
popupWithImage.setEventListeners();


const createCard = (cardData) => {
    return new Card(cardData, '.card__template', popupWithImage.open).createCard();
}

/*const section = new Section({items: initialCards, renderer: createCard}, '.elements');
section.renderItems(popupWithImage.open);

const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
            closePopup(popup) 
          } 
    })
})
popupOpenButtonElement.addEventListener('click', function () {
    openPopup(popupProfile);
    profileName.value= popupImageName.textContent ;
    profileStatus.value = popupImageLink.textContent;
});

function submitProfileInfo(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupInformation.value;
    closePopup(popupProfile);
}

function submitFormCard(event) {
    event.preventDefault();
    renderInitialCard({
        name: popupImageName.value,
        link: popupImageLink.value,
    });
    event.target.reset();
    closePopup(popupAddCard)
}
*/

function submitProfileInfo(data) {
    userInfo.setUseInfo(data['popup__name'], data['popup__information']);
    popupProfile.close();
}

function submitFormCard(data) {
    section.addItem(createCard({name: data['popup__name'], link: data['popup__link']}));
    popupAddCard.close();
}

const popupProfile = new PopupWithForm('.popup_type_profile', submitProfileInfo);
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_type_card', submitFormCard);
popupAddCard.setEventListeners();

const section = new Section({items: initialCards, renderer: createCard}, '.elements');
section.renderItems(popupWithImage.open);

const userInfo = new UserInfo({userNameSelector: '.profile__name', userInfoSelector: '.profile__status'});

popupOpenButtonElement.addEventListener('click', function () {
    const data = userInfo.getUserInfo();
    profileName.value = data.name;
    profileStatus.value = data.info;
    popupProfile.open();
});
/*
popupProfileForm.addEventListener('submit', submitProfileInfo);

popupAddCardForm.addEventListener('submit', submitFormCard);

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEcs);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEcs);
}

function closePopupByEcs(event) {
    if (event.key ==='Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
*/

popupOpenCard.addEventListener('click', function () {
    addCardFormValidor.resetValidation();
    popupAddCard.open();
})

const addCardFormValidor = new FormValidator(validatorConfig, popupAddCardForm);
addCardFormValidor.enableValidation();

const editProfileFormValidor = new FormValidator(validatorConfig, popupProfileForm);
editProfileFormValidor.enableValidation();

const formValidators = {};