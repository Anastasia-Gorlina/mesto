const page = document.querySelector('.page');
const profilePopup = page.querySelector('.popup');

const Popups = page. querySelector('.popup_type_profile');
const popupCard = page.querySelector('.popup_type_card');
const popupImage = page.querySelector('.popup_type_image');

const popupCloseButtonElement = page.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const buttonProfile = document.querySelector('.profile__button');

const popupForm = page.querySelector('.popup__form');
const popupName = page.querySelector('.popup__profile_type_name');
const popupInformation = page.querySelector('.popup__profile_type_information');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__status');

const cardName = popupCard.querySelector('.popup__profile_type_img-name');
const cardLink = popupCard.querySelector('.popup__profile_type_img-link');
const popupInformations = page.querySelector('.popup__input_type_information');
const buttonCloseMesto = popupCard.querySelector('.popup__close-button_type_card');

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
  debugger;
  event.preventDefault();
  popupName.textContent = profileTitle.value;
  popupInformation.textContent = profileSubtitle.value;
  closePopup(Popups);
};


 //OPEN PROFILE POPUP
  popupOpenButtonElement.addEventListener('click', function() {
    openPopup(Popups);
    popupName.value = profileTitle.textContent;
    popupInformation.value = profileSubtitle.textContent;
  });

  popupCloseButtonElement.addEventListener('click', function() {
    closePopup(Popups)
  });

//ADD CARD
  buttonProfile.addEventListener('click', function () {
    openPopup(popupCard);
  });
  
//SAVE POPUP PROFILE
const buttonSaveProfile = profilePopup.querySelector('.popup__submit-popup-button');

function saveProfilePopup(e) {
  e.preventDefault();
  profileTitle.textContent = `${popupName.value}`;
  profileSubtitle.textContent = `${popupInformations.value}`;
  closePopup(profilePopup);
};

const popupFormProfile = document.forms['profile-form'];
popupFormProfile.addEventListener('submit', saveProfilePopup);

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

const placesContainer = document.querySelector('.photo-grid__elements');
const placeTemplate = document.querySelector('#photogrid').content;
const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const placeElement = placeTemplate
    .querySelector(".photo-grid__element")
    .cloneNode(true);
  placeElement.querySelector(".photo-grid__title").textContent = name;
  placeElement.querySelector(".photo-grid__image").src = link;

  placesContainer.prepend(placeElement);
}
render();


//ADD PHOTO
const photoGridElement = document.querySelector('#photogrid').content;

function createCard(item) {
const mestoElement = photoGridElement.querySelector('.photo-grid__elements').cloneNode(true);
const photoGridElement = mestoElement.querySelector('.photo-grid__element');

photoGridElement.src = item.link;
photoGridElement.alt = item.name;
mestoElement.querySelector('.photo-grid__title').textContent = item.name;

initialCards.forEach((item) => {
  photoGridElement.append(createCard(item));
});
// LIKE PHOTO

const likeButton = mestoElement.querySelector('.photo-grid__vector');

function vectorElement() {
  likeButton.classList.toggle('photo-grid__vector_active');
}
likeButton.addEventListener('click', vectorElement);
// DELETE PHOTO

const deleteButton = mestoElement.querySelector('.photo-grid__element-delete');
function deletePhoto() {
  deleteButton.closest('.photo-grid__element').remove();
}

deleteButton.addEventListener('click', deletePhoto);

// OPEN BIG PHOTO
const image = mestoElement.querySelector('.photo-grid__image');
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

// Добавление новой фотографии 
