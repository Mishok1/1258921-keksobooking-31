/* global noUiSlider:readonly */
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

valueElement.value = 5000;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100_000,
  },
  start: 5000,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
