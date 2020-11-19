import instructionParser, {
  XCoord,
  YCoord,
  Direction,
  Instruction,
} from "./instruction-parser";

describe("Instruction Parser", () => {
  let worldSize: [XCoord, YCoord];
  let startingPosition: [XCoord, YCoord, Direction];
  let instruction: Instruction;

  beforeEach(() => {
    worldSize = [5, 3];
  });

  describe("when the starting position is 1 1 E and the instruction is RFRFRFRF", () => {
    beforeEach(() => {
      startingPosition = [1, 1, "E"];
      instruction = "RFRFRFRF";
    });

    it("returns the expected output of 1 1 E", () => {
      expect(
        instructionParser(worldSize, startingPosition, instruction)
      ).toEqual([1, 1, "E"]);
    });
  });
});
