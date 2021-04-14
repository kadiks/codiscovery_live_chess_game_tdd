const chessMoveKnight = ({ position }) => {
  const isInRange = (num) => {
    return num >= 1 && num <= 8;
  };

  const getLineColFromPosition = (position = "") => {
    const colNum = position.toUpperCase().charCodeAt(0) - 64;
    const lineNum = Number(position.substr(1));

    return { colNum, lineNum };
  };

  const getLineColToPosition = ([col, line]) => {
    return `${String.fromCharCode(col + 64)}${line}`;
  };

  const { lineNum, colNum } = getLineColFromPosition(position);
  if (!isInRange(colNum) || !isInRange(lineNum)) {
    return null;
  }

  const possibleDirections = [
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
  ];

  const possibilities = possibleDirections
    .map(([colDir, lineDir]) => {
      return [colNum + colDir, lineNum + lineDir];
    })
    .filter(([colNum, lineNum]) => isInRange(colNum) && isInRange(lineNum))
    .map(getLineColToPosition);

  //   const possibilities = allPossibilities;

  //   console.log("allPossibilites", allPossibilities);

  return possibilities;
};

if (typeof process !== "undefined") {
  module.exports = chessMoveKnight;
}
