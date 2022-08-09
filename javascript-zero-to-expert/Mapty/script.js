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
  inputDistance.focus();
}

function loadMap(latitude, longitude) {
  map = L.map('map').setView([latitude, longitude], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  map.on('click', (e) => {
    renderWorkoutForm(e.latlng.lat, e.latlng.lng);
  });
}

function init() {
  navigator.geolocation.getCurrentPosition((data) => {
    loadMap(data.coords.latitude, data.coords.longitude);
    getWorkouts()?.map((workout) => renderWorkout(workout));
  });
}

async function saveWorkout(newWorkout) {
  const workouts = getWorkouts() || [];

  workouts.push(newWorkout);
  localStorage.setItem('workouts', JSON.stringify(workouts));
}

function getWorkouts() {
  return JSON.parse(localStorage.getItem('workouts'));
}

function renderWorkout(workout) {
  let titlePrefix;
  let rate;
  let detail;
  let mainIcon;
  let detailIcon;

  if (workout.type === 'running') {
    titlePrefix = 'Running';
    rate = workout.duration / workout.distance;
    detail = workout.cadence;
    mainIcon = '🏃‍♂️';
    detailIcon = '🦶🏼';
  } else {
    titlePrefix = 'Cycling';
    rate = workout.distance / workout.duration;
    detail = workout.elevation;
    mainIcon = '🚴‍♀️';
    detailIcon = '⛰';
  }

  const dateObj = new Date(workout.date);
  const title = `${titlePrefix} on ${
    months[dateObj.getMonth() - 1]
  } ${dateObj.getDate()}`;

  const listItem = document.createElement('li');
  listItem.classList.add('workout');
  listItem.classList.add(`workout--${workout.type}`);

  listItem.innerHTML = `
    <h2 class="workout__title">${title}</h2>
    <div class="workout__details">
      <span class="workout__icon">${mainIcon}</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${rate.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">${detailIcon}</span>
      <span class="workout__value">${detail}</span>
      <span class="workout__unit">m</span>
    </div>
`;

  containerWorkouts.append(listItem);
  addMapMarker(workout.lat, workout.lng, workout.type);
}

init();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const workout = {
    date: Date.now(),
    lat: form.dataset.lat,
    lng: form.dataset.lng,
    type: inputType.value,
    distance: inputDistance.value,
    duration: inputDuration.value,
    cadence: inputCadence.value,
    elevation: inputElevation.value,
  };

  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      0;

  renderWorkout(workout);
  saveWorkout(workout);
  form.classList.add('hidden');
});

inputType.addEventListener('change', () => {
  inputCadence.parentElement.classList.toggle('form__row--hidden');
  inputElevation.parentElement.classList.toggle('form__row--hidden');
});
