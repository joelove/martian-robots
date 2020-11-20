import parseCoordinate from "./parsers/parseCoordinate";
import parseCoordinates from "./parsers/parseCoordinates";
import parseDirection from "./parsers/parseDirection";
import parseInstruction from "./parsers/parseInstruction";
import parseInstructions from "./parsers/parseInstructions";
import parsePosition from "./parsers/parsePosition";

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

export const directionParser: Parser = {
  parse: parseDirection,
  errorMessage: "Direction must be N, E, S or W!",
};

export const instructionParser: Parser = {
  parse: parseInstruction,
  errorMessage: "Instructions must be F, L or R!",
};

export const instructionsParser: Parser = {
  parse: parseInstructions,
  errorMessage: "You must provide an instructions string!",
};

export const positionParser: Parser = {
  parse: parsePosition,
  errorMessage: "You must provide exactly three position components!",
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
