const number = document.querySelector('.number');
const numberInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let secretNumber = randomNumber(1, 20);
let prevHighScore = 0;
let score = 20;

function randomNumber(a, b) {
  return Math.floor(Math.random() * b) + a;
}

function setScore(val) {
  score = val;
  scoreElement.textContent = score;
}

function updatePrevHighscore() {
  if (score > prevHighScore) {
    prevHighScore = score;
    highscore.textContent = prevHighScore;
  }
}

function resetGame() {
  document.body.style.backgroundColor = '#222';
  setScore(20);

  secretNumber = randomNumber(1, 20);
  number.textContent = '?';
  message.textContent = 'Start guessing...';
}

function handleInput(value) {
  if (!value) {
    message.textContent = '⛔ No Number';
  } else if (value == secretNumber) {
    message.textContent = '✔️ CORRECT';
    number.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    updatePrevHighscore();
  } else if (score < 2) {
    message.textContent = '❌ GAME OVER';
    number.textContent = secretNumber;
    setScore(score - 1);
  } else {
    setScore(score - 1);

    if (value > secretNumber) {
      message.textContent = '📈 Too High';
    } else {
      message.textContent = '📉 Too Low';
    }
  }
}

checkButton.addEventListener('click', () => {
  handleInput(numberInput.value);
});

againButton.addEventListener('click', resetGame);
