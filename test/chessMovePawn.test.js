const { expect } = require("chai");

const chessMovePawn = require("../src/chessMovePawn");

describe("Pawn", () => {
  describe("#move", () => {
    it("should return 1 possibility if the pawn is black", () => {
      const possibilities = chessMovePawn({ position: "A3", color: "black" });

      expect(possibilities.length).to.be.eql(1);
      expect(possibilities[0]).to.be.eql("A4");
    });
    it("should return 2 possibilities if the pawn is black", () => {
      const possibilities = chessMovePawn({ position: "A2", color: "black" });

      expect(possibilities.length).to.be.eql(2);
      expect(possibilities.includes("A3")).to.be.true;
      expect(possibilities.includes("A4")).to.be.true;
    });
  });
});
