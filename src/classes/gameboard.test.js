/* eslint-disable no-undef */
import Gameboard from './gameboard';

test('places ship on grid', () => {
  const board1 = new Gameboard();
  board1.placeShip('cru', ['C3', 'D3', 'E3']);
  expect(board1.getShipLocation('cru')).toStrictEqual(['C3', 'D3', 'E3']);
});

test('receives attack', () => {
  const board2 = new Gameboard();
  board2.placeShip('des', ['E3', 'E4']);
  board2.receiveAttack('E4');
  expect(board2.getShipHits('des')).toStrictEqual(['', 'hit']);
  expect(board2.getAllHits()[0]).toStrictEqual({ coord: 'E4', status: 'hit' });
});

test('records miss', () => {
  const board3 = new Gameboard();
  board3.placeShip('sub', ['G1', 'G2', 'G3']);
  board3.receiveAttack('G4');
  expect(board3.getShipHits('sub')).toStrictEqual(['', '', '']);
  expect(board3.getAllHits()[0]).toStrictEqual({ coord: 'G4', status: 'miss' });
});
