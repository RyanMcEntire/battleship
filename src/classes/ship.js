/* eslint-disable prefer-destructuring */
export default class Ship {
  constructor(obj) {
    this.type = Object.keys(obj)[0];
    this.coords = obj[this.type];
    this.length = this.coords.length;
    this.hp = this.coords.length;
  }

  hit() {
    if (this.hp >= 1) {
      this.hp -= 1;
    }
    return this.hp;
  }

  isSunk() {
    if (this.hp === 0) {
      return true;
    }
    return false;
  }
}
