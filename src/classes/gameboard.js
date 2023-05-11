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
    this.placedShips = this.placedShips.map((ship) => {
      const hitIndex = ship.coords.findIndex(
        (shipCoord) => shipCoord === coord
      );
      if (hitIndex !== -1) {
        return Gameboard.updateShipHit(ship, hitIndex);
      }
      return ship;
    });
  }

  static updateShipHit(ship, hitIndex) {
    const updatedHits = [...ship.hits];
    updatedHits[hitIndex] = 'hit';
    return { ...ship, hits: updatedHits };
  }

  getShipHits(shipType) {
    const theShip = this.placedShips.find((ship) => ship.type === shipType);
    console.log(theShip.hits);
    return theShip.hits;
  }

  getAllHits() {
    return this.hits;
  }
}
