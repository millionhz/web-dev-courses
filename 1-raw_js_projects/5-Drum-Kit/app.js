function init() {
  const buttons = document.querySelectorAll(".drum");

  for (let button of buttons) {
    button.addEventListener("click", handleClick);
  }

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
}

function getAudio(key) {
  switch (key) {
    case "w":
      return "./sounds/tom-1.mp3";

    case "a":
      return "./sounds/tom-2.mp3";

    case "s":
      return "./sounds/tom-3.mp3";

    case "d":
      return "./sounds/tom-4.mp3";

    case "j":
      return "./sounds/snare.mp3";

    case "k":
      return "./sounds/crash.mp3";

    case "l":
      return "./sounds/kick-bass.mp3";
  }
}

function playSound(audioFile) {
  if (!audioFile) {
    return;
  }

  const audioObject = new Audio(audioFile);
  audioObject.play();
}

function animateButtonDown(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.add("pressed");
  }
}

function animateButtonUp(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.remove("pressed");
  }
}

function handlePlayEvent(key) {
  const audioFile = getAudio(key);
  playSound(audioFile);
}

function handleClick(event) {
  const key = event.target.textContent;
  handlePlayEvent(key);
}

function handleKeyDown(event) {
  const key = event.key;
  handlePlayEvent(key);
  animateButtonDown(key);
}

function handleKeyUp(event) {
  animateButtonUp(event.key);
}

window.onload = init;
