import { Coordinate, Coordinates } from "./instructionApplicator";

import parseCoordinate from "./parsers/parseCoordinate";
import parseCoordinates from "./parsers/parseCoordinates";

export type ParseFunction = <T>(input: string) => T | T[] | null;

export type Parser = {
  parse: ParseFunction;
  errorMessage: string;
};

export const coordinateParser: Parser = {
  parse: parseCoordinate,
  errorMessage: "Invalid value, each co-ordinate must be an integer!",
};

export const coordinatesParser: Parser = {
  parse: parseCoordinates,
  errorMessage: "You must provide exactly two co-ordinates!",
};

export const exitWithMessage = (message: string) => {
  console.log(message);
  process.exit(0);
};

export const parse = <T>(parser: Parser, input: string): T => {
  const parsedValue = parser.parse(input);
  if (parsedValue == null) exitWithMessage(parser.errorMessage);
  return parsedValue as T;
};

export default parse;
