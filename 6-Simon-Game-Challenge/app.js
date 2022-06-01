function getNextStep() {
  const colors = ["green", "red", "yellow", "blue"];
  return colors[Math.floor(Math.random() * 3)];
}

function playSound(fileName) {
  const sound = new Audio(`./sounds/${fileName}.mp3`);
  sound.play();
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
  return new Promise((resolve) => setTimeout(resolve, 600));
}

async function animateNewPattern() {
  for (let color of patternList) {
    await animateButton(color);
  }
}

function nextLevel() {
  patternList.push(getNextStep());
  currentMoveCount = 0;

  levelTitle.text(`Level ${patternList.length}`);

  animateNewPattern();

  enableKeyboard = false;
  enableButton = true;
}

function manageInput(color) {
  if (patternList[currentMoveCount] === color) {
    currentMoveCount++;

    playSound(color);

    if (currentMoveCount === patternList.length) {
      setTimeout(nextLevel, 1000);
    }
  } else {
    gameOver();
  }
}

const levelTitle = $("#level-title");
const body = $("body");
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
