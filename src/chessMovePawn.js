const chessMovePawn = ({ position, color = "black" }) => {
  const colStr = position.substr(0, 1);
  const lineStr = position.substr(1, 1);
  const line = Number(lineStr);

  const possibleMoves = [];

  if (color === "black") {
    possibleMoves.push(`${colStr}${line + 1}`);
    if (line === 2) {
      possibleMoves.push(`${colStr}${line + 2}`);
    }
  } else {
    possibleMoves.push(`${colStr}${line - 1}`);
    if (line === 7) {
      possibleMoves.push(`${colStr}${line - 2}`);
    }
  }

  return possibleMoves;
};

if (typeof process !== "undefined") {
  module.exports = chessMovePawn;
}
