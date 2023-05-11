export default class Gameboard {
  constructor() {
    this.placedShips = [];
    this.hits = [];
  }

  placeShip(type, coords) {
    const shipHits = [];
    for (let i = 0; i < coords.length; i += 1) {
      shipHits.push('');
    }
    this.placedShips.push({ type, coords, hits: shipHits });
    return this.placedShips;
  }

  getShipLocation(shipType) {
    const foundShip = this.placedShips.find((ship) => ship.type === shipType);
    return foundShip.coords;
  }

  receiveAttack(coord) {
    this.hits.push(coord);
    this.recordShipAttack(coord);
    return this.hits;
  }

  recordShipAttack(coord) {
    this.placedShips.forEach((ship) => {
      for (let i = 0; i <= ship.coords; i += 1) {
        if (ship.coords[i] === coord) {
          ship.hits[i] = 'hit';
        }
      }
    });
  }

  getShipHits(shipType) {
    const theShip = this.placedShips.find((ship) => ship.type === shipType);
    console.log(theShip);
    return theShip.shipHits;
  }
}
