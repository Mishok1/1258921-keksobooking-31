/* global noUiSlider:readonly */
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100_000,
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),//     chto eto?
    from: (value) => parseFloat(value),
  }
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

valueElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set(valueElement.value);
});

