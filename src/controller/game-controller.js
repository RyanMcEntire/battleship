import Player from '../classes/player';
import Ship from '../classes/ship';
import Gameboard from '../classes/gameboard';
import sel from '../ui/selectors';

const ships = {
  car: ['C3', 'D3', 'E3', 'F3', 'G3'],
  bat: ['A5', 'A6', 'A7', 'A8'],
  cru: ['A2', 'B2', 'C2'],
  sub: ['F6', 'F7', 'F8'],
  des: ['D7', 'E7'],
};

const p = new Player('Clowdy');
const c = new Player('Computer');

const pBoard = new Gameboard();
const cBoard = new Gameboard();
// let gameOver = false;

Object.keys(ships).forEach((shipKey) => {
  const shipObj = { [shipKey]: ships[shipKey] };
  pBoard.placeShip(new Ship(shipObj));
});

Object.keys(ships).forEach((shipKey) => {
  const shipObj = { [shipKey]: ships[shipKey] };
  cBoard.placeShip(new Ship(shipObj));
});

export default function gameLoop() {
  sel().computerGrid.addEventListener('click', (e) => {
    const pAttack = e.target.className;
    const pResult = p.launchAttack(cBoard, pAttack);
    console.log('pAttack', pAttack);
    if (!pResult) {
      return;
    }
    const cSquare = sel().computerGrid.querySelector(`.${pAttack}`);
    console.log(cSquare);
    if (cBoard.getHitStatus(pAttack) === 'hit') {
      cSquare.classList.add('hit');
    } else {
      cSquare.classList.add('miss');
    }
    const cAttack = c.decideAttack(pBoard);
    const cResult = c.launchAttack(pBoard, cAttack);
    console.log('cResult', cResult);
    console.log('cAttack', cAttack);
    const pSquare = sel().playerGrid.querySelector(`.${cAttack}`);
    console.log(pSquare);
    if (pBoard.getHitStatus(pAttack) === 'hit') {
      pSquare.classList.add('hit');
    } else {
      pSquare.classList.add('miss');
    }
  });
}
