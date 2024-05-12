//random number v diapasone
function getRandomIntegerGenerator(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//po poryadku
function createConsecutiveIntegerGenerator(min, max) {
  const previousValues = [];

  return function () {
    let counter = min;
    let currentValue = counter++;
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue++;
    }


    previousValues.push(currentValue);
    if (currentValue < 10) {
      currentValue = '0' + currentValue;
    }
    return currentValue;
  };
}

const getRandomArrayItem = (array) => {
  const randomNumber = getRandomIntegerGenerator(0, array.length - 1);
  const randomItem = array[randomNumber];
  return randomItem;
};

const getRandomArrayRange = (array) => {
  const result = [];
  const resultArrayLength = getRandomIntegerGenerator(1, array.length - 1);
  for (let i = 0; i < resultArrayLength; i++) {
    const randomItem = getRandomArrayItem(array);
    if (!(result.includes(randomItem))) {
      result.push(randomItem);
    }
  }
  return result;
};

function getApartmentTypeTranslate(apartmentType) {
  switch (apartmentType) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
    default:
      return 'Квартира';
  }
}

function isFeaturesExist(featuresArray, card) {
  const wifi = card.querySelector('.popup__feature--wifi');
  const dishwasher = card.querySelector('.popup__feature--dishwasher');
  const parking = card.querySelector('.popup__feature--parking');
  const washer = card.querySelector('.popup__feature--washer');
  const elevator = card.querySelector('.popup__feature--elevator');
  const conditioner = card.querySelector('.popup__feature--conditioner');

  featuresArray.forEach((feature) => {
    if (feature === 'wifi') {
      wifi.textContent = 'wifi';
    }
    if (feature === 'dishwasher') {
      dishwasher.textContent = 'dishwasher';
    }
    if (feature === 'parking') {
      parking.textContent = 'parking';
    }
    if (feature === 'washer') {
      washer.textContent = 'washer';
    }
    if (feature === 'elevator') {
      elevator.textContent = 'elevator';
    }
    if (feature === 'conditioner') {
      conditioner.textContent = 'conditioner';
    }
  });

  // featuresArray.forEach((feature) => {
  //   if (feature === 'wifi') {
  //     wifi.textContent = 'wifi';
  //   } else {
  //     wifi.remove();
  //     console.log('Удалил wifi');
  //   }
  //   if (feature === 'dishwasher') {
  //     dishwasher.textContent = 'dishwasher';
  //   } else {
  //     dishwasher.remove();
  //     console.log('Удалил dish');
  //   }
  //   if (feature === 'parking') {
  //     parking.textContent = 'parking';
  //   } else {
  //     parking.remove();
  //     console.log('Удалил parking');
  //   }
  //   if (feature === 'washer') {
  //     washer.textContent = 'washer';
  //   } else {
  //     washer.remove();
  //     console.log('Удалил wahser');
  //   }
  //   if (feature === 'elevator') {
  //     elevator.textContent = 'elevator';
  //   } else {
  //     elevator.remove();
  //     console.log('Удалил elevator');
  //   }
  //   if (feature === 'conditioner') {
  //     conditioner.textContent = 'conditioner';
  //   } else {
  //     conditioner.remove();
  //     console.log('Удалил conditioner');
  //   }
  // });

}

function isDataExist(data, element) {
  if (data) {
    return data;
  } else {
    element.remove();
  }
}


function addErrorClass (invalidElement, isValid) {
  if (!isValid) {
    const invalidField = invalidElement.parentNode;
    invalidField.classList.add('ad-form__element--invalid');
  }
}

export {
  getRandomIntegerGenerator,
  createConsecutiveIntegerGenerator,
  getRandomArrayItem,
  getRandomArrayRange,
  getApartmentTypeTranslate,
  isFeaturesExist,
  isDataExist,
  addErrorClass
};
