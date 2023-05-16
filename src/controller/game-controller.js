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

console.log('player ships', cBoard.placedShips);

export default function gameLoop() {
  sel().computerGrid.addEventListener('click', (e) => {
    const attack = e.target.className;
    p.launchAttack(cBoard, attack);
    c.launchAttack(pBoard, c.decideAttack(pBoard));
    console.table('attacks on player', pBoard.getAllHits());
    console.table('attacks on computer', cBoard.getAllHits());
  });
}
