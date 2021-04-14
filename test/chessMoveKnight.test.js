const { expect } = require("chai");

const fn = require("../src/chessMoveKnight");

describe("Knight", () => {
  describe("#move", () => {
    it("should return 8 possibilities if position = D5", () => {
      const possibilities = fn({ position: "D5" });

      expect(possibilities.length).to.be.eql(8);

      expect(possibilities.includes("C7")).to.be.true;
      expect(possibilities.includes("E7")).to.be.true;
      expect(possibilities.includes("F6")).to.be.true;
      expect(possibilities.includes("F4")).to.be.true;
      expect(possibilities.includes("E3")).to.be.true;
      expect(possibilities.includes("C3")).to.be.true;
      expect(possibilities.includes("B4")).to.be.true;
      expect(possibilities.includes("B6")).to.be.true;
    });

    it("should return null if position is out of bound (=A9)", () => {
      const possibilities = fn({ position: "A9" });

      expect(possibilities).to.be.eql(null);
    });
    it("should return 3 possibilities if position = B8", () => {
      const possibilities = fn({ position: "B8" });

      expect(possibilities.length).to.be.eql(3);

      expect(possibilities.includes("A6")).to.be.true;
      expect(possibilities.includes("C6")).to.be.true;
      expect(possibilities.includes("D7")).to.be.true;
    });
  });
});
