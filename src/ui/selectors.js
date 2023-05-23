function byClass(className) {
  return document.getElementsByClassName(className)[0];
}

export default function sel() {
  return {
    playerGrid: byClass('player-grid-container'),
    computerGrid: byClass('opponent-grid-container'),
    coordInput: byClass('coord-input'),
    rotateButton: byClass('rotate-button'),
    placeShipButton: byClass('input-button'),
    placeShipsGrid: byClass('place-ships-grid'),
    newGameModal: byClass('new-game-modal'),
    shipChoiceContainer: byClass('ship-choice-container'),
  };
}
