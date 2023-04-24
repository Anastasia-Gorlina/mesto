import '../pages/index.css';
import { Card }  from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {baseUrl, token,  validatorConfig } from '../utils/constants.js';
import { InitialCards } from '../utils/data.js';
import Api from '../components/Api.js';

// POPUP PROFILE
const popupOpenButtonElement = document.querySelector('.profile__edit-button');//BUTTON PEN
const popupProfileForm = document.querySelector('.popup-edit-form');//форма попапа редактирования профиля
const profileName = document.querySelector('.popup__profile_name');//NAME
const profileStatus = document.querySelector('.popup__profile_status');//STATUS

//POPUP CARD
const popupOpenCard = document.querySelector('.profile__button');//PLUS BUTTON
const popupAddCardForm = document.querySelector('.popup-add-form');//FORM NEW POPUP

const api = new Api({
    baseUrl: baseUrl,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
});

let user, section;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((result) => {
        user = result[0];
        userInfo.setUserInfo(result[0].name, result[0].about, result[0].avatar);
        section = new Section({items: result[1], renderer: createCard}, '.elements');
        section.renderItems(popupWithImage.open);
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    })

/* api - поставить лайк карточке */
const handleAddLikeClick = (id, toggleLikeColorAndCounter) => {
    api.addLike(id)
      .then((result) => {
        toggleLikeColorAndCounter(result);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });
}

/* api - удалить лайк карточки */
const handleRemoveLikeClick = (id, toggleLikeColorAndCounter) => {
    api.deleteLike(id)
      .then((result) => {
        toggleLikeColorAndCounter(result);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });
}

/* Popup подтверждения удаления карточки */
const handleDeleteButtonClick = (id, setInitialText, deleteCard) => {
  api.deleteCard(id)
    .then((result) => {
      deleteCard();
      popupWithConfirm.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
  })
  .finally(() => setInitialText());
}

const popupWithConfirm = new PopupWithConfirm('.popup_type_delete-picture', handleDeleteButtonClick);
popupWithConfirm.setEventListeners();

const popupWithImage = new PopupWithImage('#popup-big-image');
popupWithImage.setEventListeners();

const createCard = (cardData) => {
    return new Card(cardData,
                    '.card__template',
                    popupWithImage.open,
                    handleAddLikeClick,
                    handleRemoveLikeClick,
                    popupWithConfirm.open,
                    user)
                    .createCard();
}

const submitProfileInfo = (data, setInitialText) => {
    /* api - получение информации о пользователе */
    popupProfile.setButtonText('Сохранение...');
    api.editUserInfo(data['popup__appellation'], data['popup__inf'])
        .then((result) => {
            userInfo.setUserInfo(result.name, result.about, result.avatar);
            popupProfile.close();
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        })
        .finally(() => setInitialText())
}

const submitFormCard = (data, setInitialText) => {
    /* api - создание карточки */
    popupAddCard.setButtonText('Сохранение...');
    api.addNewCard(data['popup__name'], data['popup__link'])
        .then((result) => {
            section.addItem(createCard(result));
            popupAddCard.close();
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        })
        .finally(() => setInitialText());
}

const popupProfile = new PopupWithForm('.popup_type_profile', submitProfileInfo);
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_type_card', submitFormCard);
popupAddCard.setEventListeners();

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userInfoSelector: '.profile__status',
    userAvatarSelector: '.profile__avatar'
});

popupOpenButtonElement.addEventListener('click', function () {
    const data = userInfo.getUserInfo();
    profileName.value = data.name;
    profileStatus.value = data.info;
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

const popupAvatarForm = document.querySelector('.popup-change-avatar-form');
const avatarEditFormValidator = new FormValidator(validatorConfig, popupAvatarForm);
avatarEditFormValidator.enableValidation();

const handleEditAvatar = (data, setInitialText) => {
    editAvatarPopup.setButtonText('Сохранение...')
    api.editUserAvatar(data['popup__avatar-link'])
        .then((res) => {
            userInfo.setUserAvatar(res.avatar)
            editAvatarPopup.close()
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => setInitialText());
};

const editAvatarPopup = new PopupWithForm(
   '.popup_type_change-avatar',
   handleEditAvatar,
);

editAvatarPopup.setEventListeners();

const editAvatarButton = document.querySelector('.profile__edit-avatar-button');
editAvatarButton.addEventListener('click', () => {
  avatarEditFormValidator.resetValidation()
  editAvatarPopup.open()
})