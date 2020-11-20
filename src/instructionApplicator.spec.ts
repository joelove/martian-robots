import instructionApplicator, {
  WorldSize,
  Position,
  Instruction,
} from "./instructionApplicator";

describe("Instruction Applicator", () => {
  let worldSize: WorldSize;
  let startingPosition: Position;
  let instructions: Instruction[];

  afterEach(() => {
    worldSize = [0, 0];
    startingPosition = [0, 0, "N"];
    instructions = [];
  });

  describe("when the world size is 5 3", () => {
    beforeEach(() => {
      worldSize = [5, 3];
    });

    describe("when the starting position is 1 1 E and the instruction is RFRFRFRF", () => {
      beforeEach(() => {
        startingPosition = [1, 1, "E"];
        instructions = ["R", "F", "R", "F", "R", "F", "R", "F"];
      });

      it("returns the expected output of 1 1 E", () => {
        expect(
          instructionApplicator(worldSize, startingPosition, instructions)
        ).toEqual([[1, 1, "E"], false]);
      });
    });

    describe("when the starting position is 3 2 N and the instruction is FRRFLLFFRRFLL", () => {
      beforeEach(() => {
        startingPosition = [3, 2, "N"];
        instructions = [
          "F",
          "R",
          "R",
          "F",
          "L",
          "L",
          "F",
          "F",
          "R",
          "R",
          "F",
          "L",
          "L",
        ];
      });

      it("returns the expected output of 3 3 N", () => {
        expect(
          instructionApplicator(worldSize, startingPosition, instructions)
        ).toEqual([[3, 3, "N"], true]);
      });
    });

    describe("when the starting position is 0 3 W and the instruction is LLFFFLFLFL", () => {
      beforeEach(() => {
        startingPosition = [0, 3, "W"];
        instructions = ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"];
      });

      it("returns the expected output of 2 4 S", () => {
        expect(
          instructionApplicator(worldSize, startingPosition, instructions)
        ).toEqual([[2, 4, "S"], true]);
      });
    });
  });
});
