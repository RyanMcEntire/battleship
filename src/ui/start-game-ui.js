import bp from 'domweaver';

const newGameModal = bp('div', 'new-game-modal');
const placeShipsGrid = bp('div', 'place-ships-grid');
const rotateButton = bp('button', 'rotate-button').addText('Rotate');

function writeGrid(parent) {
  const letters = 'ABCDE';
  for (let i = 0; i <= 4; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      parent.addChild(bp('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(placeShipsGrid);

const shipChoiceContainer = bp('div', 'ship-choice-container');

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

attachShips('CARRIER', 5);
attachShips('BATTLESHIP', 4);
attachShips('CRUISER', 3);
attachShips('SUBMARINE', 3);
attachShips('DESTROYER', 2);

newGameModal
  .addChild(placeShipsGrid)
  .addChild(rotateButton)
  .addChild(shipChoiceContainer);

export default function buildNewGameModal() {
  document.body.appendChild(newGameModal.build());
}
