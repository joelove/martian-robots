import instructionParser, {
  WorldSize,
  Position,
  InstructionString,
} from "./instruction-parser";

describe("Instruction Parser", () => {
  let worldSize: WorldSize;
  let startingPosition: Position;
  let instructionString: InstructionString;

  afterEach(() => {
    worldSize = [0, 0];
    startingPosition = [0, 0, "N"];
    instructionString = "";
  });

  describe("when the world size is 5 3", () => {
    beforeEach(() => {
      worldSize = [5, 3];
    });

    describe("when the starting position is 1 1 E and the instruction is RFRFRFRF", () => {
      beforeEach(() => {
        startingPosition = [1, 1, "E"];
        instructionString = "RFRFRFRF";
      });

      it("returns the expected output of 1 1 E", () => {
        expect(
          instructionParser(worldSize, startingPosition, instructionString)
        ).toEqual([1, 1, "E"]);
      });
    });

    describe("when the starting position is 3 2 N and the instruction is FRRFLLFFRRFLL", () => {
      beforeEach(() => {
        startingPosition = [3, 2, "N"];
        instructionString = "FRRFLLFFRRFLL";
      });

      it("returns the expected output of 3 3 N", () => {
        expect(
          instructionParser(worldSize, startingPosition, instructionString)
        ).toEqual([3, 3, "N"]);
      });
    });

    describe("when the starting position is 0 3 W and the instruction is LLFFFLFLFL", () => {
      beforeEach(() => {
        startingPosition = [0, 3, "W"];
        instructionString = "LLFFFLFLFL";
      });

      it("returns the expected output of 2 4 S", () => {
        expect(
          instructionParser(worldSize, startingPosition, instructionString)
        ).toEqual([2, 4, "S"]);
      });
    });
  });
});
