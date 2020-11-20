import { parse, coordinateParser, directionParser } from "../inputParser";
import { Position, Direction, Coordinate } from "../instructionApplicator";

const parsePosition = <Position>(input: string) => {
  const position = input.trim().split(" ");

  if (position.length !== 3) return null;

  const [x, y, d] = position;
  const xCoord = parse(coordinateParser, x);
  const yCoord = parse(coordinateParser, y);
  const direction = parse(directionParser, d);

  return ([xCoord, yCoord, direction] as unknown) as Position;
};

export default parsePosition;
