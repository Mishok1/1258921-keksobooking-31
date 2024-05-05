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
