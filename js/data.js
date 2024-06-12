import {getRandomIntegerGenerator, createConsecutiveIntegerGenerator, getRandomArrayItem, getRandomArrayRange} from './functions.js';

// const TITLES = [
//   'Милая, уютная квартирка в центре Токио',
//   'Милая, уютная квартирка в центре Москвы',
//   'Большая квартира',
// ];

// const APARTMENTTYPES = [
//   'palace',
//   'flat',
//   'house',
//   'bungalow',
//   'hotel'
// ];

// const CHECKTIME = [
//   '12:00',
//   '13:00',
//   '14:00',
// ];

// const APARTMENTDESCRIPTIONS = [
//   'Светлое',
//   'Просторное',
//   'Уютное'
// ];

// const APARTMENTFEATURES = [
//   'wifi',
//   'dishwasher',
//   'parking',
//   'washer',
//   'elevator'
// ];

// const PHOTOSURL = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
// ];


// const generateAvatarId = createConsecutiveIntegerGenerator(1, 10);

// const createAd = () => ({
//   author: {
//     avatar: `img/avatars/user${generateAvatarId()}.png`,
//   },
//   offer: {
//     title: getRandomArrayItem(TITLES),
//     address: `${Number(`35.${getRandomIntegerGenerator(65000, 70000)}`)}, ${Number(`139.${getRandomIntegerGenerator(70000, 80000)}`)}`,
//     price: getRandomIntegerGenerator(1, 10000), //Infinity
//     type: getRandomArrayItem(APARTMENTTYPES),
//     rooms: getRandomIntegerGenerator(1, 10), //Infinity
//     guests: getRandomIntegerGenerator(1, 10), //Infinity
//     checkin: getRandomArrayItem(CHECKTIME),
//     checkout: getRandomArrayItem(CHECKTIME),
//     features: getRandomArrayRange(APARTMENTFEATURES),
//     description: getRandomArrayItem(APARTMENTDESCRIPTIONS),
//     photos: getRandomArrayRange(PHOTOSURL)
//   },
//   location: {
//     lat: Number(`35.${getRandomIntegerGenerator(65000, 70000)}`),
//     lng: Number(`139.${getRandomIntegerGenerator(70000, 80000)}`)
//   }
// });

// const adsArray = Array.from({length: 3}, createAd);

// export {adsArray};

// console.log(adsArray);
