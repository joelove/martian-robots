import instructionParser, {
  XCoord,
  YCoord,
  Direction,
  Instruction,
  WorldSize,
  Postition,
} from "./instruction-parser";

describe("Instruction Parser", () => {
  let worldSize: WorldSize;
  let startingPosition: Postition;
  let instruction: Instruction;

  afterEach(() => {
    worldSize = [0, 0];
    startingPosition = [0, 0, "N"];
    instruction = "";
  });

  describe("when the world size is 5 3", () => {
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

    describe("when the starting position is 3 2 N and the instruction is FRRFLLFFRRFLL", () => {
      beforeEach(() => {
        startingPosition = [1, 1, "E"];
        instruction = "FRRFLLFFRRFLL";
      });

      it("returns the expected output of 1 1 E", () => {
        expect(
          instructionParser(worldSize, startingPosition, instruction)
        ).toEqual([1, 1, "E"]);
      });
    });
  });
});
