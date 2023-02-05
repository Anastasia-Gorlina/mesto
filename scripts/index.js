const page = document.querySelector('.page');
const profilePopup = page.querySelector('.popup');
const popupProfile = page.querySelector('.popup_type_profile');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = profilePopup.querySelector('.popup__close-button');
const popupForm = profilePopup.querySelector('.popup__form');
const popupName = profilePopup.querySelector('.popup__profile_type_name');
const popupInformation = profilePopup.querySelector('.popup__profile_type_information');
const profileTitle = page.querySelector('.profile__name');
const profileSubtitle = page.querySelector('.profile__status');
const popupCard = page.querySelector('.popup_type_card');
const popupImage = page.querySelector('.popup_type_image');
const cardName = popupCard.querySelector('.popup__input_type_img-name');
const cardLink = popupCard.querySelector('.popup__input_type_img-link');
const popupInformations = page.querySelector('.popup__input_type_information');
const photoGridElement = page.querySelector('.photo-grid__elements');
const buttonCloseMesto = popupCard.querySelector('.popup__close-button_type_mesto');
const buttonAddMesto = page.querySelector('.profile__button');
const popupSrcImage = popupImage.querySelector('.popup__image');
const popupDescriptionImage = popupImage.querySelector('.popup__image-description');

// OPEN POPUP
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}
//CLOSE POPUP
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}
//CLOSE POPUP ESC
function submitProfileInfo (event) {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupInformation.value;
  closePopup(profilePopup);
};
 //OPEN PROFILE POPUP
  popupOpenButtonElement.addEventListener('click', function() {
    openPopup(profilePopup);
    popupName.value = profileTitle.textContent;
    popupInformation.value = profileSubtitle.textContent;
  });
  
  popupCloseButtonElement.addEventListener('click', function() {
    closePopup(profilePopup)
  });
  
    popupForm.addEventListener('submit', submitProfileInfo);

//ADD CARD
  buttonAddMesto.addEventListener('click', function () {
    openPopup(popupCard);
  });

//SAVE POPUP PROFILE
const buttonSaveProfile = profilePopup.querySelector('.popup__submit-popup-button');

function saveProfilePopup(e) {
  e.preventDefault();
  profileName.textContent = `${popupName.value}`;
  profileDescription.textContent = `${popupInformations.value}`;
  closePopup(popupProfile);
};

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
];

const popupFormProfile = document.forms['profile-form'];

popupFormProfile.addEventListener('submit', saveProfilePopup);

//ADD PHOTO
const photoGridTemplate = document.querySelector('.photo-grid').content;

function createCard(item) {
const mestoElement = photoGridElement.querySelector('.photo-grid__element').cloneNode(true);
const photoGridElements = mestoElement.querySelector('.photo-grid__elements');

photoGridElement.src = item.link;
photoGridElement.alt = item.name;
mestoElement.querySelector('.photo-grid__title').textContent = item.name;

// LIKE PHOTO

const likeButton = mestoElement.querySelector('.photo-grid__vector');

function likePhoto() {
  likeButton.classList.toggle('photo-grid__vector_active');
}
likeButton.addEventListener('click', likePhoto);

// DELETE PHOTO

const deleteButton = mestoElement.querySelector('.photo-grid__element-delete');

function deletePhoto() {
  deleteButton.closest('.photo-grid__element').remove();
}

deleteButton.addEventListener('click', deletePhoto);

// OPEN BIG PHOTO
const image = mestoElement.querySelector('.photo-grid__item');
const descriptionImage = mestoElement.querySelector('.photo-grid__title');

function openBigImage() {
  popupSrcImage.src = image.getAttribute('src');
  popupSrcImage.alt = descriptionImage.textContent;
  popupDescriptionImage.textContent = descriptionImage.textContent;
  openPopup(popupImage);
  }

image.addEventListener('click', openBigImage);
return mestoElement;
  
}

profilePopup.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  });
});

buttonEditProfile.addEventListener('click', function () {
  popupName.value = profileName.textContent;
  popupInformation.value = profileDescription.textContent;

  const inputs = popupProfile.querySelectorAll('.popup__input');
  const inputsError = popupProfile.querySelectorAll('.popup__input-error');

  inputs.forEach(element => {
    element.classList.remove('popup__input_type_error');
    element.textContent = '';
  });

  inputsError.forEach(element => {
    element.textContent = '';
    element.classList.remove('popup__input-error_active');
  });

  openPopup(popupProfile);
});
