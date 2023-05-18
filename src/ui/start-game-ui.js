import bp from 'domweaver';

const placeShipsGrid = bp('div', 'placeShipsGrid');

function writeGrid(parent) {
  for (let i = 0; i <= 9; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      parent.addChild(bp('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(placeShipsGrid)