export default class Player {
  constructor(name) {
    this.name = name;
  }

  launchAttack(gameboard, coord) {
    gameboard.receiveAttack(coord);
    return this;
  }

  decideAttack(gameboard) {
    const letters = 'ABCDEFGHIJ';
    const char = letters.charAt(Math.floor(Math.random() * letters.length));
    const num = Math.floor(Math.random() * letters.length);
    if (gameboard.isCoordinateAttacked(`${char + num}`)) {
      this.decideAttack()
    } 
    return [`${char + num}`]
    ;
  }
}
