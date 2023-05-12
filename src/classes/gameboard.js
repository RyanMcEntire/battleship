export default class Gameboard {
  constructor() {
    this.placedShips = [];
    this.attacks = [];
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

  isCoordinateAttacked(coord) {
    return this.attacks.some((attack) => attack.coord === coord);
  }

  receiveAttack(coord) {
    if (this.isCoordinateAttacked(coord)) {
      return false;
    }
    const wasHit = this.recordShipAttack(coord);
    this.attacks.push({ coord, status: wasHit ? 'hit' : 'miss' });
    return this.attacks;
  }

  recordShipAttack(coord) {
    let wasHit = false;
    this.placedShips = this.placedShips.map((ship) => {
      const hitIndex = ship.coords.findIndex(
        (shipCoord) => shipCoord === coord
      );
      if (hitIndex !== -1) {
        wasHit = true;
        return Gameboard.updateShipHit(ship, hitIndex);
      }
      return ship;
    });
    return wasHit;
  }

  getHitStatus(coord) {
    const attack = this.attacks.find((hit) => hit.coord === coord);
    return attack ? attack.status : null;
  }

  static updateShipHit(ship, hitIndex) {
    const updatedHits = [...ship.hits];
    updatedHits[hitIndex] = 'hit';
    return { ...ship, hits: updatedHits };
  }

  getShipHits(shipType) {
    const theShip = this.placedShips.find((ship) => ship.type === shipType);
    return theShip.hits;
  }

  getAllHits() {
    return this.attacks;
  }
}
