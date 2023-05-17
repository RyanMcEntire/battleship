function byClass(className) {
  return document.getElementsByClassName(className)[0];
}

export default function sel() {
  return {
    playerGrid: byClass('player-grid-container'),
    computerGrid: byClass('opponent-grid-container'),
  };
}
