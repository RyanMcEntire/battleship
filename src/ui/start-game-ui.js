import bp from 'domweaver';

const newGameModal = bp('div', 'new-game-modal');
const placeShipsGrid = bp('div', 'place-ships-grid');
const rotateButton = bp('button', 'rotate-button')
  .addAttributes({
    value: 'vertical',
  })
  .addText('Rotate');

const placeShipsGridContainer = bp('div', 'place-ships-grid-container');

const letters = 'ABCDEFGHIJ';
function writeGrid(parent) {
  for (let i = 0; i <= 9; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      parent.addChild(bp('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(placeShipsGrid);

const shipChoiceContainer = bp('div', 'ship-choice-container');

const letterBox = bp('div', 'pre-game-letter-box');
const numberBox = bp('div', 'pre-game-number-box');

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

function attachShips(name, size) {
  const shipChoice = bp('div', 'ship-choice');
  const shipName = bp('div', 'ship-name').addText(name);
  shipChoice.addChild(shipName);
  const shipSize = bp('div', 'ship-size');
  for (let i = 0; i < size; i += 1) {
    shipSize.addChild(bp('div', 'size-unit'));
  }
  shipChoice.addChild(shipSize);
  shipChoiceContainer.addChild(shipChoice);
}

placeShipsGridContainer
  .addChild(placeShipsGrid)
  .addChild(letterBox)
  .addChild(numberBox);

attachShips('CARRIER', 5);
attachShips('BATTLESHIP', 4);
attachShips('CRUISER', 3);
attachShips('SUBMARINE', 3);
attachShips('DESTROYER', 2);

const inputContainer = bp('div', 'input-container')
  .addChild(
    bp('div', 'place-ships-text').addText('Ship Coordinates (ex. "A1")')
  )
  .addChild(
    bp('input', 'coord-input').addAttributes({
      type: 'text',
      value: 'A1',
    })
  )
  .addChild(bp('button', 'input-button').addText('Place Ship'));

const playerNameContainer = bp('div', 'player-name-container')
  .addChild(bp('div', 'player-name-text').addText('Player Name'))
  .addChild(
    bp('input', 'player-name-input').addAttributes({
      type: 'text',
    })
  );

newGameModal
  .addChild(playerNameContainer)
  .addChild(placeShipsGridContainer)
  .addChild(rotateButton)
  .addChild(shipChoiceContainer)
  .addChild(inputContainer);

export default function buildNewGameModal() {
  document.body.appendChild(newGameModal.build());
}
