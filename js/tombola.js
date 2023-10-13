function generateTombolaBoard() {
  const board = document.getElementById("tombola-board");
  let counter = 1;

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let i = 0; i < 19; i++) {
      let cell = document.createElement("td");
      cell.textContent = counter++;
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

generateTombolaBoard();

const extractedNumbers = [];

function extractRandomNumber() {
  const min = 1;
  const max = 76;
  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (extractedNumbers.includes(randomNum));

  extractedNumbers.push(randomNum);

  return randomNum;
}

function highlightCell(number) {
  let cells = document.querySelectorAll("td");
  cells[number - 1].classList.add("highlight");
}

document.getElementById("draw-button").onclick = function () {
  if (extractedNumbers.length < 76) {
    const randomNumber = extractRandomNumber();
    highlightCell(randomNumber);
  }
};
function generatePlayerCard() {
  const card = document.getElementById("player-card");
  const numbers = [];

  for (let i = 1; i <= 76; i++) {
    numbers.push(i);
  }

  for (let i = 0; i < 24; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers.splice(randomIndex, 1)[0];
    let cell = document.createElement("td");
    cell.textContent = randomNumber;
    card.appendChild(cell);
  }
}
generateTombolaBoard();
generatePlayerCard();

document.getElementById("start-game").addEventListener("submit", function () {
  extractedNumbers = [];
  let numCards = parseInt(document.getElementById("num-cards").value);
  document.querySelectorAll("highlight").forEach(function (cell) {
    cell.classList.remove("highlight");
  });
  for (let i = 0; i < numCards; i++) {
    generatePlayerCard();
  }
});

const compraCartella = (e) => {
  e.preventDefault();
};
const formNode = document.querySelector("form");
formNode.onsubmit = compraCartella;
