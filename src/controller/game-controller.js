import Player from '../classes/player';
import Ship from '../classes/ship';
import Gameboard from '../classes/gameboard';

const ships = {
  car: ['C3', 'D3', 'E3', 'F3', 'G3'],
  bat: ['A5', 'A6', 'A7', 'A8'],
  cru: ['A2', 'B2', 'C2'],
  sub: ['F6', 'F7', 'F8'],
  des: ['D7', 'E7'],
};

const p = new Player('Clowdy');
const c = new Player('Computer');
let currP = p;

const pBoard = new Gameboard();
const cBoard = new Gameboard();

Object.entries(ships).forEach((ship) => {
  pBoard.placeShip(new Ship(ship));
});

Object.entries(ships).forEach((ship) => {
  cBoard.placeShip(new Ship(ship));
});
