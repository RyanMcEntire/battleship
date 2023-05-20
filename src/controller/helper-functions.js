function isCoordValid(coord) {
  const alpha = coord[0];
  const number = +coord[1];
  if (!alpha.charAt(0).match(/[a-jA-J]/) || number < 1 || number > 10) {
    return false;
  }
  return true;
}

export default function checkShipClearance(coord, rotation, shipSize) {
  const letters = 'ABCDEFGHIJ';
  const shipCoords = [];
  if (!isCoordValid(coord)) {
    return false;
  }
  shipCoords.push(coord);

  if (rotation === 'vertical') {
    for (let i = 0; i < shipSize; i += 1) {
      shipCoords.push(`${letters[letters.indexOf(coord[0]) + i]}${coord[1]}`);
    }
  }
  if (rotation === 'horizontal') {
    for (let i = 0; i < shipSize; i += 1) {
      shipCoords.push(`${coord[0]}${parseInt(coord[1], 10) + i}`);
    }
  }
  const invalidCoords = shipCoords.some(
    (coordinate) =>
      !letters.includes(coordinate[0]) ||
      coordinate[1] < 1 ||
      coordinate[1] > 10
  );
  if (invalidCoords) {
    return false;
  }
  return shipCoords;
}
