import { addErrorClass } from './functions.js';

const adForm = document.querySelector('.ad-form');
const headerFieldset = adForm.querySelector('.ad-form-header');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const mapFilter = document.querySelector('.map__filters');
const mapFilterSelects = mapFilter.querySelectorAll('.map__filter');


const inactivePage = () => {
  adForm.classList.add('ad-form--disabled');
  headerFieldset.setAttribute('disabled', '');

  for (const element of adFormElements) {
    element.setAttribute('disabled', '');
  }

  mapFilter.classList.add('map__filters--disabled');
  for (const element of mapFilterSelects) {
    element.setAttribute('disabled', '');
  }

};

const activePage = () => {
  if (true) { //success
    adForm.classList.remove('ad-form--disabled');
    headerFieldset.removeAttribute('disabled');

    for (const element of adFormElements) {
      element.removeAttribute('disabled');
    }

    mapFilter.classList.remove('map__filters--disabled');
    for (const element of mapFilterSelects) {
      element.removeAttribute('disabled');
    }
  }
};

inactivePage();
activePage();


/* global Pristine:readonly */
// const adForm = document.querySelector('.ad-form');


const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);


//title
const titleInput = adForm.querySelector('#title');

function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  titleInput,
  validateTitle,
  'От 30 до 100 символов'
);

addErrorClass(titleInput, validateTitle);

//title listener

function onTitleChange() {
  pristine.validate(titleInput);
}

titleInput.addEventListener('change', onTitleChange);

//price
const priceInput = adForm.querySelector('#price');

function validatePrice(value) {
  return value < 100_000;
}

pristine.addValidator(
  priceInput,
  validatePrice,
  'До 100 000 рублей'
);

addErrorClass(priceInput, validatePrice);

function onPriceChange() {
  pristine.validate(priceInput);
}

priceInput.addEventListener('change', onPriceChange);

// amount rooms

// const roomsNumberOption = adForm.querySelector('[name="rooms"] option[selected]');
// const capacityOption = adForm.querySelector('[name="capacity"] option[selected]');
const roomsNumberSelect = adForm.querySelector('[name="rooms"]');
let roomsNumberOption = roomsNumberSelect.options[roomsNumberSelect.selectedIndex];
const capacitySelect = adForm.querySelector('[name="capacity"]');
let capacityOption = capacitySelect.options[capacitySelect.selectedIndex];
const roomsOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 1 гостя', 'для 2 гостей'],
  '3 комнаты': ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  '100 комнат': ['не для гостей']
};

function validateRoomsNumber() {
  return roomsOption[roomsNumberOption.textContent].includes(capacityOption.textContent);
}

function getRoomsErrorMessage() {
  return 'Попробуйте другое значение';
}

// function getRoomsErrorMessage() {
//   return `Нельзя
//     ${roomsNumberOption.textContent}
//     ${capacityOption.textContent}
//     ${roomsNumberSelect.textContent === '1 комната' ? 'невозможно' : 'невозможна'}
//     `;
// }

pristine.addValidator(roomsNumberSelect, validateRoomsNumber, getRoomsErrorMessage);
pristine.addValidator(capacitySelect, validateRoomsNumber, getRoomsErrorMessage);

addErrorClass(roomsNumberSelect, validateRoomsNumber);
addErrorClass(capacitySelect, validateRoomsNumber);

function onRoomsAndCapacityChange() {
  capacityOption = capacitySelect.options[capacitySelect.selectedIndex];
  roomsNumberOption = roomsNumberSelect.options[roomsNumberSelect.selectedIndex];

  pristine.validate(roomsNumberSelect);
  pristine.validate(capacitySelect);
}

roomsNumberSelect.addEventListener('change', onRoomsAndCapacityChange);
capacitySelect.addEventListener('change', onRoomsAndCapacityChange);

// type and price for night

const apartmentType = adForm.querySelector('[name="type"]');
let apartmentTypeOption = apartmentType.options[apartmentType.selectedIndex];
const priceForNight = adForm.querySelector('[name="price"]');
const priceForType = {
  bungalow: 0,
  flat: 1_000,
  hotel: 3_000,
  house: 5_000,
  palace: 10_000
};

