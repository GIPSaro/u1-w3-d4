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