import bp from 'domweaver';

const playerGridContainer = bp('div', 'grid-container player-grid-container');

const opponentGridContainer = bp(
  'div',
  'grid-container opponent-grid-container'
);

function writeGrid(parent) {
  for (let i = 0; i <= 10; i += 1) {
    const letters = 'ABCDEFGHIJ';
    for (let j = 1; j <= 11; j += 1) {
      parent.addChild(bp('div', `${letters[i]}${j}`));
    }
  }
}

writeGrid(playerGridContainer);
writeGrid(opponentGridContainer);

export function buildPlayerGrid() {
  return document.body.appendChild(playerGridContainer.build());
}

export function buildOpponentGrid() {
  return document.body.appendChild(opponentGridContainer.build());
}
