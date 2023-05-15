export default class Ship {
  constructor(obj) {
    const { [Object.keys(obj)[0]]: type } = obj;
    const { [Object.keys(obj)[0]]: location } = obj;
    this.type = type;
    this.location = location;
    this.length = this.location.length;
    this.hp = this.location.length;
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