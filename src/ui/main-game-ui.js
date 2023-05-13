import bp from 'domweaver';

const playerBoard = bp('div', 'player-board');
const opponentBoard = bp('div', 'opponent-board');

const playerGridContainer = bp('div', 'grid-container player-grid-container');

const opponentGridContainer = bp(
  'div',
  'grid-container opponent-grid-container'
);

const letters = 'ABCDEFGHIJ';

function writeGrid(parent) {
  for (let i = 0; i <= 9; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      parent.addChild(bp('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(playerGridContainer);
writeGrid(opponentGridContainer);

const letterBox = bp('div', 'letter-box');
const numberBox = bp('div', 'number-box');

function addLetters(parent) {
  for (let i = 0; i < letters.length; i += 1) {
    parent.addChild(bp('div', `${letters[i]}`).addText(`${letters[i]}`));
  }
}

function addNumbers(parent) {
  for (let i = 1; i <= 10; i += 1) {
    parent.addChild(bp('div', `${i}`).addText(`${i}`));
  }
}

addLetters(letterBox);
addNumbers(numberBox);

playerBoard
  .addChild(playerGridContainer)
  .addChild(letterBox)
  .addChild(numberBox);

opponentBoard
  .addChild(opponentGridContainer)
  .addChild(letterBox)
  .addChild(numberBox);

export function buildPlayerBoard() {
  return document.body.appendChild(playerBoard.build());
}

export function buildOpponentBoard() {
  return document.body.appendChild(opponentBoard.build());
}
