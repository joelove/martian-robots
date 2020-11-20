import { parse, coordinateParser } from "../inputParser";
import { Coordinates } from "../instructionApplicator";

const parseCoordinates = <Coordinates>(input: string) => {
  const coordinates = input.trim().split(" ");

  if (coordinates.length != 2) return null;

  return (coordinates.map((coord) =>
    parse(coordinateParser, coord)
  ) as unknown) as Coordinates;
};

export default parseCoordinates;
