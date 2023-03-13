import { initialCards, enableValidation } from './data.js';
import { Card }  from './Card.js';
import { FormValidator } from './FormValidator.js';


const cardsContainer = document.querySelector('.elements');//CARD SECTION

// POPUP PROFILE
const popupProfile = document.querySelector('.popup_type_profile');//POPUP PROFILE
const popupOpenButtonElement = document.querySelector('.profile__edit-button');//BUTTON PEN
const popupCloseButtonElement = popupProfile.querySelector('.popup__close-button');//BUTTON CLOSE POPUP
const popupProfileForm = popupProfile.querySelector('.popup-edit-form');//форма попапа редактирования профиля
const popupName = popupProfileForm.querySelector('.popup__profile_type_name');
const popupInformation = popupProfileForm.querySelector('.popup__profile_type_information');
const profileName = document.querySelector('.profile__name');//NAME
const profileStatus = document.querySelector('.profile__status');//STATUS
const popupSubmitButton = popupProfile.querySelector('.popup__submit-button');//BUTTON SAVE

//POPUP CARD
const popupAddCard = document.querySelector('.popup_type_card');//POPUP ADD CARD
const popupOpenCard = document.querySelector('.profile__button');//PLUS BUTTON
const popupImageName = popupAddCard.querySelector('.popup__profile_img-name');
const popupImageLink = popupAddCard.querySelector('.popup__profile_img-link');
const popupCreateButton = popupAddCard.querySelector('.popup__create-button');//SAVE BUTTON NEW CARD
const popupCloseCard = popupAddCard.querySelector('.popup__close-button');//BUTTON CLOSE POPUP
const popupAddCardForm = popupAddCard.querySelector('.popup-add-form');//FORM NEW POPUP

const popupBig = document.querySelector('.popup_type_image');//POPUP BIG PICTURE
const popupBigImage = popupBig.querySelector('.popup__image');//BIG PIC
const popupStatusBig = popupBig.querySelector('.popup-image-status');//NAME BIG PIC
const popupCloseBigImage = popupBig.querySelector('.popup__close-button'); //BUTTON CLOSE POPUP

const cardTemplate = document.querySelector('.card__template').content.querySelector('.photo-grid__element');

//const handleDeleteCard = (event) => {
//    event.target.closest('.photo-grid__element').remove();
//}
//const handleLikeCard = (event) => {
//    event.target.closest('.photo-grid__vector').classList.toggle('photo-grid__vector_active');
//}

 //CREATING CARDS

//const createCard = (card) => {
//    const cardElement = cardTemplate.cloneNode(true);

//    const cardPicture = cardElement.querySelector('.photo-grid__image');
//    const cardTitle = cardElement.querySelector('.photo-grid__title');
//    cardPicture.src = card.link;
//    cardPicture.alt = card.name;
//    cardTitle.textContent = card.name;

//    const deleteButtonElement = cardElement.querySelector('.photo-grid__element-delete');
//   deleteButtonElement.addEventListener('click', handleDeleteCard);
//
//    const likeButtonElement = cardElement.querySelector('.photo-grid__vector');
//    likeButtonElement.addEventListener('click', handleLikeCard);

//    cardPicture.addEventListener('click', () => {
//        popupBigImage.src = card.link;
//        popupBigImage.alt = card.name;
//        popupStatusBig.textContent = card.name;
//        openPopup(popupBig);
//    })
//
//    return cardElement;
//}

const openPopupGallery = (link, name) => {
    popupBigImage.src = link;
    popupBigImage.alt = name;
    popupStatusBig.textContent = name;
    openPopup(popupBig);
}
const createCard = (CardData, templateSelector, handleCardClick) => {
    return new Card(CardData, templateSelector, handleCardClick).createCard();
}
const renderInitalCard = (item) => {
    cardsContainer.prepend(createCard({name: item.name, link: item.link}, '.card__template', openPopupGallery ));
}

initialCards.forEach((item) => {
    renderInitalCard(item);
})


const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})
popupOpenButtonElement.addEventListener('click', function () {
    openPopup(popupProfile);
    profileName.value= popupImageName.textContent ;
    profileStatus.value = popupImageLink.textContent;
});

//const closePopupOverlayClick = (event) => {
//    if (!event.target.closest('.popup__container')) {
//        closePopup(event.target)
//    }
//}

//popupCloseButtonElement.addEventListener('click', function () {
//    closePopup(popupProfile)
//});
//popupCloseCard.addEventListener('click', function () {
//    closePopup(popupAddCard)
//});
//popupCloseBigImage.addEventListener('click', function () {
//    closePopup(popupBig);
//})

function submitProfileInfo(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupInformation.value;
    closePopup(popupProfile);
}

function submitFormCard(event) {
    event.preventDefault();
    renderInitalCard({
        name: popupImageName.value,
        link: popupImageLink.value,
    });
    event.target.reset();
    closePopup(popupAddCard)
}

popupOpenButtonElement.addEventListener('click', function () {
    openPopup(popupProfile);
    popupName.value = profileName.textContent;
    popupInformation.value = profileStatus.textContent;
});

popupProfileForm.addEventListener('submit', submitProfileInfo);

//popupProfile.addEventListener('click', closePopupOverlayClick);
//popupAddCard.addEventListener('click', closePopupOverlayClick);
//popupBig.addEventListener('click', closePopupOverlayClick);
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

popupOpenCard.addEventListener('click', function () {
    popupCreateButton.setAttribute('disabled', true);
    popupCreateButton.classList.add('popup__button_disabled');
    popupAddCardForm.reset();
    openPopup(popupAddCard)
})

const validatorConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__profile',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};
const addCardFormValidor = new FormValidator(validatorConfig, popupAddCardForm);
addCardFormValidor.enableValidation();

const editProfileFormValidor = new FormValidator(validatorConfig, popupProfileForm);
editProfileFormValidor.enableValidation();