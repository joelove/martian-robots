import { mockProcessExit } from "jest-mock-process";

import parse, { coordinateParser, coordinatesParser } from "./inputParser";

describe("Input Parser", () => {
  let result;

  let exitMock: jest.SpyInstance<typeof process.exit>;

  beforeEach(() => {
    exitMock = mockProcessExit();
  });

  afterEach(() => {
    result = null;
  });

  describe("Coordinate Parser", () => {
    let coordinate: string;

    describe("when the coordinate is a valid number", () => {
      beforeEach(() => {
        coordinate = "2";
      });

      it("returns the expected integer", () => {
        expect(parse(coordinateParser, coordinate)).toEqual(2);
      });
    });

    describe("when the coordinate is a float", () => {
      beforeEach(() => {
        coordinate = "2.3";
      });

      it("returns the nearest integer", () => {
        expect(parse(coordinateParser, coordinate)).toEqual(2);
      });
    });

    describe("when the coordinate is a string", () => {
      beforeEach(() => {
        coordinate = "aaa";
      });

      it("exits the process", () => {
        parse(coordinateParser, coordinate);
        expect(exitMock).toHaveBeenCalledWith(0);
      });
    });
  });

  describe("Coordinates Parser", () => {
    let coordinates: string;

    describe("when the input is valid space-delimited coordinates", () => {
      beforeEach(() => {
        coordinates = "2 2";
      });

      it("returns the expected coordinates", () => {
        expect(parse(coordinatesParser, coordinates)).toEqual([2, 2]);
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
    let coordinates: string;

    describe("when the input is valid space-delimited coordinates", () => {
      beforeEach(() => {
        coordinates = "2 2";
      });

      it("returns the expected coordinates", () => {
        expect(parse(coordinatesParser, coordinates)).toEqual([2, 2]);
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
});
