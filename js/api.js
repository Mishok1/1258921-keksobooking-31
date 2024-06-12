import { createAds } from './generateSameElements.js';

const adForm = document.querySelector('.ad-form');

function error(err) {
  console.error(`Oshibka 1${err}`);
}

const createLoader = (onSuccess, onError) => fetch(
  'https://31.javascript.htmlacademy.pro/keksobooking/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      // console.log('response is okay', response.json());
      return response.json();
    }

    throw new Error(`Oshibka (throw) ${response.status} ${response.statusText}`);
  })
  .then((data) => {
    // console.log('Data uspeshno peredana', data);
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

createLoader(createAds, error);


// const adsArray = 1;
// console.log('Loader', createLoader(createAds));

/*
import {createLoader} from './api.js';

const load = createLoader(console.log, console.error);

load();
*/

// adForm.onsubmit = async (evt) => {
//   evt.preventDefault();

//   const response = await fetch(
//     'https://31.javascript.htmlacademy.pro/keksobooking/data',
//     {
//       method: 'POST',
//       body: new FormData()
//     },
//   )
//     .then((answer) => {
//       if (answer.ok) {
//         console.log(`он`, answer);
//         return answer.json();
//       }

//       throw new Error(`Ошибка = ${answer.status} ${answer.statusText}`);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   let result = await response.json();

//   alert(result.message);
// };


export { createLoader };
