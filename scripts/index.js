const cardsContainer = document.querySelector('.photo-grid');//CARD SECTION

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

const cardTemplate = document.querySelector('.photo-grid__template').content.querySelector('.photo-grid__element');

const handleDeleteCard = (event) => {
    event.target.closest('.photo-grid__element').remove();
}
const handleLikeCard = (event) => {
    event.target.closest('.photo-grid__vector').classList.toggle('photo-grid__vector_active');
}
 //CREATING CARDS

const initialCards = [
  {
    name: 'Дагестан',
    link: 'https://images.unsplash.com/photo-1652716456950-0c1d6e1433cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fCVEMCU5NCVEMCVCMCVEMCVCMyVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCMCVEMCVCRHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1638989432598-78740c9ba7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'Дагестан',
    link: 'https://images.unsplash.com/photo-1629891592102-31221061e755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fCVEMCU5NCVEMCVCMCVEMCVCMyVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCMCVEMCVCRHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1610984660607-90b67b18e2c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fCVEMCU5MSVEMCVCMCVEMCVCOSVEMCVCQSVEMCVCMCVEMCVCQnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1617911478446-c7f1dd96966e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJTk0JUQwJUJFJUQwJUJDJUQwJUIxJUQwJUIwJUQwJUI5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1662646358660-158731957700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fCVEMCU5MyVEMCVCRSVEMSU4MCVEMCVCMCUyMCVEMCVBRCVEMCVCQiVEMSU4QyVEMCVCMSVEMSU4MCVEMSU4MyVEMSU4MXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
  }
]

const createCard = (card) => {
    const cardElement = cardTemplate.cloneNode(true);

    const cardPicture = cardElement.querySelector('.photo-grid__image');
    const cardTitle = cardElement.querySelector('.photo-grid__title');
    cardPicture.src = card.link;
    cardPicture.alt = card.name;
    cardTitle.textContent = card.name;

    const deleteButtonElement = cardElement.querySelector('.photo-grid__element-delete');
    deleteButtonElement.addEventListener('click', handleDeleteCard);

    const likeButtonElement = cardElement.querySelector('.photo-grid__vector');
    likeButtonElement.addEventListener('click', handleLikeCard);

    cardPicture.addEventListener('click', () => {
        popupBigImage.src = card.link;
        popupBigImage.alt = card.name;
        popupStatusBig.textContent = card.name;
        openPopup(popupBig);
    })

    return cardElement;
}

const renderInitalCards = (item) => {
    cardsContainer.prepend(createCard(item));
}

initialCards.forEach((item) => {
    renderInitalCards(item);
})

const openPopup = function (popup) {
    popup.classList.add('popup_opened');
}
popupOpenButtonElement.addEventListener('click', function () {
    openPopup(popupProfile)
});
popupOpenCard.addEventListener('click', function () {
    openPopup(popupAddCard);
});

const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
}

const closePopupOverlayClick = (event) => {
    if (!event.target.closest('.popup__container')) {
        closePopup(event.target)
    }
}

popupCloseButtonElement.addEventListener('click', function () {
    closePopup(popupProfile)
});
popupCloseCard.addEventListener('click', function () {
    closePopup(popupAddCard)
});
popupCloseBigImage.addEventListener('click', function () {
    closePopup(popupBig);
})

function submitProfileInfo(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupInformation.value;
    closePopup(popupProfile);
}

function submitFormCard(event) {
    event.preventDefault();
    renderInitalCards({
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
popupCloseButtonElement.addEventListener('click', function () {
    closePopup(popupProfile)
});
popupProfileForm.addEventListener('submit', submitProfileInfo);
popupCloseBigImage.addEventListener('click', function () {
    closePopup(popupBig)
});

popupProfile.addEventListener('click', closePopupOverlayClick);
popupAddCard.addEventListener('click', closePopupOverlayClick);
popupBig.addEventListener('click', closePopupOverlayClick);
popupAddCardForm.addEventListener('submit', submitFormCard);