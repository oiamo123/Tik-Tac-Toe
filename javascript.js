// When player clicks on square, check to see if square has been clicked on update square with player symbol
// When player clicks on square, switch players
// store user data:

let count = 0;
let winner = false;
let playerChoice = `X`;
const root = document.documentElement;
root.className = `dark`;
const p = document.querySelector("p");
const main = document.querySelector("main");
const square = main.querySelectorAll("div");
const themeToggle = document.getElementById("theme");
themeToggle.addEventListener("click", setTheme);
const newGame = document.querySelector(".new--game");
const reset = document.querySelector(".reset");
const aside = document.querySelector("aside");
const game = document.querySelector(`.game`);
const sumbit = document.querySelector(".sumbit--names");
const playerOneH2 = document.querySelector(".playerOneH2");
const playerTwoH2 = document.querySelector(".playerTwoH2");
const playerOneName = document.querySelector("#player--1");
const playerTwoname = document.querySelector("#player--2");

square.forEach((square) => {
  square.addEventListener(`click`, function () {
    if (square.textContent === `` && winner === false) {
      count++;
      square.textContent = `${playerChoice}`;
      checkForWinner();
      playerChoice === `X` ? (playerChoice = `O`) : (playerChoice = `X`);
      if (count === 9) {
        p.textContent = `Tie!`;
      }
    }
  });
});

const clearBoard = function () {
  square.forEach((square) => {
    square.textContent = ``;

    square.removeAttribute(`style`);
    playerOneH2.removeAttribute(`style`);
    playerTwoH2.removeAttribute(`style`);
  });
  count = 0;
  winner = false;
  playerChoice = `X`;
  setPlayerNames();
};

// button.addEventListener(`click`, clearBoard);

const checkRowsColumns = function (value) {
  [square1, square2, square3] = value;
  if (
    square1.textContent === `${playerChoice}` &&
    square2.textContent === `${playerChoice}` &&
    square3.textContent === `${playerChoice}`
  ) {
    winner = true;
    square1.style.backgroundColor = `#087f5b`;
    square2.style.backgroundColor = `#087f5b`;
    square3.style.backgroundColor = `#087f5b`;
    if (playerChoice === `X`) {
      playerOneH2.textContent = `Winner`;
      playerOneH2.style.backgroundColor = `#087f5b`;
      playerTwoH2.style.backgroundColor = `#adb5bd`;
    } else {
      playerTwoH2.textContent = `Winner`;
      playerTwoH2.style.backgroundColor = `#087f5b`;
      playerOneH2.style.backgroundColor = `#adb5bd`;
    }
  }
};

const checkForWinner = function () {
  arr1 = [
    `.column`,
    `.column--2`,
    `.column--3`,
    `.row`,
    `.row--2`,
    `.row--3`,
    `.diagonal`,
    `.diagonal--2`,
  ];
  for (const item of arr1) {
    const direction = document.querySelectorAll(`${item}`);
    checkRowsColumns(direction);
  }
};

// Theme

function setTheme() {
  root.classList.toggle(`dark`);
  root.classList.toggle(`light`);
}

sumbit.addEventListener(`click`, function () {
  if (playerOneName.value !== `` && playerTwoname.value !== ``) {
    aside.classList.toggle(`hidden`);
    setTimeout(() => {
      game.classList.toggle(`hidden`);
    }, 1000);

    console.log(playerOneName.value);
    setPlayerNames();
  }
});

function setPlayerNames() {
  playerOneH2.textContent = playerOneName.value;
  playerTwoH2.textContent = playerTwoname.value;
}

newGame.addEventListener(`click`, function () {
  setTimeout(() => {
    aside.classList.toggle(`hidden`);
  }, 1000);
  game.classList.toggle(`hidden`);
  clearBoard();
});
reset.addEventListener(`click`, clearBoard);
