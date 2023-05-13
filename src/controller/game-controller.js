import Player from "../classes/player";
import Ship from '../classes/ship';
import Gameboard from "../classes/gameboard";

const ships = {
  car: ['C3', 'D3', 'E3', 'F3', 'G3'],
  bat: ['A5', 'A6', 'A7', 'A8'],
  cru: ['A2', 'B2', 'C2'],
  sub: ['F6', 'F7', 'F8'],
  des: ['D7', 'E7'],
};

const player1 = new Player('Clowdy')
const player2 = new Player('Computer')

