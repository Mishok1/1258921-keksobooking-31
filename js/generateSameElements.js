import { adsArray } from './data.js';
import { getApartmentTypeTranslate, isFeaturesExist, isDataExist} from './functions.js';

//Print new card here
const mapCanvas = document.querySelector('#map-canvas');

const templateCard = document.querySelector('#card').content.querySelector('.popup');

const cardFragment = document.createDocumentFragment();

adsArray.forEach((createAd) => {
  const card = templateCard.cloneNode(true);

  const avatarElement = card.querySelector('.popup__avatar');
  const avatarData = createAd.author?.avatar;
  avatarElement.src = isDataExist(avatarData, avatarElement);

  const titleElement = card.querySelector('.popup__title');
  const titleData = createAd.offer?.title;
  titleElement.textContent = isDataExist(titleData, titleElement);

  const addressElement = card.querySelector('.popup__text--address');
  const addressData = createAd.offer?.address;
  addressElement.textContent = isDataExist(addressData, addressElement);

  const priceElement = card.querySelector('.popup__text--price');
  const priceData = createAd.offer?.price;
  priceElement.textContent = `${isDataExist(priceData, priceElement)} ₽/ночь`;

  const typeElement = card.querySelector('.popup__type');
  const typeData = createAd.offer?.type;
  typeElement.textContent = getApartmentTypeTranslate(isDataExist(typeData, typeElement));

  const capacityElement = card.querySelector('.popup__text--capacity');
  const roomsData = createAd.offer?.rooms;
  const guestsData = createAd.offer?.guests;
  capacityElement.textContent = `${isDataExist(roomsData, capacityElement)} комнаты для ${isDataExist(guestsData, capacityElement)} гостей`;

  const timeElement = card.querySelector('.popup__text--time');
  const checkinData = createAd.offer?.checkin;
  const checkoutData = createAd.offer?.checkout;
  timeElement.textContent = `Заезд после ${isDataExist(checkinData, timeElement)}, выезд до ${isDataExist(checkoutData, timeElement)}`;

  const descriptionElement = card.querySelector('.popup__description');
  const descriptionData = createAd.offer?.description;
  descriptionElement.textContent = isDataExist(descriptionData, descriptionElement);

  const featuresList = card.querySelector('.popup__features');
  const featureData = createAd.offer?.features;
  isFeaturesExist(featureData, card);
  if (featuresList.children.length < 1) {
    featuresList.remove();
  }

  const photosList = card.querySelector('.popup__photos');
  const photoElement = card.querySelector('.popup__photo');
  const photoData = createAd.offer.photos;
  photoElement.src = isDataExist(photoData[0], photoElement); // error with data
  if (photosList.children.length < 1) {
    photosList.remove();
  } else {
    for (let i = 1; i < photoData.length; i++) {
      const newPhotoElement = photoElement.cloneNode(true);
      newPhotoElement.src = photoData[i];
      photosList.appendChild(newPhotoElement);
    }
  }

  cardFragment.appendChild(card);
});


mapCanvas.appendChild(cardFragment);

// console.log(cardFragment);


// Соответствующий блок в карточке скрывается. ili udalyaetsya? (hidden or remove?)
