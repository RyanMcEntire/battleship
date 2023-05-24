import Player from '../classes/player';
import Ship from '../classes/ship';
import Gameboard from '../classes/gameboard';
import sel from '../ui/selectors';
import appendWinModal from '../ui/win-modal';
import { checkShipClearance, isOverlapping } from './check-ship-placement';

let p;
let c;
let pBoard;
let cBoard;

const shipSizes = [
  ['car', 5],
  ['bat', 4],
  ['cru', 3],
  ['sub', 3],
  ['des', 2],
];

function placeRandomShips(i, computerShips) {
  const rotation = Math.floor(Math.random() * 2) ? 'horizontal' : 'vertical';
  const randCoord = c.decideAttack(cBoard);
  const shipCoords = checkShipClearance(randCoord, rotation, shipSizes[i][1]);
  console.log('shipCoords', shipCoords);

  if (!shipCoords) return placeRandomShips(i, computerShips);

  const overlap = isOverlapping(shipCoords, computerShips);
  if (overlap) return placeRandomShips(i, computerShips);
  return shipCoords;
}

function computerShipLoop() {
  const computerShips = [];
  for (let i = 0; i < 5; i += 1) {
    const shipCoords = placeRandomShips(i, computerShips);
    computerShips.push([shipSizes[i][0], shipCoords]);
  }
  return computerShips;
}

export function initGame(ships) {
  console.log('ships', ships);
  p = new Player('Clowdy');
  c = new Player('Computer');

  pBoard = new Gameboard();
  cBoard = new Gameboard();
  // let gameOver = false;
  const computerShips = computerShipLoop();

  ships.forEach((ship) => {
    pBoard.placeShip(new Ship(ship));
  });

  computerShips.forEach((ship) => {
    cBoard.placeShip(new Ship(ship));
  });
  console.log('post-load boards', pBoard, cBoard);
}

export default function gameLoop() {
  sel().computerGrid.addEventListener('click', (e) => {
    const pAttack = e.target.className;
    const pResult = p.launchAttack(cBoard, pAttack);
    console.log('cBoard at attack', cBoard);
    if (!pResult) {
      return;
    }
    const cSquare = sel().computerGrid.querySelector(`.${pAttack}`);
    if (cBoard.getHitStatus(pAttack) === 'hit') {
      cSquare.classList.add('hit');
    } else {
      cSquare.classList.add('miss');
    }
    if (cBoard.isGameWon()) {
      const pName = p.getName();
      appendWinModal(pName);
    }
    const cAttack = c.decideAttack(pBoard);
    const cResult = c.launchAttack(pBoard, cAttack);
    console.log('cResult', cResult);
    console.log('cAttack', cAttack);
    console.log('pAttack', pAttack);
    const pSquare = sel().playerGrid.querySelector(`.${cAttack}`);
    if (pBoard.isGameWon()) {
      const cName = c.getName();
      appendWinModal(cName);
    }

    if (pBoard.getHitStatus(cAttack) === 'hit') {
      pSquare.classList.add('hit');
    } else {
      pSquare.classList.add('miss');
    }
  });
}
