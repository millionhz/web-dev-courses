const player1Img = document.querySelector(".img1");
const player2Img = document.querySelector(".img2");
const title = document.querySelector("h1");

function diceRoll() {
  return Math.floor(Math.random() * 5) + 1;
}

function getImage(diceNumber) {
  return `./images/dice${diceNumber}.png`;
}

function renderPage() {
  const player1Roll = diceRoll();
  const player2Roll = diceRoll();

  player1Img.setAttribute("src", getImage(player1Roll));
  player2Img.setAttribute("src", getImage(player2Roll));

  if (player1Roll === player2Roll) {
    title.innerText = "Draw!🚩";
  } else if (player1Roll > player2Roll) {
    title.innerText = "🚩Player 1 wins!";
  } else {
    title.innerText = "Player 2 wins!🚩";
  }
}

window.onload = renderPage;
