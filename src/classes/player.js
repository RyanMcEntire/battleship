export default class Player {
  constructor(name) {
    this.name = name;
  }

  launchAttack(gameboard, coord) {
    return gameboard.receiveAttack(coord) ? this : false;
  }

  decideAttack(gameboard) {
    const letters = 'ABCDEFGHIJ';
    const char = letters.charAt(Math.floor(Math.random() * letters.length));
    const num = Math.floor(Math.random() * letters.length + 1);
    if (gameboard.isCoordinateAttacked(`${char + num}`)) {
      return this.decideAttack(gameboard);
    }
    return `${char + num}`;
  }

  getName() {
    return this.name;
  }
}
