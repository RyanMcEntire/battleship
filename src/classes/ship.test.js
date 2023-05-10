/* eslint-disable no-undef */
import Ship from "./ship";

test("test ship takes a hit", () => {
  const testShip = new Ship(4);
  testShip.hit();
  expect(testShip.hp).toEqual(3);
});

test("test ship 2 is sunk", () => {
  const testShip2 = new Ship(3);
  testShip2.hit();
  testShip2.hit();
  testShip2.hit();
  expect(testShip2.isSunk).toBeTruthy();
});
