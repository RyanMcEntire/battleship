/* eslint-disable no-undef */
import Ship from "./ship";

const testShip = new Ship(4);

test("test ship takes a hit", () => {
  testShip.hit();
  expect(testShip.hp).toEqual(3);
});

test("test ship is sunk", () => {
  testShip.hit();
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk).toBeTruthy();
});
