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

export default function gameStart() {
  const input = sel().coordInput;
  sel().rotateButton.onclick = toggleRotation();
  const shipsPrePlaced = {
    car: 5,
    bat: 4,
    cru: 3,
    sub: 3,
    des: 2,
  };
  const shipsPostPlaced = {};

  let i = 0;
  if (i === 4) {
    return placeShipsOnGrids();
  }
}
