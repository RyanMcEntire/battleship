function byClass(className) {
  return document.getElementsByClassName(className)[0];
}

export default function sel() {
  console.log(byClass('opponent-grid-container'))
  return {
    playerGrid: byClass('player-grid-container'),
    computerGrid: byClass('opponent-grid-container'),
  };
}
