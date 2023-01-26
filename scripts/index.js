const profilePopup = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = profilePopup.querySelector('.popup__close-button');
const popupForm = profilePopup.querySelector('.popup__form');
const popupName = profilePopup.querySelector('.popup__profile_type_name');
const popupInformation = profilePopup.querySelector('.popup__profile_type_information');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__status');

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

function submitProfileInfo (event) {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupInformation.value;
  closePopup(profilePopup);
};

  popupOpenButtonElement.addEventListener('click', function() {
    openPopup(profilePopup);
    popupName.value = profileTitle.textContent;
    popupInformation.value = profileSubtitle.textContent;
  });
  popupCloseButtonElement.addEventListener('click', function() {
    closePopup(profilePopup)
  });
  
    popupForm.addEventListener('submit', submitProfileInfo);