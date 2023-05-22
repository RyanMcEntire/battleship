export function isCoordValid(coord) {
  const pattern = /^[A-J][1-9]$|^[A-J]10$/;
  return pattern.test(coord);
}

export function checkShipClearance(coord, rotation, shipSize) {
  const letters = 'ABCDEFGHIJ';
  const shipCoords = [];
  if (!isCoordValid(coord)) {
    return false;
  }

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
      parseInt(coordinate[1], 10) < 1 ||
      parseInt(coordinate[1], 10) > 10
  );
  if (invalidCoords) {
    return false;
  }
  return shipCoords;
}

export function isOverlapping(coordsArray, placed) {
  return coordsArray.some((coords) =>
    placed.some((array) => array[1].includes(coords))
  );
}
