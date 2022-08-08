'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;

function getTitle(activity) {
  const date = new Date();
  const postfix = ` on ${months[date.getMonth() - 1]} ${date.getDate()}`;
  if (activity === 'running') {
    return 'Running' + postfix;
  }
  return 'Cycling' + postfix;
}

function getrunningItemHTML(distance, time, spm) {
  const listItem = document.createElement('li');
  listItem.classList.add('workout');
  listItem.classList.add('workout--running');
  listItem.innerHTML = `
    <h2 class="workout__title">${getTitle('running')}</h2>
    <div class="workout__details">
      <span class="workout__icon">🏃‍♂️</span>
      <span class="workout__value">${distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${time}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${(time / distance).toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${spm}</span>
      <span class="workout__unit">spm</span>
    </div>
`;
  return listItem;
}

function getCyclingItemHTML(distance, time, elevation) {
  const listItem = document.createElement('li');
  listItem.classList.add('workout');
  listItem.classList.add('workout--cycling');
  listItem.innerHTML = `
    <h2 class="workout__title">${getTitle('cycling')}</h2>
    <div class="workout__details">
      <span class="workout__icon">🚴‍♀️</span>
      <span class="workout__value">${distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${time}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${(distance / time).toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${elevation}</span>
      <span class="workout__unit">m</span>
    </div>
`;
  return listItem;
}

function addMapMarker(latitude, longitude, type) {
  const latlang = [latitude, longitude];
  const isRunning = type === 'running';
  const content = isRunning
    ? '🏃‍♂️ ' + getTitle('running')
    : '🚴‍♀️ ' + getTitle('cycling');

  L.marker(latlang)
    .addTo(map)
    .bindPopup(content, {
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: isRunning ? 'running-popup' : 'cycling-popup',
    })
    .openPopup();
}

function renderWorkoutForm(lat, lng) {
  form.dataset.lat = lat;
  form.dataset.lng = lng;
  form.classList.remove('hidden');
  inputDuration.focus();
}

function loadMap(latitude, longitude) {
  map = L.map('map').setView([latitude, longitude], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  map.on('click', (e) => {
    // addMapMarker(e.latlng.lat, e.latlng.lng);
    renderWorkoutForm(e.latlng.lat, e.latlng.lng);
  });
}

function configMap() {
  navigator.geolocation.getCurrentPosition((data) => {
    loadMap(data.coords.latitude, data.coords.longitude);
  });
}

configMap();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const lat = form.dataset.lat;
  const lng = form.dataset.lng;

  const type = inputType.value;
  const distance = inputDistance.value;
  const duration = inputDuration.value;
  const cadence = inputCadence.value;
  const elevation = inputElevation.value;

  let listItem =
    type === 'running'
      ? getrunningItemHTML(distance, duration, cadence)
      : getCyclingItemHTML(distance, duration, elevation);

  containerWorkouts.append(listItem);

  addMapMarker(lat, lng, type);

  form.classList.add('hidden');
});

inputType.addEventListener('change', () => {
  inputCadence.parentElement.classList.toggle('form__row--hidden');
  inputElevation.parentElement.classList.toggle('form__row--hidden');
});
