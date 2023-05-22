import sel from '../ui/selectors';
import {
  checkShipClearance,
  isCoordValid,
  isOverlapping,
} from './check-ship-placement';
import gameLoop, { initGame } from './game-controller';

function toggleRotation() {
  const rotate = sel().rotateButton;
  if (rotate.value === 'vertical') {
    rotate.value = 'horizontal';
  } else {
    rotate.value = 'vertical';
  }
}

const tentativePlacement = [];

// TODO:
// gray out class of ship card
// make array from ship choice container children
// then select with [i]

// TODO:

// TODO: prevent overlapping ships on placement

function addShipViews(headCoord, shipCoords) {
  const shipGrid = sel().placeShipsGrid;

  shipCoords.forEach((coord) => {
    shipGrid.querySelector(`.${coord}`).classList.add('ship');
  });
  shipGrid.querySelector(`.${headCoord}`).classList.add('ship-head');
}

function placeShipColor(shipCoords) {
  const shipGrid = sel().placeShipsGrid;

  shipCoords.forEach((coord) => {
    shipGrid.querySelector(`.${coord}`).classList.add('placed');
  });
}

let i = 0;

function gamePrep(place) {
  const shipsPrePlaced = {
    car: 5,
    bat: 4,
    cru: 3,
    sub: 3,
    des: 2,
  };

  const allSquares = Array.from(sel().placeShipsGrid.children);
  allSquares.forEach((square) => {
    if (square.classList.contains('ship-head')) {
      square.classList.remove('ship-head');
    }
    if (square.classList.contains('ship')) {
      square.classList.remove('ship');
    }
  });
  const shipsArray = Object.entries(shipsPrePlaced);
  const inputValue = sel().coordInput.value.toUpperCase();
  if (!isCoordValid(inputValue)) {
    return;
  }
  const rotateValue = sel().rotateButton.value;

  const shipResults = checkShipClearance(
    inputValue,
    rotateValue,
    shipsArray[i][1]
  );
  console.log('inputValue', inputValue);
  if (!shipResults || isOverlapping(shipResults, tentativePlacement)) {
    console.log(
      'isOverlapping',
      isOverlapping(shipResults, tentativePlacement)
    );
    return;
  }

  addShipViews(inputValue, shipResults);

  if (place) {
    tentativePlacement[i] = [shipsArray[i][0], shipResults];
    console.log('tentativePlacement', tentativePlacement);
    i += 1;
    placeShipColor(shipResults);
  }

  if (i === 5) {
    sel().newGameModal.remove();
    initGame(tentativePlacement);
    gameLoop();
  }
}

function rotateAndPrep() {
  toggleRotation();
  gamePrep();
}

export default function startGame() {
  gamePrep();
  sel().rotateButton.addEventListener('click', () => rotateAndPrep());
  sel().coordInput.addEventListener('input', () => gamePrep());
  sel().placeShipButton.addEventListener('click', () => gamePrep('place'));
}
