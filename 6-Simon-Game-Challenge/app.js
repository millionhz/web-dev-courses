function getNextStep() {
  return colors[Math.floor(Math.random() * 3)];
}

function playSound(color) {
  audioFiles[color].play();
}

function gameOver() {
  body.addClass("game-over");
  playSound("wrong");
  levelTitle.text("Game Over, Press Any Key To Restart");
  setTimeout(() => body.removeClass("game-over"), 300);

  enableKeyboard = true;
  enableButton = false;
  patternList = [];
}

function animateButton(color) {
  playSound(color);
  $(`#${color}`).fadeOut(300).fadeIn(300);
  return delay(600)
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateNewPattern() {
  for (let color of patternList) {
    await animateButton(color);
  }
}

async function nextLevel() {
  patternList.push(getNextStep());
  currentMoveCount = 0;

  levelTitle.text(`Level ${patternList.length}`);

  await delay(1000);
  animateNewPattern();

  enableKeyboard = false;
  enableButton = true;
}

function manageInput(color) {
  if (patternList[currentMoveCount] === color) {
    currentMoveCount++;

    playSound(color);

    if (currentMoveCount === patternList.length) {
      nextLevel();
    }
  } else {
    gameOver();
  }
}

const levelTitle = $("#level-title");
const body = $("body");
const colors = ["green", "red", "yellow", "blue"];

const audioFiles = {
  green: new Audio("./sounds/green.mp3"),
  red: new Audio("./sounds/red.mp3"),
  yellow: new Audio("./sounds/yellow.mp3"),
  blue: new Audio("./sounds/blue.mp3"),
  wrong: new Audio("./sounds/wrong.mp3"),
};

let enableKeyboard = true;
let enableButton = false;
let patternList = [];
let currentMoveCount = 0;

$(document).keypress(() => {
  if (enableKeyboard) {
    nextLevel();
  }
});

$(".btn").on("pointerdown", (event) => {
  if (enableButton) {
    event.target.classList.add("pressed");
  }
});

$(".btn").on("pointerup", (event) => {
  if (enableButton) {
    event.target.classList.remove("pressed");
  }
});

$(".btn").click((event) => {
  if (enableButton) {
    manageInput(event.target.id);
  }
});
