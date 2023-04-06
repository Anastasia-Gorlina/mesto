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
const ProfileName = document.querySelector('.popup__profile_name');//NAME
const ProfileStatus = document.querySelector('.popup__profile_status');//STATUS
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

function submitProfileInfo(data) {
    userInfo.setUseInfo(data['popup__name'], data['popup__inf']);
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

const userInfo = new UserInfo({
    userNameSelector: '.profile__name', 
    userInfoSelector: '.profile__status'});

popupOpenButtonElement.addEventListener('click', function () {
    const data = userInfo.getUserInfo();
    ProfileName.value = data.name;
    ProfileStatus.value = data.info;
    popupProfile.open();
});

popupOpenCard.addEventListener('click', function () {
    addCardFormValidor.resetValidation();
    popupAddCard.open();
})

const addCardFormValidor = new FormValidator(validatorConfig, popupAddCardForm);
addCardFormValidor.enableValidation();

const editProfileFormValidor = new FormValidator(validatorConfig, popupProfileForm);
editProfileFormValidor.enableValidation();

const formValidators = {};