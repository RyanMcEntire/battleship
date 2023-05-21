import sel from '../ui/selectors';
import checkShipClearance from './check-ship-placement';
import placeShipsOnGrids from './game-controller';

function toggleRotation() {
  const rotate = sel().rotateButton;
  if (rotate.value === 'vertical') {
    rotate.value = 'horizontal';
  } else {
    rotate.value = 'vertical';
  }
}

const tentativePlacement = [];

// TODO: add A1 to default value of input
// add results of checkShipClearance to tentativePlacement
// add first ship to tentative placement
// add classes from tentativePlacement to grid squares
// update squares whenever input.onchange or rotate.onclick
// when place ship is hit, increase i and
// gray out class of ship card

let i = 0;

function gamePrep() {
  const shipsPrePlaced = {
    car: 5,
    bat: 4,
    cru: 3,
    sub: 3,
    des: 2,
  };
  const input = sel().coordInput;
  const rotate = sel().rotateButton;

  const shipResults = checkShipClearance(
    input.value,
    rotate,
    shipsPrePlaced[i]
  );

  tentativePlacement[i] = shipResults;
  console.log('tentativePlacement', tentativePlacement);
  i += 1;
  if (i === 4) {
    return placeShipsOnGrids();
  }
  return {}
}

function rotateAndPrep() {
  toggleRotation();
  gamePrep();
}

export default function startGame() {
  sel().rotateButton.onclick = rotateAndPrep;
  sel().input.onchange = gamePrep;
}
