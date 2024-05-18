import { activePage } from './form.js';
import { adsArray } from './data.js';
import { cardFragment } from './generateSameElements.js';

const addressInput = document.querySelector('[name="address"]');
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const ZOOM = 10;
const cityCenter = {
  lat: 35.71754044666787,
  lng: 139.740048401248,
};

const startCoordinate = {
  lat: 35.71754044666787,
  lng: 139.740048401248,
};

const mainPin = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};

const standartPin = {
  url: './img/pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};


const resetButton = document.querySelector('#reset');//Change id

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
    activePage(); //active Page
  })
  .setView(cityCenter, ZOOM);


L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

// const marker = L.marker(startCoordinate, {
//   draggable: true,
// });
// marker.addTo(map);

// marker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });


const mainPinIcon = L.icon({
  iconUrl: mainPin.url,
  iconSize: [mainPin.width, mainPin.height],
  iconAnchor: [mainPin.anchorX, mainPin.anchorY],
});

const mainPinMarker = L.marker(startCoordinate, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  // console.log(evt.target.getLatLng());
  addressInput.value = `Lat: ${evt.target.getLatLng().lat.toFixed(5)}, Lng: ${evt.target.getLatLng().lng.toFixed(5)}`;
});
// console.log(addressObject);

// resetButton.addEventListener('click', () => {
//   mainPinMarker.setLatLng(startCoordinate);
//   map.setView(startCoordinate, ZOOM);
// });

// mainPinMarker.remove();

const icon = L.icon({
  iconUrl: standartPin.url,
  iconSize: [standartPin.width, standartPin.height],
  iconAnchor: [standartPin.anchorX, standartPin.anchorY],
});


// adsArray.forEach(({ location }) => {
//   // console.log(location.lat); //35.33r3r
//   const marker = L.marker(
//     {
//       lat: location.lat, //How is it works?
//       lng: location.lng, //I understand nothing here
//     },
//     {
//       icon,
//     },
//   );

// adsArray.forEach((object) => { //chto ya delay s pomoshiy etih skobok {}?
//   const marker = L.marker(
//     object.location,
//     { icon: icon } //How is it works? Why just "icon" isn't working?
//   );

//   let i = 0;
//   marker
//     .addTo(map)
//     .bindPopup(cardFragment.children[i]); //Nado sdelat inache
//   i = i + 1;
// });

for (let i = 0; i < adsArray.length; i++) {
  console.log(adsArray[i]);
  const marker = L.marker(
    adsArray[i].location,
    { icon: icon } //How is it works? Why just "icon" isn't working?
  );

  marker
    .addTo(map)
    .bindPopup(cardFragment.children[i]); //Nado sdelat inache
}