function validateApartmentType() {
  return priceForNight.value >= priceForType[apartmentTypeOption.value];
}

function getPriceError() {
  return `Минимальная цена за ночь в ${apartmentTypeOption.textContent} = ${priceForType[apartmentTypeOption.value]}`;
}

pristine.addValidator(apartmentType, validateApartmentType);
pristine.addValidator(priceForNight, validateApartmentType, getPriceError);

addErrorClass(apartmentType, validateApartmentType);
addErrorClass(priceForNight, validateApartmentType);

function onTypeChange() {
  apartmentTypeOption = apartmentType.options[apartmentType.selectedIndex];
  pristine.validate(apartmentType);
  pristine.validate(priceForNight);
}

apartmentType.addEventListener('change', onTypeChange);
priceForNight.addEventListener('change', onTypeChange);

//time

const timeInSelect = adForm.querySelector('[name="timein"]');
const timeOutSelect = adForm.querySelector('[name="timeout"]');


function changeTimeIn() {
  for (let i = 0; i <= timeInSelect.length - 1; i++) {
    timeInSelect.children[i].removeAttribute('selected');
  }
  const timeInOption = timeInSelect.options[timeInSelect.selectedIndex];
  const timeOutOption = timeOutSelect.options[timeOutSelect.selectedIndex];
  timeInOption.setAttribute('selected', '');
  if (timeInOption.value !== timeOutOption.value) {
    timeOutOption.removeAttribute('selected');
    for (let i = 0; i <= timeOutSelect.length - 1; i++) {
      if (timeOutSelect.children[i].value.includes(timeInOption.value)) {
        timeOutSelect.children[i].setAttribute('selected', '');
        timeOutSelect.value = timeInOption.value;
      }
    }
  }
  return timeInOption;
}

function changeTimeOut() {
  for (let i = 0; i <= timeOutSelect.length - 1; i++) {
    timeInSelect.children[i].removeAttribute('selected');
  }
  const timeInOption = timeInSelect.options[timeInSelect.selectedIndex];
  const timeOutOption = timeOutSelect.options[timeOutSelect.selectedIndex];
  timeInOption.setAttribute('selected', '');
  if (timeOutOption.value !== timeInOption.value) {
    timeInOption.removeAttribute('selected');
    for (let i = 0; i <= timeInSelect.length - 1; i++) {
      if (timeInSelect.children[i].value.includes(timeOutOption.value)) {
        timeInSelect.children[i].setAttribute('selected', '');
        timeInSelect.value = timeOutOption.value;
      }
    }
  }
  return timeOutOption;
}

// const timeInOption = timeInSelect.querySelector('option[selected]');
// const timeOutOption = timeOutSelect.options[timeOutSelect.selectedIndex];

timeInSelect.addEventListener('change', changeTimeIn);
timeOutSelect.addEventListener('change', changeTimeOut);

// U menya ne poluchaetsya otvalidirovat timein timeout

// function validateTime() {
//   console.log(`in: ${timeInOption.value}`);
//   console.log(`out: ${timeOutOption.value}`);
//   return timeInOption.value === timeOutOption.value;
// }

// function getTimeError() {
//   return `Заезд/Выезд должен быть в одинаковое время`;
// }

// pristine.addValidator(timeInSelect, validateTime, getTimeError);
// pristine.addValidator(timeOutSelect, validateTime, getTimeError);

// addErrorClass(timeInSelect || timeOutSelect, validateApartmentType);

//address

// const addressInput = adForm.querySelector('[name="address"]');

// function validateAddress() {
//   return
// }

// pristine.addValidator(addressInput);

// map foto

// const avatarFoto = adForm.querySelector('#avatar');

// function validateAvatar () {

// }

// pristine.addValidator(
//   avatarFoto,
//   validateAvatar,
//   'До 100 000 рублей'
// );


//end


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // pristine.validate();
  if(pristine.validate()) {
    console.log('Valid');
  } else {
    console.log('invalid');
  }
});

// Pochemu ne poyavlyaetsya oshibka: This field is required
