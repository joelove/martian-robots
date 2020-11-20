import { mockProcessExit } from "jest-mock-process";

import parse, {
  coordinateParser,
  coordinatesParser,
  directionParser,
  instructionParser,
  instructionsParser,
} from "./inputParser";

describe("Input Parser", () => {
  let result: unknown;

  let exitMock: jest.SpyInstance<typeof process.exit>;

  beforeEach(() => {
    exitMock = mockProcessExit();
  });

  afterEach(() => {
    result = null;
  });

  describe("Coordinate Parser", () => {
    describe("when the coordinate is a valid number", () => {
      beforeEach(() => {
        result = parse(coordinateParser, "2");
      });

      it("returns the expected coordinate", () => {
        expect(result).toEqual(2);
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the coordinate is a float", () => {
      beforeEach(() => {
        result = parse(coordinateParser, "2.6");
      });

      it("returns the floor", () => {
        expect(result).toEqual(2);
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the coordinate is a string", () => {
      beforeEach(() => {
        result = parse(coordinateParser, "aaa");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });

  describe("Coordinates Parser", () => {
    describe("when the input is valid space-delimited coordinates", () => {
      beforeEach(() => {
        result = parse(coordinatesParser, "2 2");
      });

      it("returns the expected coordinates", () => {
        expect(result).toEqual([2, 2]);
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is valid space-delimited string with invalid items", () => {
      beforeEach(() => {
        result = parse(coordinatesParser, "2 Z");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });

    describe("when the input is a space-delimited string with too many members", () => {
      beforeEach(() => {
        result = parse(coordinatesParser, "2 2 2");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });

  describe("Coordinates Parser", () => {
    describe("when the input is valid space-delimited coordinates", () => {
      beforeEach(() => {
        result = parse(coordinatesParser, "2 2");
      });

      it("returns the expected coordinates", () => {
        expect(result).toEqual([2, 2]);
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is valid space-delimited string with invalid items", () => {
      beforeEach(() => {
        result = parse(coordinatesParser, "2 Z");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });

    describe("when the input is a space-delimited string with too many members", () => {
      beforeEach(() => {
        result = parse(coordinatesParser, "2 2 2");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });

  describe("Direction Parser", () => {
    describe("when the input is N", () => {
      beforeEach(() => {
        result = parse(directionParser, "N");
      });

      it("returns the direction", () => {
        expect(result).toEqual("N");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is E", () => {
      beforeEach(() => {
        result = parse(directionParser, "E");
      });

      it("returns the direction", () => {
        expect(result).toEqual("E");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is S", () => {
      beforeEach(() => {
        result = parse(directionParser, "S");
      });

      it("returns the direction", () => {
        expect(result).toEqual("S");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is W", () => {
      beforeEach(() => {
        result = parse(directionParser, "W");
      });

      it("returns the direction", () => {
        expect(result).toEqual("W");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is a number", () => {
      beforeEach(() => {
        result = parse(directionParser, "2");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });

    describe("when the input is a random string", () => {
      beforeEach(() => {
        result = parse(directionParser, "aaa");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });

  describe("Instruction Parser", () => {
    describe("when the input is F", () => {
      beforeEach(() => {
        result = parse(instructionParser, "F");
      });

      it("returns the instruction", () => {
        expect(result).toEqual("F");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is L", () => {
      beforeEach(() => {
        result = parse(instructionParser, "L");
      });

      it("returns the instruction", () => {
        expect(result).toEqual("L");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is R", () => {
      beforeEach(() => {
        result = parse(instructionParser, "R");
      });

      it("returns the instruction", () => {
        expect(result).toEqual("R");
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is a number", () => {
      beforeEach(() => {
        result = parse(instructionParser, "2");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });

    describe("when the input is a non-matching letter", () => {
      beforeEach(() => {
        result = parse(instructionParser, "Z");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });

    describe("when the input is a random string", () => {
      beforeEach(() => {
        result = parse(instructionParser, "aaa");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });

  describe("Instructions Parser", () => {
    describe("when the input is a valid instructions string", () => {
      beforeEach(() => {
        result = parse(instructionsParser, "FRFFRFFLL");
      });

      it("returns the correct instructions list", () => {
        expect(result).toEqual(["F", "R", "F", "F", "R", "F", "F", "L", "L"]);
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });
    describe("when the input is blank", () => {
      beforeEach(() => {
        result = parse(instructionsParser, "");
      });

      it("returns an empty instructions list", () => {
        expect(result).toEqual([]);
      });

      it("does not exit the process", () => {
        expect(exitMock).not.toHaveBeenCalled();
      });
    });

    describe("when the input is blank instruction", () => {
      beforeEach(() => {
        result = parse(instructionsParser, "FRFFZFFLL");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });

    describe("when the input is blank", () => {
      beforeEach(() => {
        result = parse(instructionsParser, "FRFF RFFLL");
      });

      it("exits the process", () => {
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });
});
