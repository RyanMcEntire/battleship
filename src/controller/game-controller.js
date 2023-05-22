import Player from '../classes/player';
import Ship from '../classes/ship';
import Gameboard from '../classes/gameboard';
import sel from '../ui/selectors';
import appendWinModal from '../ui/win-modal';

let p;
let c;
let pBoard;
let cBoard;
console.log('pre-load boards', pBoard, cBoard);
export function initGame(ships) {
  console.log('ships', ships);
  p = new Player('Clowdy');
  c = new Player('Computer');

  pBoard = new Gameboard();
  cBoard = new Gameboard();
  // let gameOver = false;

  ships.forEach((ship) => {
    pBoard.placeShip(new Ship(ship));
  });

  ships.forEach((ship) => {
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
